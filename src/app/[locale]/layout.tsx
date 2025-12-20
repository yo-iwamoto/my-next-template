import type { PropsWithChildren } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LayoutView } from "../_components/layout/layout-view";
import { RootClientProviders } from "../_components/layout/root-client-providers";
import "@/styles/global.css";
import { NextIntlClientProvider } from "next-intl";
import { getLocale } from "next-intl/server";

type Props = PropsWithChildren;

export default async function Layout({ children }: Props) {
  const locale = await getLocale();

  return (
    <html suppressHydrationWarning lang={locale}>
      <body className="bg-background">
        <NextIntlClientProvider>
          <RootClientProviders>
            <TooltipProvider>
              <LayoutView>{children}</LayoutView>
            </TooltipProvider>
          </RootClientProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
