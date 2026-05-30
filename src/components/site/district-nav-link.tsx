"use client";

import Link from "next/link";
import type { District } from "@/lib/districts";
import { districtPath } from "@/lib/districts";
import { preloadImage } from "@/lib/preload-image";

type DistrictNavLinkProps = {
  district: District;
  className?: string;
  children: React.ReactNode;
};

export function DistrictNavLink({
  district,
  className,
  children,
}: DistrictNavLinkProps) {
  const warmCache = () => preloadImage(district.image);

  return (
    <Link
      href={districtPath(district.slug)}
      prefetch
      className={className}
      onMouseEnter={warmCache}
      onFocus={warmCache}
      onTouchStart={warmCache}
    >
      {children}
    </Link>
  );
}
