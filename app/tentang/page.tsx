import type { Metadata } from "next";
import Image from "next/image";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Tentang",
  description: site.description,
};

export default function TentangPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="animate-fade-up space-y-6">
        <Image
          src={site.logo}
          alt={`${site.name} logo`}
          width={96}
          height={86}
          className="h-20 w-auto drop-shadow-[0_0_18px_rgba(0,232,160,0.35)] sm:h-24"
          priority
        />
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
          Tentang {site.name}
        </p>
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          {site.slogan}
        </h1>
        <p className="text-sm font-medium text-accent-deep">
          Powered by {site.poweredBy} · {site.promo}
        </p>
        <p className="text-lg leading-relaxed text-muted">{site.origin}</p>
        <p className="leading-relaxed text-muted">{site.description}</p>
        <p className="leading-relaxed text-muted">
          Tersedia paket bulanan dari SAGA HEMAT hingga SAGA ULTRA, paket
          voucher fleksibel, serta biaya instalasi promo Rp150.000 (dari
          Rp200.000).
        </p>
        <p className="leading-relaxed text-muted">
          Pendaftaran via WhatsApp Admin {site.name}: {site.whatsappDisplay}.
        </p>
        <p className="leading-relaxed text-muted">
          <span className="font-semibold text-foreground">
            {site.officeLabel}:
          </span>{" "}
          {site.address}
        </p>
        <p className="leading-relaxed text-muted">
          <span className="font-semibold text-foreground">Jam CS:</span>{" "}
          {site.csHours}
        </p>
      </div>

      <div className="mt-12">
        <h2 className="font-display text-3xl font-bold tracking-tight">
          Keuntungan langganan
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {site.benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-xl border border-accent/15 bg-gradient-to-br from-white to-green-soft/40 px-4 py-3 text-sm"
            >
              {benefit}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14 animate-fade-up delay-3">
        <WhatsAppButton
          label="Hubungi Admin SaGa-Net"
          className="rounded-full bg-[#25D366]"
        />
      </div>
    </div>
  );
}
