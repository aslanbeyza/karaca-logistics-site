import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPin } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/whatsapp";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { District } from "@/lib/districts";
import { site, whatsappLink } from "@/lib/site";

type DistrictHeroProps = {
  district: District;
};

export function DistrictHero({ district }: DistrictHeroProps) {
  const whatsappMessage = `Merhaba, ${district.name} bölgesi için nakliyat teklifi almak istiyorum.`;

  return (
    <section className="relative isolate overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-grid mask-fade-b opacity-60"
      />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[1100px] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(closest-side,rgba(23,34,138,0.18),transparent)] blur-2xl"
      />

      <div className="container">
        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-brand-700">
                Ana Sayfa
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/#coverage" className="hover:text-brand-700">
                Bölgeler
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="font-medium text-foreground">{district.name}</li>
          </ol>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <Badge variant="brand" className="mb-5">
              <MapPin className="size-3.5" />
              {district.name} • Mersin
            </Badge>

            <h1 className="font-display text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[56px]">
              {district.name}{" "}
              <span className="text-brand-700">evden eve nakliyat</span>
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {district.intro}
            </p>

            <ul className="mt-7 flex flex-col gap-2.5 text-[15px]">
              {district.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="size-5 shrink-0 text-brand-700" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="my-2 mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="xl">
                <a href="#quote">
                  Ücretsiz Teklif Al
                  <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <WhatsAppIcon className="size-4" />
                  WhatsApp&apos;tan Yaz
                </a>
              </Button>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div
                aria-hidden
                className="absolute -inset-2 bg-brand-100/40 blur-2xl"
              />
              <div className="relative overflow-hidden rounded-[0.25rem] bg-brand-50/30 shadow-[0_20px_50px_-20px_rgba(23,34,138,0.2)]">
                <Image
                  src={district.image}
                  alt={district.imageAlt}
                  width={1392}
                  height={1042}
                  priority
                  sizes="(max-width:1024px) 90vw, 520px"
                  className="h-auto w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-muted-foreground">
                {site.name} — {district.name} nakliyat hizmeti
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
