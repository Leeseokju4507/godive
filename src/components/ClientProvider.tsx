// src/components/ClientProviders.tsx
"use client"

import { TRPCReactProvider } from "@/trpc/react"
import { ThemeProvider } from "next-themes"
import { Suspense } from "react"

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TRPCReactProvider>
      <Suspense fallback={null}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </Suspense>
    </TRPCReactProvider>
  )
}
