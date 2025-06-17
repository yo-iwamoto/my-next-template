import { createNavigation } from "next-intl/navigation";
import { locales } from "../i18n/locales/list";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales,
  localePrefix: "as-needed",
});
