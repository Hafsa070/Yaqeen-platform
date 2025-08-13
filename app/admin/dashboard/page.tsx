"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts"
import {
  Users,
  Heart,
  MapPin,
  TrendingUp,
  DollarSign,
  Calendar,
  AlertTriangle,
  CheckCircle,
  Clock,
  Globe,
  LogOut,
} from "lucide-react"

export default function AdminDashboard() {
  const [language, setLanguage] = useState("ar")
  const [timeRange, setTimeRange] = useState("month")
  const router = useRouter() // Added router for navigation

  const handleLogout = () => {
    // Clear admin session/token here if using authentication
    // localStorage.removeItem('adminToken') // Example

    // Redirect to admin login page
    router.push("/admin/login")
  }

  // Mock data - في التطبيق الحقيقي، ستأتي من قاعدة البيانات
  const stats = {
    totalFamilies: 2847,
    activeCases: 1923,
    completedCases: 924,
    totalDonations: 1250000,
    monthlyGrowth: 15.3,
    avgDonationAmount: 435,
    topDonorCountries: ["السعودية", "الإمارات", "قطر", "الكويت", "الأردن"],
    urgentCases: 156,
  }

  const familyGrowthData = [
    { month: "يناير", families: 1200, donations: 180000 },
    { month: "فبراير", families: 1450, donations: 220000 },
    { month: "مارس", families: 1680, donations: 285000 },
    { month: "أبريل", families: 1920, donations: 340000 },
    { month: "مايو", families: 2150, donations: 420000 },
    { month: "يونيو", families: 2380, donations: 485000 },
    { month: "يوليو", families: 2620, donations: 560000 },
    { month: "أغسطس", families: 2847, donations: 625000 },
  ]

  const assistanceTypeData = [
    { name: "مساعدات طبية", value: 35, count: 997, color: "#D32F2F" },
    { name: "مساعدات غذائية", value: 28, count: 797, color: "#007A3D" },
    { name: "مساعدات تعليمية", value: 18, count: 512, color: "#1976D2" },
    { name: "إعادة إعمار", value: 12, count: 341, color: "#F57C00" },
    { name: "أخرى", value: 7, count: 200, color: "#7B1FA2" },
  ]

  const locationData = [
    { area: "غزة", families: 1245, urgent: 67, completed: 423 },
    { area: "رفح", families: 567, urgent: 34, completed: 189 },
    { area: "خان يونس", families: 423, urgent: 28, completed: 156 },
    { area: "دير البلح", families: 312, urgent: 15, completed: 98 },
    { area: "جباليا", families: 300, urgent: 12, completed: 58 },
  ]

  const impactData = [
    { metric: "العائلات المساعدة", before: 0, after: 2847, improvement: "100%" },
    { metric: "الأطفال المستفيدون", before: 0, after: 8541, improvement: "100%" },
    { metric: "الحالات الطارئة المحلولة", before: 0, after: 924, improvement: "100%" },
    { metric: "معدل الاستجابة (أيام)", before: 15, after: 3, improvement: "80%" },
    { metric: "رضا المستفيدين (%)", before: 0, after: 94, improvement: "94%" },
  ]

  const translations = {
    ar: {
      title: "لوحة تحكم المدير",
      subtitle: "إحصائيات شاملة ومعلومات حية عن منصة يقين",
      overview: "نظرة عامة",
      analytics: "التحليلات",
      families: "العائلات",
      impact: "الأثر",
      reports: "التقارير",
      totalFamilies: "إجمالي العائلات",
      activeCases: "الحالات النشطة",
      completedCases: "الحالات المكتملة",
      totalDonations: "إجمالي التبرعات",
      monthlyGrowth: "النمو الشهري",
      avgDonation: "متوسط التبرع",
      urgentCases: "الحالات الطارئة",
      familyGrowth: "نمو العائلات والتبرعات",
      assistanceTypes: "أنواع المساعدات",
      geographicDistribution: "التوزيع الجغرافي",
      impactComparison: "مقارنة الأثر - قبل وبعد",
      before: "قبل",
      after: "بعد",
      improvement: "التحسن",
      exportReport: "تصدير التقرير",
      refreshData: "تحديث البيانات",
      lastUpdated: "آخر تحديث",
      viewDetails: "عرض التفاصيل",
      logout: "تسجيل الخروج", // Added logout translation
    },
    en: {
      title: "Admin Dashboard",
      subtitle: "Comprehensive statistics and live information about Yaqeen platform",
      overview: "Overview",
      analytics: "Analytics",
      families: "Families",
      impact: "Impact",
      reports: "Reports",
      totalFamilies: "Total Families",
      activeCases: "Active Cases",
      completedCases: "Completed Cases",
      totalDonations: "Total Donations",
      monthlyGrowth: "Monthly Growth",
      avgDonation: "Avg Donation",
      urgentCases: "Urgent Cases",
      familyGrowth: "Family & Donation Growth",
      assistanceTypes: "Assistance Types",
      geographicDistribution: "Geographic Distribution",
      impactComparison: "Impact Comparison - Before & After",
      before: "Before",
      after: "After",
      improvement: "Improvement",
      exportReport: "Export Report",
      refreshData: "Refresh Data",
      lastUpdated: "Last Updated",
      viewDetails: "View Details",
      logout: "Logout", // Added logout translation
    },
  }

  const t = translations[language]

  return (
    <div className={`min-h-screen bg-gray-50 ${language === "ar" ? "rtl" : "ltr"}`}>
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.title}</h1>
              <p className="text-sm sm:text-base text-gray-600 mt-1">{t.subtitle}</p>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                className="text-xs sm:text-sm"
              >
                {language === "ar" ? "English" : "العربية"}
              </Button>
              <Button size="sm" className="bg-[#007A3D] hover:bg-[#005a2d] text-xs sm:text-sm">
                {t.exportReport}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={handleLogout}
                className="text-xs sm:text-sm text-[#D32F2F] border-[#D32F2F] hover:bg-[#D32F2F] hover:text-white bg-transparent"
              >
                <LogOut className="h-4 w-4 mr-1" />
                {t.logout}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Key Stats Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
          <Card className="bg-gradient-to-br from-[#007A3D] to-[#005a2d] text-white">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">{t.totalFamilies}</p>
                  <p className="text-lg sm:text-2xl font-bold">{stats.totalFamilies.toLocaleString()}</p>
                </div>
                <Users className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-[#D32F2F] to-[#b71c1c] text-white">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">{t.urgentCases}</p>
                  <p className="text-lg sm:text-2xl font-bold">{stats.urgentCases}</p>
                </div>
                <AlertTriangle className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">{t.totalDonations}</p>
                  <p className="text-lg sm:text-2xl font-bold">${stats.totalDonations.toLocaleString()}</p>
                </div>
                <DollarSign className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
            <CardContent className="p-3 sm:p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs sm:text-sm opacity-90">{t.monthlyGrowth}</p>
                  <p className="text-lg sm:text-2xl font-bold">+{stats.monthlyGrowth}%</p>
                </div>
                <TrendingUp className="h-6 w-6 sm:h-8 sm:w-8 opacity-80" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5">
            <TabsTrigger value="overview" className="text-xs sm:text-sm">
              {t.overview}
            </TabsTrigger>
            <TabsTrigger value="analytics" className="text-xs sm:text-sm">
              {t.analytics}
            </TabsTrigger>
            <TabsTrigger value="families" className="text-xs sm:text-sm">
              {t.families}
            </TabsTrigger>
            <TabsTrigger value="impact" className="text-xs sm:text-sm">
              {t.impact}
            </TabsTrigger>
            <TabsTrigger value="reports" className="text-xs sm:text-sm">
              {t.reports}
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Family Growth Chart */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{t.familyGrowth}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={familyGrowthData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" className="text-xs" />
                      <YAxis className="text-xs" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="families"
                        stackId="1"
                        stroke="#007A3D"
                        fill="#007A3D"
                        fillOpacity={0.6}
                      />
                      <Area
                        type="monotone"
                        dataKey="donations"
                        stackId="2"
                        stroke="#D32F2F"
                        fill="#D32F2F"
                        fillOpacity={0.6}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Assistance Types */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{t.assistanceTypes}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={assistanceTypeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {assistanceTypeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Geographic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{t.geographicDistribution}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {locationData.map((location, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3 mb-2 sm:mb-0">
                        <MapPin className="h-5 w-5 text-[#007A3D]" />
                        <span className="font-semibold">{location.area}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-sm">
                        <Badge variant="outline" className="bg-blue-50">
                          {location.families} عائلة
                        </Badge>
                        <Badge variant="outline" className="bg-red-50">
                          {location.urgent} طارئة
                        </Badge>
                        <Badge variant="outline" className="bg-green-50">
                          {location.completed} مكتملة
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Impact Tab */}
          <TabsContent value="impact" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">{t.impactComparison}</CardTitle>
                <CardDescription>مقارنة شاملة للوضع قبل وبعد إطلاق منصة يقين</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {impactData.map((item, index) => (
                    <div key={index} className="p-4 sm:p-6 bg-gradient-to-r from-gray-50 to-white rounded-lg border">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                        <h3 className="font-semibold text-gray-900 mb-2 sm:mb-0">{item.metric}</h3>
                        <Badge className="bg-[#007A3D] text-white w-fit">
                          {t.improvement}: {item.improvement}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 sm:gap-8">
                        <div className="text-center p-3 sm:p-4 bg-red-50 rounded-lg">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">{t.before}</p>
                          <p className="text-xl sm:text-2xl font-bold text-red-600">
                            {typeof item.before === "number" ? item.before.toLocaleString() : item.before}
                          </p>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-green-50 rounded-lg">
                          <p className="text-xs sm:text-sm text-gray-600 mb-1">{t.after}</p>
                          <p className="text-xl sm:text-2xl font-bold text-[#007A3D]">
                            {typeof item.after === "number" ? item.after.toLocaleString() : item.after}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>معدل الاستجابة للحالات الطارئة</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                      data={[
                        { month: "يناير", responseTime: 12 },
                        { month: "فبراير", responseTime: 8 },
                        { month: "مارس", responseTime: 6 },
                        { month: "أبريل", responseTime: 4 },
                        { month: "مايو", responseTime: 3 },
                        { month: "يونيو", responseTime: 2 },
                      ]}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line type="monotone" dataKey="responseTime" stroke="#D32F2F" strokeWidth={3} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>معدل رضا المستفيدين</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>ممتاز (5 نجوم)</span>
                      <span className="font-bold">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span>جيد جداً (4 نجوم)</span>
                      <span className="font-bold">26%</span>
                    </div>
                    <Progress value={26} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span>جيد (3 نجوم)</span>
                      <span className="font-bold">5%</span>
                    </div>
                    <Progress value={5} className="h-2" />

                    <div className="flex justify-between items-center">
                      <span>مقبول (2 نجوم)</span>
                      <span className="font-bold">1%</span>
                    </div>
                    <Progress value={1} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Families Tab */}
          <TabsContent value="families" className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <CheckCircle className="h-8 w-8 text-[#007A3D] mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold">{stats.completedCases}</p>
                  <p className="text-xs sm:text-sm text-gray-600">حالات مكتملة</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <Clock className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold">{stats.activeCases}</p>
                  <p className="text-xs sm:text-sm text-gray-600">حالات نشطة</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <AlertTriangle className="h-8 w-8 text-[#D32F2F] mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold">{stats.urgentCases}</p>
                  <p className="text-xs sm:text-sm text-gray-600">حالات طارئة</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 sm:p-6 text-center">
                  <Globe className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-xl sm:text-2xl font-bold">47</p>
                  <p className="text-xs sm:text-sm text-gray-600">دولة متبرعة</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>تقارير مفصلة</CardTitle>
                <CardDescription>تقارير شاملة لدعم اتخاذ القرارات واستقطاب الدعم الدولي</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <Calendar className="h-6 w-6" />
                    <span className="text-xs sm:text-sm">التقرير الشهري</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <TrendingUp className="h-6 w-6" />
                    <span className="text-xs sm:text-sm">تقرير الأثر</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <MapPin className="h-6 w-6" />
                    <span className="text-xs sm:text-sm">التقرير الجغرافي</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <DollarSign className="h-6 w-6" />
                    <span className="text-xs sm:text-sm">تقرير التبرعات</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <Users className="h-6 w-6" />
                    <span className="text-xs sm:text-sm">تقرير العائلات</span>
                  </Button>

                  <Button variant="outline" className="h-20 flex-col gap-2 bg-transparent">
                    <Heart className="h-6 w-6" />
                    <span className="text-xs sm:text-sm">تقرير المتبرعين</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Footer Info */}
        <div className="mt-8 p-4 bg-white rounded-lg border text-center">
          <p className="text-xs sm:text-sm text-gray-600">
            {t.lastUpdated}: {new Date().toLocaleString(language === "ar" ? "ar-SA" : "en-US")}
          </p>
        </div>
      </div>
    </div>
  )
}
