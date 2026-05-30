"use client";

import * as React from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/section";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/motion-fade";
import { Button } from "@/components/ui/button";
import { DistrictNavLink } from "@/components/site/district-nav-link";
import { districts } from "@/lib/districts";
import { whatsappLink } from "@/lib/site";
import { districtVehicleImages } from "@/lib/vehicle-images";
import { preloadImages } from "@/lib/preload-image";

export function Coverage() {
  React.useEffect(() => {
    const node = document.getElementById("coverage");
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        preloadImages(districtVehicleImages.map((v) => v.src));
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="coverage" className="bg-background">
      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Hizmet Bölgeleri"
            title={
              <>
                Mersin'in{" "}
                <span className="text-brand-700">her noktasındayız</span>
              </>
            }
            description="Şehir merkezinden uzak ilçelere kadar; aynı kalite, aynı güvence."
          />
        </FadeUp>

        <StaggerGroup className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {districts.map((d) => (
            <StaggerItem key={d.slug}>
              <DistrictNavLink
                district={d}
                className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-brand-700/30 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-brand-50 text-brand-700 ring-1 ring-inset ring-brand-700/15 transition-colors group-hover:bg-brand-700 group-hover:text-white dark:bg-brand-700/15 dark:text-brand-200 dark:ring-brand-700/30 dark:group-hover:bg-brand-700 dark:group-hover:text-white">
                    <MapPin className="size-4" />
                  </span>
                  <div className="leading-tight">
                    <div className="text-[15px] font-semibold">{d.name}</div>
                    <div className="text-xs text-muted-foreground">
                      Nakliyat hizmeti
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-brand-700" />
              </DistrictNavLink>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp delay={0.15}>
          <div className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-dashed border-border bg-secondary/40 p-6 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <h4 className="font-display text-lg font-semibold">
                Listede bölgenizi göremediniz mi?
              </h4>
              <p className="text-sm text-muted-foreground">
                Mersin geneli ve çevre illere de hizmet veriyoruz. Hemen sorun.
              </p>
            </div>
            <Button asChild variant="primary">
              <a href={whatsappLink("Merhaba, bölgemde hizmet veriyor musunuz?")}>
                Bölgemi sor
                <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
