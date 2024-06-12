import { cache } from "react";
import * as v from "valibot";

const serverSideEnvSchema = v.object({
  // API_TOKEN: v.string(),
});

function getServerSideEnvFn() {
  return v.parse(serverSideEnvSchema, {
    // API_TOKEN: process.env.API_TOKEN,
  });
}

export const getServerSideEnv = cache(getServerSideEnvFn);

const clientSideEnvSchema = v.object({
  // NEXT_PUBLIC_API_URL: v.string(),
});

export function getClientSideEnv() {
  return v.parse(clientSideEnvSchema, {
    // NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
  });
}
