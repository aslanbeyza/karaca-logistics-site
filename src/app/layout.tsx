import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import {
  getFaqJsonLd,
  getLocalBusinessJsonLd,
  getWebSiteJsonLd,
  seoKeywords,
} from "@/lib/seo";
import { ThemeProvider } from "@/components/theme-provider";

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
    default: `${site.name} | Mersin Evden Eve Nakliyat • Ücretsiz Ekspertiz`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: seoKeywords,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Nakliyat",
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Mersin Evden Eve Nakliyat`,
    description: site.description,
    images: [
      {
        url: "/images/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: `${site.name} - Mersin evden eve nakliyat hizmeti`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Mersin Evden Eve Nakliyat`,
    description: site.description,
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: { canonical: site.url },
  other: {
    "geo.region": "TR-33",
    "geo.placename": "Mersin",
    "geo.position": "36.8121;34.6415",
    ICBM: "36.8121, 34.6415",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = [getLocalBusinessJsonLd(), getWebSiteJsonLd(), getFaqJsonLd()];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable}`}
    >
      <body className="min-h-screen bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          forcedTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
