import { render as originalRender } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import type { ReactNode } from "react";

export function render(node: ReactNode) {
  return originalRender(node, {
    wrapper: ({ children }) => (
      <NextIntlClientProvider locale="ja">{children}</NextIntlClientProvider>
    ),
  });
}
