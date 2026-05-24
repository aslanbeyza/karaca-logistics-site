import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

type QuotePayload = {
  name: string;
  phone: string;
  from: string;
  to: string;
  type: string;
  date?: string;
  note?: string;
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "E-posta servisi yapılandırılmamış. RESEND_API_KEY ortam değişkenini ayarlayın.",
      },
      { status: 503 },
    );
  }

  let body: QuotePayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Geçersiz istek." }, { status: 400 });
  }

  const { name, phone, from, to, type, date, note } = body;

  if (!name || !phone || !from || !to || !type) {
    return NextResponse.json(
      { error: "Zorunlu alanlar eksik." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `${site.name} <${fromEmail}>`,
    to: site.email,
    subject: `${site.name} - Yeni Teklif Talebi`,
    text: [
      "Yeni Teklif Talebi",
      "",
      `Ad: ${name}`,
      `Telefon: ${phone}`,
      `Nereden: ${from}`,
      `Nereye: ${to}`,
      `Hizmet: ${type}`,
      date ? `Tarih: ${date}` : null,
      note ? `Not: ${note}` : null,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "E-posta gönderilemedi. Lütfen tekrar deneyin." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
