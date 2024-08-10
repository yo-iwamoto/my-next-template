import type { PropsWithChildren } from "react";
import { ThemeProvider } from "next-themes";

type Props = PropsWithChildren;

export function RootClientProviders({ children }: Props) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}
