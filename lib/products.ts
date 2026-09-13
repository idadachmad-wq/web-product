export type Category = "Paket Bulanan" | "Voucher" | "Instalasi";

export type Product = {
  slug: string;
  name: string;
  price: number;
  compareAtPrice?: number;
  category: Category;
  description: string;
  usage: string;
  features?: string[];
  options: string[];
  optionLabel: string;
  variants: string[];
  variantLabel: string;
  featured: boolean;
  image: string;
  imageAlt: string;
};

export const categories: Category[] = [
  "Paket Bulanan",
  "Voucher",
  "Instalasi",
];

export const products: Product[] = [
  {
    slug: "saga-hemat",
    name: "SAGA HEMAT",
    price: 100000,
    category: "Paket Bulanan",
    description:
      "Paket internet bulanan 15 Mbps — hemat untuk kebutuhan dasar online sehari-hari.",
    usage: "Ideal untuk 1–5 perangkat/HP",
    features: [
      "UNLIMITED INTERNET",
      "Ideal untuk 1–5 perangkat/HP",
      "Smartphone & Komputer",
      "Internet simetris 1:1",
      "Gratis sewa modem/router",
      "Tanpa denda",
    ],
    options: ["15 Mbps"],
    optionLabel: "Kecepatan",
    variants: ["Bulanan"],
    variantLabel: "Langganan",
    featured: true,
    image: "/products/plan-15.jpg",
    imageAlt: "Promo SAGA HEMAT 15 Mbps",
  },
  {
    slug: "saga-basic",
    name: "SAGA BASIC",
    price: 130000,
    category: "Paket Bulanan",
    description:
      "Paket internet bulanan 20 Mbps — cocok untuk keluarga kecil yang aktif online.",
    usage: "Ideal untuk 1–7 perangkat/HP",
    features: [
      "UNLIMITED INTERNET",
      "Ideal untuk 1–7 perangkat/HP",
      "Smartphone & Komputer",
      "Internet simetris 1:1",
      "Gratis sewa modem/router",
      "Tanpa denda",
    ],
    options: ["20 Mbps"],
    optionLabel: "Kecepatan",
    variants: ["Bulanan"],
    variantLabel: "Langganan",
    featured: true,
    image: "/products/plan-20.jpg",
    imageAlt: "Promo SAGA BASIC 20 Mbps",
  },
  {
    slug: "saga-elite",
    name: "SAGA ELITE",
    price: 150000,
    category: "Paket Bulanan",
    description:
      "Paket internet bulanan 30 Mbps — nyaman untuk streaming dan meeting online.",
    usage: "Ideal untuk 1–9 perangkat/HP",
    features: [
      "UNLIMITED INTERNET",
      "Ideal untuk 1–9 perangkat/HP",
      "Smartphone & Komputer",
      "Internet simetris 1:1",
      "Gratis sewa modem/router",
      "Support CCTV & Smart TV",
    ],
    options: ["30 Mbps"],
    optionLabel: "Kecepatan",
    variants: ["Bulanan"],
    variantLabel: "Langganan",
    featured: true,
    image: "/products/plan-30.jpg",
    imageAlt: "Promo SAGA ELITE 30 Mbps",
  },
  {
    slug: "saga-super",
    name: "SAGA SUPER",
    price: 179000,
    category: "Paket Bulanan",
    description:
      "Paket internet bulanan 50 Mbps — lebih kencang untuk banyak perangkat sekaligus.",
    usage: "Ideal untuk 1–10 perangkat/HP",
    features: [
      "UNLIMITED INTERNET",
      "Ideal untuk 1–10 perangkat/HP",
      "Smartphone & Komputer",
      "Internet simetris 1:1",
      "Gratis sewa modem/router",
      "Support CCTV & Smart TV",
    ],
    options: ["50 Mbps"],
    optionLabel: "Kecepatan",
    variants: ["Bulanan"],
    variantLabel: "Langganan",
    featured: true,
    image: "/products/plan-50.jpg",
    imageAlt: "Promo SAGA SUPER 50 Mbps",
  },
  {
    slug: "saga-premium",
    name: "SAGA PREMIUM",
    price: 200000,
    category: "Paket Bulanan",
    description:
      "Paket internet bulanan 75 Mbps — performa tinggi untuk keluarga besar dan kerja dari rumah.",
    usage: "Ideal untuk 1–13 perangkat/HP",
    features: [
      "UNLIMITED INTERNET",
      "Ideal untuk 1–13 perangkat/HP",
      "Rumah & kerja dari rumah",
      "Internet simetris 1:1",
      "Gratis sewa modem/router",
      "Support CCTV & Smart TV",
    ],
    options: ["75 Mbps"],
    optionLabel: "Kecepatan",
    variants: ["Bulanan"],
    variantLabel: "Langganan",
    featured: true,
    image: "/products/plan-75.jpg",
    imageAlt: "Promo SAGA PREMIUM 75 Mbps",
  },
  {
    slug: "saga-ultra",
    name: "SAGA ULTRA",
    price: 229000,
    category: "Paket Bulanan",
    description:
      "Paket internet bulanan 100 Mbps — maksimal untuk live streaming dan gaming.",
    usage: "Ideal untuk Live & Gaming",
    features: [
      "UNLIMITED INTERNET",
      "Ideal untuk Live & Gaming",
      "Performa maksimal 100 Mbps",
      "Internet simetris 1:1",
      "Gratis sewa modem/router",
      "Support CCTV & Smart TV",
    ],
    options: ["100 Mbps"],
    optionLabel: "Kecepatan",
    variants: ["Bulanan"],
    variantLabel: "Langganan",
    featured: true,
    image: "/products/plan-100.jpg",
    imageAlt: "Promo SAGA ULTRA 100 Mbps",
  },
  {
    slug: "voucher-2k",
    name: "Voucher 2K",
    price: 2000,
    category: "Voucher",
    description: "Voucher internet fleksibel untuk pemakaian singkat.",
    usage: "Masa aktif 6 jam",
    options: ["6 Jam"],
    optionLabel: "Durasi",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher.jpg",
    imageAlt: "Promo voucher-2k SaGa-Net",
  },
  {
    slug: "voucher-3k",
    name: "Voucher 3K",
    price: 3000,
    category: "Voucher",
    description: "Voucher internet fleksibel untuk pemakaian setengah hari.",
    usage: "Masa aktif 12 jam",
    options: ["12 Jam"],
    optionLabel: "Durasi",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher.jpg",
    imageAlt: "Promo voucher-3k SaGa-Net",
  },
  {
    slug: "voucher-5k",
    name: "Voucher 5K",
    price: 5000,
    category: "Voucher",
    description: "Voucher internet fleksibel untuk pemakaian sehari penuh.",
    usage: "Masa aktif 24 jam",
    options: ["24 Jam"],
    optionLabel: "Durasi",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher.jpg",
    imageAlt: "Promo voucher-5k SaGa-Net",
  },
  {
    slug: "voucher-10k",
    name: "Voucher 10K",
    price: 10000,
    category: "Voucher",
    description: "Voucher internet untuk pemakaian beberapa hari.",
    usage: "Masa aktif 4 hari",
    options: ["4 Hari"],
    optionLabel: "Durasi",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher.jpg",
    imageAlt: "Promo voucher-10k SaGa-Net",
  },
  {
    slug: "voucher-23k",
    name: "Voucher 23K",
    price: 23000,
    category: "Voucher",
    description: "Voucher internet untuk pemakaian 10 hari.",
    usage: "Masa aktif 10 hari",
    options: ["10 Hari"],
    optionLabel: "Durasi",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher.jpg",
    imageAlt: "Promo voucher-23k SaGa-Net",
  },
  {
    slug: "voucher-45k",
    name: "Voucher 45K",
    price: 45000,
    category: "Voucher",
    description: "Voucher internet untuk pemakaian 1 bulan.",
    usage: "Masa aktif 1 bulan",
    options: ["1 Bulan"],
    optionLabel: "Durasi",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher.jpg",
    imageAlt: "Promo voucher-45k SaGa-Net",
  },
  {
    slug: "voucher-100k",
    name: "Voucher 100K",
    price: 100000,
    category: "Voucher",
    description: "Voucher multi-user untuk kebutuhan bersama.",
    usage: "Untuk 3 user/HP",
    options: ["3 User"],
    optionLabel: "Kuota User",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher-multi.jpg",
    imageAlt: "Promo voucher-100k multi-user SaGa-Net",
  },
  {
    slug: "voucher-120k",
    name: "Voucher 120K",
    price: 120000,
    category: "Voucher",
    description: "Voucher multi-user untuk keluarga atau kos kecil.",
    usage: "Untuk 4 user/HP",
    options: ["4 User"],
    optionLabel: "Kuota User",
    variants: ["Voucher"],
    variantLabel: "Tipe",
    featured: false,
    image: "/products/plan-voucher-multi.jpg",
    imageAlt: "Promo voucher-120k multi-user SaGa-Net",
  },
  {
    slug: "biaya-instalasi",
    name: "Biaya Instalasi",
    price: 150000,
    compareAtPrice: 200000,
    category: "Instalasi",
    description:
      "Promo instalasi tinggal pakai. Termasuk pemasangan dan setting agar internet siap digunakan.",
    usage: "Penawaran spesial instalasi terbatas",
    options: ["Instalasi Standar"],
    optionLabel: "Layanan",
    variants: ["Promo"],
    variantLabel: "Status",
    featured: true,
    image: "/products/pkg-install.jpg",
    imageAlt: "Desain layanan instalasi jaringan",
  },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getMonthlyPackages(): Product[] {
  return products.filter((product) => product.category === "Paket Bulanan");
}

export function getVouchers(): Product[] {
  return products.filter((product) => product.category === "Voucher");
}

export function getProductsByCategory(category?: string): Product[] {
  if (!category || category === "Semua") return products;
  return products.filter((product) => product.category === category);
}
