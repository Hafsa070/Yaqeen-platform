"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const translations = {
  en: {
    contactUs: "Contact Us",
    contactSubtitle:
      "We're here to help. Reach out to us with any questions, concerns, or if you need assistance with donations or family registration.",
    sendMessage: "Send us a Message",
    fullName: "Full Name",
    emailAddress: "Email Address",
    inquiryType: "Inquiry Type",
    subject: "Subject",
    message: "Message",
    sendMessageButton: "Send Message",
    getInTouch: "Get in Touch",
    generalInquiries: "General Inquiries",
    generalInquiriesDesc: "For general questions and information",
    supportLine: "Support Line",
    supportLineDesc: "Monday to Friday, 9 AM - 6 PM EST",
    urgentCases: "Urgent Cases",
    urgentCasesDesc: "24/7 hotline for emergency situations",
    headquarters: "Headquarters",
    headquartersDesc: "Local coordination office",
    officeHours: "Office Hours",
    mondayFriday: "Monday - Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    closed: "Closed",
    emergencyHotline: "Emergency hotline available 24/7",
    needQuickAnswers: "Need Quick Answers?",
    needQuickAnswersDesc: "Check our frequently asked questions for immediate help.",
    viewFAQ: "View FAQ",
    thankYouMessage: "Thank you for your message! We'll get back to you soon.",
    // Form placeholders
    fullNamePlaceholder: "Your full name",
    emailPlaceholder: "your.email@example.com",
    selectInquiryType: "Select inquiry type",
    subjectPlaceholder: "Brief description of your inquiry",
    messagePlaceholder: "Please provide details about your inquiry...",
    // Inquiry types
    generalInformation: "General Information",
    donorSupport: "Donor Support",
    familyRegistration: "Family Registration",
    technicalIssues: "Technical Issues",
    partnershipInquiry: "Partnership Inquiry",
    mediaRequest: "Media Request",
    other: "Other",
  },
  ar: {
    contactUs: "اتصل بنا",
    contactSubtitle:
      "نحن هنا للمساعدة. تواصل معنا لأي أسئلة أو مخاوف، أو إذا كنت تحتاج مساعدة في التبرعات أو تسجيل العائلة.",
    sendMessage: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    inquiryType: "نوع الاستفسار",
    subject: "الموضوع",
    message: "الرسالة",
    sendMessageButton: "إرسال الرسالة",
    getInTouch: "تواصل معنا",
    generalInquiries: "الاستفسارات العامة",
    generalInquiriesDesc: "للأسئلة العامة والمعلومات",
    supportLine: "خط الدعم",
    supportLineDesc: "من الاثنين إلى الجمعة، 9 صباحاً - 6 مساءً بتوقيت شرق أمريكا",
    urgentCases: "الحالات العاجلة",
    urgentCasesDesc: "خط ساخن متاح 24/7 للحالات الطارئة",
    headquarters: "المقر الرئيسي",
    headquartersDesc: "مكتب التنسيق المحلي",
    officeHours: "ساعات العمل",
    mondayFriday: "الاثنين - الجمعة",
    saturday: "السبت",
    sunday: "الأحد",
    closed: "مغلق",
    emergencyHotline: "الخط الساخن للطوارئ متاح 24/7",
    needQuickAnswers: "تحتاج إجابات سريعة؟",
    needQuickAnswersDesc: "تحقق من الأسئلة الشائعة للحصول على مساعدة فورية.",
    viewFAQ: "عرض الأسئلة الشائعة",
    thankYouMessage: "شكراً لرسالتك! سنتواصل معك قريباً.",
    // Form placeholders
    fullNamePlaceholder: "اسمك الكامل",
    emailPlaceholder: "your.email@example.com",
    selectInquiryType: "اختر نوع الاستفسار",
    subjectPlaceholder: "وصف مختصر لاستفسارك",
    messagePlaceholder: "يرجى تقديم تفاصيل حول استفسارك...",
    // Inquiry types
    generalInformation: "معلومات عامة",
    donorSupport: "دعم المتبرعين",
    familyRegistration: "تسجيل العائلة",
    technicalIssues: "مشاكل تقنية",
    partnershipInquiry: "استفسار شراكة",
    mediaRequest: "طلب إعلامي",
    other: "أخرى",
  },
}

