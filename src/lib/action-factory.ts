import { Prisma } from "@prisma/client";
import type { z } from "zod";

export type ActionOkResult<T> = T & { success: true };
export type ActionErrorResult = { success: false; message: string };

function actionOkResult<V>(value: V): ActionOkResult<V> {
  return { success: true as const, ...value };
}

function actionErrorResult(message: string): ActionErrorResult {
  return { success: false as const, message };
}

export type ServerActionResult<T> = Promise<
  ActionOkResult<T> | ActionErrorResult
>;

export class CatchableError extends Error {}

export function buildActionFromSchema<T extends z.ZodRawShape, V>(
  formSchema: z.ZodObject<T>,
  actionFn: (parsed: z.output<typeof formSchema>) => Promise<V>,
) {
  return async (formData: FormData) => {
    const formObj = Object.fromEntries(formData.entries());
    const parseResult = formSchema.safeParse(formObj);
    if (!parseResult.success) {
      console.error(parseResult.error.issues);
      return actionErrorResult(
        parseResult.error.issues.map((i) => i.message).join("\n"),
      );
    }

    try {
      const result = await actionFn(parseResult.data);
      return actionOkResult(result);
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
        console.error(`Prisma error: ${err.code}, ${err.message}`);
      } else {
        console.error(err);
      }

      if (err instanceof CatchableError) {
        return actionErrorResult(err.message);
      }

      return actionErrorResult("不明なエラーが発生しました。");
    }
  };
}
