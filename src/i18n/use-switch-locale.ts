import { useCallback } from "react";
import { usePathname, useRouter } from "../lib/navigation";
import type { locales } from "./locales/list";

export function useSwitchLocale() {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = useCallback(
    (locale: (typeof locales)[number]) => {
      router.replace(pathname, { locale });
    },
    [pathname, router],
  );

  return {
    switchLocale,
  };
}
