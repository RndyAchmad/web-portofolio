import { Figtree, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import {
  DEFAULT_OG_IMAGE_URL,
  HOME_URL,
  PERSON_JOB_TITLE,
  PERSON_NAME,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";

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

const defaultTitle = `${PERSON_NAME} | ${PERSON_JOB_TITLE}`;

export const metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: defaultTitle,
    template: "%s | Rendy Achmadiansyah Mukti",
  },

  description: SITE_DESCRIPTION,

  keywords: [
    "Rendy Achmadiansyah Mukti",
    PERSON_NAME,
    "Fullstack Web Developer",
    "Backend Developer",
    "Laravel",
    "Next.js",
    "React",
    "PHP",
  ],

  applicationName: `${PERSON_NAME} Portfolio`,
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: defaultTitle,
  },
  category: "technology",
  classification: "Portfolio Website",
  creator: PERSON_NAME,
  publisher: PERSON_NAME,
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  authors: [
    {
      name: PERSON_NAME,
      url: HOME_URL,
    },
  ],
  alternates: {
    canonical: "/",
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
  verification: {
    google: "Ni7nnDl23e-HgWukIFrZJWHhKUXb4MXA76xIXkGCM1g",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: HOME_URL,
    siteName: SITE_NAME,
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: DEFAULT_OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: "Rendy Achmadiansyah Mukti - Fullstack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_DESCRIPTION,
    creator: "@rndyachmad",
    site: "@rndyachmad",
    images: [DEFAULT_OG_IMAGE_URL],
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#f97316",
  colorScheme: "dark light",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
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
