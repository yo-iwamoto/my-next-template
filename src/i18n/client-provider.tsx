import { NextIntlClientProvider, useMessages } from "next-intl";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ locale: string }>;

export function I18nClientProvider({ children }: Props) {
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
