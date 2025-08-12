"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en"
    setLanguage(newLang)

    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"

    // Update body font family for Arabic
    if (newLang === "ar") {
      document.body.style.fontFamily = "var(--font-cairo), sans-serif"
    } else {
      document.body.style.fontFamily = "var(--font-poppins), sans-serif"
    }
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 text-black hover:text-[#007A3D] transition-colors"
    >
      <Globe className="h-4 w-4" />
      <span className="font-medium">{language === "en" ? "العربية" : "English"}</span>
    </Button>
  )
}
