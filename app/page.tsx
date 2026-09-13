import Link from "next/link";
import { BlogCard } from "@/components/BlogCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import { FaqCoverage } from "@/components/FaqCoverage";
import { Hero } from "@/components/Hero";
import {
  InstallGallery,
  Testimonials,
} from "@/components/SiteExtras";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { getLatestPosts } from "@/lib/blog";
import { getProduct } from "@/lib/products";
import { site } from "@/lib/site";

export default function Home() {
  const instalasi = getProduct("biaya-instalasi");
  const latestPosts = getLatestPosts(3);

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-xl animate-fade-up">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
            {site.promo}
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Jelajahi layanan kami
          </h2>
          <p className="mt-3 text-muted">
            Lihat paket, voucher, dan instalasi di halaman produk.
          </p>
        </div>
        <CategoryGrid />
        <div className="mt-8">
          <Link
            href="/produk"
            className="inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(0,168,107,0.3)] transition-opacity hover:opacity-90"
          >
            Lihat Semua Produk →
          </Link>
        </div>
      </section>

      {instalasi ? (
        <section className="brand-atmosphere-deep">
          <div className="brand-bar" />
          <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-14 sm:px-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-3 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lime-200/90">
                Instalasi Promo
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {instalasi.name} tinggal pakai
              </h2>
              <p className="text-white/85">
                <span className="mr-2 line-through opacity-60">Rp200.000</span>
                <span className="text-2xl font-bold text-lime-200">
                  Rp150.000
                </span>
              </p>
              <p className="text-sm text-white/65">
                Termasuk pemasangan &amp; setting — internet siap dipakai.
              </p>
            </div>
            <Link
              href={`/produk/${instalasi.slug}`}
              className="inline-flex rounded-full bg-[#ff6a1a] px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(255,106,26,0.4)] transition-transform hover:scale-[1.03]"
            >
              Dapatkan Sekarang →
            </Link>
          </div>
        </section>
      ) : null}

      <InstallGallery />

      <section className="brand-atmosphere">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mb-10 max-w-xl animate-fade-up">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
              Keuntungan Langganan
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Mengapa pilih {site.name}?
            </h2>
            <p className="mt-3 text-muted">{site.origin}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {site.benefits.map((benefit) => (
              <div
                key={benefit}
                className="rounded-xl border border-accent/15 bg-white/80 px-4 py-3 text-sm text-foreground shadow-sm backdrop-blur"
              >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="border-y border-border bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="mb-10 text-center animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
              Blog
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Artikel Terbaru
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted">
              Tips WiFi, adab, sosial, dan tip keluarga.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {latestPosts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="inline-flex rounded-full border border-accent/25 bg-white px-6 py-3 text-sm font-bold text-accent-deep transition-colors hover:bg-green-soft/40"
            >
              Lihat Semua Artikel →
            </Link>
          </div>
        </div>
      </section>

      <FaqCoverage />

      <section className="brand-atmosphere-deep">
        <div className="brand-bar" />
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl space-y-3 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime-200/90">
              {site.slogan}
            </p>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Buruan daftar sekarang juga
            </h2>
            <p className="text-white/75">
              Admin {site.name}: {site.whatsappDisplay}
            </p>
            <p className="text-sm text-white/60">Jam CS: {site.csHours}</p>
          </div>
          <WhatsAppButton
            label="Chat WhatsApp Sekarang"
            className="rounded-full bg-[#ff6a1a] text-white shadow-[0_12px_30px_rgba(255,106,26,0.4)] hover:opacity-95"
          />
        </div>
      </section>
    </>
  );
}