export default function ContactPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
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

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(t.thankYouMessage)
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              {t.contactUs}
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">{t.contactSubtitle}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-lg sm:text-xl">{t.sendMessage}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm sm:text-base text-black font-medium">
                          {t.fullName} *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder={t.fullNamePlaceholder}
                          required
                          className="mt-1 h-11 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm sm:text-base text-black font-medium">
                          {t.emailAddress} *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder={t.emailPlaceholder}
                          required
                          className="mt-1 h-11 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-sm sm:text-base text-black font-medium">
                        {t.inquiryType}
                      </Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="mt-1 h-11 sm:h-12 text-sm sm:text-base">
                          <SelectValue placeholder={t.selectInquiryType} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">{t.generalInformation}</SelectItem>
                          <SelectItem value="donor">{t.donorSupport}</SelectItem>
                          <SelectItem value="family">{t.familyRegistration}</SelectItem>
                          <SelectItem value="technical">{t.technicalIssues}</SelectItem>
                          <SelectItem value="partnership">{t.partnershipInquiry}</SelectItem>
                          <SelectItem value="media">{t.mediaRequest}</SelectItem>
                          <SelectItem value="other">{t.other}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm sm:text-base text-black font-medium">
                        {t.subject} *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder={t.subjectPlaceholder}
                        required
                        className="mt-1 h-11 sm:h-12 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm sm:text-base text-black font-medium">
                        {t.message} *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder={t.messagePlaceholder}
                        rows={5}
                        required
                        className="mt-1 text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#007A3D] hover:bg-[#007A3D]/90 text-white h-12 text-sm sm:text-base"
                    >
                      {t.sendMessageButton}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Details */}
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-lg sm:text-xl">{t.getInTouch}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">{t.generalInquiries}</h3>
                      <p className="text-[#007A3D] font-medium text-sm sm:text-base">info@yaqeen.org</p>
                      <p className="text-xs sm:text-sm text-gray-600">{t.generalInquiriesDesc}</p>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">{t.supportLine}</h3>
                      <p className="text-[#007A3D] font-medium text-sm sm:text-base">+1-XXX-XXX-XXXX</p>
                      <p className="text-xs sm:text-sm text-gray-600">{t.supportLineDesc}</p>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">{t.urgentCases}</h3>
                      <p className="text-[#D32F2F] font-medium text-sm sm:text-base">+970-XXX-XXXX</p>
                      <p className="text-xs sm:text-sm text-gray-600">{t.urgentCasesDesc}</p>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">{t.headquarters}</h3>
                      <p className="text-[#007A3D] font-medium text-sm sm:text-base">
                        {language === "ar" ? "مدينة غزة، فلسطين" : "Gaza City, Palestine"}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600">{t.headquartersDesc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-lg sm:text-xl">{t.officeHours}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
                  <div className="flex justify-between">
                    <span className="text-black font-medium text-sm sm:text-base">{t.mondayFriday}</span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      {language === "ar" ? "9:00 ص - 6:00 م" : "9:00 AM - 6:00 PM"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black font-medium text-sm sm:text-base">{t.saturday}</span>
                    <span className="text-gray-600 text-sm sm:text-base">
                      {language === "ar" ? "10:00 ص - 4:00 م" : "10:00 AM - 4:00 PM"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black font-medium text-sm sm:text-base">{t.sunday}</span>
                    <span className="text-gray-600 text-sm sm:text-base">{t.closed}</span>
                  </div>
                  <div className="pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-[#D32F2F] font-medium">{t.emergencyHotline}</p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="bg-[#007A3D]/5 border-[#007A3D]/20">
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-[#007A3D] mb-2">{t.needQuickAnswers}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">{t.needQuickAnswersDesc}</p>
                  <Button
                    variant="outline"
                    className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white bg-transparent text-sm h-10 w-full sm:w-auto"
                  >
                    {t.viewFAQ}
                  </Button>
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
