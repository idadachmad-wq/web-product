import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { buildWhatsAppUrl, generalInquiryMessage } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="brand-atmosphere-deep mt-auto text-white">
      <div className="brand-bar" />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Image
              src={site.logo}
              alt={`${site.name} logo`}
              width={48}
              height={43}
              className="h-11 w-auto drop-shadow-[0_0_16px_rgba(0,255,180,0.45)]"
            />
            <div>
              <p className="text-hologram font-display text-xl font-bold tracking-tight sm:text-2xl">
                {site.name}
              </p>
              <p className="text-xs text-lime-200/90">{site.slogan}</p>
            </div>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white/70">
            {site.tagline}
          </p>
          <p className="text-xs uppercase tracking-wider text-lime-300/80">
            Powered by {site.poweredBy}
          </p>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold tracking-wide text-lime-100">Jelajahi</p>
          <div className="flex flex-col gap-2 text-white/70">
            <Link href="/produk" className="hover:text-lime-200">
              Semua Produk
            </Link>
            <Link href="/blog" className="hover:text-lime-200">
              Blog
            </Link>
            <Link href="/bantuan" className="hover:text-lime-200">
              Bantuan & Kontak
            </Link>
            <Link href="/tentang" className="hover:text-lime-200">
              Tentang Kami
            </Link>
            <Link href="/syarat-ketentuan" className="hover:text-lime-200">
              Syarat & Ketentuan
            </Link>
            <a
              href={buildWhatsAppUrl(generalInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-200"
            >
              Hubungi WhatsApp
            </a>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          <p className="font-semibold tracking-wide text-lime-100">Kontak</p>
          <div className="flex flex-col gap-2 text-white/70">
            <a
              href={buildWhatsAppUrl(generalInquiryMessage())}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-200"
            >
              {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="hover:text-lime-200">
              {site.email}
            </a>
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-lime-200"
            >
              {site.instagram}
            </a>
            <p>
              <span className="font-semibold text-lime-200/90">Jam CS:</span>{" "}
              {site.csHours}
            </p>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-lime-200/80">
                {site.officeLabel}
              </p>
              <p className="mt-1 leading-relaxed">{site.address}</p>
              <a
                href={site.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-block text-lime-200 hover:underline"
              >
                Lihat peta →
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/50 sm:px-8">
        © {new Date().getFullYear()} {site.name}. Semua hak dilindungi.
      </div>
    </footer>
  );
}
