"use client";

import { LanguagesIcon } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { HoverTooltip } from "@/components/ui/custom/hover-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("locale");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  const switchLocale = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select
      value={locale}
      onValueChange={switchLocale}
      open={isSelectOpen}
      onOpenChange={setIsSelectOpen}
    >
      <HoverTooltip content={t("switch-locale")}>
        <SelectTrigger
          className={cn(
            "grow-0 px-2",
            buttonVariants({ variant: "outline", size: "icon" }),
          )}
          hideArrow
        >
          <span className="sr-only">{t("switch-locale")}</span>
          <LanguagesIcon className="h-[1.2rem] w-[1.2rem]" />
        </SelectTrigger>
      </HoverTooltip>

      <SelectContent align="end">
        <SelectItem value="ja">日本語</SelectItem>
        <SelectItem value="en">English</SelectItem>
      </SelectContent>
    </Select>
  );
}
