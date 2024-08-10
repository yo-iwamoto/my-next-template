"use client";

import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export function Container({ children }: Props) {
  return <div className="pt-14 min-h-[100dvh] grid">{children}</div>;
}
