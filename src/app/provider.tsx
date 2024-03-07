"use client";

import { PropsWithChildren } from "react";
import { createTheme, ThemeProvider, Button } from "smarthr-ui";

type Props = PropsWithChildren;

export function ClientProvider({ children }: Props) {
  return <ThemeProvider theme={createTheme()}>{children}</ThemeProvider>;
}
