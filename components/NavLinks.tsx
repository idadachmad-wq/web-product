"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    href: "/",
    label: "Beranda",
    tone: "from-emerald-50 to-white text-emerald-800 ring-emerald-200/80 hover:ring-emerald-400",
    active: "from-emerald-500 to-accent text-white ring-emerald-400 shadow-[0_8px_20px_rgba(0,168,107,0.35)]",
  },
  {
    href: "/produk",
    label: "Produk",
    tone: "from-lime-50 to-white text-lime-800 ring-lime-200/80 hover:ring-lime-400",
    active: "from-lime-500 to-emerald-500 text-white ring-lime-400 shadow-[0_8px_20px_rgba(132,204,22,0.35)]",
  },
  {
    href: "/blog",
    label: "Blog",
    tone: "from-teal-50 to-white text-teal-800 ring-teal-200/80 hover:ring-teal-400",
    active: "from-teal-500 to-cyan-500 text-white ring-teal-400 shadow-[0_8px_20px_rgba(20,184,166,0.35)]",
  },
  {
    href: "/bantuan",
    label: "Bantuan",
    tone: "from-orange-50 to-white text-orange-800 ring-orange-200/80 hover:ring-orange-400",
    active: "from-[#ff8a3d] to-[#ff6a1a] text-white ring-orange-400 shadow-[0_8px_20px_rgba(255,106,26,0.35)]",
  },
  {
    href: "/tentang",
    label: "Tentang",
    tone: "from-sky-50 to-white text-sky-800 ring-sky-200/80 hover:ring-sky-400",
    active: "from-sky-500 to-cyan-500 text-white ring-sky-400 shadow-[0_8px_20px_rgba(14,165,233,0.35)]",
  },
] as const;

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function NavLinks({ compact = false }: { compact?: boolean }) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const active = isActive(pathname, link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={[
              "nav-chip inline-flex items-center justify-center rounded-xl bg-gradient-to-br font-semibold ring-1 transition-all duration-300",
              compact
                ? "px-3 py-1.5 text-[11px]"
                : "px-3.5 py-2 text-sm",
              active
                ? `${link.active} -translate-y-0.5`
                : `${link.tone} hover:-translate-y-0.5 hover:shadow-md`,
            ].join(" ")}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}
