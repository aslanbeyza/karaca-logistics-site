"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { whatsappLink } from "@/lib/site";
import { heroImage } from "@/lib/vehicle-images";

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
        className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60"
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
              Mersin evden eve nakliyat ile{" "}
              <span className="relative inline-block">
                <span className="relative z-10">stressiz</span>
                <span
                  aria-hidden
                  className="absolute -bottom-1.5 left-0 right-0 -z-0 h-3 rounded-md bg-brand-200/70 dark:bg-brand-700/50"
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

            <div className="my-2 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="xl">
                <a href="#quote">
                  Ücretsiz Teklif Al
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <WhatsAppIcon className="size-4" />
                  WhatsApp'tan Yaz
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-2  bg-brand-100/40 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[0.25rem] bg-brand-50/30 shadow-[0_20px_50px_-20px_rgba(23,34,138,0.2)]">
                <Image
                  src={heroImage.src}
                  alt="Mehmet Şirin Nakliyat Mersin nakliyat aracı"
                  width={heroImage.width}
                  height={heroImage.height}
                  priority
                  placeholder="blur"
                  blurDataURL={heroImage.blurDataURL}
                  sizes="(max-width:1024px) 90vw, 520px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
