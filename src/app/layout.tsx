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
    "Mayur Girase",
    "TeamLite Soft Solutions",
    "SaaS Product Development",
    "Custom Software Development",
    "Enterprise SEO",
    "B2B Software Solutions",
    "Digital Transformation",
    "Scalable Cloud Architecture",
    "AI-driven Software Engineering",
    "Tech Startups India",
    "IT Consulting Services",
  ],
  authors: [{ name: "Shubham Kumar" }, { name: "Mayur Girase" }],
  icons: {
    icon: "/logo.png?v=2",
    shortcut: "/logo.png?v=2",
    apple: "/logo.png?v=2",
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
    "employee": {
      "@type": "Person",
      "name": "Mayur Girase",
      "jobTitle": "Co-Founder & CTO"
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
        {/* Google Analytics (GA4) Hook */}
        {/* <Script src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" strategy="afterInteractive" /> */}
        {/* <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script> */}
        {/* Google Tag Manager Hook */}
        {/* <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script> */}
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
