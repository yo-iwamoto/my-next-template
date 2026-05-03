import { Eval, type EvalCase, type EvalScorer, wrapClaudeAgentSDK } from "braintrust";
import { Factuality } from "autoevals";
import * as claudeCodeSdk from "@anthropic-ai/claude-agent-sdk";
import { resolve } from "node:path";
import meta from "./meta.json";

const { query } = wrapClaudeAgentSDK(claudeCodeSdk);
const PROJECT_DIR = resolve(__dirname, "../../../../");

type Input = { prompt: string };
type Expected = { keywords: string[]; referenceAnswer: string };
type Metadata = { description: string };

async function runAgent(prompt: string): Promise<string> {
  let lastText = "";

  for await (const msg of query({
    prompt,
    options: {
      maxTurns: 10,
      cwd: PROJECT_DIR,
      permissionMode: "bypassPermissions",
    },
  })) {
    if (msg.type === "assistant") {
      const text = msg.message.content
        .filter((b: { type: string }) => b.type === "text")
        .map((b: { type: string; text?: string }) => b.text ?? "")
        .join("");
      if (text) lastText = text;
    }
    if (msg.type === "result") break;
  }

  return lastText;
}

const keywordCoverage: EvalScorer<Input, string, Expected, Metadata> = ({
  output,
  expected,
}) => {
  const { keywords } = expected;
  const found = keywords.filter((k) =>
    output.toLowerCase().includes(k.toLowerCase())
  );
  return {
    name: "KeywordCoverage",
    score: keywords.length > 0 ? found.length / keywords.length : 0,
  };
};

const factuality: EvalScorer<Input, string, Expected, Metadata> = async ({
  input,
  output,
  expected,
}) =>
  Factuality({
    input: input.prompt,
    output,
    expected: expected.referenceAnswer,
  });

Eval<Input, string, Expected, Metadata>(meta.projectName, {
  experimentName: `describe-project-${Date.now()}`,

  data: (): EvalCase<Input, Expected, Metadata>[] =>
    meta.cases.map((c) => ({
      id: c.id,
      input: c.input as Input,
      expected: c.expected as Expected,
      metadata: c.metadata as Metadata,
    })),

  task: async (input) => runAgent(input.prompt),

  scores: [keywordCoverage, factuality],
});
