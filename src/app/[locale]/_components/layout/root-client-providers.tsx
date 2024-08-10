import type { PropsWithChildren } from "react";

type Props = PropsWithChildren;

export function RootClientProviders({ children }: Props) {
  return <>{children}</>;
}
