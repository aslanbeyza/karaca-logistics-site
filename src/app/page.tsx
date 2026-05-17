import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { TrustBar } from "@/components/site/trust-bar";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { WhyUs } from "@/components/site/why-us";
import { Coverage } from "@/components/site/coverage";
import { Testimonials } from "@/components/site/testimonials";
import { FAQ } from "@/components/site/faq";
import { QuoteForm } from "@/components/site/quote-form";
import { CTA } from "@/components/site/cta";
import { Footer } from "@/components/site/footer";
import { WhatsAppFloating } from "@/components/site/whatsapp-floating";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <Coverage />
        <Testimonials />
        <FAQ />
        <QuoteForm />
        <CTA />
      </main>
      <Footer />
      <WhatsAppFloating />
    </>
  );
}
