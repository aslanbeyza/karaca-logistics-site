export const site = {
  name: "Karaca Nakliyat",
  shortName: "Karaca Nakliyat",
  description:
    "Karaca Nakliyat: Mersin'de stressiz, sigortalı ve aynı gün ekspertizli evden eve nakliyat hizmeti. Toroslar, Yenişehir, Mezitli, Akdeniz ve şehirler arası taşımacılık.",
  url: "https://karacanakliyat.com",
  city: "Mersin",
  locale: "tr_TR",
  phone: "+90 545 916 25 13",
  phoneDisplay: "+90 545 916 25 13",
  whatsapp: "905459162513",
  email: "aslanbeyza3413@gmail.com",
  address: "Toroslar / Mersin",
  workingHours: "Hafta içi 08:00 - 20:00 • 7 gün acil hat",
  areas: [
    "Mersin",
    "Toroslar",
    "Yenişehir",
    "Mezitli",
    "Akdeniz",
    "Tarsus",
    "Erdemli",
  ],
  services: [
    "Evden Eve Nakliyat",
    "Ofis ve Kurumsal Taşıma",
    "Şehirler Arası Nakliyat",
    "Parça Eşya Taşıma",
    "Paketleme Hizmeti",
  ],
  rating: {
    value: 4.9,
    count: 1280,
  },
  stats: {
    moves: "12.000+",
    years: "14",
    rating: "4.9",
    coverage: "33+",
  },
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },
};

export function whatsappLink(message?: string) {
  const text = encodeURIComponent(
    message ?? "Merhaba, nakliyat için fiyat teklifi almak istiyorum.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
}

export function telLink() {
  return `tel:${site.phone.replace(/\s/g, "")}`;
}
