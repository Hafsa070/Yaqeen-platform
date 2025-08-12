"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Heart, Shield, Users, Home, Eye, EyeOff, CheckCircle, UserCheck } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    registerFamily: "Register Your Family",
    registerSubtitle:
      "Share your story with our community. Every family deserves support, and we're here to help connect you with generous donors.",
    securePrivate: "Secure & Private",
    verifiedProcess: "Verified Process",
    directSupport: "Direct Support",
    personalInfo: "Personal Information",
    personalInfoDesc: "Tell us about yourself and your family",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    emailDesc: "We'll use this to send you updates and verification emails",
    password: "Password",
    passwordDesc: "Minimum 8 characters with letters and numbers",
    phoneNumber: "Phone Number",
    phoneDesc: "For verification and emergency contact",
    address: "Address",
    city: "City",
    familyDetails: "Family Details",
    familyDetailsDesc: "Help us understand your family's situation",
    familyMembers: "Number of Family Members",
    familyMembersDesc: "Include all family members living together",
    yourStory: "Your Story (Optional)",
    storyPlaceholder:
      "Share your family's story, current situation, and what kind of support you need. This helps donors understand how they can best help you.",
    storyDesc: "Your story helps donors connect with your family. Be honest and specific about your needs.",
    privacyMatters: "Your Privacy Matters",
    privacyDesc:
      "All information is encrypted and verified by our team. We only share what's necessary to connect you with donors.",
    whatHappensNext: "What Happens Next?",
    verificationSteps: [
      "Our team will review your application within 24-48 hours",
      "We may contact you for additional verification",
      "Once approved, your case will be published for donors to see",
      "You'll receive updates on donations and support",
    ],
    agreeTerms: "I agree to the Terms of Service and Privacy Policy",
    agreeTermsDesc: "By registering, you agree to our Terms of Service and Privacy Policy.",
    agreeVerification: "I consent to the verification process",
    agreeVerificationDesc:
      "I understand that Yaqeen will verify my information through local partners and documentation to ensure transparency for donors.",
    submitRegistration: "Submit Registration",
    alreadyHaveAccount: "Already have an account?",
    signInHere: "Sign in here",
    // Form placeholders
    firstNamePlaceholder: "Enter your first name",
    lastNamePlaceholder: "Enter your last name",
    emailPlaceholder: "your.email@example.com",
    passwordPlaceholder: "Create a secure password",
    phonePlaceholder: "+970 XX XXX XXXX",
    addressPlaceholder: "Street address",
    selectCity: "Select your city",
    selectFamilyMembers: "Select number of family members",
    // Cities
    gazaCity: "Gaza City",
    khanYounis: "Khan Younis",
    rafah: "Rafah",
    deirAlBalah: "Deir al-Balah",
    beitLahia: "Beit Lahia",
    beitHanoun: "Beit Hanoun",
    jabalia: "Jabalia",
    other: "Other",
    // Family member counts
    person1: "1 person",
    people2: "2 people",
    people3: "3 people",
    people4: "4 people",
    people5: "5 people",
    people6: "6 people",
    people7: "7 people",
    people8: "8 people",
    people9Plus: "9 or more people",
    termsOfService: "Terms of Service",
    privacyPolicy: "Privacy Policy",
  },
  ar: {
    registerFamily: "تسجيل عائلتك",
    registerSubtitle: "شارك قصتك مع مجتمعنا. كل عائلة تستحق الدعم، ونحن هنا لمساعدتك في التواصل مع المتبرعين الكرماء.",
    securePrivate: "آمن وخاص",
    verifiedProcess: "عملية موثقة",
    directSupport: "دعم مباشر",
    personalInfo: "المعلومات الشخصية",
    personalInfoDesc: "أخبرنا عن نفسك وعن عائلتك",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    emailAddress: "عنوان البريد الإلكتروني",
    emailDesc: "سنستخدم هذا لإرسال التحديثات ورسائل التحقق إليك",
    password: "كلمة المرور",
    passwordDesc: "8 أحرف على الأقل مع أحرف وأرقام",
    phoneNumber: "رقم الهاتف",
    phoneDesc: "للتحقق والاتصال في حالات الطوارئ",
    address: "العنوان",
    city: "المدينة",
    familyDetails: "تفاصيل العائلة",
    familyDetailsDesc: "ساعدنا في فهم وضع عائلتك",
    familyMembers: "عدد أفراد العائلة",
    familyMembersDesc: "اشمل جميع أفراد العائلة الذين يعيشون معاً",
    yourStory: "قصتك (اختياري)",
    storyPlaceholder:
      "شارك قصة عائلتك والوضع الحالي ونوع الدعم الذي تحتاجه. هذا يساعد المتبرعين على فهم كيف يمكنهم مساعدتك بأفضل طريقة.",
    storyDesc: "قصتك تساعد المتبرعين على التواصل مع عائلتك. كن صادقاً ومحدداً حول احتياجاتك.",
    privacyMatters: "خصوصيتك مهمة",
    privacyDesc: "جميع المعلومات مشفرة وموثقة من قبل فريقنا. نشارك فقط ما هو ضروري لربطك بالمتبرعين.",
    whatHappensNext: "ما الذي سيحدث بعد ذلك؟",
    verificationSteps: [
      "سيراجع فريقنا طلبك خلال 24-48 ساعة",
      "قد نتصل بك للتحقق الإضافي",
      "بمجرد الموافقة، ستُنشر حالتك للمتبرعين لرؤيتها",
      "ستتلقى تحديثات حول التبرعات والدعم",
    ],
    agreeTerms: "أوافق على شروط الخدمة وسياسة الخصوصية",
    agreeTermsDesc: "بالتسجيل، أنت توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا.",
    agreeVerification: "أوافق على عملية التحقق",
    agreeVerificationDesc:
      "أفهم أن يقين ستتحقق من معلوماتي من خلال الشركاء المحليين والوثائق لضمان الشفافية للمتبرعين.",
    submitRegistration: "إرسال التسجيل",
    alreadyHaveAccount: "لديك حساب بالفعل؟",
    signInHere: "سجل دخولك هنا",
    // Form placeholders
    firstNamePlaceholder: "أدخل اسمك الأول",
    lastNamePlaceholder: "أدخل اسم العائلة",
    emailPlaceholder: "your.email@example.com",
    passwordPlaceholder: "أنشئ كلمة مرور آمنة",
    phonePlaceholder: "+970 XX XXX XXXX",
    addressPlaceholder: "عنوان الشارع",
    selectCity: "اختر مدينتك",
    selectFamilyMembers: "اختر عدد أفراد العائلة",
    // Cities
    gazaCity: "مدينة غزة",
    khanYounis: "خان يونس",
    rafah: "رفح",
    deirAlBalah: "دير البلح",
    beitLahia: "بيت لاهيا",
    beitHanoun: "بيت حانون",
    jabalia: "جباليا",
    other: "أخرى",
    // Family member counts
    person1: "شخص واحد",
    people2: "شخصان",
    people3: "3 أشخاص",
    people4: "4 أشخاص",
    people5: "5 أشخاص",
    people6: "6 أشخاص",
    people7: "7 أشخاص",
    people8: "8 أشخاص",
    people9Plus: "9 أشخاص أو أكثر",
    termsOfService: "شروط الخدمة",
    privacyPolicy: "سياسة الخصوصية",
  },
}

