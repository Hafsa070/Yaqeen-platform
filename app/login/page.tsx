"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Users, Heart, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    welcomeBack: "Welcome Back to Yaqeen",
    welcomeSubtitle:
      "Continue your journey of compassion and support. Sign in to access your account and make a difference.",
    signIn: "Sign In",
    chooseAccountType: "Choose your account type to continue",
    family: "Family",
    donor: "Donor",
    familyLogin: "Family Login",
    familyLoginSubtitle: "Access your family assistance account",
    donorLogin: "Donor Login",
    donorLoginSubtitle: "Access your donor dashboard and impact",
    emailAddress: "Email Address",
    emailPlaceholder: "your.email@example.com",
    password: "Password",
    passwordPlaceholder: "Enter your password",
    rememberMe: "Remember me",
    forgotPassword: "Forgot password?",
    signInAsFamily: "Sign In as Family",
    signInAsDonor: "Sign In as Donor",
    needAssistance: "Need assistance?",
    registerFamily: "Register your family",
    newToYaqeen: "New to Yaqeen?",
    becomeDonor: "Become a donor",
    secureAndTrusted: "Secure & Trusted",
    bankLevelSecurity: "Bank-Level Security",
    bankLevelSecurityDesc: "Your data is protected with 256-bit SSL encryption",
    verifiedFamilies: "Verified Families",
    verifiedFamiliesDesc: "All families are verified by our local partners",
    fullTransparency: "100% Transparency",
    fullTransparencyDesc: "Track every donation and see real impact",
    needHelp: "Need Help?",
    needHelpDesc: "Our support team is here to assist you with any questions or technical issues.",
    contactSupport: "Contact Support",
    learnAboutYaqeen: "Learn About Yaqeen",
  },
  ar: {
    welcomeBack: "مرحباً بعودتك إلى يقين",
    welcomeSubtitle: "تابع رحلتك في الرحمة والدعم. سجل دخولك للوصول إلى حسابك وإحداث الفرق.",
    signIn: "تسجيل الدخول",
    chooseAccountType: "اختر نوع حسابك للمتابعة",
    family: "عائلة",
    donor: "متبرع",
    familyLogin: "دخول العائلة",
    familyLoginSubtitle: "الوصول إلى حساب المساعدة العائلية",
    donorLogin: "دخول المتبرع",
    donorLoginSubtitle: "الوصول إلى لوحة المتبرع وتأثيرك",
    emailAddress: "عنوان البريد الإلكتروني",
    emailPlaceholder: "your.email@example.com",
    password: "كلمة المرور",
    passwordPlaceholder: "أدخل كلمة المرور",
    rememberMe: "تذكرني",
    forgotPassword: "نسيت كلمة المرور؟",
    signInAsFamily: "تسجيل الدخول كعائلة",
    signInAsDonor: "تسجيل الدخول كمتبرع",
    needAssistance: "تحتاج مساعدة؟",
    registerFamily: "سجل عائلتك",
    newToYaqeen: "جديد على يقين؟",
    becomeDonor: "كن متبرعاً",
    secureAndTrusted: "آمن وموثوق",
    bankLevelSecurity: "أمان مصرفي",
    bankLevelSecurityDesc: "بياناتك محمية بتشفير SSL 256 بت",
    verifiedFamilies: "عائلات موثقة",
    verifiedFamiliesDesc: "جميع العائلات موثقة من قبل شركائنا المحليين",
    fullTransparency: "شفافية 100%",
    fullTransparencyDesc: "تتبع كل تبرع وشاهد التأثير الحقيقي",
    needHelp: "تحتاج مساعدة؟",
    needHelpDesc: "فريق الدعم لدينا هنا لمساعدتك في أي أسئلة أو مشاكل تقنية.",
    contactSupport: "اتصل بالدعم",
    learnAboutYaqeen: "تعرف على يقين",
  },
}

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("family")
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  useEffect(() => {
    const handleLanguageChange = () => {
      const currentLang = document.documentElement.lang as "en" | "ar"
      setLanguage(currentLang)
    }

    handleLanguageChange()

    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    })

    return () => observer.disconnect()
  }, [])

  const t = translations[language]

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleLogin = (userType: string) => {
    console.log(`Logging in as ${userType}:`, formData)
    alert(`Welcome back! Logging in as ${userType}...`)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#F5F5F5]">
        {/* Hero Section */}
        <section className="bg-white border-b border-gray-200 py-8 sm:py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              {t.welcomeBack}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">{t.welcomeSubtitle}</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Login Form */}
            <Card className="bg-white shadow-lg w-full">
              <CardHeader className="text-center pb-2 px-4 sm:px-6">
                <CardTitle className="text-xl sm:text-2xl font-bold text-black mb-2">{t.signIn}</CardTitle>
                <p className="text-sm sm:text-base text-gray-600">{t.chooseAccountType}</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-4 sm:mb-6 h-12">
                    <TabsTrigger
                      value="family"
                      className="flex items-center justify-center space-x-1 sm:space-x-2 data-[state=active]:bg-[#007A3D] data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{t.family}</span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="donor"
                      className="flex items-center justify-center space-x-1 sm:space-x-2 data-[state=active]:bg-[#007A3D] data-[state=active]:text-white text-xs sm:text-sm"
                    >
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>{t.donor}</span>
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="family" className="space-y-4">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#007A3D]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#007A3D]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-black">{t.familyLogin}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{t.familyLoginSubtitle}</p>
                    </div>

                    <form
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin("family")
                      }}
                    >
                      <div>
                        <Label htmlFor="family-email" className="text-sm sm:text-base text-black font-medium">
                          {t.emailAddress}
                        </Label>
                        <div className="relative mt-1">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="family-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder={t.emailPlaceholder}
                            className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="family-password" className="text-sm sm:text-base text-black font-medium">
                          {t.password}
                        </Label>
                        <div className="relative mt-1">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="family-password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            placeholder={t.passwordPlaceholder}
                            className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="family-remember"
                            checked={formData.rememberMe}
                            onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                          />
                          <Label htmlFor="family-remember" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                            {t.rememberMe}
                          </Label>
                        </div>
                        <Link href="/forgot-password" className="text-xs sm:text-sm text-[#007A3D] hover:underline">
                          {t.forgotPassword}
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#007A3D] hover:bg-[#007A3D]/90 text-white py-3 h-12 text-sm sm:text-base"
                      >
                        {t.signInAsFamily}
                      </Button>
                    </form>

                    <div className="text-center pt-4 border-t">
                      <p className="text-xs sm:text-sm text-gray-600">
                        {t.needAssistance}{" "}
                        <Link href="/register/family" className="text-[#007A3D] hover:underline font-medium">
                          {t.registerFamily}
                        </Link>
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="donor" className="space-y-4">
                    <div className="text-center mb-4 sm:mb-6">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F]" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-black">{t.donorLogin}</h3>
                      <p className="text-xs sm:text-sm text-gray-600">{t.donorLoginSubtitle}</p>
                    </div>

                    <form
                      className="space-y-4"
                      onSubmit={(e) => {
                        e.preventDefault()
                        handleLogin("donor")
                      }}
                    >
                      <div>
                        <Label htmlFor="donor-email" className="text-sm sm:text-base text-black font-medium">
                          {t.emailAddress}
                        </Label>
                        <div className="relative mt-1">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="donor-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            placeholder={t.emailPlaceholder}
                            className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="donor-password" className="text-sm sm:text-base text-black font-medium">
                          {t.password}
                        </Label>
                        <div className="relative mt-1">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="donor-password"
                            type="password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            placeholder={t.passwordPlaceholder}
                            className="pl-10 h-11 sm:h-12 text-sm sm:text-base"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id="donor-remember"
                            checked={formData.rememberMe}
                            onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                          />
                          <Label htmlFor="donor-remember" className="text-xs sm:text-sm text-gray-600 cursor-pointer">
                            {t.rememberMe}
                          </Label>
                        </div>
                        <Link href="/forgot-password" className="text-xs sm:text-sm text-[#D32F2F] hover:underline">
                          {t.forgotPassword}
                        </Link>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white py-3 h-12 text-sm sm:text-base"
                      >
                        {t.signInAsDonor}
                      </Button>
                    </form>

                    <div className="text-center pt-4 border-t">
                      <p className="text-xs sm:text-sm text-gray-600">
                        {t.newToYaqeen}{" "}
                        <Link href="/register/donor" className="text-[#D32F2F] hover:underline font-medium">
                          {t.becomeDonor}
                        </Link>
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Trust & Security Section */}
            <div className="space-y-4 sm:space-y-6">
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] flex items-center space-x-2 text-base sm:text-lg">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span>{t.secureAndTrusted}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-black">{t.bankLevelSecurity}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{t.bankLevelSecurityDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-black">{t.verifiedFamilies}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{t.verifiedFamiliesDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm sm:text-base font-medium text-black">{t.fullTransparency}</h4>
                      <p className="text-xs sm:text-sm text-gray-600">{t.fullTransparencyDesc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#007A3D]/5 to-[#D32F2F]/5 border-[#007A3D]/20">
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-black mb-2">{t.needHelp}</h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">{t.needHelpDesc}</p>
                  <div className="space-y-2">
                    <Link href="/contact" className="block">
                      <Button
                        variant="outline"
                        className="w-full border-[#007A3D] text-[#007A3D] bg-transparent h-10 text-sm"
                      >
                        {t.contactSupport}
                      </Button>
                    </Link>
                    <Link href="/about" className="block">
                      <Button variant="ghost" className="w-full text-gray-600 h-10 text-sm">
                        {t.learnAboutYaqeen}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
