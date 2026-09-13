import Image from "next/image";
import { site } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="border-y border-border bg-white">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
            Testimoni
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Apa kata pelanggan
          </h2>
          <p className="mt-3 text-muted">
            Pengalaman warga sekitar coverage {site.name}.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {site.testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-accent/15 bg-gradient-to-br from-white to-green-soft/30 p-5 shadow-sm"
            >
              <blockquote className="text-sm leading-relaxed text-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4 text-sm">
                <p className="font-bold text-accent-deep">{item.name}</p>
                <p className="text-xs text-muted">{item.area}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function InstallGallery() {
  return (
    <section className="brand-atmosphere">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="mb-10 max-w-xl animate-fade-up">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-deep">
            Galeri Instalasi
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Dari pasang sampai siap dipakai
          </h2>
          <p className="mt-3 text-muted">
            Dokumentasi proses instalasi jaringan fiber di rumah pelanggan.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-3">
          {site.gallery.map((item) => (
            <figure
              key={item.src}
              className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-accent/15"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm font-medium text-foreground">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function OfficeMap({ className = "" }: { className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl ring-1 ring-accent/15 ${className}`}>
      <iframe
        title={`Peta ${site.officeLabel} ${site.name}`}
        src={site.mapsEmbedUrl}
        className="h-64 w-full border-0 sm:h-80"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
