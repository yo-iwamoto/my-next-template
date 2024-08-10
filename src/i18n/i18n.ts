import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./locales/list";

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
