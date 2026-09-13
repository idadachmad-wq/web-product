"use client";

import { useMemo, useState } from "react";
import { BlogCard } from "@/components/BlogCard";
import { blogCategories, blogPosts, type BlogCategory } from "@/lib/blog";
import { site } from "@/lib/site";
import Link from "next/link";

export function BlogCatalog() {
  const [selected, setSelected] = useState<"Semua" | BlogCategory>("Semua");

  const filtered = useMemo(() => {
    if (selected === "Semua") return blogPosts;
    return blogPosts.filter((post) => post.category === selected);
  }, [selected]);

  const grouped = useMemo(() => {
    if (selected !== "Semua") {
      return [{ category: selected, posts: filtered }];
    }
    return blogCategories
      .map((category) => ({
        category,
        posts: blogPosts.filter((post) => post.category === category),
      }))
      .filter((group) => group.posts.length > 0);
  }, [selected, filtered]);

  return (
    <div>
      <div className="mb-8 flex gap-2 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {(["Semua", ...blogCategories] as const).map((category) => {
          const active = selected === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition-colors sm:text-sm ${
                active
                  ? "bg-accent text-white shadow-[0_8px_18px_rgba(0,168,107,0.28)]"
                  : "border border-accent/20 bg-white text-accent-deep hover:bg-green-soft/40"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <p className="mb-8 text-sm text-muted">
        Menampilkan <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
        artikel
        {selected !== "Semua" ? ` di kategori ${selected}` : ""}.
      </p>

      <div className="space-y-16">
        {grouped.map((group) => (
          <section key={group.category} className="space-y-6">
            {selected === "Semua" ? (
              <h2 className="font-display text-2xl font-bold tracking-tight">
                {group.category}
              </h2>
            ) : null}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.posts.map((post, index) => (
                <BlogCard key={post.slug} post={post} index={index} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-accent/15 bg-gradient-to-br from-white to-green-soft/30 p-6 text-center sm:p-8">
        <p className="font-display text-xl font-bold tracking-tight">
          Butuh rekomendasi paket?
        </p>
        <p className="mt-2 text-sm text-muted">
          Chat admin {site.name} untuk cek coverage di lokasi Anda.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <Link
            href="/produk"
            className="rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white"
          >
            Lihat Produk
          </Link>
          <Link
            href="/bantuan"
            className="rounded-full border border-accent/25 bg-white px-5 py-2.5 text-sm font-bold text-accent-deep"
          >
            Hubungi Bantuan
          </Link>
        </div>
      </div>
    </div>
  );
}
