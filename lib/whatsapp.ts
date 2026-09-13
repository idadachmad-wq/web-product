import { site } from "./site";
import { formatPrice } from "./products";

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsapp}?text=${encoded}`;
}

export function orderMessage(
  productName: string,
  options?: {
    option?: string;
    variant?: string;
    optionLabel?: string;
    variantLabel?: string;
    price?: number;
    category?: string;
  },
): string {
  const lines = [
    `Halo ${site.name}! Saya ingin memesan:`,
    ``,
    `Produk: ${productName}`,
  ];

  if (options?.option) {
    lines.push(`${options.optionLabel ?? "Pilihan"}: ${options.option}`);
  }
  if (options?.variant) {
    lines.push(`${options.variantLabel ?? "Varian"}: ${options.variant}`);
  }
  if (typeof options?.price === "number") {
    const period = options.category === "Paket Bulanan" ? " /bulan" : "";
    lines.push(`Harga: ${formatPrice(options.price)}${period}`);
  }

  lines.push(
    ``,
    `Mohon info ketersediaan, jadwal pemasangan, dan cara pembayarannya. Terima kasih!`,
  );
  return lines.join("\n");
}

export function generalInquiryMessage(): string {
  return `Halo ${site.name}! Saya ingin daftar / bertanya tentang paket internet.`;
}
