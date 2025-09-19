import type { Metadata } from "next/types";
import { getLocale, getMessages } from "next-intl/server";
import type { PropsWithChildren } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nClientProvider } from "@/i18n/client-provider";
import { LayoutView } from "./_components/layout/layout-view";
import { RootClientProviders } from "./_components/layout/root-client-providers";
import "@/styles/global.css";

type Props = PropsWithChildren<{
  params: Promise<{
    locale: string;
  }>;
}>;

export async function generateMetadata() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  return {
    title: messages.metadata.title,
    // @ts-expect-error
    locale,
  } satisfies Metadata;
}

export default async function Layout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className="bg-background">
        <I18nClientProvider locale={locale}>
          <RootClientProviders>
            <TooltipProvider>
              <LayoutView locale={locale}>{children}</LayoutView>
            </TooltipProvider>
          </RootClientProviders>
        </I18nClientProvider>
      </body>
    </html>
  );
}
