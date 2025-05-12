import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Mono, Space_Grotesk, Outfit } from "next/font/google"
import "./globals.css"
import Frame from "./frame"

// Font for display/headlines
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
})

// Font for monospace text
const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
})

// Font for headers/titles
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-header",
})

// Font for body text
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "HEALTH/HEALTH - Documentação médica automática em tempo real",
  description: "Plataforma clínica que documenta, interpreta e organiza sua escuta médica em tempo real.",
  keywords: "documentação médica, prontuário eletrônico, transcrição médica, IA para médicos, SOAP, CID",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${spaceMono.variable} ${outfit.variable} ${inter.variable} font-sans`}>
        <Frame />
        {children}
      </body>
    </html>
  )
}
