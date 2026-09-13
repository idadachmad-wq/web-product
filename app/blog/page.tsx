import type { Metadata } from "next";
import { BlogCatalog } from "@/components/BlogCatalog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Artikel WiFi, teknologi, adab, sosial, dan tip keluarga dari ${site.name}.`,
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-10 max-w-2xl animate-fade-up">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent-deep">
          Blog {site.name}
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl">
          Artikel untuk Semua
        </h1>
        <p className="mt-3 text-muted">
          50 artikel seputar WiFi, teknologi, adab, sosial, ibadah, dan tip
          kehidupan sehari-hari untuk keluarga.
        </p>
      </div>
      <BlogCatalog />
    </div>
  );
}
