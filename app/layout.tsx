import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnrollModal from "@/components/EnrollModal";
import { EnrollModalProvider } from "@/contexts/EnrollModalContext";
import { Cairo } from "next/font/google";
import { LangProvider } from "@/contexts/LangContext";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
});


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://mudarrisakademiyasi.uz";
const SITE_NAME = "Mudarris Akademiyasi";
const SITE_DESCRIPTION =
  "Mudarris Akademiyasi — Toshkentdagi arab tili ta'lim markazi. Ayollar, bolalar va kattalar uchun arab tili fonetikasi va grammatikasi bo'yicha tajribali ustozlar rahbarligidagi kurslar. Hoziroq yoziling!";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: `${SITE_NAME} — Toshkentda arab tili kurslari`,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "arab tili kursi",
    "arab tili o'rganish",
    "Toshkentda arab tili kurslari",
    "arab tili fonetikasi",
    "arab tili grammatikasi",
    "Mudarris akademiyasi",
    "ayollar uchun arab tili",
    "bolalar uchun arab tili",
    "arab tili ustozlari",
    "arabcha o'qish yozish",
  ],

  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  applicationName: SITE_NAME,

  category: "education",

  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/",
    },
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "uz_UZ",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Toshkentda arab tili kurslari`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Toshkentda arab tili kurslari`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  formatDetection: {
    telephone: true,
    email: false,
    address: false,
  },

  verification: {
    google: "Ho6yLawIV34sfy7U6tEtrYaPLWnuzhW8wvk3KWnpbJA" ,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="uz" className={`${geistSans.variable} ${geistMono.variable} ${cairo.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-white">
        <LangProvider>
          <EnrollModalProvider>
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <EnrollModal />
          </EnrollModalProvider>
        </LangProvider>
      </body>
    </html>
  );
}