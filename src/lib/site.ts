export const site = {
  name: "Karaca Nakliyat",
  shortName: "Karaca Nakliyat",
  description:
    "Karaca Nakliyat: Mersin'de stressiz, sigortalı ve aynı gün ekspertizli evden eve nakliyat hizmeti. Toroslar, Yenişehir, Mezitli, Akdeniz ve şehirler arası taşımacılık.",
  url: "https://karacanakliyat.com",
  city: "Mersin",
  locale: "tr_TR",
  phone: "+90 530 061 49 02",
  phoneDisplay: "0 530 061 49 02",
  whatsapp: "905300614902",
  email: "info@karacanakliyat.com",
  address: "Toroslar / Mersin",
  workingHours: "Hafta içi 08:00 - 20:00 • 7 gün acil hat",
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
