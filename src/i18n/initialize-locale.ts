import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./locales/list";

export function initializeLocale(locale: string) {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();

  setRequestLocale(locale);
}
