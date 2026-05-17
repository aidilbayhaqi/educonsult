import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edukonsul — Konsultan Pendidikan Universitas #1 di Indonesia",

  description:
    "Konsultan pendidikan universitas terpercaya: rekomendasi kampus terbaik, jalur RPL, bimbingan skripsi, tesis, dan disertasi. 5.000+ alumni sukses. Konsultasi gratis hari ini.",

  keywords: [
    "konsultan pendidikan",
    "kampus terbaik",
    "RPL kampus",
    "bimbingan skripsi",
    "tesis",
    "disertasi",
  ],

  openGraph: {
    title: "Edukonsul — Konsultan Pendidikan Universitas #1 di Indonesia",

    description:
      "Konsultan pendidikan universitas terpercaya: rekomendasi kampus terbaik, jalur RPL, bimbingan skripsi, tesis, dan disertasi.",

    type: "website",
    locale: "id_ID",
    siteName: "Edukonsul",
  },

  twitter: {
    card: "summary_large_image",
    title: "Edukonsul",
    description:
      "Konsultan pendidikan universitas terpercaya di Indonesia.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}