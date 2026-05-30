import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import type { District } from "@/lib/districts";
import { districtPath, getOtherDistricts } from "@/lib/districts";
import { site } from "@/lib/site";

type DistrictSeoContentProps = {
  district: District;
};

export function DistrictSeoContent({ district }: DistrictSeoContentProps) {
  return (
    <Section className="bg-secondary/30 py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            align="left"
            eyebrow={`${district.name} Nakliyat`}
            title={
              <>
                {district.name} ilçesinde güvenilir{" "}
                <span className="text-brand-700">evden eve taşımacılık</span>
              </>
            }
            description={district.description}
          />

          <div className="prose prose-neutral mt-8 max-w-none text-muted-foreground">
            <p>
              {site.name} olarak {district.name} ilçesinde evden eve nakliyat,
              ofis taşıma, şehirler arası nakliyat, parça eşya taşıma ve
              profesyonel paketleme hizmetleri sunuyoruz. {site.stats.years} yılı
              aşkın tecrübemizle eşyalarınız sigorta güvencesi altında taşınır;
              ekspertiz hizmetimiz ücretsizdir.
            </p>
            <p>
              {district.name} bölgesinde taşınma planlıyorsanız aynı gün adres
              ziyaretiyle eşya hacminizi ölçer, yazılı fiyat teklifi veririz.
              Paketleme malzemeleri ekibimiz tarafından sağlanır; taşıma gününde
              sürpriz ek ücret çıkmaz.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

type DistrictNearbyProps = {
  district: District;
};

export function DistrictNearby({ district }: DistrictNearbyProps) {
  const nearby = getOtherDistricts(district.slug);

  return (
    <Section className="py-16 sm:py-20">
      <div className="container">
        <SectionHeading
          eyebrow="Diğer Bölgeler"
          title={
            <>
              Mersin&apos;in{" "}
              <span className="text-brand-700">diğer ilçelerinde</span> de
              hizmetinizdeyiz
            </>
          }
          description={`${district.name} dışında aşağıdaki ilçelerde de aynı kalite ve güvenceyle nakliyat hizmeti veriyoruz.`}
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {nearby.map((d) => (
            <Link
              key={d.slug}
              href={districtPath(d.slug)}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand-700/30 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-700/15 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                  <MapPin className="size-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-[15px] font-semibold">{d.name}</div>
                  <div className="text-xs text-muted-foreground">
                    Evden eve nakliyat
                  </div>
                </div>
              </div>
              <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand-700" />
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
