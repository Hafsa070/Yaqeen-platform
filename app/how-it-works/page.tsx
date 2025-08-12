import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { UserPlus, Shield, Heart, CheckCircle, Users, FileText, CreditCard, MessageSquare } from "lucide-react"
import Link from "next/link"

export default function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      title: "Sign Up",
      subtitle: "Choose Your Role",
      description:
        "Join as a family in need or as a generous donor. Each path is designed to make the process simple and secure.",
      icon: UserPlus,
      color: "[#007A3D]",
      details: [
        "Families: Share your story and needs",
        "Donors: Set your giving preferences",
        "Quick verification process",
        "Secure account creation",
      ],
    },
    {
      number: "02",
      title: "Verification & Matching",
      subtitle: "Trust & Transparency",
      description: "We verify all families and match them with donors based on preferences and urgent needs.",
      icon: Shield,
      color: "[#D32F2F]",
      details: [
        "Document verification for families",
        "Background checks and validation",
        "Smart matching algorithm",
        "Transparent review process",
      ],
    },
    {
      number: "03",
      title: "Donation Process",
      subtitle: "Safe & Direct",
      description: "Donors can browse verified cases and contribute directly through secure payment methods.",
      icon: Heart,
      color: "[#007A3D]",
      details: [
        "Browse verified family cases",
        "Choose donation amount",
        "Secure payment processing",
        "Direct family support",
      ],
    },
    {
      number: "04",
      title: "Confirmation & Feedback",
      subtitle: "Track Your Impact",
      description: "Receive updates on how your donation is making a difference and track the family's progress.",
      icon: CheckCircle,
      color: "[#D32F2F]",
      details: [
        "Real-time donation tracking",
        "Family progress updates",
        "Impact reports and photos",
        "Community feedback system",
      ],
    },
  ]

  const userJourneys = [
    {
      type: "Family Journey",
      icon: Users,
      color: "[#007A3D]",
      steps: [
        { icon: FileText, text: "Submit your assistance request" },
        { icon: Shield, text: "Complete verification process" },
        { icon: Heart, text: "Get matched with generous donors" },
        { icon: MessageSquare, text: "Share updates with supporters" },
      ],
    },
    {
      type: "Donor Journey",
      icon: Heart,
      color: "[#D32F2F]",
      steps: [
        { icon: UserPlus, text: "Create your donor profile" },
        { icon: Users, text: "Browse verified family cases" },
        { icon: CreditCard, text: "Make secure donations" },
        { icon: CheckCircle, text: "Track your impact" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#007A3D]/10 to-[#D32F2F]/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            How <span className="text-[#007A3D]">Ya</span>
            <span className="text-[#D32F2F]">qeen</span> Works
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed">
            Connecting families in Gaza with generous donors through a transparent, secure, and impactful platform
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/signup/family">
              <Button className="bg-[#007A3D] hover:bg-[#007A3D]/90 text-white px-6 sm:px-8 py-3 w-full sm:w-auto">
                I Need Help
              </Button>
            </Link>
            <Link href="/signup/donor">
              <Button className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white px-6 sm:px-8 py-3 w-full sm:w-auto">
                I Want to Help
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Steps */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Simple Steps, Powerful Impact</h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform makes it easy for families to get help and donors to make a difference
            </p>
          </div>

          <div className="space-y-12 sm:space-y-20">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0
              const colorClass = step.color === "[#007A3D]" ? "text-[#007A3D]" : "text-[#D32F2F]"
              const bgColorClass = step.color === "[#007A3D]" ? "bg-[#007A3D]/10" : "bg-[#D32F2F]/10"
              const gradientClass =
                step.color === "[#007A3D]" ? "from-[#007A3D]/20 to-[#007A3D]/5" : "from-[#D32F2F]/20 to-[#D32F2F]/5"

              return (
                <div
                  key={step.number}
                  className={`flex flex-col ${isEven ? "xl:flex-row" : "xl:flex-row-reverse"} items-center gap-8 sm:gap-12`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-4 sm:space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                      <div
                        className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${bgColorClass} flex items-center justify-center mx-auto sm:mx-0`}
                      >
                        <span className={`text-lg sm:text-2xl font-bold ${colorClass}`}>{step.number}</span>
                      </div>
                      <div className="text-center sm:text-left">
                        <h3 className="text-xl sm:text-2xl font-bold text-black">{step.title}</h3>
                        <p className={`text-base sm:text-lg ${colorClass} font-medium`}>{step.subtitle}</p>
                      </div>
                    </div>

                    <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center sm:text-left">
                      {step.description}
                    </p>

                    <ul className="space-y-2 sm:space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <CheckCircle className={`w-4 h-4 sm:w-5 sm:h-5 ${colorClass} flex-shrink-0`} />
                          <span className="text-sm sm:text-base text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div
                      className={`w-64 h-64 sm:w-80 sm:h-80 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center`}
                    >
                      <Icon className={`w-24 h-24 sm:w-32 sm:h-32 ${colorClass}`} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* User Journeys */}
      <section className="py-12 sm:py-20 bg-[#F5F5F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-black mb-3 sm:mb-4">Your Journey with Yaqeen</h2>
            <p className="text-base sm:text-lg text-gray-600">
              Whether you're seeking help or offering support, we guide you every step of the way
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {userJourneys.map((journey) => {
              const JourneyIcon = journey.icon
              const colorClass = journey.color === "[#007A3D]" ? "text-[#007A3D]" : "text-[#D32F2F]"
              const bgColorClass = journey.color === "[#007A3D]" ? "bg-[#007A3D]/10" : "bg-[#D32F2F]/10"

              return (
                <Card key={journey.type} className="p-6 sm:p-8 border-2 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full ${bgColorClass} flex items-center justify-center`}
                      >
                        <JourneyIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${colorClass}`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold text-black">{journey.type}</h3>
                    </div>

                    <div className="space-y-4 sm:space-y-6">
                      {journey.steps.map((step, idx) => {
                        const StepIcon = step.icon

                        return (
                          <div key={idx} className="relative">
                            <div className="flex items-center gap-3 sm:gap-4">
                              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                <StepIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                              </div>
                              <div className="flex-1">
                                <p className="text-sm sm:text-base text-gray-700 font-medium">{step.text}</p>
                              </div>
                            </div>
                            {idx < journey.steps.length - 1 && (
                              <div className="w-px h-6 sm:h-8 bg-gray-200 ml-4 sm:ml-5 mt-2"></div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-20 bg-gradient-to-r from-[#007A3D] to-[#D32F2F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8">
            Join thousands of families and donors who are already part of the Yaqeen community
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/signup/family">
              <Button
                variant="secondary"
                className="bg-white text-[#007A3D] hover:bg-gray-100 px-6 sm:px-8 py-3 w-full sm:w-auto"
              >
                Request Assistance
              </Button>
            </Link>
            <Link href="/signup/donor">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#D32F2F] px-6 sm:px-8 py-3 bg-transparent w-full sm:w-auto"
              >
                Start Donating
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
