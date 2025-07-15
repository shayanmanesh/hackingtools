import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Hacking.Tools - Digital Security Resources Coming Soon",
  description: "Your premier destination for ethical hacking tools, cybersecurity resources, and digital security education. Comprehensive collection of defensive security tools and penetration testing resources.",
  keywords: ["hacking tools", "cybersecurity", "ethical hacking", "penetration testing", "security tools", "digital security", "cybersecurity resources", "security education", "vulnerability assessment", "security testing"],
  authors: [{ name: "Hacking.Tools" }],
  creator: "Hacking.Tools",
  publisher: "Hacking.Tools",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#000000",
  
  metadataBase: new URL("https://www.hacking.tools"),
  alternates: {
    canonical: "https://www.hacking.tools",
  },
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hacking.tools",
    siteName: "Hacking.Tools",
    title: "Hacking.Tools - Digital Security Resources Coming Soon",
    description: "Your premier destination for ethical hacking tools, cybersecurity resources, and digital security education. Comprehensive collection of defensive security tools and penetration testing resources.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hacking.Tools - Digital Security Resources",
      },
    ],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Hacking.Tools - Digital Security Resources Coming Soon",
    description: "Your premier destination for ethical hacking tools, cybersecurity resources, and digital security education.",
    images: ["/og-image.jpg"],
  },
  
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5635114711353420"
          crossOrigin="anonymous"
        />
        <meta name="google-adsense-account" content="ca-pub-5635114711353420" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Hacking.Tools",
              "description": "Your premier destination for ethical hacking tools, cybersecurity resources, and digital security education.",
              "url": "https://www.hacking.tools",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.hacking.tools/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              },
              "about": {
                "@type": "Thing",
                "name": "Cybersecurity Tools and Resources",
                "description": "Comprehensive collection of ethical hacking tools and cybersecurity resources for security professionals and researchers."
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