export default function FamilySignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    city: "",
    familyMembers: "",
    story: "",
    agreeToTerms: false,
    agreeToVerification: false,
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Family signup:", formData)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-1 py-8 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#D32F2F] rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">{t.registerFamily}</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">{t.registerSubtitle}</p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center justify-center space-x-2 text-[#007A3D]">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">{t.securePrivate}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-[#007A3D]">
              <UserCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">{t.verifiedProcess}</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-[#007A3D]">
              <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">{t.directSupport}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8">
              {/* Personal Information */}
              <Card className="bg-white shadow-lg border-t-4 border-t-[#D32F2F]">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-black flex items-center">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#D32F2F] mr-2" />
                    {t.personalInfo}
                  </CardTitle>
                  <p className="text-gray-600 text-xs sm:text-sm">{t.personalInfoDesc}</p>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm sm:text-base text-black font-medium">
                        {t.firstName} *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-11 sm:h-12 text-sm sm:text-base"
                        placeholder={t.firstNamePlaceholder}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm sm:text-base text-black font-medium">
                        {t.lastName} *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-11 sm:h-12 text-sm sm:text-base"
                        placeholder={t.lastNamePlaceholder}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm sm:text-base text-black font-medium">
                      {t.emailAddress} *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-11 sm:h-12 text-sm sm:text-base"
                      placeholder={t.emailPlaceholder}
                      required
                    />
                    <p className="text-xs text-gray-500">{t.emailDesc}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm sm:text-base text-black font-medium">
                      {t.password} *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] pr-10 h-11 sm:h-12 text-sm sm:text-base"
                        placeholder={t.passwordPlaceholder}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">{t.passwordDesc}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm sm:text-base text-black font-medium">
                      {t.phoneNumber} *
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-11 sm:h-12 text-sm sm:text-base"
                      placeholder={t.phonePlaceholder}
                      required
                    />
                    <p className="text-xs text-gray-500">{t.phoneDesc}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm sm:text-base text-black font-medium">
                      {t.address} *
                    </Label>
                    <Input
                      id="address"
                      type="text"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-11 sm:h-12 text-sm sm:text-base"
                      placeholder={t.addressPlaceholder}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-sm sm:text-base text-black font-medium">
                      {t.city} *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("city", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F] h-11 sm:h-12 text-sm sm:text-base">
                        <SelectValue placeholder={t.selectCity} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="gaza">{t.gazaCity}</SelectItem>
                        <SelectItem value="khan-younis">{t.khanYounis}</SelectItem>
                        <SelectItem value="rafah">{t.rafah}</SelectItem>
                        <SelectItem value="deir-al-balah">{t.deirAlBalah}</SelectItem>
                        <SelectItem value="beit-lahia">{t.beitLahia}</SelectItem>
                        <SelectItem value="beit-hanoun">{t.beitHanoun}</SelectItem>
                        <SelectItem value="jabalia">{t.jabalia}</SelectItem>
                        <SelectItem value="other">{t.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Family Details & Story */}
              <Card className="bg-white shadow-lg border-t-4 border-t-[#007A3D]">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-lg sm:text-xl font-semibold text-black flex items-center">
                    <Home className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D] mr-2" />
                    {t.familyDetails}
                  </CardTitle>
                  <p className="text-gray-600 text-xs sm:text-sm">{t.familyDetailsDesc}</p>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                  <div className="space-y-2">
                    <Label htmlFor="familyMembers" className="text-sm sm:text-base text-black font-medium">
                      {t.familyMembers} *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("familyMembers", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D] h-11 sm:h-12 text-sm sm:text-base">
                        <SelectValue placeholder={t.selectFamilyMembers} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">{t.person1}</SelectItem>
                        <SelectItem value="2">{t.people2}</SelectItem>
                        <SelectItem value="3">{t.people3}</SelectItem>
                        <SelectItem value="4">{t.people4}</SelectItem>
                        <SelectItem value="5">{t.people5}</SelectItem>
                        <SelectItem value="6">{t.people6}</SelectItem>
                        <SelectItem value="7">{t.people7}</SelectItem>
                        <SelectItem value="8">{t.people8}</SelectItem>
                        <SelectItem value="9+">{t.people9Plus}</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500">{t.familyMembersDesc}</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="story" className="text-sm sm:text-base text-black font-medium">
                      {t.yourStory}
                    </Label>
                    <Textarea
                      id="story"
                      value={formData.story}
                      onChange={(e) => handleInputChange("story", e.target.value)}
                      className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D] min-h-[100px] sm:min-h-[120px] text-sm sm:text-base"
                      placeholder={t.storyPlaceholder}
                    />
                    <p className="text-xs text-gray-500">{t.storyDesc}</p>
                  </div>

                  {/* Trust Building Section */}
                  <div className="bg-gradient-to-r from-[#007A3D]/5 to-[#D32F2F]/5 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-black mb-1">{t.privacyMatters}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{t.privacyDesc}</p>
                      </div>
                    </div>
                  </div>

                  {/* Verification Process Info */}
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm sm:text-base font-medium text-black mb-1">{t.whatHappensNext}</h4>
                        <ul className="text-xs sm:text-sm text-gray-600 space-y-1">
                          {t.verificationSteps.map((step, index) => (
                            <li key={index}>• {step}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Terms and Conditions */}
            <Card className="bg-white shadow-lg mt-6 sm:mt-8">
              <CardContent className="p-4 sm:p-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="agreeToTerms"
                        className="text-sm sm:text-base text-black font-medium cursor-pointer"
                      >
                        {t.agreeTerms} *
                      </Label>
                      <p className="text-xs sm:text-sm text-gray-600">
                        {t.agreeTermsDesc.split("Terms of Service")[0]}
                        <Link href="/terms" className="text-[#007A3D] hover:underline">
                          {t.termsOfService}
                        </Link>
                        {language === "en" ? " and " : " و"}
                        <Link href="/privacy" className="text-[#007A3D] hover:underline">
                          {t.privacyPolicy}
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToVerification"
                      checked={formData.agreeToVerification}
                      onCheckedChange={(checked) => handleInputChange("agreeToVerification", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="agreeToVerification"
                        className="text-sm sm:text-base text-black font-medium cursor-pointer"
                      >
                        {t.agreeVerification} *
                      </Label>
                      <p className="text-xs sm:text-sm text-gray-600">{t.agreeVerificationDesc}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="mt-6 sm:mt-8 text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white px-8 sm:px-12 py-3 text-base sm:text-lg font-medium w-full sm:w-auto"
                disabled={!formData.agreeToTerms || !formData.agreeToVerification}
              >
                {t.submitRegistration}
              </Button>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
                {t.alreadyHaveAccount}{" "}
                <Link href="/login" className="text-[#007A3D] hover:underline font-medium">
                  {t.signInHere}
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
