import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RolandoCryptos - Tu Guía Experto en Criptomonedas",
  description:
    "Herramientas avanzadas, tutoriales especializados y mentoría personalizada en el mundo de las criptomonedas y blockchain.",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/logo-rolando.png", sizes: "32x32", type: "image/png" },
      { url: "/logo-rolando.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo-rolando.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo-rolando.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
