"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useExtracted } from "next-intl";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { HoverTooltip } from "@/components/ui/custom/hover-tooltip";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export function ThemeSwitcher() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  const { theme, setTheme } = useTheme();

  const t = useExtracted("theme");

  if (!hasMounted) {
    return <Button aria-hidden="true" variant="outline" className="w-10" />;
  }

  return (
    <Select value={theme} onValueChange={setTheme}>
      <HoverTooltip content={t("テーマを切り替える")}>
        <SelectTrigger hideArrow className="px-2 w-10" suppressHydrationWarning>
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">{t("テーマを切り替える")}</span>
        </SelectTrigger>
      </HoverTooltip>
      <SelectContent align="end">
        <SelectItem value="light">{t("ライト")}</SelectItem>
        <SelectItem value="dark">{t("ダーク")}</SelectItem>
        <SelectItem value="system">{t("システム設定に従う")}</SelectItem>
      </SelectContent>
    </Select>
  );
}
