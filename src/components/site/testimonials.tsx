"use client";

import * as React from "react";
import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/motion-fade";

const testimonials = [
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

export function Testimonials() {
  return (
    <Section id="testimonials" className="bg-secondary/40">
      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Müşteri Yorumları"
            title={
              <>
                Bizi en iyi{" "}
                <span className="text-brand-700">müşterilerimiz</span> anlatır
              </>
            }
            description="Mersin'de binlerce ailenin yeni evine taşınmasına eşlik ettik. İşte bazı yorumları."
          />
        </FadeUp>

        <StaggerGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="group relative flex h-full flex-col gap-5 rounded-3xl border border-border bg-background p-7 transition-all hover:-translate-y-0.5 hover:border-brand-700/30 hover:shadow-[0_20px_50px_-25px_rgba(23,34,138,0.25)]">
                <Quote
                  aria-hidden
                  className="absolute right-6 top-6 size-9 text-brand-100"
                  strokeWidth={1.5}
                />
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-[15px] leading-relaxed text-foreground/90">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                  <div className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-300 to-brand-700 text-sm font-semibold text-white">
                    {t.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div className="leading-tight">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </Section>
  );
}
