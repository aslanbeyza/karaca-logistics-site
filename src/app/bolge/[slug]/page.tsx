import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/site/navbar";
import { DistrictHero } from "@/components/site/district-hero";
import {
  DistrictNearby,
  DistrictSeoContent,
} from "@/components/site/district-content";
import { QuoteForm } from "@/components/site/quote-form";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloating } from "@/components/site/whatsapp-floating";
import {
  districtPath,
  getDistrictBySlug,
  getDistrictSlugs,
} from "@/lib/districts";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getDistrictSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    return { title: "Bölge Bulunamadı" };
  }

  const title = `${district.name} Evden Eve Nakliyat | Ücretsiz Ekspertiz`;
  const url = `${site.url}${districtPath(slug)}`;

  return {
    title,
    description: district.description,
    keywords: [
      `${district.name} nakliyat`,
      `${district.name} evden eve nakliyat`,
      `Mersin ${district.name} nakliyat`,
      site.name,
      "sigortalı nakliyat",
      "ücretsiz ekspertiz",
    ],
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: site.locale,
      url,
      siteName: site.name,
      title: `${district.name} Evden Eve Nakliyat | ${site.name}`,
      description: district.description,
      images: [
        {
          url: district.image,
          alt: district.imageAlt,
        },
      ],
    },
  };
}

function getBreadcrumbJsonLd(districtName: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: site.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bölgeler",
        item: `${site.url}/#coverage`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${districtName} Nakliyat`,
        item: `${site.url}${districtPath(slug)}`,
      },
    ],
  };
}

export default async function DistrictPage({ params }: PageProps) {
  const { slug } = await params;
  const district = getDistrictBySlug(slug);

  if (!district) {
    notFound();
  }

  const jsonLd = getBreadcrumbJsonLd(district.name, slug);

  return (
    <>
      <Navbar />
      <main>
        <DistrictHero district={district} />
        <DistrictSeoContent district={district} />
        <QuoteForm />
        <DistrictNearby district={district} />
      </main>
      <Footer />
      <WhatsAppFloating />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
