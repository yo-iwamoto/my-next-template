import type { Metadata } from "next";
import type { PropsWithChildren } from "react";
import "@/styles/global.css";

export const generateMetadata = {
  robots: {
    index: false,
    follow: false,
  },
} satisfies Metadata;

export default function RootLayout({ children }: PropsWithChildren) {
  return children;
}
