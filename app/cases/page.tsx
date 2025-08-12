"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Filter, MapPin, Clock, AlertTriangle, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    browseCases: "Browse Cases",
    browseCasesSubtitle:
      "Discover families in Gaza who need your support. Every case is verified and every donation tracked.",
    filters: "Filters",
    assistanceType: "Assistance Type",
    location: "Location",
    allLocations: "All locations",
    mostUrgentOnly: "Most Urgent Only",
    clearAllFilters: "Clear All Filters",
    liveStatistics: "Live Statistics",
    totalFamilies: "Total Families",
    totalRaised: "Total Raised",
    urgentCases: "Urgent Cases",
    showing: "Showing",
    of: "of",
    cases: "cases",
    newestFirst: "Newest First",
    mostUrgent: "Most Urgent",
    mostProgress: "Most Progress",
    urgent: "Urgent",
    raised: "raised",
    goal: "goal",
    donors: "donors",
    viewDetails: "View Details",
    noCasesFound: "No cases found",
    noCasesFoundDesc: "Try adjusting your filters to see more cases.",
    // Assistance types
    medicalTreatment: "Medical Treatment",
    foodShelter: "Food & Shelter",
    educationSupport: "Education Support",
    emergencyRelief: "Emergency Relief",
    rebuildingHome: "Rebuilding Home",
    cleanWater: "Clean Water",
    // Locations
    gazaCity: "Gaza City",
    khanYounis: "Khan Younis",
    rafah: "Rafah",
    deirAlBalah: "Deir al-Balah",
    jabalia: "Jabalia",
    beitHanoun: "Beit Hanoun",
    // Case descriptions
    case1Description:
      "5-year-old Layla needs urgent medical care after losing her home. The family is seeking support for treatment and temporary shelter.",
    case2Description:
      "Family of 7 displaced from their home, currently living in a school shelter. They need food supplies and basic necessities.",
    case3Description:
      "Three children unable to attend school due to destroyed infrastructure. Family needs educational materials and support.",
    case4Description:
      "Elderly couple needs immediate assistance after their home was damaged. Require medical supplies and temporary housing.",
    case5Description:
      "Young family with newborn baby needs help rebuilding their destroyed home and purchasing basic furniture.",
    case6Description:
      "Family of 6 lacks access to clean water. Need support for water purification system and storage tanks.",
  },
  ar: {
    browseCases: "تصفح الحالات",
    browseCasesSubtitle: "اكتشف العائلات في غزة التي تحتاج دعمك. كل حالة موثقة وكل تبرع مُتتبع.",
    filters: "المرشحات",
    assistanceType: "نوع المساعدة",
    location: "الموقع",
    allLocations: "جميع المواقع",
    mostUrgentOnly: "الأكثر إلحاحاً فقط",
    clearAllFilters: "مسح جميع المرشحات",
    liveStatistics: "إحصائيات مباشرة",
    totalFamilies: "إجمالي العائلات",
    totalRaised: "إجمالي المبلغ المجمع",
    urgentCases: "الحالات العاجلة",
    showing: "عرض",
    of: "من",
    cases: "حالة",
    newestFirst: "الأحدث أولاً",
    mostUrgent: "الأكثر إلحاحاً",
    mostProgress: "الأكثر تقدماً",
    urgent: "عاجل",
    raised: "تم جمع",
    goal: "الهدف",
    donors: "متبرع",
    viewDetails: "عرض التفاصيل",
    noCasesFound: "لم يتم العثور على حالات",
    noCasesFoundDesc: "حاول تعديل المرشحات لرؤية المزيد من الحالات.",
    // Assistance types
    medicalTreatment: "علاج طبي",
    foodShelter: "طعام ومأوى",
    educationSupport: "دعم تعليمي",
    emergencyRelief: "إغاثة طارئة",
    rebuildingHome: "إعادة بناء المنزل",
    cleanWater: "مياه نظيفة",
    // Locations
    gazaCity: "مدينة غزة",
    khanYounis: "خان يونس",
    rafah: "رفح",
    deirAlBalah: "دير البلح",
    jabalia: "جباليا",
    beitHanoun: "بيت حانون",
    // Case descriptions
    case1Description:
      "ليلى البالغة من العمر 5 سنوات تحتاج رعاية طبية عاجلة بعد فقدان منزلها. العائلة تطلب الدعم للعلاج والمأوى المؤقت.",
    case2Description:
      "عائلة مكونة من 7 أفراد نزحت من منزلها، تعيش حالياً في ملجأ مدرسي. تحتاج إمدادات غذائية واحتياجات أساسية.",
    case3Description:
      "ثلاثة أطفال غير قادرين على الذهاب للمدرسة بسبب تدمير البنية التحتية. العائلة تحتاج مواد تعليمية ودعم.",
    case4Description: "زوجان مسنان يحتاجان مساعدة فورية بعد تضرر منزلهما. يحتاجان إمدادات طبية وسكن مؤقت.",
    case5Description: "عائلة شابة مع مولود جديد تحتاج مساعدة في إعادة بناء منزلها المدمر وشراء الأثاث الأساسي.",
    case6Description:
      "عائلة مكونة من 6 أفراد تفتقر للوصول إلى المياه النظيفة. تحتاج دعماً لنظام تنقية المياه وخزانات التخزين.",
  },
}

