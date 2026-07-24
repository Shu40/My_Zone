import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://teamlite.netlify.app'),
  title: "TeamLite Soft Solutions | Engineering Intelligent Software for the Future",
  description: "Empower businesses through intelligent software, AI-driven automation, secure cloud infrastructure, and scalable digital transformation. Founded by Shubham Kumar.",
  keywords: [
    "Enterprise Software",
    "AI Automation",
    "Cloud Infrastructure",
    "Cybersecurity",
    "Shubham Kumar",
    "TeamLite Soft Solutions",
    "SaaS Product Development",
    "Custom Software Development",
  ],
  authors: [{ name: "Shubham Kumar" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "TeamLite Soft Solutions",
    description: "Empower businesses through intelligent software, AI-driven automation, and scalable digital transformation.",
    url: "https://teamlite.in",
    siteName: "TeamLite Soft Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeamLite Soft Solutions",
    description: "Engineering Intelligent Software for the Future.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "TeamLite Soft Solutions",
  "operatingSystem": "Web",
  "applicationCategory": "BusinessApplication",
  "author": {
    "@type": "Person",
    "name": "Shubham Kumar",
    "jobTitle": "Founder & CEO",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Vadodara",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    }
  },
  "publisher": {
    "@type": "Organization",
    "name": "TeamLite Soft Solutions",
    "founder": {
      "@type": "Person",
      "name": "Shubham Kumar"
    },
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Vadodara",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      }
    }
  }
};

import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark h-full antialiased" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          strategy="beforeInteractive"
          src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        />
        <Script id="google-translate-init" strategy="beforeInteractive">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement({pageLanguage: 'en', autoDisplay: false}, 'google_translate_element');
            }
          `}
        </Script>
      </head>
      <body className={`${inter.variable} font-sans min-h-full flex flex-col bg-background text-foreground`} suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {/* Translate element required by Google (hidden via globals.css) */}
          <div id="google_translate_element" suppressHydrationWarning dangerouslySetInnerHTML={{ __html: '' }}></div>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
