import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { useDeviceType } from "@/lib/use-device-type";
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip";

type Props = PropsWithChildren<{
  content: ReactNode;
  side?: ComponentPropsWithoutRef<typeof TooltipContent>["side"];
  align?: ComponentPropsWithoutRef<typeof TooltipContent>["align"];
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

/**
 * ホバーで補助的な情報を表示するためのツールチップ。モバイルデバイスでは非表示。
 */
export function HoverTooltip({
  content,
  side,
  align,
  open,
  onOpenChange,
  children,
}: Props) {
  const { isMobile } = useDeviceType();

  if (isMobile) {
    return <>{children}</>;
  }

  return (
    <Tooltip delayDuration={500} open={open} onOpenChange={onOpenChange}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent side={side} align={align}>
        {content}
      </TooltipContent>
    </Tooltip>
  );
}
