"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Globe, Menu, X, ChevronDown, Users, Heart } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const translations = {
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    browseFamilies: "Browse Families",
    myDonations: "My Donations",
    submitRequest: "Submit Request",
    myCase: "My Case",
    browseCases: "Browse Cases",
    howItWorks: "How It Works",
    login: "Login",
    signUp: "Sign Up",
    familyInNeed: "Family in Need",
    requestAssistance: "Request assistance",
    generousDonor: "Generous Donor",
    helpFamilies: "Help families",
    welcome: "Welcome",
    family: "Family",
    donor: "Donor",
    logout: "Logout",
    donateNow: "Donate Now",
    signUpAs: "Sign Up As:",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    contact: "اتصل بنا",
    browseFamilies: "تصفح العائلات",
    myDonations: "تبرعاتي",
    submitRequest: "تقديم طلب",
    myCase: "حالتي",
    browseCases: "تصفح الحالات",
    howItWorks: "كيف يعمل",
    login: "تسجيل الدخول",
    signUp: "إنشاء حساب",
    familyInNeed: "عائلة محتاجة",
    requestAssistance: "طلب المساعدة",
    generousDonor: "متبرع كريم",
    helpFamilies: "مساعدة العائلات",
    welcome: "مرحباً",
    family: "عائلة",
    donor: "متبرع",
    logout: "تسجيل الخروج",
    donateNow: "تبرع الآن",
    signUpAs: "إنشاء حساب كـ:",
  },
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [userType, setUserType] = useState<"family" | "donor" | null>(null)

  const t = translations[language]

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en"
    setLanguage(newLang)

    document.documentElement.lang = newLang
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"

    if (newLang === "ar") {
      document.body.style.fontFamily = "var(--font-cairo), sans-serif"
    } else {
      document.body.style.fontFamily = "var(--font-poppins), sans-serif"
    }
  }

  const getNavigation = () => {
    const baseNav = [
      { name: t.home, href: "/" },
      { name: t.about, href: "/about" },
      { name: t.contact, href: "/contact" },
    ]

    if (userType === "donor") {
      return [
        ...baseNav.slice(0, 1),
        { name: t.browseFamilies, href: "/cases" },
        { name: t.myDonations, href: "/dashboard" },
        ...baseNav.slice(1),
      ]
    } else if (userType === "family") {
      return [
        ...baseNav.slice(0, 1),
        { name: t.submitRequest, href: "/register/family" },
        { name: t.myCase, href: "/dashboard" },
        ...baseNav.slice(1),
      ]
    } else {
      return [
        ...baseNav.slice(0, 1),
        { name: t.browseCases, href: "/cases" },
        { name: t.howItWorks, href: "/how-it-works" },
        ...baseNav.slice(1),
      ]
    }
  }

  const navigation = getNavigation()

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#007A3D]">Ya</span>
              <span className="text-2xl font-bold text-[#D32F2F]">qeen</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#007A3D] transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Language Switcher & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="text-black hover:text-[#007A3D]">
              <Globe className="w-4 h-4 mr-1" />
              {language === "en" ? "العربية" : "English"}
            </Button>

            {!userType ? (
              <>
                <Link href="/login">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white bg-transparent"
                  >
                    {t.login}
                  </Button>
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button size="sm" className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white">
                      {t.signUp}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <DropdownMenuItem asChild>
                      <Link href="/signup/family" className="flex items-center cursor-pointer">
                        <Users className="w-4 h-4 mr-2 text-[#007A3D]" />
                        <div>
                          <div className="font-medium">{t.familyInNeed}</div>
                          <div className="text-sm text-gray-500">{t.requestAssistance}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href="/signup/donor" className="flex items-center cursor-pointer">
                        <Heart className="w-4 h-4 mr-2 text-[#D32F2F]" />
                        <div>
                          <div className="font-medium">{t.generousDonor}</div>
                          <div className="text-sm text-gray-500">{t.helpFamilies}</div>
                        </div>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {t.welcome}, {userType === "family" ? t.family : t.donor}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setUserType(null)}
                  className="border-gray-300 text-gray-600 hover:bg-gray-50"
                >
                  {t.logout}
                </Button>
              </div>
            )}

            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-black">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black hover:text-[#007A3D] transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200">
                {!userType ? (
                  <>
                    <Link href="/login" className="w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white bg-transparent"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {t.login}
                      </Button>
                    </Link>

                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-700 px-2">{t.signUpAs}</p>
                      <Link href="/signup/family" className="w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white justify-start bg-transparent"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          {t.familyInNeed}
                        </Button>
                      </Link>
                      <Link href="/signup/donor" className="w-full">
                        <Button
                          size="sm"
                          className="w-full bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white justify-start"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Heart className="w-4 h-4 mr-2" />
                          {t.generousDonor}
                        </Button>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-between px-2">
                    <span className="text-sm text-gray-600">
                      {t.welcome}, {userType === "family" ? t.family : t.donor}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setUserType(null)
                        setIsMenuOpen(false)
                      }}
                      className="border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      {t.logout}
                    </Button>
                  </div>
                )}

                <div className="flex items-center justify-between pt-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleLanguage}
                    className="text-black hover:text-[#007A3D]"
                  >
                    <Globe className="w-4 h-4 mr-1" />
                    {language === "en" ? "العربية" : "English"}
                  </Button>
            
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
