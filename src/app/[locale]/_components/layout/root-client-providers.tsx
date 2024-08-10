import { ThemeProvider } from "next-themes";
import type { PropsWithChildren } from "react";

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
