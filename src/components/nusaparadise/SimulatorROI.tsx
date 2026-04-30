"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Clock, DollarSign, BarChart3, ArrowUpRight, Info } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { KlusterDestinasi, ProyeksiArusKas } from "@/types/nusaparadise";

const KLUSTER_DESTINASI: KlusterDestinasi[] = [
  { id: "raja-ampat", nama: "Raja Ampat", deskripsi: "Biodiversitas laut #1 planet — 1.500+ spesies ikan, 600+ spesies karang", proyeksiIRR: 16.5, paybackPeriod: 5.2, faktorPertumbuhan: 1.25, biayaAwalPerUnit: 2.8 },
  { id: "borobudur", nama: "Borobudur", deskripsi: "Candi Buddha terbesar di dunia — magnet spiritual & budaya global", proyeksiIRR: 14.2, paybackPeriod: 5.8, faktorPertumbuhan: 1.18, biayaAwalPerUnit: 2.2 },
  { id: "mandalika", nama: "Mandalika", deskripsi: "Special Economic Zone wisata premium — Lombok, Nusa Tenggara Barat", proyeksiIRR: 15.8, paybackPeriod: 4.9, faktorPertumbuhan: 1.22, biayaAwalPerUnit: 3.1 },
];

function hitungProyeksi(nominalInvestasi: number, kluster: KlusterDestinasi) {
  const faktorSkala = nominalInvestasi / 100;
  const tahun = 10;
  const dataGrafik: ProyeksiArusKas[] = [];
  let kumulatif = -nominalInvestasi;
  let totalMasuk = 0;

  for (let t = 1; t <= tahun; t++) {
    const pertumbuhan = Math.pow(kluster.faktorPertumbuhan, t);
    const arusMasuk = nominalInvestasi * 0.12 * pertumbuhan * faktorSkala;
    const arusKeluar = t <= 2 ? nominalInvestasi * 0.03 * (1 - t * 0.3) : nominalInvestasi * 0.02 * faktorSkala;
    const bersih = arusMasuk - arusKeluar;
    kumulatif += bersih;
    totalMasuk += arusMasuk;
    dataGrafik.push({ tahun: t, label: `Tahun ${t}`, arusKasMasuk: Math.round(arusMasuk), arusKasKeluar: Math.round(arusKeluar), arusKasBersih: Math.round(bersih), kumulatifBersih: Math.round(kumulatif) });
  }

  return {
    proyeksiIRR: kluster.proyeksiIRR * (1 + (nominalInvestasi - 100) * 0.001),
    paybackPeriod: kluster.paybackPeriod,
    totalPengembalian: Math.round(totalMasuk),
    profitBersih: Math.round(kumulatif + nominalInvestasi),
    dataGrafik,
  };
}

function formatUSD(nilai: number): string {
  if (nilai >= 1_000_000_000) return `$${(nilai / 1_000_000_000).toFixed(2)}B`;
  if (nilai >= 1_000_000) return `$${(nilai / 1_000_000).toFixed(1)}M`;
  if (nilai >= 1_000) return `$${(nilai / 1_000).toFixed(1)}K`;
  return `$${nilai.toFixed(0)}`;
}

