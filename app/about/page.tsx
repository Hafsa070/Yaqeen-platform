import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, Users, Target, CheckCircle, Globe, Handshake, Eye } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Every donation is tracked and verified. We provide complete transparency in how funds are used.",
      color: "text-[#007A3D]",
    },
    {
      icon: Heart,
      title: "Compassion",
      description: "We believe in the power of human compassion to create meaningful change in the world.",
      color: "text-[#D32F2F]",
    },
    {
      icon: Users,
      title: "Direct Connection",
      description: "We connect donors directly with families, eliminating middlemen and ensuring maximum impact.",
      color: "text-[#007A3D]",
    },
    {
      icon: Target,
      title: "Focused Impact",
      description: "Every case is carefully verified and targeted to create the most meaningful difference.",
      color: "text-[#D32F2F]",
    },
    {
      icon: CheckCircle,
      title: "Accountability",
      description: "We maintain the highest standards of accountability to our donors and the families we serve.",
      color: "text-[#007A3D]",
    },
    {
      icon: Globe,
      title: "Global Community",
      description: "Building a worldwide community of people committed to humanitarian assistance.",
      color: "text-[#D32F2F]",
    },
  ]

  const team = [
    {
      name: "Dr. Amira Hassan",
      role: "Founder & CEO",
      bio: "Former humanitarian aid coordinator with 15 years of experience in Gaza relief efforts.",
      image: "/placeholder.svg?height=150&width=150&text=Dr.+Amira",
    },
    {
      name: "Omar Al-Rashid",
      role: "Operations Director",
      bio: "Local Gaza coordinator ensuring all cases are properly verified and funds reach families.",
      image: "/placeholder.svg?height=150&width=150&text=Omar",
    },
    {
      name: "Sarah Mitchell",
      role: "Technology Lead",
      bio: "Building transparent systems that connect donors with families in need around the world.",
      image: "/placeholder.svg?height=150&width=150&text=Sarah",
    },
    {
      name: "Ahmed Khalil",
      role: "Community Outreach",
      bio: "Connecting with families and communities to identify those most in need of support.",
      image: "/placeholder.svg?height=150&width=150&text=Ahmed",
    },
  ]

  const stats = [
    { number: "2,847", label: "Families Helped", icon: Users },
    { number: "12,340", label: "Active Donors", icon: Heart },
    { number: "$1.2M", label: "Total Raised", icon: Target },
    { number: "98%", label: "Transparency Rate", icon: CheckCircle },
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
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Yaqeen</h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 leading-relaxed">
              Building bridges of hope between families in Gaza and compassionate donors worldwide
            </p>
            <p className="text-base sm:text-lg opacity-90">
              Yaqeen means "certainty" in Arabic - the certainty that help will reach those who need it most
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="bg-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-6 sm:mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-sm sm:prose-lg max-w-none text-gray-700 space-y-4 sm:space-y-6">
                <p className="text-sm sm:text-base leading-relaxed">
                  Yaqeen was born from a simple yet powerful belief: that every family deserves dignity, hope, and the
                  support of a caring global community. Founded in 2024, our platform emerged from the urgent need to
                  create transparent, direct connections between families in Gaza and donors worldwide.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  We witnessed too many stories of aid that never reached its intended recipients, of families whose
                  voices went unheard, and of donors who wanted to help but lacked a trusted pathway to make a real
                  difference. Yaqeen changes that narrative.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Our name, "Yaqeen," means certainty in Arabic. It represents our commitment to providing donors with
                  the certainty that their contributions will reach the families they choose to support. It represents
                  our promise to families that their stories will be heard and their needs will be met with dignity and
                  respect.
                </p>
                <p className="text-sm sm:text-base leading-relaxed">
                  Today, Yaqeen has helped thousands of families rebuild their lives while creating a global community
                  of compassionate individuals united by the belief that humanity knows no borders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-[#F5F5F5] py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D] mb-8 sm:mb-12 text-center">
              Our Values
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
              Our Impact
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
              Meet Our Team
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#007A3D]">Our Vision</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 leading-relaxed">
                A world where distance and borders cannot prevent compassion from reaching those who need it most.
              </p>
              <div className="flex items-center justify-center space-x-2 mb-4 sm:mb-6">
                <Handshake className="w-6 h-6 sm:w-8 sm:h-8 text-[#D32F2F]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D32F2F]">Our Mission</h2>
              </div>
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                To create transparent, direct connections between families in need and global donors, ensuring every
                contribution makes a meaningful, verified impact on real lives.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
