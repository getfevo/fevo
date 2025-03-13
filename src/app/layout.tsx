import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from '@vercel/analytics/next';
import { SessionProvider } from "@/providers/session-provider";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "fevo - join our waitlist",
  description: "Be the first to know when we launch our revolutionary new platform.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
      </head>
      <body className={inter.className}>
        <SessionProvider>
          {children}
          <Analytics />
        </SessionProvider>
      </body>
    </html>
  )
}
