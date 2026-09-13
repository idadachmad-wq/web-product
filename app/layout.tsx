import type { Metadata } from "next";
import { Outfit, Space_Grotesk } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { site } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Internet WiFi Fiber`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "SaGa-Net",
    "WiFi fiber Garut",
    "internet unlimited Sukamulya",
    "internet Situsari",
    "Simaya",
    "paket internet",
    "voucher wifi",
  ],
  icons: {
    icon: [{ url: "/brand/saga-net-logo.png" }],
    apple: [{ url: "/brand/saga-net-logo.png" }],
  },
  openGraph: {
    title: `${site.name} — ${site.slogan}`,
    description: site.tagline,
    locale: "id_ID",
    type: "website",
    url: site.url,
    images: [{ url: site.logo }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${outfit.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" />
        <Analytics />
      </body>
    </html>
  );
}
