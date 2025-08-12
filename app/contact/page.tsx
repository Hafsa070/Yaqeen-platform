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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    inquiryType: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      inquiryType: "",
    })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-white border-b border-gray-200 py-8 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
              Contact Us
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We're here to help. Reach out to us with any questions, concerns, or if you need assistance with donations
              or family registration.
            </p>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div className="xl:col-span-2">
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-lg sm:text-xl">Send us a Message</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm sm:text-base text-black font-medium">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          placeholder="Your full name"
                          required
                          className="mt-1 h-11 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm sm:text-base text-black font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="mt-1 h-11 sm:h-12 text-sm sm:text-base"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="inquiryType" className="text-sm sm:text-base text-black font-medium">
                        Inquiry Type
                      </Label>
                      <Select
                        value={formData.inquiryType}
                        onValueChange={(value) => handleInputChange("inquiryType", value)}
                      >
                        <SelectTrigger className="mt-1 h-11 sm:h-12 text-sm sm:text-base">
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Information</SelectItem>
                          <SelectItem value="donor">Donor Support</SelectItem>
                          <SelectItem value="family">Family Registration</SelectItem>
                          <SelectItem value="technical">Technical Issues</SelectItem>
                          <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                          <SelectItem value="media">Media Request</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="subject" className="text-sm sm:text-base text-black font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => handleInputChange("subject", e.target.value)}
                        placeholder="Brief description of your inquiry"
                        required
                        className="mt-1 h-11 sm:h-12 text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm sm:text-base text-black font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        placeholder="Please provide details about your inquiry..."
                        rows={5}
                        required
                        className="mt-1 text-sm sm:text-base min-h-[120px] sm:min-h-[140px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#007A3D] hover:bg-[#007A3D]/90 text-white h-12 text-sm sm:text-base"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              {/* Contact Details */}
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-lg sm:text-xl">Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 sm:space-y-6 px-4 sm:px-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">General Inquiries</h3>
                      <p className="text-[#007A3D] font-medium text-sm sm:text-base">info@yaqeen.org</p>
                      <p className="text-xs sm:text-sm text-gray-600">For general questions and information</p>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">Support Line</h3>
                      <p className="text-[#007A3D] font-medium text-sm sm:text-base">+1-XXX-XXX-XXXX</p>
                      <p className="text-xs sm:text-sm text-gray-600">Monday to Friday, 9 AM - 6 PM EST</p>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">Urgent Cases</h3>
                      <p className="text-[#D32F2F] font-medium text-sm sm:text-base">+970-XXX-XXXX</p>
                      <p className="text-xs sm:text-sm text-gray-600">24/7 hotline for emergency situations</p>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-black">Headquarters</h3>
                      <p className="text-[#007A3D] font-medium text-sm sm:text-base">Gaza City, Palestine</p>
                      <p className="text-xs sm:text-sm text-gray-600">Local coordination office</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-lg sm:text-xl">Office Hours</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
                  <div className="flex justify-between">
                    <span className="text-black font-medium text-sm sm:text-base">Monday - Friday</span>
                    <span className="text-gray-600 text-sm sm:text-base">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black font-medium text-sm sm:text-base">Saturday</span>
                    <span className="text-gray-600 text-sm sm:text-base">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-black font-medium text-sm sm:text-base">Sunday</span>
                    <span className="text-gray-600 text-sm sm:text-base">Closed</span>
                  </div>
                  <div className="pt-2 sm:pt-3 border-t border-gray-200">
                    <p className="text-xs sm:text-sm text-[#D32F2F] font-medium">Emergency hotline available 24/7</p>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Link */}
              <Card className="bg-[#007A3D]/5 border-[#007A3D]/20">
                <CardContent className="p-4 sm:p-6 text-center">
                  <h3 className="text-sm sm:text-base font-semibold text-[#007A3D] mb-2">Need Quick Answers?</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                    Check our frequently asked questions for immediate help.
                  </p>
                  <Button
                    variant="outline"
                    className="border-[#007A3D] text-[#007A3D] hover:bg-[#007A3D] hover:text-white bg-transparent text-sm h-10 w-full sm:w-auto"
                  >
                    View FAQ
                  </Button>
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
