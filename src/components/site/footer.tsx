"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { site, telLink } from "@/lib/site";
import { districts, districtPath } from "@/lib/districts";

const cols = [
  {
    title: "Hizmetler",
    links: [
      { label: "Evden Eve Nakliyat", href: "/#services" },
      { label: "Ofis Taşıma", href: "/#services" },
      { label: "Şehirler Arası", href: "/#services" },
      { label: "Parça Eşya", href: "/#services" },
      { label: "Paketleme", href: "/#services" },
    ],
  },
  {
    title: "Bölgeler",
    links: districts.slice(0, 6).map((d) => ({
      label: d.name,
      href: districtPath(d.slug),
    })),
  },
  {
    title: "Kurumsal",
    links: [
      { label: "Hakkımızda", href: "/#why-us" },
      { label: "Süreç", href: "/#process" },
      { label: "Müşteri Yorumları", href: "/#testimonials" },
      { label: "Sıkça Sorulanlar", href: "/#faq" },
      { label: "İletişim", href: "/#quote" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-brand-950 text-white">
      <div
        aria-hidden
        className="absolute inset-0 bg-grid opacity-[0.04]"
      />
      <div className="container relative">
        <div className="grid gap-10 py-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-10 place-items-center rounded-xl bg-white/10 ring-1 ring-white/20">
                <Image
                  src="/images/logo.svg"
                  alt="Logo"
                  width={28}
                  height={28}
                  className="invert brightness-0"
                />
              </span>
              <span className="font-display text-lg font-bold tracking-tight">
                {site.shortName}
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Mersin'in güvenilir nakliyat firması. 14 yıllık tecrübemizle
              evden eve, ofis ve şehirler arası taşımalarda sigortalı hizmet.
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3 text-white/85">
                <Phone className="size-4 text-brand-200" />
                <a href={telLink()} className="hover:text-white">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Mail className="size-4 text-brand-200" />
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <MapPin className="size-4 text-brand-200" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3 text-white/85">
                <Instagram className="size-4 text-brand-200" />
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  @{site.social.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {cols.map((col) => (
              <div key={col.title}>
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                  {col.title}
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-white/75 transition-colors hover:text-white"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-start justify-between gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center">
          <div className="text-xs text-white/60">
            © {new Date().getFullYear()} {site.name}. Tüm hakları saklıdır.
          </div>
          <div className="flex items-center gap-2">
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid size-9 place-items-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-white/40 hover:text-white"
            >
              <Instagram className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
