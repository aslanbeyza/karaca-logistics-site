"use client";

import * as React from "react";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion-fade";
import { site, telLink, whatsappLink } from "@/lib/site";

export function CTA() {
  return (
    <Section className="bg-background pb-0">
      <div className="container">
        <FadeUp>
          <div className="relative isolate overflow-hidden rounded-[32px] border border-brand-700/20 bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 px-6 py-14 text-white sm:px-12 sm:py-20">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 bg-grid opacity-[0.08]"
            />
            <div
              aria-hidden
              className="absolute -right-32 -top-32 -z-10 size-[400px] rounded-full bg-brand-300/20 blur-3xl"
            />
            <div
              aria-hidden
              className="absolute -bottom-32 -left-32 -z-10 size-[400px] rounded-full bg-brand-500/20 blur-3xl"
            />

            <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
              <h3 className="font-display text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Yarın taşınmak mı istiyorsunuz?{" "}
                <span className="text-brand-200">
                  Bugün ekspertizi başlatalım.
                </span>
              </h3>
              <p className="max-w-xl text-pretty text-base leading-relaxed text-white/75">
                Hemen iletişime geçin, 30 dakika içinde size dönüş yapalım.
                Ücretsiz ekspertiz ve şeffaf fiyat garantisi.
              </p>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="xl" variant="default" className="bg-white text-brand-900 hover:bg-white/90">
                  <a href={telLink()}>
                    <Phone className="size-4" />
                    {site.phoneDisplay}
                  </a>
                </Button>
                <Button asChild size="xl" variant="whatsapp">
                  <a href={whatsappLink()} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" />
                    WhatsApp
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
                </span>
                <span>Şu an müsaitiz • Aynı gün ekspertiz</span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
