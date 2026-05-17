"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Shield,
  Sparkles,
  Star,
  Truck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { site, whatsappLink } from "@/lib/site";

const bullets = [
  "Aynı gün ücretsiz ekspertiz",
  "Sigortalı taşımacılık güvencesi",
  "7/24 WhatsApp destek hattı",
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid-pattern bg-grid-pattern mask-fade-b opacity-60"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[1100px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(23,34,138,0.18),transparent)] blur-2xl"
      />

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7"
          >
            <Badge variant="brand" className="mb-5">
              <Sparkles className="size-3.5" />
              Mersin'in en hızlı yanıt veren nakliyat ekibi
            </Badge>

            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[68px]">
              Mersin'de{" "}
              <span className="relative inline-block">
                <span className="relative z-10">stressiz</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 right-0 -z-0 h-3 rounded-md bg-brand-200/70"
                />
              </span>{" "}
              taşınmanın en hızlı yolu.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              14 yıllık tecrübemizle eşyalarınızı paketleyip, sigortalı araçlarla
              taşıyor ve yeni evinizde özenle yerleştiriyoruz. Aynı gün ekspertiz,
              şeffaf fiyat.
            </p>

            <ul className="mt-7 flex flex-col gap-2.5 text-[15px] sm:flex-row sm:flex-wrap sm:gap-x-6">
              {bullets.map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 text-brand-700" />
                  <span className="font-medium">{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="xl">
                <a href="#quote">
                  Ücretsiz Teklif Al
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" />
                  WhatsApp'tan Yaz
                </a>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <span
                      key={i}
                      className="grid size-8 place-items-center rounded-full border-2 border-background bg-gradient-to-br from-brand-300 to-brand-700 text-[10px] font-semibold text-white"
                    >
                      {String.fromCharCode(64 + i)}
                    </span>
                  ))}
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                    <span className="ml-1 font-semibold">
                      {site.rating.value}
                    </span>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {site.rating.count.toLocaleString("tr-TR")}+ mutlu müşteri
                  </span>
                </div>
              </div>
              <div className="hidden h-8 w-px bg-border sm:block" />
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="size-4 text-brand-700" />
                <span>Tüm taşımalar sigortalıdır</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-xl">
              <div
                aria-hidden
                className="absolute -inset-6 -z-10 rounded-[40px] bg-gradient-to-tr from-brand-700/10 via-brand-200/30 to-transparent blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-gradient-to-br from-brand-50 via-white to-white p-6 shadow-[0_30px_80px_-30px_rgba(23,34,138,0.35)]">
                <div className="relative aspect-[5/4] w-full">
                  <Image
                    src="/images/truck.svg"
                    alt="Mersin nakliyat aracı"
                    fill
                    priority
                    sizes="(max-width:1024px) 90vw, 520px"
                    className="object-contain"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="absolute left-4 top-4 flex items-center gap-2 rounded-2xl border border-border/70 bg-background/90 px-3 py-2 shadow-md backdrop-blur sm:left-6 sm:top-6"
                >
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span className="text-xs font-semibold">Şu an aktif: 3 ekip</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="absolute right-4 top-4 flex items-center gap-3 rounded-2xl border border-border/70 bg-background/95 px-3 py-2 shadow-md backdrop-blur sm:right-6 sm:top-6"
                >
                  <div className="grid size-9 place-items-center rounded-xl bg-brand-700 text-white">
                    <Truck className="size-4" />
                  </div>
                  <div className="leading-tight">
                    <div className="text-xs font-semibold">Bugün</div>
                    <div className="text-[11px] text-muted-foreground">
                      18 başarılı taşıma
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.95, duration: 0.6 }}
                  className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-2xl border border-border/70 bg-background/95 p-3 shadow-lg backdrop-blur sm:bottom-6 sm:left-6 sm:right-6"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid size-10 place-items-center rounded-xl bg-emerald-100 text-emerald-700">
                      <Users className="size-5" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-sm font-semibold">
                        +{site.stats.moves} taşıma
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {site.stats.years} yıllık tecrübe
                      </div>
                    </div>
                  </div>
                  <Button asChild variant="primary" size="sm">
                    <a href="#quote">Teklif</a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
