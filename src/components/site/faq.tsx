"use client";

import * as React from "react";
import { Section, SectionHeading } from "@/components/ui/section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FadeUp } from "@/components/ui/motion-fade";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/lib/site";

const faqs = [
  {
    q: "Ücretsiz ekspertiz nasıl çalışıyor?",
    a: "Bizi telefon veya WhatsApp ile aradığınızda, ekibimiz aynı gün (uygun olduğumuz bir saatte) adresinize gelir. Eşyalarınızın hacmini, kat bilgisini ve özel taşıma gerektiren parçaları inceler. Sonrasında size yazılı, şeffaf bir fiyat teklifi sunarız. Bu hizmet için sizden hiçbir ücret talep etmiyoruz.",
  },
  {
    q: "Verdiğiniz fiyat değişir mi?",
    a: "Hayır. Ekspertiz sonrası yazılı olarak verdiğimiz fiyat, taşıma tarihinde geçerlidir. Sürpriz ek ücret çıkarmıyor, şeffaf çalışıyoruz. Sadece sonradan eklediğiniz eşyalar veya değişen şartlar (örneğin asansör çalışmaması) için ek ücret söz konusu olabilir; bu durumda sizi önceden bilgilendiririz.",
  },
  {
    q: "Eşyalarım sigortalı mı taşınıyor?",
    a: "Evet. Tüm taşımalarımız sigortalıdır. Olası bir hasar durumunda eşyanız zarar değerinde tazmin edilir. Detaylı sigorta şartlarını sözleşme aşamasında sizinle paylaşırız.",
  },
  {
    q: "Paketleme malzemelerini siz mi sağlıyorsunuz?",
    a: "Evet. Streç film, baloncuklu naylon, karton kutu, mobilya bezi ve özel cam/piano kasaları dahil tüm paketleme malzemeleri tarafımızca sağlanır. İsterseniz sadece paketleme hizmeti de alabilirsiniz.",
  },
  {
    q: "Asansörlü taşıma hizmeti veriyor musunuz?",
    a: "Evet. Yüksek katlı binalar veya dar merdiven yapıları için modern asansörlü kamyonlarımız mevcuttur. Bu sayede eşyalar daha hızlı ve güvenli şekilde taşınır.",
  },
  {
    q: "Şehirler arası taşıma ne kadar sürer?",
    a: "Mesafeye bağlı olarak değişiklik göstermekle birlikte, Mersin'den çoğu büyükşehre 1-2 gün içerisinde teslimat yapıyoruz. Acil teslimat ihtiyaçlarınız için özel araç seçeneği de sunabiliyoruz.",
  },
  {
    q: "Ödeme nasıl yapılıyor?",
    a: "Nakit, kredi kartı (taksitli) ve havale/EFT seçenekleri ile ödeme alıyoruz. Kurumsal taşımalarda faturalı ve vadeli ödeme imkânımız bulunmaktadır.",
  },
  {
    q: "Hafta sonu ve gece taşıma yapıyor musunuz?",
    a: "Evet. Özellikle ofis ve kurumsal taşımalarda iş akışınızı bozmamak için hafta sonu, akşam veya gece taşıma yapabiliyoruz. Standart taşımalarda da hafta sonu hizmet veriyoruz.",
  },
];

export function FAQ() {
  return (
    <Section id="faq" className="bg-background">
      <div className="container">
        <FadeUp>
          <SectionHeading
            eyebrow="Sıkça Sorulanlar"
            title={
              <>
                Aklınızdaki soruların{" "}
                <span className="text-brand-700">cevabı burada</span>
              </>
            }
            description="Cevap bulamadığınız bir soru varsa WhatsApp'tan yazın, hemen dönelim."
          />
        </FadeUp>

        <div className="mx-auto mt-12 grid max-w-3xl gap-3">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <FadeUp delay={0.1}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
            <p className="text-sm text-muted-foreground">
              Sorunuz hâlâ var mı? Direkt iletişime geçin.
            </p>
            <Button asChild variant="whatsapp">
              <a href={whatsappLink()}>WhatsApp'tan Yaz</a>
            </Button>
          </div>
        </FadeUp>
      </div>
    </Section>
  );
}
