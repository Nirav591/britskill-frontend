import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Layout from "./container/Layout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://britskillacademy.co.uk"),
  title: {
    default: "BritSkill Academy | Online Tuition",
    template: "%s | BritSkill Academy",
  },
  description:
    "Online tuition for GCSE, A‑Level, Functional Skills, and ESOL learners across the UK.",
  applicationName: "BritSkill Academy",
  openGraph: {
    title: "BritSkill Academy | Online Tuition",
    description:
      "Online tuition for GCSE, A‑Level, Functional Skills, and ESOL learners across the UK.",
    type: "website",
    siteName: "BritSkill Academy",
  },
  twitter: {
    card: "summary_large_image",
    title: "BritSkill Academy | Online Tuition",
    description:
      "Online tuition for GCSE, A‑Level, Functional Skills, and ESOL learners across the UK.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
