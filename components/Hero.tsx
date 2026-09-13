import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { WhatsAppButton } from "./WhatsAppButton";
import { formatPrice } from "@/lib/products";

const featuredPackage = {
  label: "Paket Hemat",
  name: "SAGA HEMAT",
  speed: "15 Mbps",
  description:
    "Internet fiber unlimited — hemat dan stabil untuk kebutuhan online sehari-hari.",
  price: 100000,
  href: "/produk/saga-hemat",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      {/* Atmospheric green stage */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#e8f7ef] via-[#f3faf6] to-[#d8f0e4]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 70% 55% at 85% 40%, rgba(0, 200, 120, 0.22), transparent 60%),
            radial-gradient(ellipse 50% 45% at 10% 80%, rgba(16, 185, 129, 0.14), transparent 55%),
            linear-gradient(rgba(0,120,70,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,120,70,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "auto, auto, 32px 32px, 32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 animate-glow-breathe rounded-full bg-accent/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 animate-glow-breathe rounded-full bg-lime-300/30 blur-3xl" />

      <div className="relative mx-auto grid min-h-[86vh] max-w-6xl items-center gap-10 px-5 py-14 sm:px-8 lg:grid-cols-2 lg:gap-14 lg:py-16">
        <div className="animate-fade-up z-10 max-w-xl">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src={site.logo}
              alt=""
              width={52}
              height={47}
              className="h-12 w-auto drop-shadow-[0_0_18px_rgba(0,232,160,0.45)] sm:h-14"
              priority
            />
            <div>
              <p className="text-hologram font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {site.name}
              </p>
              <p className="text-[11px] font-medium leading-snug text-accent-deep">
                {site.slogan}
              </p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted">
                Powered by {site.poweredBy}
              </p>
            </div>
          </div>

          <p className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-deep shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 animate-led-blink rounded-full bg-accent" />
            {site.promo}
          </p>

          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-[3.4rem]">
            {featuredPackage.name}
            <span className="mt-1 block bg-gradient-to-r from-accent-deep via-accent to-lime-500 bg-clip-text text-transparent">
              {featuredPackage.speed}
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            {featuredPackage.description}
          </p>

          <p className="mt-7 text-base text-muted sm:text-lg">
            Hanya{" "}
            <span className="bg-gradient-to-r from-accent-deep to-accent bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl">
              {formatPrice(featuredPackage.price).replace(/\s/g, "\u00a0")}
            </span>{" "}
            <span className="text-muted">/bulan</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={featuredPackage.href}
              className="inline-flex items-center rounded-full bg-[#ff6a1a] px-7 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_12px_30px_rgba(255,106,26,0.4)] transition-transform hover:scale-[1.03]"
            >
              Dapatkan Sekarang →
            </Link>
            <WhatsAppButton
              variant="secondary"
              label="Chat WhatsApp"
              className="rounded-full border-accent/25 bg-white/80 text-foreground backdrop-blur hover:bg-white"
            />
          </div>

          <p className="mt-5 text-xs text-muted">
            Instalasi promo {formatPrice(150000)} · Gratis sewa modem/router
          </p>
        </div>

        {/* Cinematic visual */}
        <div className="animate-fade-up delay-2 relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="absolute -inset-3 rounded-[2.2rem] bg-gradient-to-br from-lime-300/40 via-accent/30 to-emerald-700/40 blur-xl" />

          <div className="relative aspect-square overflow-hidden rounded-[2rem] bg-[#032016] shadow-[0_30px_80px_rgba(4,53,34,0.45)] ring-1 ring-lime-200/30">
            <Image
              src="/products/hero-impress.jpg"
              alt="SaGa-Net fiber optic cepat dan stabil"
              fill
              priority
              className="hero-kenburns object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            <div
              className="pointer-events-none absolute inset-0 animate-grid-pan opacity-25 mix-blend-screen"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(163, 255, 140, 0.25) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(163, 255, 140, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Orbit rings */}
            <div className="pointer-events-none absolute left-1/2 top-[42%] h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2">
              <div className="animate-orbit absolute inset-0 rounded-full border border-lime-300/25" />
              <div className="animate-orbit-rev absolute inset-6 rounded-full border border-dashed border-accent/30" />
            </div>

            {/* Data streams */}
            <div className="pointer-events-none absolute inset-x-0 top-[28%] h-px overflow-hidden opacity-70">
              <div className="animate-data-stream h-full w-1/3 bg-gradient-to-r from-transparent via-lime-300 to-transparent" />
            </div>
            <div className="pointer-events-none absolute inset-x-0 top-[62%] h-px overflow-hidden opacity-50">
              <div
                className="animate-data-stream h-full w-1/4 bg-gradient-to-r from-transparent via-accent to-transparent"
                style={{ animationDelay: "1.2s" }}
              />
            </div>

            {/* Floating nodes */}
            <span className="animate-node-glow absolute left-[14%] top-[22%] h-2.5 w-2.5 rounded-full bg-lime-300 shadow-[0_0_12px_#bef264]" />
            <span
              className="animate-node-glow absolute right-[18%] top-[30%] h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_#00a86b]"
              style={{ animationDelay: "0.7s" }}
            />
            <span
              className="animate-node-glow absolute right-[28%] bottom-[34%] h-3 w-3 rounded-full bg-lime-200 shadow-[0_0_14px_#d9f99d]"
              style={{ animationDelay: "1.4s" }}
            />

            <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-accent-deep shadow-sm backdrop-blur">
              Fiber Optic · Unlimited
            </div>

            <div className="absolute right-4 top-4 rounded-2xl bg-lime-300/95 px-3 py-2 text-center shadow-[0_0_24px_rgba(190,242,100,0.55)]">
              <p className="text-xl font-black leading-none text-[#043522]">15</p>
              <p className="text-[9px] font-bold tracking-[0.14em] text-[#043522]">
                MBPS
              </p>
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/40 bg-white/90 p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-hologram text-sm font-bold">{site.name}</p>
                  <p className="text-sm font-bold text-foreground">
                    Jaringan cepat &amp; stabil
                  </p>
                  <p className="text-xs text-muted">
                    Unlimited · Simetris 1:1 · Tanpa denda
                  </p>
                </div>
                <span className="hidden h-10 w-10 animate-pulse-ring rounded-full border-2 border-accent sm:block" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
