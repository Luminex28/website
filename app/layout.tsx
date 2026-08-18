import type { Metadata } from "next";
import { Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { SiteChrome } from "../components/layout/SiteChrome";
import { siteUrl } from "../data/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-family",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body-family",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-family",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Swetank Pandey | Aspiring Data Analyst",
  description:
    "Portfolio of Swetank Pandey — aspiring data analyst (SQL, Excel, Power BI, Python) and BBA Business Intelligence & Analytics student at K.R. Mangalam University, who also builds Linux tools like Lumin and TaskL.",
  keywords: ["Swetank Pandey", "Data Analyst", "Business Analytics", "SQL", "Power BI", "Linux", "Rust", "Portfolio"],
  authors: [{ name: "Swetank Pandey" }],
  openGraph: {
    title: "Swetank Pandey | Aspiring Data Analyst",
    description: "Data analytics, business intelligence, and the Linux tools built along the way.",
    type: "website",
    url: siteUrl,
    siteName: "Swetank Pandey",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Swetank Pandey — Aspiring Data Analyst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swetank Pandey | Aspiring Data Analyst",
    description: "Data analytics, business intelligence, and the Linux tools built along the way.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Swetank Pandey",
  jobTitle: "Aspiring Data Analyst",
  description: "BBA Business Intelligence & Analytics student and builder of Linux tools.",
  url: siteUrl,
  sameAs: ["https://www.linkedin.com/in/swetank-pandey-788158347"],
  knowsAbout: ["Data Analytics", "Business Intelligence", "SQL", "Power BI", "Python", "Rust", "Linux"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
