import type { Metadata } from "next";
import { OfficeMap } from "@/components/SiteExtras";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, generalInquiryMessage } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Bantuan & Kontak",
  description: `Hubungi admin ${site.name}: WhatsApp, email, jam operasional, dan alamat kantor.`,
};

export default function BantuanPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-10 max-w-2xl animate-fade-up">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
          Bantuan
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Hubungi Admin {site.name}
        </h1>
        <p className="mt-3 text-muted">
          Untuk daftar, cek coverage, gangguan jaringan, atau pertanyaan paket —
          silakan hubungi kami melalui kanal di bawah.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-4 rounded-3xl border border-accent/15 bg-white p-6 shadow-sm sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
              WhatsApp
            </p>
            <a
              href={buildWhatsAppUrl(generalInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-xl font-bold text-foreground hover:text-accent-deep"
            >
              {site.whatsappDisplay}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-1 block text-lg font-semibold text-foreground hover:text-accent-deep"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
              Instagram
            </p>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 block text-lg font-semibold text-foreground hover:text-accent-deep"
            >
              {site.instagram}
            </a>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
              Jam Operasional CS
            </p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {site.csHours}
            </p>
            <p className="mt-1 text-sm text-muted">{site.csHoursNote}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-deep">
              {site.officeLabel}
            </p>
            <p className="mt-1 text-base font-medium leading-relaxed text-foreground">
              {site.address}
            </p>
            <a
              href={site.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block text-sm font-semibold text-accent-deep hover:underline"
            >
              Buka di Google Maps →
            </a>
          </div>
          <WhatsAppButton
            label="Chat WhatsApp Sekarang"
            className="mt-2 w-full rounded-full bg-[#25D366] sm:w-auto"
          />
        </div>

        <div className="space-y-4">
          <OfficeMap />
          <div className="rounded-2xl bg-gradient-to-br from-[#043522] via-[#0a6b45] to-[#12a06a] p-6 text-white">
            <p className="text-hologram text-sm font-bold">{site.name}</p>
            <p className="mt-2 font-display text-2xl font-bold tracking-tight">
              Butuh bantuan cepat?
            </p>
            <p className="mt-2 text-sm text-white/75">
              Sebutkan nama, alamat kampung, dan keluhan/paket yang diinginkan
              agar admin lebih cepat membantu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
