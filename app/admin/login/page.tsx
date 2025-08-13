"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Lock, Shield, Settings, CheckCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    adminLogin: "Admin Login",
    adminLoginSubtitle: "Access the administrative dashboard and management tools",
    secureAccess: "Secure Admin Access",
    emailAddress: "Admin Email Address",
    emailPlaceholder: "admin@yaqeen.org",
    password: "Admin Password",
    passwordPlaceholder: "Enter your admin password",
    rememberMe: "Remember me on this device",
    forgotPassword: "Forgot password?",
    signInAsAdmin: "Sign In as Administrator",
    newAdmin: "New administrator?",
    requestAccess: "Request access",
    securityFeatures: "Security Features",
    twoFactorAuth: "Two-Factor Authentication",
    twoFactorAuthDesc: "Enhanced security with 2FA verification",
    auditLogs: "Audit Logs",
    auditLogsDesc: "Complete activity tracking and monitoring",
    roleBasedAccess: "Role-Based Access",
    roleBasedAccessDesc: "Granular permissions and access control",
    adminSupport: "Admin Support",
    adminSupportDesc: "Need help accessing your admin account? Contact our technical support team.",
    contactTechSupport: "Contact Tech Support",
    systemStatus: "System Status",
  },
  ar: {
    adminLogin: "دخول المدير",
    adminLoginSubtitle: "الوصول إلى لوحة التحكم الإدارية وأدوات الإدارة",
    secureAccess: "وصول آمن للمدير",
    emailAddress: "عنوان البريد الإلكتروني للمدير",
    emailPlaceholder: "admin@yaqeen.org",
    password: "كلمة مرور المدير",
    passwordPlaceholder: "أدخل كلمة مرور المدير",
    rememberMe: "تذكرني على هذا الجهاز",
    forgotPassword: "نسيت كلمة المرور؟",
    signInAsAdmin: "تسجيل الدخول كمدير",
    newAdmin: "مدير جديد؟",
    requestAccess: "طلب الوصول",
    securityFeatures: "ميزات الأمان",
    twoFactorAuth: "المصادقة الثنائية",
    twoFactorAuthDesc: "أمان محسن مع التحقق الثنائي",
    auditLogs: "سجلات المراجعة",
    auditLogsDesc: "تتبع ومراقبة النشاط الكامل",
    roleBasedAccess: "الوصول القائم على الأدوار",
    roleBasedAccessDesc: "أذونات دقيقة وتحكم في الوصول",
    adminSupport: "دعم المدير",
    adminSupportDesc: "تحتاج مساعدة في الوصول إلى حساب المدير؟ اتصل بفريق الدعم التقني.",
    contactTechSupport: "اتصل بالدعم التقني",
    systemStatus: "حالة النظام",
  },
}

export default function AdminLoginPage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")
  const [showPassword, setShowPassword] = useState(false)
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

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Admin login:", formData)
    // Redirect to admin dashboard after successful login
    window.location.href = "/admin/dashboard"
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <Header />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Admin Login Form */}
            <Card className="bg-white shadow-2xl border-0">
              <CardHeader className="text-center pb-2 px-6">
                <div className="w-16 h-16 bg-gradient-to-r from-[#007A3D] to-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-black mb-2">{t.adminLogin}</CardTitle>
                <p className="text-gray-600">{t.adminLoginSubtitle}</p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <Label htmlFor="admin-email" className="text-black font-medium">
                      {t.emailAddress}
                    </Label>
                    <div className="relative mt-1">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="admin-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder={t.emailPlaceholder}
                        className="pl-10 h-12 border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="admin-password" className="text-black font-medium">
                      {t.password}
                    </Label>
                    <div className="relative mt-1">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <Input
                        id="admin-password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        placeholder={t.passwordPlaceholder}
                        className="pl-10 pr-10 h-12 border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="admin-remember"
                        checked={formData.rememberMe}
                        onCheckedChange={(checked) => handleInputChange("rememberMe", checked as boolean)}
                      />
                      <Label htmlFor="admin-remember" className="text-sm text-gray-600 cursor-pointer">
                        {t.rememberMe}
                      </Label>
                    </div>
                    <Link href="/admin/forgot-password" className="text-sm text-[#007A3D] hover:underline">
                      {t.forgotPassword}
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#007A3D] to-[#D32F2F] hover:from-[#007A3D]/90 hover:to-[#D32F2F]/90 text-white py-3 h-12 text-base font-semibold"
                  >
                    <Settings className="w-4 h-4 mr-2" />
                    {t.signInAsAdmin}
                  </Button>
                </form>

                <div className="text-center pt-6 border-t border-gray-200 mt-6">
                  <p className="text-sm text-gray-600">
                    {t.newAdmin}{" "}
                    <Link href="/admin/signup" className="text-[#007A3D] hover:underline font-medium">
                      {t.requestAccess}
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Security Features */}
            <div className="space-y-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardHeader>
                  <CardTitle className="text-white flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>{t.securityFeatures}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">{t.twoFactorAuth}</h4>
                      <p className="text-sm text-gray-300">{t.twoFactorAuthDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">{t.auditLogs}</h4>
                      <p className="text-sm text-gray-300">{t.auditLogsDesc}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-white">{t.roleBasedAccess}</h4>
                      <p className="text-sm text-gray-300">{t.roleBasedAccessDesc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-white mb-2">{t.adminSupport}</h3>
                  <p className="text-sm text-gray-300 mb-4">{t.adminSupportDesc}</p>
                  <Link href="/admin/support">
                    <Button
                      variant="outline"
                      className="w-full border-white/30 text-white bg-transparent hover:bg-white/10"
                    >
                      {t.contactTechSupport}
                    </Button>
                  </Link>
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
