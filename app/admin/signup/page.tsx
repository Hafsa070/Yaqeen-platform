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
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, Users, Mail, Lock, Phone, Building, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    adminSignup: "Admin Registration Request",
    adminSignupSubtitle: "Request administrative access to the Yaqeen platform",
    personalInfo: "Personal Information",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    password: "Password",
    confirmPassword: "Confirm Password",
    organizationInfo: "Organization Information",
    organizationName: "Organization Name",
    position: "Position/Title",
    department: "Department",
    accessRequest: "Access Request Details",
    accessLevel: "Requested Access Level",
    superAdmin: "Super Administrator",
    moderator: "Content Moderator",
    analyst: "Data Analyst",
    support: "Support Staff",
    justification: "Justification",
    justificationPlaceholder: "Please explain why you need administrative access and how you plan to use it...",
    agreeToTerms: "I agree to the Admin Terms of Service and Code of Conduct",
    submitRequest: "Submit Access Request",
    alreadyAdmin: "Already have admin access?",
    signInHere: "Sign in here",
    requestProcess: "Request Process",
    step1: "Application Review",
    step1Desc: "Your request will be reviewed by our security team",
    step2: "Background Verification",
    step2Desc: "We'll verify your identity and organization",
    step3: "Access Approval",
    step3Desc: "Upon approval, you'll receive login credentials",
    securityNote: "Security Note",
    securityNoteDesc: "All admin access requests are subject to thorough security screening and approval.",
  },
  ar: {
    adminSignup: "طلب تسجيل المدير",
    adminSignupSubtitle: "طلب الوصول الإداري إلى منصة يقين",
    personalInfo: "المعلومات الشخصية",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    emailAddress: "عنوان البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    password: "كلمة المرور",
    confirmPassword: "تأكيد كلمة المرور",
    organizationInfo: "معلومات المنظمة",
    organizationName: "اسم المنظمة",
    position: "المنصب/اللقب",
    department: "القسم",
    accessRequest: "تفاصيل طلب الوصول",
    accessLevel: "مستوى الوصول المطلوب",
    superAdmin: "مدير عام",
    moderator: "مشرف المحتوى",
    analyst: "محلل البيانات",
    support: "موظف الدعم",
    justification: "المبرر",
    justificationPlaceholder: "يرجى شرح سبب حاجتك للوصول الإداري وكيف تخطط لاستخدامه...",
    agreeToTerms: "أوافق على شروط خدمة المدير ومدونة السلوك",
    submitRequest: "إرسال طلب الوصول",
    alreadyAdmin: "لديك وصول إداري بالفعل؟",
    signInHere: "سجل دخولك هنا",
    requestProcess: "عملية الطلب",
    step1: "مراجعة الطلب",
    step1Desc: "سيتم مراجعة طلبك من قبل فريق الأمان",
    step2: "التحقق من الخلفية",
    step2Desc: "سنتحقق من هويتك ومنظمتك",
    step3: "موافقة الوصول",
    step3Desc: "عند الموافقة، ستتلقى بيانات اعتماد تسجيل الدخول",
    securityNote: "ملاحظة أمنية",
    securityNoteDesc: "جميع طلبات الوصول الإداري تخضع لفحص أمني شامل وموافقة.",
  },
}

export default function AdminSignupPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    organizationName: "",
    position: "",
    department: "",
    accessLevel: "",
    justification: "",
    agreeToTerms: false,
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
    console.log("Admin signup request:", formData)
    alert("Your admin access request has been submitted for review!")
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#007A3D] to-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">{t.adminSignup}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t.adminSignupSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Registration Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <Card className="bg-white shadow-lg border-t-4 border-t-[#007A3D]">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-[#007A3D]" />
                      <span>{t.personalInfo}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName" className="text-black font-medium">
                          {t.firstName} *
                        </Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange("firstName", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName" className="text-black font-medium">
                          {t.lastName} *
                        </Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange("lastName", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-black font-medium">
                        {t.emailAddress} *
                      </Label>
                      <div className="relative mt-1">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-black font-medium">
                        {t.phoneNumber} *
                      </Label>
                      <div className="relative mt-1">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="password" className="text-black font-medium">
                          {t.password} *
                        </Label>
                        <div className="relative mt-1">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-10 pr-10"
                            required
                          />
                          <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword" className="text-black font-medium">
                          {t.confirmPassword} *
                        </Label>
                        <div className="relative mt-1">
                          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="confirmPassword"
                            type={showPassword ? "text" : "password"}
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Organization Information */}
                <Card className="bg-white shadow-lg border-t-4 border-t-[#D32F2F]">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-[#D32F2F]" />
                      <span>{t.organizationInfo}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="organizationName" className="text-black font-medium">
                        {t.organizationName} *
                      </Label>
                      <Input
                        id="organizationName"
                        value={formData.organizationName}
                        onChange={(e) => handleInputChange("organizationName", e.target.value)}
                        className="mt-1"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="position" className="text-black font-medium">
                          {t.position} *
                        </Label>
                        <Input
                          id="position"
                          value={formData.position}
                          onChange={(e) => handleInputChange("position", e.target.value)}
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="department" className="text-black font-medium">
                          {t.department}
                        </Label>
                        <Input
                          id="department"
                          value={formData.department}
                          onChange={(e) => handleInputChange("department", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Access Request */}
                <Card className="bg-white shadow-lg border-t-4 border-t-[#007A3D]">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-[#007A3D]" />
                      <span>{t.accessRequest}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="accessLevel" className="text-black font-medium">
                        {t.accessLevel} *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange("accessLevel", value)}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select access level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="super-admin">{t.superAdmin}</SelectItem>
                          <SelectItem value="moderator">{t.moderator}</SelectItem>
                          <SelectItem value="analyst">{t.analyst}</SelectItem>
                          <SelectItem value="support">{t.support}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="justification" className="text-black font-medium">
                        {t.justification} *
                      </Label>
                      <Textarea
                        id="justification"
                        value={formData.justification}
                        onChange={(e) => handleInputChange("justification", e.target.value)}
                        placeholder={t.justificationPlaceholder}
                        rows={4}
                        className="mt-1"
                        required
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Terms and Submit */}
                <Card className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                          className="mt-1"
                          required
                        />
                        <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer">
                          {t.agreeToTerms}
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-[#007A3D] to-[#D32F2F] hover:from-[#007A3D]/90 hover:to-[#D32F2F]/90 text-white py-3 text-lg font-semibold"
                        disabled={!formData.agreeToTerms}
                      >
                        {t.submitRequest}
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          {t.alreadyAdmin}{" "}
                          <Link href="/admin/login" className="text-[#007A3D] hover:underline font-medium">
                            {t.signInHere}
                          </Link>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </form>
            </div>

            {/* Process Information */}
            <div className="space-y-6">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="text-[#007A3D]">{t.requestProcess}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#007A3D] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h4 className="font-medium text-black">{t.step1}</h4>
                      <p className="text-sm text-gray-600">{t.step1Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#007A3D] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h4 className="font-medium text-black">{t.step2}</h4>
                      <p className="text-sm text-gray-600">{t.step2Desc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-[#D32F2F] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h4 className="font-medium text-black">{t.step3}</h4>
                      <p className="text-sm text-gray-600">{t.step3Desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#007A3D]/5 to-[#D32F2F]/5">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black mb-1">{t.securityNote}</h4>
                      <p className="text-sm text-gray-600">{t.securityNoteDesc}</p>
                    </div>
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
