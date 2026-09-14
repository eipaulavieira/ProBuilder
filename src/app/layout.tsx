import type { Metadata } from "next";
import { Montserrat, League_Gothic } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const leagueGothic = League_Gothic({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-cta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ProBuilder | Drywall, Flooring & Landscaping",
  description:
    "Drywall, Flooring, and Landscaping solutions to make your home the way you deserve. Free estimate, professionals you can trust.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${leagueGothic.variable}`}>
      <body className="bg-white text-neutral-900 antialiased">
        {children}
      </body>
    </html>
  );
}
