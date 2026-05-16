"use client";

import HeaderCenterLogoSplit from "./HeaderCenterLogoSplit";

export const HEADER_VARIANTS = {
  "center-logo-split": HeaderCenterLogoSplit,
} as const;

export type HeaderVariantId = keyof typeof HEADER_VARIANTS;

export default function Header() {
  return <HeaderCenterLogoSplit />;
}
