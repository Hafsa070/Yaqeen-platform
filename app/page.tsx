"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Home, CheckCircle, Shield, Award, Star } from "lucide-react"
import Link from "next/link"

const translations = {
  en: {
    // Hero Section
    heroTitle: "Bringing Hope to Gaza",
    heroSubtitle:
      "Connect directly with families in need. Every donation is verified, transparent, and makes a real difference.",
    exploreCases: "Explore Cases",
    urgentSupport: "Urgent Support",

    // Statistics
    familiesHelped: "Families Helped",
    activeDonors: "Active Donors",
    totalRaised: "Total Raised",
    transparencyRate: "Transparency Rate",

    // Latest Cases
    latestCases: "Latest Cases",
    latestCasesSubtitle:
      "Meet the families who need your support today. Every story is verified and every donation tracked.",
    medicalTreatment: "Medical Treatment",
    foodShelter: "Food & Shelter",
    educationSupport: "Education Support",
    viewDetails: "View Details",
    viewAllCases: "View All Cases",

    // Case descriptions
    case1Description:
      "5-year-old Layla needs urgent medical care after losing her home. The family is seeking support for treatment and temporary shelter.",
    case2Description:
      "Family of 7 displaced from their home, currently living in a school shelter. They need food supplies and basic necessities.",
    case3Description:
      "Three children unable to attend school due to destroyed infrastructure. Family needs educational materials and support.",

    // How It Works
    howItWorks: "How It Works",
    howItWorksSubtitle:
      "Our transparent process connects families in need with generous donors through verified, direct support.",
    step1Title: "Sign Up",
    step1Description:
      "Families register their needs or donors create accounts to start helping. Choose your path to make a difference.",
    step2Title: "Verification & Matching",
    step2Description:
      "We verify family cases through local partners and match them with donors based on needs and preferences.",
    step3Title: "Donation Process",
    step3Description:
      "Donors browse verified cases and contribute directly to families through secure, transparent channels.",
    step4Title: "Confirmation & Feedback",
    step4Description:
      "Receive real-time updates, photos, and messages showing exactly how your donation created impact.",
    startAsFamily: "Start as Family",
    startAsDonor: "Start as Donor",

    // Trust Section
    trustedByThousands: "Trusted by Thousands",
    trustedSubtitle: "Join a community of donors who believe in transparent, direct humanitarian aid.",
    testimonial1:
      "Yaqeen showed me exactly where my donation went. I received photos and updates from the family I helped. This is real transparency.",
    testimonial2:
      "As someone from the region, I appreciate how Yaqeen connects us directly with families. No middlemen, just direct help.",
    testimonial3:
      "The verification process gave me confidence. I know my donation reached the Al-Hassan family and helped them rebuild.",
    verifiedNGO: "Verified NGO",
    transparencyCertified: "Transparency Certified",
    verifiedCases: "100% Verified Cases",
  },
  ar: {
    // Hero Section
    heroTitle: "نحمل الأمل إلى غزة",
    heroSubtitle: "تواصل مباشرة مع العائلات المحتاجة. كل تبرع موثق وشفاف ويحدث فرقاً حقيقياً.",
    exploreCases: "استكشف الحالات",
    urgentSupport: "دعم عاجل",

    // Statistics
    familiesHelped: "عائلة تم مساعدتها",
    activeDonors: "متبرع نشط",
    totalRaised: "إجمالي المبلغ المجمع",
    transparencyRate: "معدل الشفافية",

    // Latest Cases
    latestCases: "أحدث الحالات",
    latestCasesSubtitle: "تعرف على العائلات التي تحتاج دعمك اليوم. كل قصة موثقة وكل تبرع مُتتبع.",
    medicalTreatment: "علاج طبي",
    foodShelter: "طعام ومأوى",
    educationSupport: "دعم تعليمي",
    viewDetails: "عرض التفاصيل",
    viewAllCases: "عرض جميع الحالات",

    // Case descriptions
    case1Description:
      "ليلى البالغة من العمر 5 سنوات تحتاج رعاية طبية عاجلة بعد فقدان منزلها. العائلة تطلب الدعم للعلاج والمأوى المؤقت.",
    case2Description:
      "عائلة مكونة من 7 أفراد نزحت من منزلها، تعيش حالياً في ملجأ مدرسي. تحتاج إمدادات غذائية واحتياجات أساسية.",
    case3Description:
      "ثلاثة أطفال غير قادرين على الذهاب للمدرسة بسبب تدمير البنية التحتية. العائلة تحتاج مواد تعليمية ودعم.",

    // How It Works
    howItWorks: "كيف يعمل",
    howItWorksSubtitle: "عمليتنا الشفافة تربط العائلات المحتاجة بالمتبرعين الكرماء من خلال الدعم المباشر والموثق.",
    step1Title: "التسجيل",
    step1Description: "العائلات تسجل احتياجاتها أو المتبرعون ينشئون حسابات لبدء المساعدة. اختر طريقك لإحداث الفرق.",
    step2Title: "التحقق والمطابقة",
    step2Description:
      "نتحقق من حالات العائلات من خلال شركائنا المحليين ونطابقها مع المتبرعين حسب الاحتياجات والتفضيلات.",
    step3Title: "عملية التبرع",
    step3Description: "المتبرعون يتصفحون الحالات الموثقة ويساهمون مباشرة للعائلات من خلال قنوات آمنة وشفافة.",
    step4Title: "التأكيد والتغذية الراجعة",
    step4Description: "احصل على تحديثات فورية وصور ورسائل تُظهر بالضبط كيف أحدث تبرعك تأثيراً.",
    startAsFamily: "ابدأ كعائلة",
    startAsDonor: "ابدأ كمتبرع",

    // Trust Section
    trustedByThousands: "موثوق من الآلاف",
    trustedSubtitle: "انضم إلى مجتمع من المتبرعين الذين يؤمنون بالمساعدات الإنسانية الشفافة والمباشرة.",
    testimonial1: "يقين أظهر لي بالضبط أين ذهب تبرعي. تلقيت صوراً وتحديثات من العائلة التي ساعدتها. هذه شفافية حقيقية.",
    testimonial2: "كشخص من المنطقة، أقدر كيف يربطنا يقين مباشرة بالعائلات. لا وسطاء، فقط مساعدة مباشرة.",
    testimonial3: "عملية التحقق أعطتني الثقة. أعلم أن تبرعي وصل لعائلة الحسن وساعدهم في إعادة البناء.",
    verifiedNGO: "منظمة موثقة",
    transparencyCertified: "معتمد للشفافية",
    verifiedCases: "100% حالات موثقة",
  },
}

