import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"
import { Footer } from "react-day-picker"
import { Navigation } from "@/components/navigation"
import { ClientProviders } from "@/components/tRPCReactProvider"

export const metadata: Metadata = {
  title: "SURGY",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        </head>
        <body className="min-h-screen bg-background font-sans antialiased">
        <ClientProviders>
          <Suspense fallback={null}>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
              <div className="flex flex-col min-h-screen">
                <Navigation/>
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </Suspense>
          <Analytics />
      </ClientProviders>
        </body>
    </html>
  )
}
