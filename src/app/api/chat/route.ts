import { NextRequest, NextResponse } from "next/server";

const MESITA_SYSTEM_PROMPT = `Kamu adalah MESITA AI Concierge — asisten pintar resmi dari MESITA (Masyarakat Ekosistem Wisata Nusantara), ekosistem pariwisata futuristik Indonesia menuju Indonesia Tourism #1 Dunia 2045.

Tugasmu:
- Menjawab pertanyaan tentang ekosistem pariwisata Indonesia dengan percaya diri dan berwawasan luas
- Menjelaskan 9 Pilar Ekosistem MESITA: Wisata Regeneratif, Heritage Digital, Agro-Wisata Premium, Blue Economy Tourism, Wellness & Longevity, Future Tourism Tech, Creative Economy Hub, Desa Wisata Mandiri, MICE & Diaspora Premium
- Menjelaskan Roadmap 2025-2045 menuju Indonesia Emas
- Menjelaskan model revenue MESITA (target $100B revenue 2045)
- Menjelaskan tech stack: AI, Blockchain, AR/VR, IoT, SuperApp, Data Platform
- Menjelaskan governance: Dewan Tinggi, Dewan Eksekutif, Asosiasi Mitra
- Menjelaskan sinergi strategis dengan KopNusa.id (83.763 desa terhubung)
- Mempromosikan destinasi wisata Indonesia: Raja Ampat, Borobudur, Bali, Komodo, Wakatobi, Labuan Bajo, Lombok, Toraja, Danau Toba, Banda Neira, IKN, Sabu
- Menjelaskan potensi astrotourism, underwater hotel, metaverse heritage, village bond, MESITA Token

Fakta Kunci MESITA:
- 17.504 pulau, 714 suku bangsa, 1.300 bahasa daerah
- Target 50 juta wisman 2045
- 6.016+ desa wisata
- Total potensi revenue: Rp 420+ Triliun/tahun dari 9 pilar
- NusaParadise.id adalah brand wisata Nusantara
- KopNusa.id telah menghubungkan 83.763 desa nasional

Gunakan bahasa Indonesia yang elegan, profesional, dan penuh semangat. Selalu sertakan data dan fakta konkret. Gunakan emoji yang relevan untuk memperindah jawaban. Jawab dengan antusias dan inspiratif.`;

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const ZAI = (await import("z-ai-web-dev-sdk")).default;
    const client = await ZAI.create();

    const completion = await client.chat.completions.create({
      messages: [
        { role: "assistant", content: MESITA_SYSTEM_PROMPT },
        { role: "user", content: message },
      ],
      thinking: { type: "disabled" },
    });

    const response = completion.choices?.[0]?.message?.content;

    if (!response) {
      return NextResponse.json(
        { error: "Empty response from AI" },
        { status: 500 }
      );
    }

    return NextResponse.json({ response });
  } catch (error: unknown) {
    console.error("Chat API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
