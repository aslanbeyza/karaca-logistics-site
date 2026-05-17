import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const sans = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const display = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} • Mersin Evden Eve Nakliyat`,
    template: `%s • ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Mersin nakliyat",
    "Mersin evden eve nakliyat",
    "Toroslar nakliyat",
    "Yenişehir nakliyat",
    "Mezitli nakliyat",
    "Akdeniz nakliyat",
    "şehirler arası nakliyat",
    "asansörlü taşıma",
    "ofis taşıma Mersin",
    "sigortalı taşımacılık",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} • Mersin'de stressiz taşınma`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} • Mersin'de stressiz taşınma`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070a2c" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MovingCompany",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mersin",
    addressRegion: "Mersin",
    addressCountry: "TR",
  },
  areaServed: [
    "Mersin",
    "Toroslar",
    "Yenişehir",
    "Mezitli",
    "Akdeniz",
    "Tarsus",
    "Erdemli",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: site.rating.value,
    reviewCount: site.rating.count,
  },
  priceRange: "₺₺",
  openingHours: "Mo-Su 08:00-22:00",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`${sans.variable} ${display.variable}`}>
      <body className="min-h-screen bg-background font-sans text-foreground">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
