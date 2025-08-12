"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "@/components/ui/checkbox"
import {
  User,
  Mail,
  Lock,
  Heart,
  Camera,
  Phone,
  Building2,
  Shield,
  CheckCircle,
  Globe,
  TrendingUp,
  Users,
  DollarSign,
} from "lucide-react"
import Link from "next/link"

export default function DonorSignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    organizationName: "",
    donationPreference: "one-time",
    profileImage: null as File | null,
    agreeToTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, profileImage: file }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Registration logic
    console.log("Donor sign up:", formData)
    alert("Welcome to Yaqeen! Your donor account has been created successfully.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#F5F5F5] to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#D32F2F]/5 to-[#007A3D]/5 border-b border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-[#D32F2F]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-[#D32F2F]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Become a Beacon of Hope</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Join thousands of compassionate donors making a real difference in the lives of families in Gaza. Your
              generosity creates lasting impact.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#007A3D]" />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#007A3D]" />
                <span>Secure Donations</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4 text-[#D32F2F]" />
                <span>Global Impact</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sign Up Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-black mb-2">Create Your Donor Account</CardTitle>
                  <p className="text-gray-600">Start your journey of compassion and impact</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Profile Image */}
                    <div className="flex flex-col items-center space-y-4">
                      <div className="relative">
                        <Avatar className="w-24 h-24">
                          <AvatarImage
                            src={formData.profileImage ? URL.createObjectURL(formData.profileImage) : undefined}
                          />
                          <AvatarFallback className="bg-[#D32F2F] text-white text-2xl">
                            {formData.firstName.charAt(0) || <User className="w-8 h-8" />}
                          </AvatarFallback>
                        </Avatar>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="profile-image"
                        />
                        <Label htmlFor="profile-image">
                          <Button
                            size="sm"
                            className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-[#D32F2F] hover:bg-[#D32F2F]/90 cursor-pointer"
                          >
                            <Camera className="w-4 h-4" />
                          </Button>
                        </Label>
                      </div>
                      <p className="text-sm text-gray-600">Add your photo to personalize your profile (optional)</p>
                    </div>

                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <User className="w-5 h-5 text-[#D32F2F]" />
                        <h3 className="text-lg font-semibold text-black">Personal Information</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-black font-medium">
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange("firstName", e.target.value)}
                            placeholder="Your first name"
                            className="mt-1"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="text-black font-medium">
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange("lastName", e.target.value)}
                            placeholder="Your last name"
                            className="mt-1"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email" className="text-black font-medium">
                            Email Address *
                          </Label>
                          <div className="relative mt-1">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange("email", e.target.value)}
                              placeholder="your.email@example.com"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phoneNumber" className="text-black font-medium">
                            Phone Number *
                          </Label>
                          <div className="relative mt-1">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                              placeholder="+1-XXX-XXX-XXXX"
                              className="pl-10"
                              required
                            />
                          </div>
                          <p className="text-xs text-gray-500 mt-1">For donation confirmations and updates</p>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="organizationName" className="text-black font-medium">
                          Organization Name (Optional)
                        </Label>
                        <div className="relative mt-1">
                          <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="organizationName"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange("organizationName", e.target.value)}
                            placeholder="Company, foundation, or organization name"
                            className="pl-10"
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          If donating on behalf of an organization or company
                        </p>
                      </div>
                    </div>

                    {/* Account Security */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-2 mb-4">
                        <Lock className="w-5 h-5 text-[#D32F2F]" />
                        <h3 className="text-lg font-semibold text-black">Account Security</h3>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="password" className="text-black font-medium">
                            Password *
                          </Label>
                          <div className="relative mt-1">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              value={formData.password}
                              onChange={(e) => handleInputChange("password", e.target.value)}
                              placeholder="Create a strong password"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="confirmPassword" className="text-black font-medium">
                            Confirm Password *
                          </Label>
                          <div className="relative mt-1">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <Input
                              id="confirmPassword"
                              type={showPassword ? "text" : "password"}
                              value={formData.confirmPassword}
                              onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                              placeholder="Confirm your password"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="showPassword" checked={showPassword} onCheckedChange={setShowPassword} />
                        <Label htmlFor="showPassword" className="text-sm text-gray-600 cursor-pointer">
                          Show passwords
                        </Label>
                      </div>
                    </div>

                    {/* Donation Preferences */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-2 mb-4">
                        <DollarSign className="w-5 h-5 text-[#007A3D]" />
                        <h3 className="text-lg font-semibold text-black">Donation Preferences</h3>
                      </div>

                      <RadioGroup
                        value={formData.donationPreference}
                        onValueChange={(value) => handleInputChange("donationPreference", value)}
                        className="space-y-3"
                      >
                        <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:bg-gray-50 hover:border-[#007A3D]/30 transition-colors">
                          <RadioGroupItem value="one-time" id="one-time" />
                          <Label htmlFor="one-time" className="flex-1 cursor-pointer">
                            <div className="font-medium text-black">One-time Donations</div>
                            <div className="text-sm text-gray-600">
                              Choose when and how much to donate to specific families
                            </div>
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2 p-4 border-2 rounded-lg hover:bg-gray-50 hover:border-[#007A3D]/30 transition-colors">
                          <RadioGroupItem value="monthly" id="monthly" />
                          <Label htmlFor="monthly" className="flex-1 cursor-pointer">
                            <div className="font-medium text-black">Monthly Recurring Donations</div>
                            <div className="text-sm text-gray-600">
                              Set up automatic monthly donations for consistent support
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>

                    {/* Terms and Submit */}
                    <div className="space-y-6 pt-6 border-t border-gray-100">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="agreeToTerms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                          className="mt-1"
                          required
                        />
                        <Label htmlFor="agreeToTerms" className="text-sm text-gray-700 cursor-pointer leading-relaxed">
                          I agree to the{" "}
                          <Link href="/terms" className="text-[#D32F2F] hover:underline font-medium">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-[#D32F2F] hover:underline font-medium">
                            Privacy Policy
                          </Link>
                          . I understand that my donations will be used transparently for humanitarian purposes and I
                          will receive regular updates on their impact.
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white py-3 text-lg font-semibold"
                        disabled={!formData.agreeToTerms}
                      >
                        Create Donor Account
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Already have an account?{" "}
                          <Link href="/login" className="text-[#D32F2F] hover:underline font-medium">
                            Sign in here
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Impact & Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#D32F2F]/5 to-white border-[#D32F2F]/20">
                <CardHeader>
                  <CardTitle className="text-[#D32F2F] flex items-center space-x-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>Your Impact</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center mb-4">
                    <div className="text-3xl font-bold text-[#007A3D] mb-1">$2.3M+</div>
                    <div className="text-sm text-gray-600">Raised by our donors</div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Direct Family Support</h4>
                      <p className="text-sm text-gray-600">100% of donations go directly to verified families</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Real-time Updates</h4>
                      <p className="text-sm text-gray-600">See exactly how your donations are making a difference</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Personal Connection</h4>
                      <p className="text-sm text-gray-600">Receive thank you messages and updates from families</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Tax Deductible</h4>
                      <p className="text-sm text-gray-600">All donations are tax-deductible in eligible countries</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-[#007A3D] mx-auto mb-4" />
                  <h3 className="font-semibold text-black mb-2">Join 15,000+ Donors</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Be part of a global community of compassionate individuals making real change happen.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#007A3D]">3,200+</div>
                      <div className="text-xs text-gray-600">Families Helped</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#007A3D]">98%</div>
                      <div className="text-xs text-gray-600">Satisfaction Rate</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#007A3D]/5 to-white border-[#007A3D]/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-3">What Happens Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#D32F2F] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <span className="text-gray-700">Email verification and welcome</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#D32F2F] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <span className="text-gray-700">Browse families and choose who to support</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#D32F2F] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <span className="text-gray-700">Start making a difference immediately</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-[#007A3D] mx-auto mb-4" />
                  <h3 className="font-semibold text-black mb-2">Questions?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Our support team is here to help you get started with your giving journey.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-[#007A3D] text-[#007A3D] bg-transparent">
                      Contact Support
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
