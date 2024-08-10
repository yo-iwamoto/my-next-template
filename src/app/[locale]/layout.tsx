import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nClientProvider } from "@/i18n/client-provider";
import { initializeLocale } from "@/i18n/initialize-locale";
import { locales } from "@/i18n/locales/list";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import type { PropsWithChildren } from "react";
import { LayoutView } from "./_components/layout/layout-view";
import { RootClientProviders } from "./_components/layout/root-client-providers";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = PropsWithChildren<{
  params: {
    locale: string;
  };
}>;

export async function generateMetadata({ params: { locale } }: Props) {
  const t = await getTranslations("metadata");

  return {
    title: t("title"),
    // @ts-ignore
    locale,
  } satisfies Metadata;
}

export default function Layout({ children, params: { locale } }: Props) {
  initializeLocale(locale);

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
