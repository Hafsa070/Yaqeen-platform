"use client"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Target, CheckCircle, Globe, Handshake, Eye } from "lucide-react"

const translations = {
  en: {
    aboutYaqeen: "About Yaqeen",
    heroSubtitle: "Building bridges of hope between families in Gaza and compassionate donors worldwide",
    heroDescription: 'Yaqeen means "certainty" in Arabic - the certainty that help will reach those who need it most',
    ourStory: "Our Story",
    storyParagraph1:
      "Yaqeen was born from a simple yet powerful belief: that every family deserves dignity, hope, and the support of a caring global community. Founded in 2024, our platform emerged from the urgent need to create transparent, direct connections between families in Gaza and donors worldwide.",
    storyParagraph2:
      "We witnessed too many stories of aid that never reached its intended recipients, of families whose voices went unheard, and of donors who wanted to help but lacked a trusted pathway to make a real difference. Yaqeen changes that narrative.",
    storyParagraph3:
      'Our name, "Yaqeen," means certainty in Arabic. It represents our commitment to providing donors with the certainty that their contributions will reach the families they choose to support. It represents our promise to families that their stories will be heard and their needs will be met with dignity and respect.',
    storyParagraph4:
      "Today, Yaqeen has helped thousands of families rebuild their lives while creating a global community of compassionate individuals united by the belief that humanity knows no borders.",
    ourValues: "Our Values",
    transparency: "Transparency",
    transparencyDesc: "Every donation is tracked and verified. We provide complete transparency in how funds are used.",
    compassion: "Compassion",
    compassionDesc: "We believe in the power of human compassion to create meaningful change in the world.",
    directConnection: "Direct Connection",
    directConnectionDesc:
      "We connect donors directly with families, eliminating middlemen and ensuring maximum impact.",
    focusedImpact: "Focused Impact",
    focusedImpactDesc: "Every case is carefully verified and targeted to create the most meaningful difference.",
    accountability: "Accountability",
    accountabilityDesc: "We maintain the highest standards of accountability to our donors and the families we serve.",
    globalCommunity: "Global Community",
    globalCommunityDesc: "Building a worldwide community of people committed to humanitarian assistance.",
    ourImpact: "Our Impact",
    familiesHelped: "Families Helped",
    activeDonors: "Active Donors",
    totalRaised: "Total Raised",
    transparencyRate: "Transparency Rate",
    meetOurTeam: "Meet Our Team",
    founderCEO: "Founder & CEO",
    operationsDirector: "Operations Director",
    technologyLead: "Technology Lead",
    communityOutreach: "Community Outreach",
    drAmiraBio: "Former humanitarian aid coordinator with 15 years of experience in Gaza relief efforts.",
    omarBio: "Local Gaza coordinator ensuring all cases are properly verified and funds reach families.",
    sarahBio: "Building transparent systems that connect donors with families in need around the world.",
    ahmedBio: "Connecting with families and communities to identify those most in need of support.",
    ourVision: "Our Vision",
    visionStatement:
      "A world where distance and borders cannot prevent compassion from reaching those who need it most.",
    ourMission: "Our Mission",
    missionStatement:
      "To create transparent, direct connections between families in need and global donors, ensuring every contribution makes a meaningful, verified impact on real lives.",
  },
  ar: {
    aboutYaqeen: "عن يقين",
    heroSubtitle: "بناء جسور الأمل بين العائلات في غزة والمتبرعين الرحماء حول العالم",
    heroDescription: 'يقين تعني "اليقين" بالعربية - اليقين أن المساعدة ستصل إلى من يحتاجها أكثر',
    ourStory: "قصتنا",
    storyParagraph1:
      "وُلد يقين من إيمان بسيط لكنه قوي: أن كل عائلة تستحق الكرامة والأمل ودعم مجتمع عالمي مهتم. تأسست منصتنا في عام 2024، وظهرت من الحاجة الملحة لإنشاء روابط شفافة ومباشرة بين العائلات في غزة والمتبرعين حول العالم.",
    storyParagraph2:
      "شهدنا الكثير من قصص المساعدات التي لم تصل أبداً إلى المستفيدين المقصودين، والعائلات التي لم تُسمع أصواتها، والمتبرعين الذين أرادوا المساعدة لكنهم افتقروا إلى مسار موثوق لإحداث فرق حقيقي. يقين يغير هذه القصة.",
    storyParagraph3:
      'اسمنا "يقين" يعني اليقين بالعربية. إنه يمثل التزامنا بتوفير اليقين للمتبرعين أن مساهماتهم ستصل إلى العائلات التي يختارون دعمها. إنه يمثل وعدنا للعائلات أن قصصهم ستُسمع وأن احتياجاتهم ستُلبى بكرامة واحترام.',
    storyParagraph4:
      "اليوم، ساعد يقين آلاف العائلات في إعادة بناء حياتهم بينما أنشأ مجتمعاً عالمياً من الأفراد الرحماء المتحدين بالإيمان أن الإنسانية لا تعرف حدوداً.",
    ourValues: "قيمنا",
    transparency: "الشفافية",
    transparencyDesc: "كل تبرع يُتتبع ويُتحقق منه. نوفر شفافية كاملة في كيفية استخدام الأموال.",
    compassion: "الرحمة",
    compassionDesc: "نؤمن بقوة الرحمة الإنسانية في إحداث تغيير ذي معنى في العالم.",
    directConnection: "الاتصال المباشر",
    directConnectionDesc: "نربط المتبرعين مباشرة بالعائلات، مما يلغي الوسطاء ويضمن أقصى تأثير.",
    focusedImpact: "التأثير المركز",
    focusedImpactDesc: "كل حالة يتم التحقق منها بعناية واستهدافها لإحداث أكثر الاختلافات معنى.",
    accountability: "المساءلة",
    accountabilityDesc: "نحافظ على أعلى معايير المساءلة لمتبرعينا والعائلات التي نخدمها.",
    globalCommunity: "المجتمع العالمي",
    globalCommunityDesc: "بناء مجتمع عالمي من الأشخاص الملتزمين بالمساعدة الإنسانية.",
    ourImpact: "تأثيرنا",
    familiesHelped: "العائلات التي تم مساعدتها",
    activeDonors: "المتبرعون النشطون",
    totalRaised: "إجمالي المبلغ المجمع",
    transparencyRate: "معدل الشفافية",
    meetOurTeam: "تعرف على فريقنا",
    founderCEO: "المؤسس والرئيس التنفيذي",
    operationsDirector: "مدير العمليات",
    technologyLead: "قائد التكنولوجيا",
    communityOutreach: "التواصل المجتمعي",
    drAmiraBio: "منسق مساعدات إنسانية سابق مع 15 عاماً من الخبرة في جهود الإغاثة في غزة.",
    omarBio: "منسق محلي في غزة يضمن التحقق من جميع الحالات بشكل صحيح ووصول الأموال للعائلات.",
    sarahBio: "بناء أنظمة شفافة تربط المتبرعين بالعائلات المحتاجة حول العالم.",
    ahmedBio: "التواصل مع العائلات والمجتمعات لتحديد الأكثر حاجة للدعم.",
    ourVision: "رؤيتنا",
    visionStatement: "عالم حيث لا يمكن للمسافة والحدود أن تمنع الرحمة من الوصول إلى من يحتاجها أكثر.",
    ourMission: "مهمتنا",
    missionStatement:
      "إنشاء روابط شفافة ومباشرة بين العائلات المحتاجة والمتبرعين العالميين، مما يضمن أن كل مساهمة تحدث تأثيراً ذا معنى وموثقاً على الحياة الحقيقية.",
  },
}

