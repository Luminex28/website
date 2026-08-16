import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swetank Pandey | Business Analytics",
  description: "Portfolio of Swetank Pandey, a BBA Business Analytics (H) student at KR Mangalam University.",
  openGraph: { title: "Swetank Pandey | Business Analytics", description: "Business Analytics student focused on data, business, and technology.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
