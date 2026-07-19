import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Premium Coaching Academy | UPSC | IIT-JEE | NEET | SSC | CAT",
  description:
    "India's premier coaching institute for competitive exams. Expert faculty, comprehensive courses, and proven results for UPSC, IIT-JEE, NEET, SSC, and CAT aspirants.",
  keywords: [
    "coaching",
    "UPSC",
    "IIT-JEE",
    "NEET",
    "SSC",
    "CAT",
    "competitive exams",
    "premium coaching",
  ],
  openGraph: {
    title: "Premium Coaching Academy | Excel in Competitive Exams",
    description:
      "India's premier coaching institute with expert faculty and proven results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}