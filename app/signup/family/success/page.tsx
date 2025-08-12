import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Shield, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function FamilySignupSuccessPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-[#007A3D] rounded-full flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Registration Submitted Successfully!</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Thank you for trusting Yaqeen with your family's story. We're here to help connect you with generous
              donors who care.
            </p>
          </div>

          {/* What Happens Next */}
          <Card className="bg-white shadow-lg border-t-4 border-t-[#D32F2F] mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-black mb-6 flex items-center">
                <Clock className="w-6 h-6 text-[#D32F2F] mr-3" />
                What Happens Next?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Review & Verification (24-48 hours)</h3>
                    <p className="text-gray-600">
                      Our team will carefully review your application and verify the information through our local
                      partners. This ensures transparency for our donors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Additional Documentation (if needed)</h3>
                    <p className="text-gray-600">
                      We may contact you for additional documents or information to complete the verification process.
                      This helps build trust with potential donors.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#007A3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Case Publication</h3>
                    <p className="text-gray-600">
                      Once verified, your family's case will be published on our platform where donors can learn about
                      your situation and choose to help.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D32F2F] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Receive Support & Updates</h3>
                    <p className="text-gray-600">
                      When donors contribute to your family, you'll receive notifications and can share updates about
                      how their support is helping.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Mail className="w-6 h-6 text-[#007A3D] mr-3" />
                  <h3 className="font-semibold text-black">Check Your Email</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We've sent a confirmation email with your registration details. Please check your inbox and spam
                  folder.
                </p>
                <p className="text-sm text-gray-500">
                  Didn't receive it? Check your spam folder or contact our support team.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Phone className="w-6 h-6 text-[#D32F2F] mr-3" />
                  <h3 className="font-semibold text-black">Stay Available</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our verification team may contact you via phone or email for additional information or documentation.
                </p>
                <p className="text-sm text-gray-500">
                  Please keep your phone number updated and check your messages regularly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Trust & Security */}
          <Card className="bg-gradient-to-r from-[#007A3D]/5 to-[#D32F2F]/5 mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-[#007A3D] mr-3" />
                <h3 className="font-semibold text-black">Your Privacy & Security</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Your personal information is encrypted and secure. We only share necessary details with verified donors
                to help them understand how they can support your family.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center text-[#007A3D]">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Encrypted Data
                </span>
                <span className="flex items-center text-[#007A3D]">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Verified Partners
                </span>
                <span className="flex items-center text-[#007A3D]">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Transparent Process
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="text-center space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="bg-[#007A3D] hover:bg-[#007A3D]/90 text-white px-8 py-3">
                  Return to Homepage
                </Button>
              </Link>
              <Link href="/cases">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#D32F2F] text-[#D32F2F] hover:bg-[#D32F2F] hover:text-white px-8 py-3 bg-transparent"
                >
                  Browse Other Families
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-600">
              Questions? Contact our support team at{" "}
              <a href="mailto:support@yaqeen.org" className="text-[#007A3D] hover:underline">
                support@yaqeen.org
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