export default function AboutPage() {
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

  const values = [
    {
      icon: Shield,
      title: t.transparency,
      description: t.transparencyDesc,
      color: "text-[#007A3D]",
    },
    {
      icon: Heart,
      title: t.compassion,
      description: t.compassionDesc,
      color: "text-[#D32F2F]",
    },
    {
      icon: Users,
      title: t.directConnection,
      description: t.directConnectionDesc,
      color: "text-[#007A3D]",
    },
    {
      icon: Target,
      title: t.focusedImpact,
      description: t.focusedImpactDesc,
      color: "text-[#D32F2F]",
    },
    {
      icon: CheckCircle,
      title: t.accountability,
      description: t.accountabilityDesc,
      color: "text-[#007A3D]",
    },
    {
      icon: Globe,
      title: t.globalCommunity,
      description: t.globalCommunityDesc,
      color: "text-[#D32F2F]",
    },
  ]

  const team = [
    {
      name: language === "ar" ? "د. أميرة حسن" : "Dr. Amira Hassan",
      role: t.founderCEO,
      bio: t.drAmiraBio,
      image: "/placeholder.svg?height=150&width=150&text=Dr.+Amira",
    },
    {
      name: language === "ar" ? "عمر الراشد" : "Omar Al-Rashid",
      role: t.operationsDirector,
      bio: t.omarBio,
      image: "/placeholder.svg?height=150&width=150&text=Omar",
    },
    {
      name: language === "ar" ? "سارة ميتشل" : "Sarah Mitchell",
      role: t.technologyLead,
      bio: t.sarahBio,
      image: "/placeholder.svg?height=150&width=150&text=Sarah",
    },
    {
      name: language === "ar" ? "أحمد خليل" : "Ahmed Khalil",
      role: t.communityOutreach,
      bio: t.ahmedBio,
      image: "/placeholder.svg?height=150&width=150&text=Ahmed",
    },
  ]

  const stats = [
    { number: "2,847", label: t.familiesHelped, icon: Users },
    { number: "12,340", label: t.activeDonors, icon: Heart },
    { number: "$1.2M", label: t.totalRaised, icon: Target },
    { number: "98%", label: t.transparencyRate, icon: CheckCircle },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('/hero.jpg')",
            }}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">{t.aboutYaqeen}</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 leading-relaxed">{t.heroSubtitle}</p>
            <p className="text-base sm:text-lg opacity-90">{t.heroDescription}</p>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-6 sm:mb-8 text-center">
                {t.ourStory}
              </h2>
              <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base leading-relaxed">{t.storyParagraph1}</p>
                <p className="text-sm sm:text-base leading-relaxed">{t.storyParagraph2}</p>
                <p className="text-sm sm:text-base leading-relaxed">{t.storyParagraph3}</p>
                <p className="text-sm sm:text-base leading-relaxed">{t.storyParagraph4}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F5F5F5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-8 sm:mb-12 text-center">
              {t.ourValues}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gray-50 rounded-full flex items-center justify-center">
                      <value.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${value.color}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3">{value.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-8 sm:mb-12 text-center">
              {t.ourImpact}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-[#007A3D]/10 rounded-full flex items-center justify-center">
                    <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#007A3D]" />
                  </div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-1 sm:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm md:text-base text-black font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-[#F5F5F5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-8 sm:mb-12 text-center">
              {t.meetOurTeam}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {team.map((member, index) => (
                <Card key={index} className="bg-white text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 sm:p-6">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-3 sm:mb-4 object-cover"
                    />
                    <h3 className="text-lg sm:text-xl font-semibold text-black mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="text-[#007A3D] bg-[#007A3D]/10 mb-2 sm:mb-3 text-xs">
                      {member.role}
                    </Badge>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-[#007A3D]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D]">{t.ourVision}</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">{t.visionStatement}</p>
              <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F]">{t.ourMission}</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">{t.missionStatement}</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
