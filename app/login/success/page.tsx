import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function LoginSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#007A3D] rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Welcome Back!</h1>
            <p className="text-xl text-gray-600">
              You've successfully signed in to your Yaqeen account. Ready to continue making a difference?
            </p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white shadow-lg border-t-4 border-t-[#D32F2F] hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-black mb-2">Browse Cases</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Discover families in need and make a direct impact with your donations.
                </p>
                <Link href="/cases">
                  <Button className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white w-full">
                    Explore Families
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg border-t-4 border-t-[#007A3D] hover:shadow-xl transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-black mb-2">Your Dashboard</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Track your donations, view updates, and manage your account settings.
                </p>
                <Link href="/dashboard">
                  <Button
                    variant="outline"
                    className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white w-full bg-transparent"
                  >
                    Go to Dashboard
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* Continue to Homepage */}
          <div className="text-center">
            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 bg-transparent"
              >
                Return to Homepage
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
