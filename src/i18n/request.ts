import { cookies } from "next/headers";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const cookieStore = await cookies();
  const locale = cookieStore.get("NEXT_LOCALE")?.value ?? "ja";

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
