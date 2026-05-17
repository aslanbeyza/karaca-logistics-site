"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  ArrowRight,
  CheckCircle2,
  Clock4,
  Loader2,
  MessageCircle,
  Phone,
  Shield,
} from "lucide-react";

import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp } from "@/components/ui/motion-fade";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site, telLink, whatsappLink } from "@/lib/site";

const schema = z.object({
  name: z.string().min(2, "Lütfen adınızı yazın"),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon yazın")
    .regex(/^[0-9 +()-]+$/i, "Sadece rakam, boşluk ve +()- kullanın"),
  from: z.string().min(2, "Taşıma adresini yazın"),
  to: z.string().min(2, "Varış adresini yazın"),
  type: z.string().min(2, "Hizmet türünü seçin"),
  date: z.string().optional(),
  note: z.string().optional(),
  kvkk: z
    .boolean()
    .refine((v) => v === true, "Devam etmek için onaylamanız gerekir"),
});

type FormValues = z.infer<typeof schema>;

const serviceTypes = [
  "Evden Eve",
  "Ofis Taşıma",
  "Şehirler Arası",
  "Parça Eşya",
  "Paketleme",
  "Depolama",
];

export function QuoteForm() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "success">(
    "idle",
  );

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { type: "Evden Eve", kvkk: false },
  });

  const selectedType = watch("type");

  async function onSubmit(values: FormValues) {
    setStatus("submitting");
    // Replace with real API endpoint or Resend / Formspree integration
    await new Promise((r) => setTimeout(r, 900));
    const message = encodeURIComponent(
      [
        `Yeni Teklif Talebi`,
        `Ad: ${values.name}`,
        `Telefon: ${values.phone}`,
        `Nereden: ${values.from}`,
        `Nereye: ${values.to}`,
        `Hizmet: ${values.type}`,
        values.date ? `Tarih: ${values.date}` : null,
        values.note ? `Not: ${values.note}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    );
    window.open(`https://wa.me/${site.whatsapp}?text=${message}`, "_blank");
    setStatus("success");
    reset();
  }

  return (
    <Section id="quote" className="relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-50"
      />
      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-12">
          <FadeUp className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="Ücretsiz Teklif"
              title={
                <>
                  Birkaç bilgiyle{" "}
                  <span className="text-brand-700">net fiyatınızı</span> alın
                </>
              }
              description="Formu doldurun, 30 dakika içinde size dönüş yapalım. Aynı gün ücretsiz ekspertiz hizmetimizden faydalanın."
            />

            <div className="mt-8 grid gap-3">
              <a
                href={telLink()}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand-700/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-700/15 dark:text-brand-200">
                    <Phone className="size-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-xs text-muted-foreground">
                      Hemen ara
                    </div>
                    <div className="text-base font-semibold">
                      {site.phoneDisplay}
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand-700" />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-emerald-500/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300">
                    <MessageCircle className="size-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-xs text-muted-foreground">
                      WhatsApp'tan yaz
                    </div>
                    <div className="text-base font-semibold">
                      30 dk içinde dönüş
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-emerald-600" />
              </a>

              <div className="flex items-center justify-between gap-4 rounded-2xl border border-dashed border-border bg-secondary/40 p-4">
                <div className="flex items-center gap-3">
                  <span className="grid size-11 place-items-center rounded-xl bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
                    <Clock4 className="size-5" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-xs text-muted-foreground">
                      Çalışma saatleri
                    </div>
                    <div className="text-sm font-semibold">
                      {site.workingHours}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.1} className="lg:col-span-7">
            <div className="relative rounded-3xl border border-border bg-card p-6 shadow-[0_30px_80px_-30px_rgba(23,34,138,0.25)] sm:p-8">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-5 sm:grid-cols-2"
              >
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="name">Ad Soyad</Label>
                  <Input
                    id="name"
                    placeholder="Adınız Soyadınız"
                    {...register("name")}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name ? (
                    <p className="text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="phone">Telefon</Label>
                  <Input
                    id="phone"
                    type="tel"
                    inputMode="tel"
                    placeholder="0 5XX XXX XX XX"
                    {...register("phone")}
                    aria-invalid={!!errors.phone}
                  />
                  {errors.phone ? (
                    <p className="text-xs text-destructive">
                      {errors.phone.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="from">Nereden</Label>
                  <Input
                    id="from"
                    placeholder="Örn. Yenişehir / Mersin"
                    {...register("from")}
                    aria-invalid={!!errors.from}
                  />
                  {errors.from ? (
                    <p className="text-xs text-destructive">
                      {errors.from.message}
                    </p>
                  ) : null}
                </div>
                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="to">Nereye</Label>
                  <Input
                    id="to"
                    placeholder="Örn. Mezitli / Mersin"
                    {...register("to")}
                    aria-invalid={!!errors.to}
                  />
                  {errors.to ? (
                    <p className="text-xs text-destructive">
                      {errors.to.message}
                    </p>
                  ) : null}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label>Hizmet Türü</Label>
                  <div className="flex flex-wrap gap-2">
                    {serviceTypes.map((t) => {
                      const active = selectedType === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() =>
                            setValue("type", t, { shouldValidate: true })
                          }
                          className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                            active
                              ? "border-brand-700 bg-brand-700 text-white"
                              : "border-border bg-background text-foreground hover:border-brand-700/40 hover:bg-secondary"
                          }`}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                  <input type="hidden" {...register("type")} />
                </div>

                <div className="space-y-2 sm:col-span-1">
                  <Label htmlFor="date">Taşınma Tarihi (opsiyonel)</Label>
                  <Input id="date" type="date" {...register("date")} />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="note">Not</Label>
                  <Textarea
                    id="note"
                    placeholder="Kat, asansör, eşya sayısı vb. detaylar..."
                    {...register("note")}
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label className="flex items-start gap-3 text-xs text-muted-foreground">
                    <input
                      type="checkbox"
                      className="mt-0.5 size-4 rounded border-border text-brand-700 focus:ring-brand-700"
                      {...register("kvkk")}
                    />
                    <span>
                      KVKK kapsamında verilerimin teklif iletilebilmesi amacıyla
                      işlenmesini kabul ediyorum.
                    </span>
                  </label>
                  {errors.kvkk ? (
                    <p className="text-xs text-destructive">
                      {errors.kvkk.message as string}
                    </p>
                  ) : null}
                </div>

                <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="size-4 text-brand-700" />
                    <span>Bilgileriniz yalnızca teklif için kullanılır.</span>
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={status === "submitting"}
                    className="sm:min-w-[200px]"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="size-4 animate-spin" />
                        Gönderiliyor...
                      </>
                    ) : status === "success" ? (
                      <>
                        <CheckCircle2 className="size-4" />
                        Gönderildi
                      </>
                    ) : (
                      <>
                        Teklif Al
                        <ArrowRight className="size-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </FadeUp>
        </div>
      </div>
    </Section>
  );
}
