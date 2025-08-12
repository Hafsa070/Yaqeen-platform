import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Heart, Users, Mail, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function DonorSignupSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#007A3D] rounded-full flex items-center justify-center">
                <Heart className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Welcome to the Yaqeen Community!</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for joining us in bringing hope to families in Gaza. Your generosity will create real,
              measurable impact.
            </p>
          </div>

          {/* Welcome Message */}
          <Card className="bg-gradient-to-r from-[#007A3D]/10 to-[#D32F2F]/10 border-t-4 border-t-[#007A3D] mb-8">
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-bold text-black mb-4">You're Ready to Make a Difference!</h2>
              <p className="text-gray-600 mb-6">
                Your account is active and ready. You can now browse verified family cases, make donations, and track
                your impact in real-time.
              </p>
              <div className="flex justify-center">
                <Link href="/cases">
                  <Button size="lg" className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white px-8 py-3">
                    Start Exploring Cases
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Getting Started */}
          <Card className="bg-white shadow-lg border-t-4 border-t-[#D32F2F] mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Star className="w-6 h-6 text-[#D32F2F] mr-3" />
                Getting Started
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Browse Family Cases</h3>
                    <p className="text-gray-600">
                      Explore verified families in need. Each case includes photos, stories, and specific needs. Use
                      filters to find families that match your interests.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Make Your First Donation</h3>
                    <p className="text-gray-600">
                      Choose a family that resonates with you and make a secure donation. You can donate any amount,
                      one-time or recurring.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Track Your Impact</h3>
                    <p className="text-gray-600">
                      Receive photos, updates, and messages from the families you support. See exactly how your
                      generosity creates change.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Share Your Experience</h3>
                    <p className="text-gray-600">
                      Invite friends and family to join the community. Share success stories and help expand our network
                      of support.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Features & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-black mb-2">100% Verified</h3>
                <p className="text-gray-600 text-sm">
                  Every family case is thoroughly verified by our local partners before publication.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#D32F2F] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-black mb-2">Direct Impact</h3>
                <p className="text-gray-600 text-sm">
                  Your donations go directly to families with minimal overhead and maximum transparency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-[#007A3D] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-black mb-2">Real Updates</h3>
                <p className="text-gray-600 text-sm">
                  Receive photos, messages, and progress reports from the families you support.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Email Confirmation */}
          <Card className="bg-blue-50 mb-8">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="font-semibold text-black">Check Your Email</h3>
              </div>
              <p className="text-gray-600 mb-4">
                We've sent a welcome email with your account details and tips for getting started. Please check your
                inbox and add us to your contacts.
              </p>
              <p className="text-sm text-gray-500">
                Email: support@yaqeen.org | Didn't receive it? Check your spam folder.
              </p>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/cases">
                <Button size="lg" className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white px-8 py-3">
                  Browse Family Cases
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white px-8 py-3 bg-transparent"
                >
                  Go to Dashboard
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Need help getting started?{" "}
              <Link href="/contact" className="text-[#007A3D] hover:underline">
                Contact our support team
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