export default function HomePage() {
  const [language, setLanguage] = useState<"en" | "ar">("en")

  useEffect(() => {
    // Listen for language changes from the header
    const handleLanguageChange = () => {
      const currentLang = document.documentElement.lang as "en" | "ar"
      setLanguage(currentLang)
    }

    // Check initial language
    handleLanguageChange()

    // Listen for changes
    const observer = new MutationObserver(handleLanguageChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["lang"],
    })

    return () => observer.disconnect()
  }, [])

  const t = translations[language]

  const caseData = [
    {
      id: 1,
      name: language === "ar" ? "عائلة المحمود" : "Al-Mahmoud Family",
      need: t.medicalTreatment,
      description: t.case1Description,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      name: language === "ar" ? "عائلة أبو حسن" : "Abu Hassan Family",
      need: t.foodShelter,
      description: t.case2Description,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      name: language === "ar" ? "عائلة الزهراء" : "Al-Zahra Family",
      need: t.educationSupport,
      description: t.case3Description,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const testimonialData = [
    {
      name: language === "ar" ? "سارة جونسون" : "Sarah Johnson",
      location: language === "ar" ? "الولايات المتحدة" : "United States",
      text: t.testimonial1,
      rating: 5,
    },
    {
      name: language === "ar" ? "أحمد الراشد" : "Ahmed Al-Rashid",
      location: language === "ar" ? "المملكة المتحدة" : "United Kingdom",
      text: t.testimonial2,
      rating: 5,
    },
    {
      name: language === "ar" ? "ماريا رودريغيز" : "Maria Rodriguez",
      location: language === "ar" ? "إسبانيا" : "Spain",
      text: t.testimonial3,
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center">
          <div
  className="absolute inset-0 bg-cover bg-center"
  style={{
    backgroundImage: "url('/hero.jpg')",
  }}
/>

          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">{t.heroTitle}</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              {t.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-[#007A3D] hover:bg-[#007A3D]/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                {t.exploreCases}
              </Button>
              <Button
                size="lg"
                className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white px-6 sm:px-8 py-3 text-base sm:text-lg w-full sm:w-auto"
              >
                {t.urgentSupport}
              </Button>
            </div>
          </div>
        </section>

        {/* Live Statistics */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div className="flex flex-col items-center">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-1 sm:mb-2">2,847</div>
                <div className="text-sm sm:text-base text-black font-medium">{t.familiesHelped}</div>
              </div>
              <div className="flex flex-col items-center">
                <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-1 sm:mb-2">12,340</div>
                <div className="text-sm sm:text-base text-black font-medium">{t.activeDonors}</div>
              </div>
              <div className="flex flex-col items-center">
                <Home className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-1 sm:mb-2">$1.2M</div>
                <div className="text-sm sm:text-base text-black font-medium">{t.totalRaised}</div>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F] mb-3 sm:mb-4" />
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-1 sm:mb-2">98%</div>
                <div className="text-sm sm:text-base text-black font-medium">{t.transparencyRate}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Latest Cases */}
        <section className="bg-[#F5F5F5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">{t.latestCases}</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">{t.latestCasesSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {caseData.map((caseItem, index) => (
                <Card key={index} className="bg-white border-t-4 border-t-[#007A3D] hover:shadow-lg transition-shadow">
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img
                      src={caseItem.image || "/placeholder.svg"}
                      alt={caseItem.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">{caseItem.name}</h3>
                    <div className="text-[#007A3D] font-medium mb-3">{caseItem.need}</div>
                    <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-3">{caseItem.description}</p>
                    <Link href={`/cases/${caseItem.id}`}>
                      <Button className="w-full bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white py-2.5">
                        {t.viewDetails}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <Link href="/cases">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white bg-transparent w-full sm:w-auto"
                >
                  {t.viewAllCases}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">{t.howItWorks}</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">{t.howItWorksSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-8">
              {[
                {
                  step: "1",
                  title: t.step1Title,
                  description: t.step1Description,
                  icon: Users,
                  color: "bg-[#007A3D]",
                },
                {
                  step: "2",
                  title: t.step2Title,
                  description: t.step2Description,
                  icon: Shield,
                  color: "bg-[#D32F2F]",
                },
                {
                  step: "3",
                  title: t.step3Title,
                  description: t.step3Description,
                  icon: Heart,
                  color: "bg-[#007A3D]",
                },
                {
                  step: "4",
                  title: t.step4Title,
                  description: t.step4Description,
                  icon: CheckCircle,
                  color: "bg-[#D32F2F]",
                },
              ].map((step, index) => (
                <div key={index} className="text-center group relative">
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-[#007A3D] mb-2 sm:mb-3">
                    {language === "ar" ? `الخطوة ${step.step}` : `Step ${step.step}`}
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-black mb-3 sm:mb-4">{step.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{step.description}</p>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 sm:top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#007A3D] to-[#D32F2F] opacity-30 transform translate-x-8"></div>
                  )}
                </div>
              ))}
            </div>
            <div className="text-center mt-8 sm:mt-12">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center max-w-md sm:max-w-none mx-auto">
                <Button
                  size="lg"
                  className="bg-[#007A3D] hover:bg-[#007A3D]/90 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
                >
                  {t.startAsFamily}
                </Button>
                <Button
                  size="lg"
                  className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white px-6 sm:px-8 py-3 w-full sm:w-auto"
                >
                  {t.startAsDonor}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="bg-[#F5F5F5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">
                {t.trustedByThousands}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">{t.trustedSubtitle}</p>
            </div>

            {/* Testimonials */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {testimonialData.map((testimonial, index) => (
                <Card key={index} className="bg-white">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex mb-3 sm:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-[#007A3D] text-[#007A3D]" />
                      ))}
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 italic">"{testimonial.text}"</p>
                    <div className="text-sm sm:text-base font-semibold text-black">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-500">{testimonial.location}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 opacity-60">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                <span className="text-sm sm:text-base font-medium text-black">{t.verifiedNGO}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                <span className="text-sm sm:text-base font-medium text-black">{t.transparencyCertified}</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                <span className="text-sm sm:text-base font-medium text-black">{t.verifiedCases}</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
