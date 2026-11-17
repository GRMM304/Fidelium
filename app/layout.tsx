import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FIDELIUM | Eficiencia, planificación y resguardo",
  description: "Planificación legal y gestión estratégica para compraventas, financiamientos y remates judiciales.",
  metadataBase: new URL("https://fidelium.cl"),
  openGraph: {
    title: "FIDELIUM | Decisiones inmobiliarias jurídicamente resguardadas",
    description: "Planificación legal y gestión estratégica para compraventas, financiamientos y remates judiciales.",
    type: "website",
    locale: "es_CL",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "FIDELIUM — Decisiones inmobiliarias jurídicamente resguardadas" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FIDELIUM | Eficiencia, planificación y resguardo",
    description: "Decisiones inmobiliarias jurídicamente resguardadas.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/brand/fidelium-mark-gold.png",
    shortcut: "/brand/fidelium-mark-gold.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
