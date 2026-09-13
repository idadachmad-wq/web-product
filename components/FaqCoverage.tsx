"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";

const faqs = [
  {
    q: `Bagaimana cara berlangganan layanan ${site.name}?`,
    a: `Hubungi admin WhatsApp ${site.name} di ${site.whatsappDisplay}, pilih paket yang diinginkan, lalu kami bantu proses pendaftaran dan jadwal instalasi.`,
  },
  {
    q: "Daerah mana saja yang sudah ter-cover?",
    a: `Saat ini jaringan ${site.name} mencakup ${site.coverageVillages.join(" & ")}, termasuk ${site.coverageAreas.join(", ")}.`,
  },
  {
    q: "Apakah ada batasan kuota (FUP)?",
    a: "Tidak. Paket bulanan SaGa-Net bersifat unlimited tanpa batasan kuota, dengan harga flat setiap bulan.",
  },
  {
    q: `Paket apa saja yang ditawarkan ${site.name}?`,
    a: "Tersedia paket bulanan SAGA HEMAT hingga SAGA ULTRA (15–100 Mbps), paket voucher fleksibel, serta biaya instalasi promo Rp150.000.",
  },
  {
    q: "Kemana saya harus lapor saat ada gangguan internet?",
    a: `Laporkan gangguan ke admin WhatsApp ${site.name} di ${site.whatsappDisplay}. Jam operasional CS: ${site.csHours}. Di luar jam kerja, pesan tetap bisa dikirim dan dibalas pada jam operasional berikutnya.`,
  },
  {
    q: "Di mana alamat kantor SaGa-Net?",
    a: `${site.officeLabel}: ${site.address}. Anda juga bisa membuka peta di halaman Bantuan.`,
  },
] as const;

export function FaqCoverage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16">
        {/* FAQ */}
        <div className="animate-fade-up">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            FAQ
          </h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {faqs.map((item, index) => {
              const open = openIndex === index;
              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : index)}
                    className="flex w-full items-start gap-3 py-4 text-left transition-colors hover:text-accent-deep"
                    aria-expanded={open}
                  >
                    <span className="mt-0.5 text-lg font-semibold text-foreground">
                      {open ? "−" : "+"}
                    </span>
                    <span className="text-sm font-medium leading-snug text-foreground sm:text-base">
                      {item.q}
                    </span>
                  </button>
                  {open ? (
                    <p className="animate-fade-in pb-4 pl-8 text-sm leading-relaxed text-muted">
                      {item.a}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        {/* Coverage Area */}
        <div className="animate-fade-up delay-2">
          <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Coverage Area
          </h2>

          <div className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-[#e8f7ef] via-[#f4faf6] to-[#d8f0e4] p-6 ring-1 ring-accent/15 sm:p-8">
            <div
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle, rgba(0,120,70,0.18) 1px, transparent 1.5px)",
                backgroundSize: "18px 18px",
              }}
            />

            {/* Stylized map pins */}
            <div className="relative mx-auto mb-6 flex h-36 max-w-sm items-center justify-center">
              <div className="absolute inset-6 rounded-full border border-dashed border-accent/25" />
              <span className="absolute left-[18%] top-[28%] h-4 w-4 rounded-full bg-accent shadow-[0_0_12px_rgba(0,168,107,0.6)]" />
              <span className="absolute right-[22%] top-[22%] h-3.5 w-3.5 rounded-full bg-lime-500 shadow-[0_0_12px_rgba(132,204,22,0.55)]" />
              <span className="absolute left-[40%] top-[58%] h-4 w-4 rounded-full bg-emerald-600 shadow-[0_0_12px_rgba(5,150,105,0.55)]" />
              <span className="absolute right-[30%] top-[52%] h-3 w-3 rounded-full bg-[#ff6a1a] shadow-[0_0_12px_rgba(255,106,26,0.45)]" />
              <span className="absolute left-[55%] top-[30%] h-3.5 w-3.5 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.5)]" />
              <p className="relative z-10 text-center text-xs font-semibold uppercase tracking-[0.16em] text-accent-deep">
                {site.coverageVillages.join(" · ")}
              </p>
            </div>

            <p className="relative text-sm font-semibold text-foreground">
              Daerah yang sudah tercover
            </p>
            <p className="relative mt-1 text-xs text-muted">
              {site.coverageVillages.join(" & ")}
            </p>

            <ul className="relative mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {site.coverageAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-2 rounded-lg bg-white/75 px-3 py-2 text-sm text-foreground ring-1 ring-accent/10"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {area}
                </li>
              ))}
            </ul>

            <div className="relative mt-6 rounded-2xl bg-white/80 p-4 ring-1 ring-accent/10">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-accent-deep">
                {site.officeLabel}
              </p>
              <p className="mt-1 text-sm font-medium leading-relaxed text-foreground">
                {site.address}
              </p>
              <p className="mt-2 text-xs text-muted">Jam CS: {site.csHours}</p>
            </div>

            <div className="relative mt-4">
              <WhatsAppButton
                label="Cek Coverage Area Anda"
                className="w-full rounded-full bg-accent text-white shadow-[0_10px_24px_rgba(0,168,107,0.35)]"
                message={`Halo ${site.name}! Saya ingin cek apakah lokasi saya sudah tercover jaringan SaGa-Net.`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