export default function SimulatorROI() {
  const [nominalInvestasi, setNominalInvestasi] = useState<number>(100);
  const [klusterId, setKlusterId] = useState<string>("raja-ampat");
  const kluster = KLUSTER_DESTINASI.find((k) => k.id === klusterId) ?? KLUSTER_DESTINASI[0];
  const proyeksi = useMemo(() => hitungProyeksi(nominalInvestasi, kluster), [nominalInvestasi, kluster]);

  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-50/60 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mb-10 sm:mb-14">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-blue-100 border border-blue-200 flex items-center justify-center">
              <TrendingUp className="size-4 text-blue-600" />
            </div>
            <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest">NusaInvest — Simulator ROI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-3">Simulasi Pengembalian Investasi</h2>
          <p className="text-sm sm:text-base text-slate-500 max-w-2xl">
            Geser slider dan pilih kluster destinasi untuk melihat proyeksi arus kas, IRR, dan periode pengembalian investasi Anda dalam 10 tahun.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <Card className="bg-white border-blue-100 overflow-hidden gold-border-animate shadow-lg">
            <CardHeader className="pb-4">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
                <div className="flex-1 max-w-xl space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs text-slate-500 uppercase tracking-wider font-medium">Nominal Investasi</label>
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-blue-600 tabular-nums">${nominalInvestasi} Jt</span>
                    </div>
                    <Slider value={[nominalInvestasi]} onValueChange={(v) => setNominalInvestasi(v[0])} min={1} max={500} step={1} className="w-full [&_[data-slot=slider-range]]:bg-blue-500 [&_[data-slot=slider-thumb]]:bg-blue-500 [&_[data-slot=slider-thumb]]:border-blue-500 [&_[data-slot=slider-track]]:bg-slate-200" />
                    <div className="flex justify-between mt-1.5">
                      <span className="text-[10px] text-slate-400 font-mono">$1 Jt</span>
                      <span className="text-[10px] text-slate-400 font-mono">$500 Jt</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <label className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-2 block">Kluster Destinasi</label>
                      <Select value={klusterId} onValueChange={setKlusterId}>
                        <SelectTrigger className="w-full bg-slate-50 border-slate-200 text-slate-800 h-11">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-slate-200">
                          {KLUSTER_DESTINASI.map((k) => (
                            <SelectItem key={k.id} value={k.id} className="text-slate-800 focus:bg-blue-50 focus:text-blue-600">
                              <div className="flex flex-col items-start">
                                <span className="font-medium">{k.nama}</span>
                                <span className="text-[10px] text-slate-400">IRR {k.proyeksiIRR}% • Payback {k.paybackPeriod} thn</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <label className="text-xs text-slate-500 uppercase tracking-wider font-medium mb-2 block">Tentang Kluster</label>
                      <div className="flex items-start gap-2 h-11 px-3 rounded-md bg-slate-50 border border-slate-200">
                        <Info className="size-4 text-blue-500 mt-0.5 shrink-0" />
                        <span className="text-xs text-slate-500 leading-relaxed">{kluster.deskripsi}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                  <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <TrendingUp className="size-3.5 text-emerald-600" />
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider">Proyeksi IRR</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-emerald-600 tabular-nums">{proyeksi.proyeksiIRR.toFixed(1)}%</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center border border-blue-100">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <Clock className="size-3.5 text-blue-600" />
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider">Payback</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-blue-600 tabular-nums">{proyeksi.paybackPeriod} thn</div>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-4 text-center col-span-2 lg:col-span-1 border border-blue-100">
                    <div className="flex items-center justify-center gap-1.5 mb-2">
                      <DollarSign className="size-3.5 text-blue-600" />
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider">Profit Bersih</span>
                    </div>
                    <div className="font-mono text-2xl font-bold text-blue-600 tabular-nums">{formatUSD(proyeksi.profitBersih)}</div>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="relative">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 className="size-4 text-blue-500" />
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Proyeksi Arus Kas 10 Tahun</span>
                </div>

                <div className="w-full h-[320px] sm:h-[400px] bg-slate-50/50 rounded-xl p-2">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={proyeksi.dataGrafik}>
                      <defs>
                        <linearGradient id="gradientBersih" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563EB" stopOpacity={0.2} />
                          <stop offset="95%" stopColor="#2563EB" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="gradientKumulatif" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" vertical={false} />
                      <XAxis dataKey="label" stroke="#94A3B8" tick={{ fontSize: 11, fill: "#64748B" }} axisLine={{ stroke: "#E2E8F0" }} tickLine={false} />
                      <YAxis stroke="#94A3B8" tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} tickFormatter={(v: number) => formatUSD(v)} width={80} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "#FFFFFF", border: "1px solid #E2E8F0", borderRadius: "12px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", fontSize: "12px", color: "#0F172A" }}
                        formatter={(value: number, name: string) => {
                          const labels: Record<string, string> = { arusKasBersih: "Arus Kas Bersih", kumulatifBersih: "Kumulatif Bersih" };
                          return [formatUSD(value), labels[name] || name];
                        }}
                      />
                      <Area type="monotone" dataKey="arusKasBersih" stroke="#2563EB" strokeWidth={2.5} fill="url(#gradientBersih)" dot={false} activeDot={{ r: 5, fill: "#2563EB", stroke: "#FFFFFF", strokeWidth: 2 }} />
                      <Area type="monotone" dataKey="kumulatifBersih" stroke="#10B981" strokeWidth={2} fill="url(#gradientKumulatif)" strokeDasharray="5 5" dot={false} activeDot={{ r: 4, fill: "#10B981", stroke: "#FFFFFF", strokeWidth: 2 }} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-blue-500 rounded-full" />
                    <span className="text-xs text-slate-500">Arus Kas Bersih / Tahun</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-0.5 bg-emerald-500 rounded-full" />
                    <span className="text-xs text-slate-500">Kumulatif Bersih</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-6 pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <DollarSign className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Total Investasi</p>
                    <p className="font-mono text-lg font-bold text-slate-800 tabular-nums">${nominalInvestasi} Jt</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="size-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Total Pengembalian</p>
                    <p className="font-mono text-lg font-bold text-slate-800 tabular-nums">{formatUSD(proyeksi.totalPengembalian)}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center shrink-0">
                    <TrendingUp className="size-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider">Rasio Profit</p>
                    <p className="font-mono text-lg font-bold text-emerald-600 tabular-nums">{((proyeksi.profitBersih / (nominalInvestasi * 1_000_000)) * 100).toFixed(1)}%</p>
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
