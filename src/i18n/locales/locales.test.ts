import en from "./en.json";
import ja from "./ja.json";

type Item =
  | string
  | {
      [key: string]: Item;
    };

type LangDefinition = {
  [key: string]: Item;
};

function deepKeys(obj: LangDefinition | Item) {
  const keys: string[] = [];
  if (typeof obj === "string") {
    return keys;
  }

  for (const key in obj) {
    keys.push(key);
    if (typeof obj[key] === "object") {
      keys.push(...deepKeys(obj[key]).map((k) => `${key}.${k}`));
    }
  }
  return keys;
}

describe("locales", () => {
  it("ja.json と en.json の定義項目が一致すること", () => {
    const jaKeys = deepKeys(ja);
    const enKeys = deepKeys(en);

    expect(jaKeys).toEqual(enKeys);
  });
});
