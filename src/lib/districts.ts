import { getDistrictVehicleImage } from "@/lib/vehicle-images";

export type District = {
  name: string;
  slug: string;
  description: string;
  intro: string;
  highlights: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  blurDataURL: string;
  imageAlt: string;
};

function districtImage(index: number, name: string) {
  const vehicle = getDistrictVehicleImage(index);
  return {
    image: vehicle.src,
    imageWidth: vehicle.width,
    imageHeight: vehicle.height,
    blurDataURL: vehicle.blurDataURL,
    imageAlt: `Mehmet Şirin Nakliyat ${name} evden eve nakliyat aracı`,
  };
}

export const districts: District[] = [
  {
    name: "Toroslar",
    slug: "toroslar-nakliyat",
    description:
      "Toroslar evden eve nakliyat: Mehmet Şirin Nakliyat ile ücretsiz aynı gün ekspertiz, sigortalı taşıma ve profesyonel paketleme. Toroslar'dan Mersin geneline ve şehirler arası hizmet.",
    intro:
      "Toroslar ilçesinde konut, site ve apartman taşımalarında aynı gün ekspertiz sunuyoruz. Dar sokak ve kat planına göre araç ve ekip planlaması yapıyor; eşyalarınızı sigortalı olarak yeni adresinize taşıyoruz.",
    highlights: [
      "Toroslar genelinde aynı gün ekspertiz",
      "Site ve apartman taşımacılığı",
      "Sigortalı ve yazılı fiyat garantisi",
    ],
    ...districtImage(0, "Toroslar"),
  },
  {
    name: "Yenişehir",
    slug: "yenisehir-nakliyat",
    description:
      "Yenişehir evden eve nakliyat hizmeti. Mehmet Şirin Nakliyat; Yenişehir'de ofis, daire ve villa taşımalarında ücretsiz ekspertiz, sigortalı nakliyat ve profesyonel paketleme sunar.",
    intro:
      "Yenişehir'in yoğun konut bölgelerinde planlı ve hızlı taşıma gerçekleştiriyoruz. Ekspertiz sonrası net fiyat teklifi veriyor; paketleme malzemelerini ekibimiz getiriyor.",
    highlights: [
      "Yenişehir'de daire ve villa taşıma",
      "Ofis taşıma ve kurumsal çözümler",
      "Hafta sonu taşıma seçeneği",
    ],
    ...districtImage(1, "Yenişehir"),
  },
  {
    name: "Mezitli",
    slug: "mezitli-nakliyat",
    description:
      "Mezitli nakliyat ve evden eve taşımacılık. Mehmet Şirin Nakliyat; Mezitli'den Mersin merkeze, ilçelere ve Türkiye geneline sigortalı, ücretsiz ekspertizli nakliyat hizmeti verir.",
    intro:
      "Mezitli'de ev, ofis ve parça eşya taşımalarınız için deneyimli ekibimizle hizmet veriyoruz. Eşyalarınız ambalajlanır, sigortalı araçlarla taşınır ve yeni adresinizde yerleştirilir.",
    highlights: [
      "Mezitli genelinde hızlı randevu",
      "Parça eşya ve komple taşıma",
      "Şehirler arası bağlantılı hizmet",
    ],
    ...districtImage(2, "Mezitli"),
  },
  {
    name: "Akdeniz",
    slug: "akdeniz-nakliyat",
    description:
      "Akdeniz ilçesi evden eve nakliyat. Mehmet Şirin Nakliyat ile Akdeniz'de ücretsiz ekspertiz, sigortalı taşımacılık, profesyonel paketleme ve şeffaf fiyat teklifi.",
    intro:
      "Akdeniz ilçesinin merkez ve çevre mahallelerinde nakliyat hizmeti sunuyoruz. Merdiven, asansör ve park koşullarına göre operasyonu önceden planlıyoruz.",
    highlights: [
      "Akdeniz merkez ve mahalleleri",
      "Asansörsüz bina taşımacılığı",
      "Aynı gün ekspertiz imkânı",
    ],
    ...districtImage(3, "Akdeniz"),
  },
  {
    name: "Tarsus",
    slug: "tarsus-nakliyat",
    description:
      "Tarsus evden eve nakliyat hizmeti. Mehmet Şirin Nakliyat; Tarsus'tan Mersin'e ve şehirler arası taşımalarda sigortalı nakliyat, ücretsiz ekspertiz ve paketleme sunar.",
    intro:
      "Tarsus'ta konut ve iş yeri taşımalarınızı güvenle gerçekleştiriyoruz. Mersin merkezle koordineli ekiplerimiz sayesinde ilçe içi ve ilçeler arası taşımalar hızlı planlanır.",
    highlights: [
      "Tarsus–Mersin arası taşıma",
      "Konut ve iş yeri nakliyatı",
      "Yazılı ve değişmeyen fiyat",
    ],
    ...districtImage(4, "Tarsus"),
  },
  {
    name: "Erdemli",
    slug: "erdemli-nakliyat",
    description:
      "Erdemli nakliyat ve evden eve taşımacılık. Mehmet Şirin Nakliyat; Erdemli'de ücretsiz ekspertiz, sigortalı araç filosu ve profesyonel paketleme ile hizmet verir.",
    intro:
      "Erdemli ilçesinde yazlık, konut ve ticari alan taşımalarında deneyimliyiz. Sahil ve merkez bölgelerine uygun araç planlaması yapıyoruz.",
    highlights: [
      "Erdemli konut ve yazlık taşıma",
      "Sahil bölgesi operasyonları",
      "Şehirler arası bağlantı",
    ],
    ...districtImage(5, "Erdemli"),
  },
  {
    name: "Silifke",
    slug: "silifke-nakliyat",
    description:
      "Silifke evden eve nakliyat. Mehmet Şirin Nakliyat; Silifke'den Mersin ve Türkiye geneline sigortalı taşımacılık, ücretsiz ekspertiz ve paketleme hizmeti sunar.",
    intro:
      "Silifke ilçesinde ev ve parça eşya taşımalarınız için randevu oluşturuyoruz. Uzak ilçe taşımalarında teslimat süresini ve güzergâhı önceden netleştiriyoruz.",
    highlights: [
      "Silifke geneli hizmet",
      "Uzak ilçe taşıma planlaması",
      "Sigortalı ve güvenli taşıma",
    ],
    ...districtImage(6, "Silifke"),
  },
  {
    name: "Anamur",
    slug: "anamur-nakliyat",
    description:
      "Anamur nakliyat hizmeti. Mehmet Şirin Nakliyat ile Anamur'da evden eve taşımacılık, ücretsiz ekspertiz, sigortalı nakliyat ve profesyonel paketleme.",
    intro:
      "Anamur'dan Mersin merkeze ve diğer illere taşıma taleplerinizi karşılıyoruz. Ekspertiz ekibimiz eşya hacmini yerinde ölçer, size yazılı teklif sunar.",
    highlights: [
      "Anamur–Mersin taşıma hattı",
      "Evden eve ve parça eşya",
      "Ücretsiz ekspertiz",
    ],
    ...districtImage(0, "Anamur"),
  },
  {
    name: "Bozyazı",
    slug: "bozyazi-nakliyat",
    description:
      "Bozyazı evden eve nakliyat. Mehmet Şirin Nakliyat; Bozyazı ilçesinde sigortalı taşımacılık, ücretsiz ekspertiz ve profesyonel paketleme hizmeti verir.",
    intro:
      "Bozyazı'da konut taşımalarınız için planlı operasyon yürütüyoruz. İlçe içi ve şehirler arası taşımalarda aynı kalite standartlarını uyguluyoruz.",
    highlights: [
      "Bozyazı ilçe içi taşıma",
      "Şehirler arası bağlantı",
      "Profesyonel ambalajlama",
    ],
    ...districtImage(1, "Bozyazı"),
  },
  {
    name: "Aydıncık",
    slug: "aydincik-nakliyat",
    description:
      "Aydıncık nakliyat ve evden eve taşımacılık. Mehmet Şirin Nakliyat; Aydıncık'ta ücretsiz ekspertiz, sigortalı nakliyat ve şeffaf fiyat politikası ile hizmet sunar.",
    intro:
      "Aydıncık ilçesinde taşınma sürecinizi baştan sona yönetiyoruz. Paketlemeden yükleme ve teslimata kadar tek ekip ile çalışıyoruz.",
    highlights: [
      "Aydıncık genelinde hizmet",
      "Tek ekip, uçtan uca taşıma",
      "Sigorta güvencesi",
    ],
    ...districtImage(2, "Aydıncık"),
  },
  {
    name: "Gülnar",
    slug: "gulnar-nakliyat",
    description:
      "Gülnar evden eve nakliyat. Mehmet Şirin Nakliyat; Gülnar'dan Mersin ve çevre illere sigortalı taşımacılık, ücretsiz ekspertiz ve paketleme hizmeti sağlar.",
    intro:
      "Gülnar ilçesindeki taşıma talepleriniz için önceden rota ve süre planlaması yapıyoruz. Eşyalarınız özenle paketlenir ve sigortalı araçlarla taşınır.",
    highlights: [
      "Gülnar–Mersin taşıma",
      "Rota ve süre planlaması",
      "Ücretsiz ekspertiz",
    ],
    ...districtImage(3, "Gülnar"),
  },
  {
    name: "Mut",
    slug: "mut-nakliyat",
    description:
      "Mut nakliyat hizmeti. Mehmet Şirin Nakliyat ile Mut ilçesinde evden eve taşımacılık, ücretsiz aynı gün ekspertiz, sigortalı nakliyat ve profesyonel paketleme.",
    intro:
      "Mut ilçesinde konut ve eşya taşımalarınızda güvenilir çözüm sunuyoruz. Mersin merkezdeki operasyon ekibimizle koordineli çalışarak teslimatı zamanında tamamlıyoruz.",
    highlights: [
      "Mut ilçe içi ve dışı taşıma",
      "Koordineli ekip yapısı",
      "Yazılı fiyat garantisi",
    ],
    ...districtImage(4, "Mut"),
  },
];

export function getDistrictBySlug(slug: string): District | undefined {
  return districts.find((d) => d.slug === slug);
}

export function getDistrictSlugs(): string[] {
  return districts.map((d) => d.slug);
}

export function getOtherDistricts(currentSlug: string, limit = 6): District[] {
  return districts.filter((d) => d.slug !== currentSlug).slice(0, limit);
}

export function districtPath(slug: string) {
  return `/bolge/${slug}`;
}
