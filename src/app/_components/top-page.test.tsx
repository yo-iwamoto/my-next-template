import { render } from "@/__tests__/render";
import { TopPage } from "./top-page";

describe("TopPage", () => {
  it("タグラインが表示される", () => {
    const screen = render(<TopPage />);

    expect(screen.getByText("こんにちは、世界")).toBeDefined();
  });
});
