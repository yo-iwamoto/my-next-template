"use client";

import { buttonVariants } from "@/components/ui/button";
import { HoverTooltip } from "@/components/ui/custom/hover-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { useSwitchLocale } from "@/i18n/use-switch-locale";
import { cn } from "@/lib/utils";
import { LanguagesIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

type Props = {
  defaultLocale: string;
};

export function LocaleSwitcher({ defaultLocale }: Props) {
  const { switchLocale } = useSwitchLocale();
  const t = useTranslations("locale");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <Select
      defaultValue={defaultLocale}
      onValueChange={switchLocale}
      open={isSelectOpen}
      onOpenChange={setIsSelectOpen}
    >
      <HoverTooltip content={t("switch-locale")}>
        <SelectTrigger
          className={cn(
            "grow-0 px-2",
            buttonVariants({ variant: "outline-solid", size: "icon" }),
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
