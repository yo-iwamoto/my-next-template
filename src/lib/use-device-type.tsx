"use client";

import {
  type PropsWithChildren,
  type ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

const mobilePattern =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
const androidPattern = /Android/i;

/**
 * 画面幅ではなく、表示する UI をデバイスで最適化するための分類
 * @example
 * const isMobile = useIsMobile();
 *
 * return !isMobile && <CommandPalette />
 */
export function useDeviceType() {
  const [ua, setUa] = useState<string | null>(null);

  useEffect(() => {
    setUa(navigator.userAgent);
  }, []);

  const isMobile = useMemo(() => mobilePattern.test(ua ?? ""), [ua]);
  const isDesktop = useMemo(() => !isMobile, [isMobile]);
  const isMacOs = useMemo(() => ua?.includes("Mac OS"), [ua]);
  const isAndroid = useMemo(() => androidPattern.test(ua ?? ""), [ua]);
  const isServer = ua === null;

  return {
    isMobile,
    isDesktop,
    isMacOs,
    isAndroid,
    isServer,
  };
}

type Props = PropsWithChildren<{
  otherwise?: ReactNode;
  hideOnServer?: boolean;
}>;

export function WhenDesktop({
  children,
  otherwise = false,
  hideOnServer = false,
}: Props) {
  const { isDesktop, isServer } = useDeviceType();

  if (isServer && hideOnServer) {
    return false;
  }

  if (!isDesktop) {
    return otherwise;
  }

  return children;
}

export function WhenMobile({
  children,
  otherwise = false,
  hideOnServer = false,
}: Props) {
  const { isMobile, isServer } = useDeviceType();

  if (isServer && hideOnServer) {
    return false;
  }

  if (!isMobile) {
    return otherwise;
  }

  return children;
}
