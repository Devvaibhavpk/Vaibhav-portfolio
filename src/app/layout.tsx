import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav P K | AI/ML Engineer • Data Scientist • Full Stack Developer",
  description:
    "Portfolio of Vaibhav P K — AI/ML Engineer, Data Scientist, Full Stack Developer, Cybersecurity Researcher, and Blockchain Developer. Building intelligent systems at the intersection of AI, ML, Cybersecurity, Blockchain, IoT, and Full Stack Development.",
  keywords: [
    "Vaibhav P K",
    "AI Engineer",
    "Machine Learning",
    "Data Scientist",
    "Full Stack Developer",
    "Cybersecurity Researcher",
    "Blockchain Developer",
    "Portfolio",
    "VIT Chennai",
  ],
  authors: [{ name: "Vaibhav P K" }],
  openGraph: {
    title: "Vaibhav P K | AI/ML Engineer & Full Stack Developer",
    description:
      "Building intelligent systems at the intersection of AI, ML, Cybersecurity, Blockchain, and Full Stack Development.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav P K | AI/ML Engineer & Full Stack Developer",
    description:
      "Building intelligent systems at the intersection of AI, ML, Cybersecurity, Blockchain, and Full Stack Development.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${inter.variable} ${outfit.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
