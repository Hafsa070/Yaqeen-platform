import type React from "react"
import type { Metadata } from "next"
import { Poppins, Cairo } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Yaqeen - Humanitarian Support for Gaza | يقين - الدعم الإنساني لغزة",
  description:
    "A humanitarian donation platform connecting families in Gaza with global supporters | منصة تبرعات إنسانية تربط العائلات في غزة بالداعمين حول العالم",
  generator: "",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${cairo.variable}`} dir="ltr">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
