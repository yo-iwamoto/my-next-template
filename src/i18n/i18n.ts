import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./locales/list";

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = (await requestLocale) as (typeof locales)[number];
  if (!locales.includes(locale)) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
    locale,
  };
});
