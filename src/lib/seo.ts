import { site } from "@/lib/site";

const faqItems = [
  {
    q: "Ücretsiz ekspertiz nasıl çalışıyor?",
    a: "Bizi telefon veya WhatsApp ile aradığınızda, ekibimiz aynı gün adresinize gelir. Eşyalarınızın hacmini inceler ve yazılı fiyat teklifi sunarız. Bu hizmet ücretsizdir.",
  },
  {
    q: "Verdiğiniz fiyat değişir mi?",
    a: "Ekspertiz sonrası yazılı fiyat taşıma tarihinde geçerlidir. Sürpriz ek ücret çıkarmıyoruz.",
  },
  {
    q: "Eşyalarım sigortalı mı taşınıyor?",
    a: "Evet. Tüm taşımalarımız sigortalıdır.",
  },
  {
    q: "Paketleme malzemelerini siz mi sağlıyorsunuz?",
    a: "Evet. Tüm paketleme malzemeleri tarafımızca sağlanır.",
  },
  {
    q: "Şehirler arası taşıma ne kadar sürer?",
    a: "Mersin'den çoğu büyükşehre 1-2 gün içinde teslimat yapıyoruz.",
  },
  {
    q: "Hafta sonu ve gece taşıma yapıyor musunuz?",
    a: "Evet. Hafta sonu, akşam ve gece taşıma yapabiliyoruz.",
  },
];

export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": `${site.url}/#organization`,
    name: site.name,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.description,
    image: `${site.url}/images/logo.svg`,
    logo: `${site.url}/images/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Mersin",
      addressRegion: "Mersin",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 36.8121,
      longitude: 34.6415,
    },
    areaServed: site.areas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: "₺₺",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [site.social.instagram],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Nakliyat Hizmetleri",
      itemListElement: site.services.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service,
          areaServed: "Mersin, Türkiye",
          provider: { "@id": `${site.url}/#organization` },
        },
      })),
    },
  };
}

export function getFaqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "tr-TR",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export const seoKeywords = [
  "Mersin nakliyat",
  "Mersin evden eve nakliyat",
  "Mehmet Şirin Nakliyat",
  "Şirin Nakliyat",
  "Toroslar nakliyat",
  "Yenişehir nakliyat",
  "Mezitli nakliyat",
  "Akdeniz nakliyat",
  "Tarsus nakliyat",
  "Erdemli nakliyat",
  "şehirler arası nakliyat Mersin",
  "ofis taşıma Mersin",
  "sigortalı taşımacılık",
  "ücretsiz ekspertiz nakliyat",
  "parça eşya taşıma Mersin",
];
