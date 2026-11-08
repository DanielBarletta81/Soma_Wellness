import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://somalivingwellness.com"),
  title: {
    default: "Soma Wellness Sanctuary — Yoga & Ayurvedic Wellness",
    template: "%s | Soma Wellness"
  },
  description:
    "Soma Wellness is a calm, adaptive wellness platform blending yoga, Ayurveda, and modern nervous-system science — support, not management, without pressure, gamification, or data extraction.",
  keywords: [
    "yoga",
    "ayurveda",
    "wellness",
    "chakra",
    "meditation",
    "breathwork",
    "dosha",
    "postpartum wellness",
    "somatic practice"
  ],
  authors: [{ name: "C.J. Barletta" }],
  openGraph: {
    title: "Soma Wellness Sanctuary",
    description:
      "Where ancient lineage meets modern biological science — adaptive rituals, Ayurvedic nourishment, and lineage-based education.",
    url: "https://somalivingwellness.com",
    siteName: "Soma Wellness",
    images: [{ url: "/images/hero-background.jpg", width: 1600, height: 1067, alt: "Soma Wellness sanctuary" }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Soma Wellness Sanctuary",
    description: "Yoga, Ayurveda, and nervous-system care — calm, optional guidance."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-state="balanced">
      <body className="bg-soma-surface text-soma-foreground font-body antialiased">
        <AuthProvider>
          <div className="min-h-screen">{children}</div>
        </AuthProvider>
      </body>
    </html>
  );
}
