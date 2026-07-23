import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-figtree",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const siteUrl = "https://rendyachmad.my.id";
const defaultTitle = "Rendy Achmadiansyah Mukti | Fullstack Web Developer";
const defaultDescription =
  "Rendy Achmadiansyah Mukti adalah Fullstack Web Developer, Backend Developer, Laravel Developer, dan Next.js Developer asal Indonesia. Portfolio ini menampilkan pengalaman kerja, pendidikan, skill, dan proyek digital yang dibangun secara end-to-end.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | Rendy Achmadiansyah Mukti",
  },
  description: defaultDescription,
  applicationName: "Rendy Achmadiansyah Mukti Portfolio",
  keywords: [
    "Rendy Achmadiansyah Mukti",
    "Rendy Achmad",
    "Rendy Achmad Fullstack Developer",
    "Rendy Achmadiansyah Mukti Portfolio",
    "Fullstack Web Developer",
    "Backend Developer",
    "Laravel Developer",
    "Next.js Developer",
    "Web Developer Indonesia",
    "Portfolio Indonesia",
    "Rendy Achmad portfolio",
  ],
  authors: [
    { name: "Rendy Achmadiansyah Mukti", url: siteUrl },
  ],
  creator: "Rendy Achmadiansyah Mukti",
  publisher: "Rendy Achmadiansyah Mukti",
  alternates: {
    canonical: siteUrl,
    languages: {
      "id-ID": siteUrl,
      "en-US": siteUrl,
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
    locale: "id_ID",
    url: siteUrl,
    siteName: "Rendy Achmadiansyah Mukti Portfolio",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Rendy Achmadiansyah Mukti Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/twitter-image"],
    creator: "@rndyachmad",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className={`${figtree.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}