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

const defaultTitle =
  "Rendy Achmadiansyah Mukti | Fullstack Web Developer";

const defaultDescription =
  "Fullstack Web Developer from Indonesia specializing in Laravel, Next.js, React, PHP, and scalable backend development. Explore my portfolio, professional experience, technical skills, and projects.";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | Rendy Achmadiansyah Mukti",
  },

  description: defaultDescription,

  keywords: [
    "Rendy Achmadiansyah Mukti",
    "Rendy Achmad",
    "Fullstack Web Developer",
    "Backend Developer",
    "Laravel Developer",
    "Next.js Developer",
    "React Developer",
    "PHP Developer",
    "Web Developer Indonesia",
    "Portfolio",
  ],

  applicationName: "Rendy Achmadiansyah Mukti Portfolio",

  creator: "Rendy Achmadiansyah Mukti",
  publisher: "Rendy Achmadiansyah Mukti",

  authors: [
    {
      name: "Rendy Achmadiansyah Mukti",
      url: siteUrl,
    },
  ],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Rendy Achmadiansyah Mukti",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/images/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Rendy Achmadiansyah Mukti Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    creator: "@rndyachmad",
    images: [`${siteUrl}/images/og-image.png`],
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