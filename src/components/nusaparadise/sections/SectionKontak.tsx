"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Headphones, Briefcase, Phone, Mail, MapPin, MessageSquare, Globe, Bot, ArrowRight, Clock, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useNavigation } from "@/stores/navigation";

// ============================================================
// Partnership Types
// ============================================================
const PARTNERSHIP_TYPES = [
  { label: "Joint Venture Destinasi", desc: "Kemitraan pengembangan destinasi wisata baru" },
  { label: "Sponsorship Event", desc: "Sponsorship festival, event, dan pameran pariwisata" },
  { label: "Travel Agent Partnership", desc: "Kerjasama distribusi paket wisata global" },
  { label: "Corporate Social Responsibility", desc: "Program CSR pariwisata berkelanjutan" },
  { label: "Technology Partnership", desc: "Integrasi teknologi AI, VR, dan digital twin" },
  { label: "Media & Content Partnership", desc: "Kolaborasi konten, dokumenter, dan publikasi" },
];

// ============================================================
// Section 7: Markas Komando (Kontak)
// ============================================================
export default function SectionKontak() {
  const { openModal } = useNavigation();
  const { toast } = useToast();
  const [namaPerusahaan, setNamaPerusahaan] = useState("");
  const [email, setEmail] = useState("");
  const [pesan, setPesan] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/kemitraan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ namaPerusahaan, email, pesan }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Terjadi kesalahan. Silakan coba lagi.");
        return;
      }

      toast({
        title: "Proposal Terkirim!",
        description: "Terima kasih! Kami akan segera menghubungi Anda.",
        variant: "default",
      });

      setNamaPerusahaan("");
      setEmail("");
      setPesan("");
    } catch {
      setErrorMessage("Gagal mengirim proposal. Periksa koneksi internet Anda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="kontak" className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
              <Headphones className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">Markas Komando</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Markas Komando (Kontak)</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">
            Kesiapan layanan 24/7 — bukan sekadar hubungi kami, tapi markas komando yang siap melayani setiap wisatawan.
          </p>
        </motion.div>

        {/* Hero Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 p-8 sm:p-10">
            {/* Decorative */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-400/10 rounded-full blur-[60px]" />
            </div>

            <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                  <Headphones className="size-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">Pusat Bantuan 24/7</h3>
                  <p className="text-sm text-blue-100/80">Kami selalu siap membantu Anda — kapan pun, di mana pun.</p>
                </div>
              </div>
              <Badge className="bg-white/15 text-white border-white/25 hover:bg-white/20 text-xs px-4 py-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2 animate-pulse" />
                Layanan Aktif 24/7
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* 2 Main Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 mb-10">
          {/* Card 1: Pusat Bantuan Wisatawan 24/7 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 shrink-0">
                    <Headphones className="size-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-slate-900">Pusat Bantuan Wisatawan 24/7</h3>
                      <Badge className="text-[9px] bg-emerald-50 text-emerald-600 border-emerald-100">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1 animate-pulse" />
                        24/7
                      </Badge>
                    </div>
                    <p className="text-sm text-slate-500">Dukungan tanpa henti untuk setiap wisatawan di seluruh Indonesia.</p>
                  </div>
                </div>

                {/* Contact Channels */}
                <div className="space-y-3 mb-5">
                  {/* Emergency Hotline */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-red-50 border border-red-100">
                    <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                      <Phone className="size-5 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-red-700">Hotline Darurat</p>
                      <p className="font-mono text-base font-bold text-red-800 tabular-nums">+62 21 500 045</p>
                    </div>
                    <Badge className="bg-red-100 text-red-600 border-red-200 text-[9px] shrink-0">Darurat</Badge>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                      <Phone className="size-5 text-emerald-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-emerald-700">WhatsApp</p>
                      <p className="font-mono text-sm font-semibold text-emerald-800 tabular-nums">+62 812 3456 7890</p>
                    </div>
                  </div>

                  {/* AI Chatbot */}
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                      <Bot className="size-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-blue-700">AI Chatbot NusaParadise</p>
                      <p className="text-[11px] text-blue-600">Asisten AI dalam 20+ bahasa — respons instan 24/7</p>
                    </div>
                    <MessageSquare className="size-5 text-blue-400 shrink-0" />
                  </div>
                </div>

                {/* Multi-language Support */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Dukungan Bahasa</p>
                  <div className="flex flex-wrap gap-1.5">
                    {["ID", "EN", "JP", "KR", "ZH", "AR", "FR", "DE", "ES", "PT", "RU", "TH", "HI", "MS", "NL", "IT", "TR"].map((lang) => (
                      <span key={lang} className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 text-[10px] font-mono font-semibold text-slate-600">
                        {lang}
                      </span>
                    ))}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-[10px] font-semibold text-blue-600">
                      +8
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card 2: Kemitraan & Kolaborasi Bisnis */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Card className="bg-white border-blue-100 hover:shadow-lg hover:shadow-blue-50 hover:border-blue-200 transition-all duration-300 h-full">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center text-white shadow-lg shadow-amber-500/20 shrink-0">
                    <Briefcase className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">Kemitraan & Kolaborasi Bisnis</h3>
                    <p className="text-sm text-slate-500">Partnership opportunity, joint venture, sponsorship.</p>
                  </div>
                </div>

                {/* Partnership Types */}
                <div className="space-y-2 mb-5">
                  {PARTNERSHIP_TYPES.map((partner) => (
                    <div key={partner.label} className="group flex items-center gap-3 p-2.5 rounded-lg border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-200 cursor-pointer" onClick={() => openModal("kemitraan")}>
                      <div className="w-8 h-8 rounded-lg bg-slate-50 group-hover:bg-blue-100 flex items-center justify-center shrink-0 transition-colors">
                        <Briefcase className="size-3.5 text-slate-400 group-hover:text-blue-500 transition-colors" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-semibold text-slate-800 group-hover:text-blue-700 transition-colors">{partner.label}</p>
                        <p className="text-[10px] text-slate-500">{partner.desc}</p>
                      </div>
                      <ArrowRight className="size-3 text-slate-300 group-hover:text-blue-400 shrink-0 transition-colors" />
                    </div>
                  ))}
                </div>

                {/* Partnership Form */}
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                  <p className="text-xs font-bold text-slate-700 mb-3">Ajukan Kemitraan</p>
                  <form onSubmit={handleSubmit} className="space-y-2.5">
                    <Input
                      placeholder="Nama Perusahaan"
                      className="h-9 text-xs bg-white border-slate-200"
                      value={namaPerusahaan}
                      onChange={(e) => setNamaPerusahaan(e.target.value)}
                      required
                    />
                    <Input
                      placeholder="Email Bisnis"
                      type="email"
                      className="h-9 text-xs bg-white border-slate-200"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Textarea
                      placeholder="Ceritakan tentang kemitraan yang diinginkan..."
                      className="text-xs bg-white border-slate-200 resize-none min-h-[60px]"
                      value={pesan}
                      onChange={(e) => setPesan(e.target.value)}
                      required
                    />
                    {errorMessage && (
                      <p className="text-[11px] text-red-600 font-medium">{errorMessage}</p>
                    )}
                    <Button
                      type="submit"
                      disabled={loading}
                      className="w-full h-9 text-xs font-semibold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white disabled:opacity-60"
                    >
                      {loading ? (
                        <span className="flex items-center gap-2">
                          <Loader2 className="size-3.5 animate-spin" />
                          Mengirim...
                        </span>
                      ) : (
                        "Kirim Proposal Kemitraan"
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Contact Info Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="bg-white border-blue-100 shadow-sm">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
                {/* WhatsApp */}
                <div className="flex items-center gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shrink-0">
                    <Phone className="size-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">WhatsApp</p>
                    <p className="text-sm font-semibold text-slate-800 tabular-nums">+62 812 3456 7890</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <Mail className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Email</p>
                    <p className="text-sm font-semibold text-slate-800">info@nusaparadise.id</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-4 p-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Alamat</p>
                    <p className="text-sm font-semibold text-slate-800">Jl. Jenderal Sudirman Kav. 52-53, Jakarta Pusat 12190</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
