"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, MapPin, Phone, Mail, Lock, Shield, CheckCircle, Heart, UserCheck, Home } from "lucide-react"
import Link from "next/link"

export default function FamilySignUpPage() {
  const [formData, setFormData] = useState({
    // Basic Information
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    address: "",
    familyMembers: "",
    // Optional
    story: "",
    agreeToTerms: false,
  })

  const [showPassword, setShowPassword] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Sign up logic
    console.log("Family sign up:", formData)
    alert("Account created successfully! Welcome to Yaqeen.")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-gradient-to-br from-[#F5F5F5] to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#007A3D]/5 to-[#D32F2F]/5 border-b border-gray-200 py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-[#007A3D]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-[#007A3D]" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">Join Our Family Community</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
              Create your family account to connect with our humanitarian support network and access assistance when
              needed.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-[#007A3D]" />
                <span>Verified Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-[#007A3D]" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-4 h-4 text-[#D32F2F]" />
                <span>Compassionate Care</span>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sign Up Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-2xl font-bold text-black mb-2">Create Family Account</CardTitle>
                  <p className="text-gray-600">Join thousands of families in our support community</p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <UserCheck className="w-5 h-5 text-[#007A3D]" />
                        <h3 className="text-lg font-semibold text-black">Personal Information</h3>
                      </div>

                      <div>
                        <Label htmlFor="fullName" className="text-black font-medium">
                          Full Name (Head of Family) *
                        </Label>
                        <Input
                          id="fullName"
                          value={formData.fullName}
                          onChange={(e) => handleInputChange("fullName", e.target.value)}
                          placeholder="Enter your full name"
                          className="mt-1"
                          required
                        />
                        <p className="text-xs text-gray-500 mt-1">This will be used as your primary contact name</p>
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
                              placeholder="+970-XXX-XXXX"
                              className="pl-10"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="address" className="text-black font-medium">
                          Address *
                        </Label>
                        <div className="relative mt-1">
                          <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                          <Textarea
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            placeholder="Enter your complete address (street, neighborhood, city)"
                            rows={2}
                            className="pl-10"
                            required
                          />
                        </div>
                        <p className="text-xs text-gray-500 mt-1">
                          This helps us verify your location and provide local support
                        </p>
                      </div>

                      <div>
                        <Label htmlFor="familyMembers" className="text-black font-medium">
                          Number of Family Members *
                        </Label>
                        <div className="relative mt-1">
                          <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                          <Input
                            id="familyMembers"
                            type="number"
                            min="1"
                            value={formData.familyMembers}
                            onChange={(e) => handleInputChange("familyMembers", e.target.value)}
                            placeholder="Total family members"
                            className="pl-10"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Account Security */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-2 mb-4">
                        <Lock className="w-5 h-5 text-[#007A3D]" />
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
                          <p className="text-xs text-gray-500 mt-1">At least 8 characters with letters and numbers</p>
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

                    {/* Optional Story */}
                    <div className="space-y-4 pt-6 border-t border-gray-100">
                      <div className="flex items-center space-x-2 mb-4">
                        <Heart className="w-5 h-5 text-[#D32F2F]" />
                        <h3 className="text-lg font-semibold text-black">Tell Us About Your Family (Optional)</h3>
                      </div>

                      <div>
                        <Label htmlFor="story" className="text-black font-medium">
                          Family Story
                        </Label>
                        <Textarea
                          id="story"
                          value={formData.story}
                          onChange={(e) => handleInputChange("story", e.target.value)}
                          placeholder="Share a brief story about your family, your hopes, or what brings you to our community..."
                          rows={4}
                          className="mt-1"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          This helps our community understand and connect with your family better
                        </p>
                      </div>
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
                          <Link href="/terms" className="text-[#007A3D] hover:underline font-medium">
                            Terms of Service
                          </Link>{" "}
                          and{" "}
                          <Link href="/privacy" className="text-[#007A3D] hover:underline font-medium">
                            Privacy Policy
                          </Link>
                          . I understand that my information will be kept confidential and used only for humanitarian
                          support purposes.
                        </Label>
                      </div>

                      <Button
                        type="submit"
                        className="w-full bg-[#007A3D] hover:bg-[#007A3D]/90 text-white py-3 text-lg font-semibold"
                        disabled={!formData.agreeToTerms}
                      >
                        Create Family Account
                      </Button>

                      <div className="text-center">
                        <p className="text-sm text-gray-600">
                          Already have an account?{" "}
                          <Link href="/login" className="text-[#007A3D] hover:underline font-medium">
                            Sign in here
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Trust & Benefits Sidebar */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#007A3D]/5 to-white border-[#007A3D]/20">
                <CardHeader>
                  <CardTitle className="text-[#007A3D] flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span>Why Join Yaqeen?</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Verified Support Network</h4>
                      <p className="text-sm text-gray-600">
                        Connect with verified donors and humanitarian organizations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Direct Assistance</h4>
                      <p className="text-sm text-gray-600">Receive help directly from compassionate donors worldwide</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Complete Privacy</h4>
                      <p className="text-sm text-gray-600">
                        Your information is protected and shared only with your consent
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-[#007A3D] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-black">Community Support</h4>
                      <p className="text-sm text-gray-600">Join a caring community that understands your challenges</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-6 text-center">
                  <Home className="w-12 h-12 text-[#D32F2F] mx-auto mb-4" />
                  <h3 className="font-semibold text-black mb-2">Need Immediate Help?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    If you're facing an emergency situation, our support team is here to help.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full border-[#D32F2F] text-[#D32F2F] bg-transparent">
                      Contact Emergency Support
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#D32F2F]/5 to-white border-[#D32F2F]/20">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-3">What Happens Next?</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#007A3D] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        1
                      </div>
                      <span className="text-gray-700">Account verification via email</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#007A3D] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        2
                      </div>
                      <span className="text-gray-700">Profile review by our team</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#007A3D] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        3
                      </div>
                      <span className="text-gray-700">Access to support resources</span>
                    </div>
                  </div>
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
