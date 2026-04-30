import { NextRequest, NextResponse } from "next/server";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { namaPerusahaan, email, pesan } = body;

    // Validate required fields
    if (!namaPerusahaan || !email || !pesan) {
      return NextResponse.json(
        { error: "Semua field wajib diisi: nama perusahaan, email, dan pesan." },
        { status: 400 }
      );
    }

    // Validate namaPerusahaan
    if (typeof namaPerusahaan !== "string" || namaPerusahaan.trim().length < 2) {
      return NextResponse.json(
        { error: "Nama perusahaan minimal 2 karakter." },
        { status: 400 }
      );
    }

    // Validate email format
    if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { error: "Format email tidak valid." },
        { status: 400 }
      );
    }

    // Validate pesan
    if (typeof pesan !== "string" || pesan.trim().length < 10) {
      return NextResponse.json(
        { error: "Pesan minimal 10 karakter." },
        { status: 400 }
      );
    }

    // In a real application, you would save this to a database
    // or send it to an email service here.
    console.log("[Kemitraan] New partnership submission:", {
      namaPerusahaan: namaPerusahaan.trim(),
      email: email.trim(),
      pesan: pesan.trim(),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Proposal kemitraan berhasil dikirim! Tim kami akan menghubungi Anda dalam 1-2 hari kerja.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Terjadi kesalahan server. Silakan coba lagi nanti." },
      { status: 500 }
    );
  }
}
