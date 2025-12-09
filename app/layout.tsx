import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "InnovateX GCS 2026",
  description:
    "Join InnovateX GCS 2026 on Saturday, February 7th, 2026 - A full-day interschool hackathon at GEMS Cambridge International Private School, Sharjah. Collaborate, innovate, and build creative software projects with students from across the UAE.",
  keywords: [
    "hackathon",
    "student hackathon",
    "InnovateX",
    "GEMS Cambridge Sharjah",
    "coding competition",
    "UAE hackathon",
    "Sharjah",
    "student programming",
    "tech event",
    "2026",
    "interschool hackathon",
    "coding event",
    "programming competition",
    "STEM education",
  ],
  authors: [{ name: "GEMS Cambridge International School Sharjah" }],
  creator: "InnovateX GCS Organizing Committee",
  publisher: "GEMS Cambridge International School Sharjah",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL("https://innovatex-gcs.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InnovateX GCS 2026 | Student Hackathon - February 7, 2026",
    description:
      "Join InnovateX GCS 2026 on Saturday, February 7th, 2026 - A full-day interschool hackathon at GEMS Cambridge International Private School, Sharjah.",
    url: "https://innovatex-gcs.com",
    siteName: "InnovateX GCS 2026",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "InnovateX GCS 2026 - Student Hackathon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InnovateX GCS 2026 | Student Hackathon - February 7, 2026",
    description:
      "Join InnovateX GCS 2026 on Saturday, February 7th, 2026 - A full-day interschool hackathon at GEMS Cambridge International Private School, Sharjah.",
    images: ["/twitter-image.png"],
    creator: "@innovatexgcs",
  },
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`font-sans antialiased flex flex-col items-center`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="w-full max-w-[100vw]">
            {children}
          </div>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
