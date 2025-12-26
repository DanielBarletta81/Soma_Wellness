import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/AuthProvider";

export const metadata: Metadata = {
  title: "Soma Wellness Sanctuary",
  description:
    "Adaptive wellness mentor blending biophilic design, chromotherapy, and lineage-based education."
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
