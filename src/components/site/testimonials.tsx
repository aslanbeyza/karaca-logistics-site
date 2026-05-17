"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion-fade";

type T = {
  name: string;
  role: string;
  rating: number;
  text: string;
};

const testimonials: T[] = [
  {
    name: "Elif Yılmaz",
    role: "Yenişehir → Mezitli",
    rating: 5,
    text:
      "Sabah aradım, öğleden sonra ekspertiz için geldiler. Ertesi gün taşıma tamamlandı. Tek bir eşyam çizilmedi. Gerçekten profesyonel bir hizmet aldım.",
  },
  {
    name: "Mert Aydın",
    role: "Ofis taşıma • Toroslar",
    rating: 5,
    text:
      "İş günü kaybetmeden, Cumartesi sabah ofisimi taşıdılar. Pazartesi sabah masaların yerli yerinde olması inanılmazdı. Tavsiye ederim.",
  },
  {
    name: "Ayşe Demir",
    role: "Mersin → Ankara",
    rating: 5,
    text:
      "Şehirler arası taşımada en çok endişe ettiğim şey hasar oluşmasıydı. Sigortalı taşıma seçeneği ve ekibin titizliği sayesinde her şey sapasağlam geldi.",
  },
  {
    name: "Burak Çelik",
    role: "Akdeniz",
    rating: 5,
    text:
      "Fiyat teklifinde ne dediyseler aynısı oldu. Ek ücret çıkmadı. Asansörlü kamyon sayesinde 4. kattan eşyalar kolayca indi. Çok memnun kaldım.",
  },
  {
    name: "Selin Kara",
    role: "Mezitli",
    rating: 5,
    text:
      "Annemi taşıdık ve ekip o kadar nazikti ki. Eşyaları paketlemekten yerleştirmeye kadar her şeyi düşündüler. Stresimi sıfıra indirdiler.",
  },
  {
    name: "Onur Şahin",
    role: "Tarsus → Mersin",
    rating: 5,
    text:
      "WhatsApp'tan teklifi 10 dakikada aldım. Aynı hafta taşındım. Hız, fiyat ve kalite üçü bir arada olan nadir firmalardan biri.",
  },
];

const loop = [...testimonials, ...testimonials];

function TestimonialCard({ t }: { t: T }) {
  return (
    <figure className="relative flex min-h-[280px] w-[min(calc(100vw-4rem),22rem)] shrink-0 flex-col gap-4 rounded-3xl border border-border bg-background p-6 shadow-sm sm:min-h-[300px] sm:w-[26rem] sm:p-7">
      <Quote
        aria-hidden
        className="pointer-events-none absolute right-5 top-5 size-8 shrink-0 text-brand-100 dark:text-brand-700/40 sm:right-6 sm:top-6 sm:size-9"
        strokeWidth={1.5}
      />
      <div className="flex shrink-0 items-center gap-1">
        {[...Array(t.rating)].map((_, starIndex) => (
          <Star
            key={`${t.name}-star-${starIndex}`}
            className="size-4 shrink-0 fill-amber-400 text-amber-400"
          />
        ))}
      </div>
      <blockquote className="line-clamp-5 text-[15px] leading-relaxed text-foreground/90 sm:line-clamp-6">
        &ldquo;{t.text}&rdquo;
      </blockquote>
      <figcaption className="mt-auto flex shrink-0 items-center gap-3 border-t border-border pt-5">
        <div className="grid size-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-300 to-brand-700 text-xs font-semibold text-white">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div className="min-w-0 leading-tight">
          <div className="truncate text-sm font-semibold">{t.name}</div>
          <div className="truncate text-xs text-muted-foreground">{t.role}</div>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <Section id="testimonials" className="overflow-hidden bg-secondary/40">
      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            title={
              <>
                Bizi en iyi{" "}
                <span className="text-brand-700 dark:text-brand-300">
                  müşterilerimiz
                </span>{" "}
                anlatır
              </>
            }
            description="Mersin'de binlerce ailenin yeni evine taşınmasına eşlik ettik. İşte bazı yorumları."
          />
        </FadeUp>
      </div>

      <div className="relative mt-14 w-full">
        {!reduceMotion ? (
          <div className="mask-fade-x overflow-hidden pb-2">
            <motion.div
              className="flex w-max flex-nowrap gap-5 px-5 sm:gap-6 sm:px-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 75,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loop.map((t, i) => (
                <TestimonialCard key={`${t.name}-${i}`} t={t} />
              ))}
            </motion.div>
          </div>
        ) : (
          <>
            <div className="-mx-4 overflow-x-auto overflow-y-hidden pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:mx-0 sm:px-0 [&::-webkit-scrollbar]:hidden">
              <div className="flex min-w-max gap-5 px-4 snap-x snap-mandatory pt-1 sm:px-6 md:justify-center">
                {testimonials.map((t) => (
                  <div key={t.name} className="snap-start shrink-0">
                    <TestimonialCard t={t} />
                  </div>
                ))}
              </div>
            </div>
            <p className="mx-auto mt-3 max-w-2xl px-4 text-center text-xs text-muted-foreground">
              Yorumları yan kaydırarak inceleyebilirsiniz.
            </p>
          </>
        )}
      </div>
    </Section>
  );
}