export default function BrowseCasesPage() {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string>("")
  const [mostUrgent, setMostUrgent] = useState(false)
  const [showFilters, setShowFilters] = useState(false)
  const [language, setLanguage] = useState<"en" | "ar">("en")

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

  const assistanceTypes = [
    { key: "medicalTreatment", label: t.medicalTreatment },
    { key: "foodShelter", label: t.foodShelter },
    { key: "educationSupport", label: t.educationSupport },
    { key: "emergencyRelief", label: t.emergencyRelief },
    { key: "rebuildingHome", label: t.rebuildingHome },
    { key: "cleanWater", label: t.cleanWater },
  ]

  const locations = [
    { key: "gazaCity", label: t.gazaCity },
    { key: "khanYounis", label: t.khanYounis },
    { key: "rafah", label: t.rafah },
    { key: "deirAlBalah", label: t.deirAlBalah },
    { key: "jabalia", label: t.jabalia },
    { key: "beitHanoun", label: t.beitHanoun },
  ]

  const cases = [
    {
      id: 1,
      family: language === "ar" ? "عائلة المحمود" : "Al-Mahmoud Family",
      type: t.medicalTreatment,
      location: t.gazaCity,
      description: t.case1Description,
      image: "/placeholder.svg?height=200&width=300",
      urgent: true,
      raised: 2400,
      target: 5000,
      donors: 23,
    },
    {
      id: 2,
      family: language === "ar" ? "عائلة أبو حسن" : "Abu Hassan Family",
      type: t.foodShelter,
      location: t.khanYounis,
      description: t.case2Description,
      image: "/placeholder.svg?height=200&width=300",
      urgent: false,
      raised: 1800,
      target: 3500,
      donors: 15,
    },
    {
      id: 3,
      family: language === "ar" ? "عائلة الزهراء" : "Al-Zahra Family",
      type: t.educationSupport,
      location: t.rafah,
      description: t.case3Description,
      image: "/placeholder.svg?height=200&width=300",
      urgent: false,
      raised: 900,
      target: 2000,
      donors: 12,
    },
    {
      id: 4,
      family: language === "ar" ? "عائلة القاسمي" : "Al-Qasemi Family",
      type: t.emergencyRelief,
      location: t.gazaCity,
      description: t.case4Description,
      image: "/placeholder.svg?height=200&width=300",
      urgent: true,
      raised: 3200,
      target: 4000,
      donors: 28,
    },
    {
      id: 5,
      family: language === "ar" ? "عائلة أبو سالم" : "Abu Salim Family",
      type: t.rebuildingHome,
      location: t.deirAlBalah,
      description: t.case5Description,
      image: "/placeholder.svg?height=200&width=300",
      urgent: false,
      raised: 5600,
      target: 8000,
      donors: 42,
    },
    {
      id: 6,
      family: language === "ar" ? "عائلة النجار" : "Al-Najjar Family",
      type: t.cleanWater,
      location: t.jabalia,
      description: t.case6Description,
      image: "/placeholder.svg?height=200&width=300",
      urgent: true,
      raised: 1200,
      target: 2500,
      donors: 18,
    },
  ]

  const handleTypeChange = (type: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, type])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== type))
    }
  }

  const filteredCases = cases.filter((caseItem) => {
    const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(caseItem.type)
    const locationMatch = !selectedLocation || caseItem.location === selectedLocation
    const urgentMatch = !mostUrgent || caseItem.urgent
    return typeMatch && locationMatch && urgentMatch
  })

  const totalFamilies = cases.length
  const totalRaised = cases.reduce((sum, c) => sum + c.raised, 0)
  const urgentCases = cases.filter((c) => c.urgent).length

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">{t.browseCases}</h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">{t.browseCasesSubtitle}</p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden">
              <Button
                variant="outline"
                onClick={() => setShowFilters(!showFilters)}
                className="w-full flex items-center justify-between border-[#007A3D] text-[#007A3D] bg-transparent"
              >
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4" />
                  <span>{t.filters}</span>
                </div>
                {showFilters ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </Button>
            </div>

            {/* Filter Sidebar */}
            <aside className={`lg:w-80 space-y-4 sm:space-y-6 ${showFilters ? "block" : "hidden lg:block"}`}>
              <Card className="bg-white">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center space-x-2 mb-3 sm:mb-4">
                    <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-[#007A3D]" />
                    <h2 className="text-base sm:text-lg font-semibold text-[#007A3D]">{t.filters}</h2>
                  </div>

                  {/* Assistance Type */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-base font-medium text-[#007A3D] mb-2 sm:mb-3">{t.assistanceType}</h3>
                    <div className="space-y-2">
                      {assistanceTypes.map((type) => (
                        <div key={type.key} className="flex items-center space-x-2">
                          <Checkbox
                            id={type.key}
                            checked={selectedTypes.includes(type.label)}
                            onCheckedChange={(checked) => handleTypeChange(type.label, checked as boolean)}
                          />
                          <label htmlFor={type.key} className="text-xs sm:text-sm text-black cursor-pointer">
                            {type.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Location */}
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-sm sm:text-base font-medium text-[#007A3D] mb-2 sm:mb-3">{t.location}</h3>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger className="h-10 sm:h-11 text-sm sm:text-base">
                        <SelectValue placeholder={t.allLocations} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">{t.allLocations}</SelectItem>
                        {locations.map((location) => (
                          <SelectItem key={location.key} value={location.label}>
                            {location.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Most Urgent Toggle */}
                  <div className="mb-4 sm:mb-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="urgent"
                        checked={mostUrgent}
                        onCheckedChange={(checked) => setMostUrgent(checked as boolean)}
                      />
                      <label htmlFor="urgent" className="text-xs sm:text-sm font-medium text-[#D32F2F] cursor-pointer">
                        {t.mostUrgentOnly}
                      </label>
                    </div>
                  </div>

                  {/* Clear Filters */}
                  <Button
                    variant="outline"
                    className="w-full border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white bg-transparent h-10 text-sm"
                    onClick={() => {
                      setSelectedTypes([])
                      setSelectedLocation("")
                      setMostUrgent(false)
                    }}
                  >
                    {t.clearAllFilters}
                  </Button>
                </CardContent>
              </Card>

              {/* Live Stats Sidebar */}
              <Card className="bg-white">
                <CardContent className="p-4 sm:p-6">
                  <h2 className="text-base sm:text-lg font-semibold text-[#007A3D] mb-3 sm:mb-4">{t.liveStatistics}</h2>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex items-center space-x-3">
                      <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-[#007A3D]">{totalFamilies}</div>
                        <div className="text-xs sm:text-sm text-black">{t.totalFamilies}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-[#007A3D]">
                          ${totalRaised.toLocaleString()}
                        </div>
                        <div className="text-xs sm:text-sm text-black">{t.totalRaised}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-[#D32F2F]" />
                      <div>
                        <div className="text-xl sm:text-2xl font-bold text-[#D32F2F]">{urgentCases}</div>
                        <div className="text-xs sm:text-sm text-black">{t.urgentCases}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </aside>

            {/* Cases Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-6 space-y-3 sm:space-y-0">
                <p className="text-sm sm:text-base text-gray-600">
                  {t.showing} {filteredCases.length} {t.of} {totalFamilies} {t.cases}
                </p>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-full sm:w-48 h-10 text-sm sm:text-base">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">{t.newestFirst}</SelectItem>
                    <SelectItem value="urgent">{t.mostUrgent}</SelectItem>
                    <SelectItem value="progress">{t.mostProgress}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                {filteredCases.map((caseItem) => (
                  <Card
                    key={caseItem.id}
                    className="bg-white border-t-4 border-t-[#007A3D] hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img
                        src={caseItem.image || "/placeholder.svg"}
                        alt={caseItem.family}
                        className="w-full h-full object-cover"
                      />
                      {caseItem.urgent && (
                        <Badge className="absolute top-2 right-2 bg-[#D32F2F] text-white text-xs">
                          <Clock className="w-3 h-3 mr-1" />
                          {t.urgent}
                        </Badge>
                      )}
                    </div>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">{caseItem.family}</h3>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-3 space-y-2 sm:space-y-0">
                        <Badge variant="secondary" className="text-[#007A3D] bg-[#007A3D]/10 text-xs w-fit">
                          {caseItem.type}
                        </Badge>
                        <div className="flex items-center text-xs sm:text-sm text-gray-500">
                          <MapPin className="w-3 h-3 mr-1" />
                          {caseItem.location}
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{caseItem.description}</p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-xs sm:text-sm mb-1">
                          <span className="text-[#007A3D] font-medium">
                            ${caseItem.raised.toLocaleString()} {t.raised}
                          </span>
                          <span className="text-gray-500">
                            ${caseItem.target.toLocaleString()} {t.goal}
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-[#007A3D] h-2 rounded-full"
                            style={{ width: `${(caseItem.raised / caseItem.target) * 100}%` }}
                          />
                        </div>
                        <div className="text-xs sm:text-sm text-gray-500 mt-1">
                          {caseItem.donors} {t.donors}
                        </div>
                      </div>

                      <Link href={`/cases/${caseItem.id}`}>
                        <Button className="w-full bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white h-10 sm:h-11 text-sm sm:text-base">
                          {t.viewDetails}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredCases.length === 0 && (
                <div className="text-center py-8 sm:py-12">
                  <div className="text-gray-400 mb-4">
                    <Filter className="w-10 h-10 sm:w-12 sm:h-12 mx-auto" />
                  </div>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">{t.noCasesFound}</h3>
                  <p className="text-sm sm:text-base text-gray-500">{t.noCasesFoundDesc}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
