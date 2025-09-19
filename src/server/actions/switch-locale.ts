"use server";

import { cookies } from "next/headers";

export async function switchLocaleAction(locale: string) {
  (await cookies()).set("NEXT_LOCALE", locale);
  return { success: true };
}
