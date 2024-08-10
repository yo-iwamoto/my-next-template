import intlMiddleware from "next-intl/middleware";
import type { NextMiddleware } from "next/server";
import { locales } from "./i18n/locales/list";

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/api(.*)"],
};

const intl = intlMiddleware({
  locales,
  defaultLocale: "ja",
  localePrefix: "as-needed",
  localeDetection: false,
});

const middleware = (async (req) => {
  // custom behavior

  return intl(req);
}) satisfies NextMiddleware;

export default middleware;
