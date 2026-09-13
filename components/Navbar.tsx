import Image from "next/image";
import Link from "next/link";
import { NavLinks } from "@/components/NavLinks";
import { site } from "@/lib/site";

export function Navbar() {
  return (
    <>
      <header
        className="brand-atmosphere-header fixed top-0 right-0 left-0 z-[100] border-b border-accent/20 shadow-[0_10px_40px_rgba(4,53,34,0.12)]"
        style={{ position: "fixed" }}
      >
        <div className="brand-bar" />
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-2.5 sm:px-8 sm:py-3">
          <Link href="/" className="group flex min-w-0 items-center gap-2.5 sm:gap-3">
            <span className="nav-logo-box flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-white via-lime-50 to-emerald-100 ring-1 ring-accent/25 shadow-[0_8px_22px_rgba(0,168,107,0.2)] transition-transform group-hover:scale-105 sm:h-12 sm:w-12">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={40}
                height={36}
                className="h-8 w-auto sm:h-9"
                priority
              />
            </span>

            <span className="flex min-w-0 flex-col gap-1">
              <span className="nav-brand-box inline-flex w-fit items-center rounded-xl bg-gradient-to-r from-[#043522] via-[#0a6b45] to-[#0d8a58] px-2.5 py-1 shadow-[0_8px_20px_rgba(4,53,34,0.25)] ring-1 ring-lime-300/30">
                <span className="text-hologram font-display text-base font-bold tracking-tight sm:text-lg">
                  {site.name}
                </span>
              </span>
              <span className="nav-slogan-box hidden max-w-[15rem] truncate rounded-lg bg-white/90 px-2 py-0.5 text-[10px] font-semibold leading-snug text-accent-deep shadow-sm ring-1 ring-accent/15 sm:inline-flex">
                {site.slogan}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            <NavLinks />
          </nav>

          <Link
            href="/produk"
            className="nav-cta shrink-0 rounded-xl bg-gradient-to-r from-[#ff8a3d] via-[#ff6a1a] to-[#e85d10] px-3.5 py-2.5 text-xs font-bold tracking-wide text-white shadow-[0_10px_24px_rgba(255,106,26,0.45)] ring-1 ring-orange-300/40 transition-transform hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(255,106,26,0.55)] sm:px-4 sm:text-sm"
          >
            Beli Sekarang
          </Link>
        </div>

        <nav className="flex items-center gap-2 overflow-x-auto border-t border-accent/10 bg-white/40 px-4 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden">
          <NavLinks compact />
        </nav>
      </header>

      <div className="h-[116px] sm:h-[124px] lg:h-[88px]" aria-hidden />
    </>
  );
}
