"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site, telLink, whatsappLink } from "@/lib/site";

const nav = [
  { href: "#services", label: "Hizmetler" },
  { href: "#process", label: "Süreç" },
  { href: "#coverage", label: "Bölgeler" },
  { href: "#testimonials", label: "Yorumlar" },
  { href: "#faq", label: "SSS" },
];

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container">
        <div
          className={cn(
            "flex h-16 items-center justify-between rounded-2xl px-3 pl-4 pr-3 transition-all duration-300",
            scrolled
              ? "glass border border-border/70 shadow-[0_10px_40px_-15px_rgba(23,34,138,0.25)]"
              : "border border-transparent bg-transparent",
          )}
        >
          <Link href="#top" className="flex items-center gap-3 group">
            <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-brand-700 ring-1 ring-brand-700/20 transition-transform group-hover:scale-105 sm:h-14 sm:w-14">
              <Image
                src="/images/logo.svg"
                alt="Logo"
                width={44}
                height={44}
                className="h-9 w-9 object-contain invert brightness-0 sm:h-10 sm:w-10"
              />
            </span>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-tight sm:text-xl">
                {site.shortName}
              </span>
              <span className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:text-xs">
                Mersin • Nakliyat
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button asChild variant="ghost" size="sm" className="text-foreground">
              <a href={telLink()} className="gap-2">
                <Phone className="size-4" />
                {site.phoneDisplay}
              </a>
            </Button>
            <Button asChild variant="primary" size="default">
              <a href="#quote">Hemen Teklif Al</a>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Menü"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-background/50 text-foreground"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-2 overflow-hidden rounded-2xl border border-border/70 glass p-4 lg:hidden"
          >
            <nav className="flex flex-col">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3">
              <Button asChild variant="outline">
                <a href={telLink()}>
                  <Phone className="size-4" />
                  Ara
                </a>
              </Button>
              <Button asChild variant="whatsapp">
                <a href={whatsappLink()}>WhatsApp</a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </div>
    </motion.header>
  );
}
