import { UserIcon } from "lucide-react";
import Link from "next/link";
import type { PropsWithChildren } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LocaleSwitcher } from "./locale-switcher";
import { ThemeSwitcher } from "./theme-switcher";

type Props = PropsWithChildren<{
  locale: string;
}>;

export function LayoutView({ children, locale }: Props) {
  return (
    <div className="pt-14 min-h-dvh grid">
      <div className="fixed top-0 left-0 right-0 z-30 bg-background/50 backdrop-blur-md">
        <header className="flex justify-between items-center py-2 container">
          <Link
            href="/"
            className="font-semibold text-xl focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ring-offset-background rounded-md"
          >
            my-next-template
          </Link>

          <div className="flex gap-3 items-center">
            <LocaleSwitcher defaultLocale={locale} />

            <ThemeSwitcher />

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="grid place-items-center p-1 h-10 w-10 rounded-full bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white"
                >
                  <UserIcon />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>foo</DropdownMenuItem>
                <DropdownMenuItem>bar</DropdownMenuItem>
                <DropdownMenuItem>baz</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
      </div>

      {children}
    </div>
  );
}
