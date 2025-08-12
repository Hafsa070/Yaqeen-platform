"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Heart, Shield, Users, Building, Eye, EyeOff, CheckCircle, DollarSign, Globe } from "lucide-react"
import Link from "next/link"

export default function DonorSignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    country: "",
    organizationName: "",
    organizationType: "",
    donationFrequency: "",
    donationAmount: "",
    interests: [] as string[],
    agreeToTerms: false,
    subscribeUpdates: true,
  })

  const handleInputChange = (field: string, value: string | boolean | string[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleInterestToggle = (interest: string) => {
    const currentInterests = formData.interests
    const updatedInterests = currentInterests.includes(interest)
      ? currentInterests.filter((i) => i !== interest)
      : [...currentInterests, interest]
    handleInputChange("interests", updatedInterests)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Donor signup:", formData)
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />
      <main className="flex-1 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#007A3D] rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Join as a Donor</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Make a direct impact in the lives of families in Gaza. Every donation is transparent, verified, and
              creates real change.
            </p>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center space-x-2 text-[#007A3D]">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">100% Transparent</span>
            </div>
            <div className="flex items-center space-x-2 text-[#007A3D]">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Verified Families</span>
            </div>
            <div className="flex items-center space-x-2 text-[#007A3D]">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Direct Impact</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Personal Information */}
              <Card className="bg-white shadow-lg border-t-4 border-t-[#007A3D]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-black flex items-center">
                    <Users className="w-5 h-5 text-[#007A3D] mr-2" />
                    Personal Information
                  </CardTitle>
                  <p className="text-gray-600 text-sm">Tell us about yourself</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-black font-medium">
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-black font-medium">
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-black font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                      placeholder="your.email@example.com"
                      required
                    />
                    <p className="text-xs text-gray-500">We'll send you updates on your donations and impact</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-black font-medium">
                      Password *
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) => handleInputChange("password", e.target.value)}
                        className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D] pr-10"
                        placeholder="Create a secure password"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500">Minimum 8 characters with letters and numbers</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-black font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                      placeholder="+1 (555) 123-4567"
                    />
                    <p className="text-xs text-gray-500">Optional - for important donation updates</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-black font-medium">
                      Country *
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("country", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                        <SelectItem value="es">Spain</SelectItem>
                        <SelectItem value="it">Italy</SelectItem>
                        <SelectItem value="nl">Netherlands</SelectItem>
                        <SelectItem value="se">Sweden</SelectItem>
                        <SelectItem value="no">Norway</SelectItem>
                        <SelectItem value="ae">UAE</SelectItem>
                        <SelectItem value="sa">Saudi Arabia</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Organization Information */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-medium text-black mb-4 flex items-center">
                      <Building className="w-4 h-4 text-[#007A3D] mr-2" />
                      Organization (Optional)
                    </h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="organizationName" className="text-black font-medium">
                          Organization Name
                        </Label>
                        <Input
                          id="organizationName"
                          type="text"
                          value={formData.organizationName}
                          onChange={(e) => handleInputChange("organizationName", e.target.value)}
                          className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]"
                          placeholder="Company, NGO, or organization name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organizationType" className="text-black font-medium">
                          Organization Type
                        </Label>
                        <Select onValueChange={(value) => handleInputChange("organizationType", value)}>
                          <SelectTrigger className="border-gray-300 focus:border-[#007A3D] focus:ring-[#007A3D]">
                            <SelectValue placeholder="Select organization type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="company">Company/Business</SelectItem>
                            <SelectItem value="ngo">NGO/Non-Profit</SelectItem>
                            <SelectItem value="foundation">Foundation</SelectItem>
                            <SelectItem value="religious">Religious Organization</SelectItem>
                            <SelectItem value="school">School/University</SelectItem>
                            <SelectItem value="community">Community Group</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Donation Preferences */}
              <Card className="bg-white shadow-lg border-t-4 border-t-[#D32F2F]">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-black flex items-center">
                    <DollarSign className="w-5 h-5 text-[#D32F2F] mr-2" />
                    Donation Preferences
                  </CardTitle>
                  <p className="text-gray-600 text-sm">Help us personalize your giving experience</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <Label className="text-black font-medium">Donation Frequency *</Label>
                    <RadioGroup
                      value={formData.donationFrequency}
                      onValueChange={(value) => handleInputChange("donationFrequency", value)}
                      className="space-y-3"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="one-time" id="one-time" />
                        <Label htmlFor="one-time" className="cursor-pointer">
                          One-time donations
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="monthly" id="monthly" />
                        <Label htmlFor="monthly" className="cursor-pointer">
                          Monthly recurring donations
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="both" id="both" />
                        <Label htmlFor="both" className="cursor-pointer">
                          Both one-time and recurring
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="donationAmount" className="text-black font-medium">
                      Typical Donation Amount
                    </Label>
                    <Select onValueChange={(value) => handleInputChange("donationAmount", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-[#D32F2F] focus:ring-[#D32F2F]">
                        <SelectValue placeholder="Select typical amount" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="25">$25 - $50</SelectItem>
                        <SelectItem value="100">$50 - $100</SelectItem>
                        <SelectItem value="250">$100 - $250</SelectItem>
                        <SelectItem value="500">$250 - $500</SelectItem>
                        <SelectItem value="1000">$500 - $1,000</SelectItem>
                        <SelectItem value="more">$1,000+</SelectItem>
                        <SelectItem value="varies">Varies</SelectItem>
                      </SelectContent>
                    </Select>
                    <p className="text-xs text-gray-500">This helps us suggest appropriate cases for your budget</p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-black font-medium">Areas of Interest</Label>
                    <p className="text-sm text-gray-600">Select the types of cases you'd like to support</p>
                    <div className="grid grid-cols-1 gap-3">
                      {[
                        { id: "medical", label: "Medical Treatment", icon: "🏥" },
                        { id: "education", label: "Education Support", icon: "📚" },
                        { id: "shelter", label: "Housing & Shelter", icon: "🏠" },
                        { id: "food", label: "Food & Nutrition", icon: "🍽️" },
                        { id: "emergency", label: "Emergency Relief", icon: "🚨" },
                        { id: "children", label: "Children & Families", icon: "👨‍👩‍👧‍👦" },
                      ].map((interest) => (
                        <div key={interest.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={interest.id}
                            checked={formData.interests.includes(interest.id)}
                            onCheckedChange={() => handleInterestToggle(interest.id)}
                          />
                          <Label htmlFor={interest.id} className="cursor-pointer flex items-center space-x-2">
                            <span>{interest.icon}</span>
                            <span>{interest.label}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Impact Information */}
                  <div className="bg-gradient-to-r from-[#007A3D]/5 to-[#D32F2F]/5 p-4 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-[#007A3D] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-black mb-1">Your Impact</h4>
                        <p className="text-sm text-gray-600">
                          Every donation goes directly to families. You'll receive photos, updates, and messages showing
                          exactly how your generosity creates change.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Terms and Preferences */}
            <Card className="bg-white shadow-lg mt-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="agreeToTerms" className="text-black font-medium cursor-pointer">
                        I agree to the Terms of Service and Privacy Policy *
                      </Label>
                      <p className="text-sm text-gray-600">
                        By registering, you agree to our{" "}
                        <Link href="/terms" className="text-[#007A3D] hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-[#007A3D] hover:underline">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="subscribeUpdates"
                      checked={formData.subscribeUpdates}
                      onCheckedChange={(checked) => handleInputChange("subscribeUpdates", checked as boolean)}
                      className="mt-1"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="subscribeUpdates" className="text-black font-medium cursor-pointer">
                        Send me updates about families I support
                      </Label>
                      <p className="text-sm text-gray-600">
                        Receive photos, messages, and progress updates from the families you help. You can unsubscribe
                        anytime.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="mt-8 text-center">
              <Button
                type="submit"
                size="lg"
                className="bg-[#007A3D] hover:bg-[#007A3D]/90 text-white px-12 py-3 text-lg font-medium"
                disabled={!formData.agreeToTerms}
              >
                Start Making a Difference
              </Button>
              <p className="text-sm text-gray-600 mt-4">
                Already have an account?{" "}
                <Link href="/login" className="text-[#007A3D] hover:underline font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}
