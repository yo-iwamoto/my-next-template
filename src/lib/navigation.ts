import { createNavigation } from "next-intl/navigation";
import { locales } from "../i18n/locales/list";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  defaultLocale: "ja",
  locales,
  localePrefix: "as-needed",
});
