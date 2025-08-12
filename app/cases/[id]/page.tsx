"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Heart,
  MapPin,
  Calendar,
  Users,
  FileText,
  Download,
  ChevronLeft,
  ChevronRight,
  Play,
  ExternalLink,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function CaseDetailsPage({ params }: { params: { id: string } }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Mock data - in real app this would come from API based on params.id
  const caseData = {
    id: params.id,
    family: "Al-Mahmoud Family",
    type: "Medical Treatment",
    location: "Gaza City",
    urgent: true,
    story:
      "The Al-Mahmoud family's life changed forever when their home was destroyed during recent conflicts. Five-year-old Layla was injured and requires ongoing medical treatment. Her father, Ahmed, was a teacher before losing his job, and her mother, Fatima, cares for three children while managing Layla's medical needs. They are currently staying with relatives in overcrowded conditions.",
    needs: [
      "Urgent medical treatment for Layla",
      "Temporary housing for family of 5",
      "Food and basic necessities",
      "School supplies for the children",
      "Medical equipment and medications",
    ],
    raised: 2400,
    target: 5000,
    donors: 23,
    daysLeft: 45,
    media: [
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600&text=Al-Mahmoud+Family",
        caption: "The Al-Mahmoud family at their temporary shelter",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600&text=Layla+Medical+Care",
        caption: "Layla receiving medical treatment",
      },
      {
        type: "video",
        url: "/placeholder.svg?height=400&width=600&text=Family+Video",
        caption: "Message from the Al-Mahmoud family",
      },
      {
        type: "image",
        url: "/placeholder.svg?height=400&width=600&text=Damaged+Home",
        caption: "Their damaged home in Gaza City",
      },
    ],
    documents: [
      { name: "Medical Report", type: "PDF", url: "#" },
      { name: "ID Documents", type: "PDF", url: "#" },
      { name: "Housing Certificate", type: "PDF", url: "#" },
    ],
    updates: [
      {
        date: "2024-01-15",
        title: "Medical Treatment Started",
        description:
          "Layla has begun her medical treatment at the local clinic. The doctors are optimistic about her recovery.",
        image: "/placeholder.svg?height=200&width=300&text=Medical+Update",
      },
      {
        date: "2024-01-10",
        title: "Temporary Housing Secured",
        description:
          "The family has found temporary accommodation with relatives. They are grateful for the support received so far.",
        image: "/placeholder.svg?height=200&width=300&text=Housing+Update",
      },
      {
        date: "2024-01-05",
        title: "Case Verified and Published",
        description:
          "After thorough verification, the Al-Mahmoud family's case has been approved and published on Yaqeen.",
        image: "/placeholder.svg?height=200&width=300&text=Verification",
      },
    ],
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % caseData.media.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + caseData.media.length) % caseData.media.length)
  }

  const progressPercentage = (caseData.raised / caseData.target) * 100

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Breadcrumb */}
        <div className="bg-[#F5F5F5] py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#007A3D]">
                Home
              </Link>
              <span className="text-gray-400">/</span>
              <Link href="/cases" className="text-gray-500 hover:text-[#007A3D]">
                Browse Cases
              </Link>
              <span className="text-gray-400">/</span>
              <span className="text-black font-medium">{caseData.family}</span>
            </nav>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Media Gallery */}
              <Card className="bg-white overflow-hidden">
                <div className="relative aspect-video">
                  <img
                    src={caseData.media[currentImageIndex]?.url || "/placeholder.svg"}
                    alt={caseData.media[currentImageIndex]?.caption}
                    className="w-full h-full object-cover"
                  />
                  {caseData.media[currentImageIndex]?.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Button size="lg" className="bg-white/90 text-black hover:bg-white">
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={prevImage}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white hover:bg-black/70"
                    onClick={nextImage}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {caseData.media.map((_, index) => (
                      <button
                        key={index}
                        className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white/50"}`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-gray-600">{caseData.media[currentImageIndex]?.caption}</p>
                </CardContent>
              </Card>

              {/* Case Information */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-black mb-2">{caseData.family}</h1>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{caseData.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{caseData.daysLeft} days left</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Badge variant="secondary" className="text-[#007A3D] bg-[#007A3D]/10">
                        {caseData.type}
                      </Badge>
                      {caseData.urgent && (
                        <Badge className="bg-[#D32F2F] text-white">
                          <Clock className="w-3 h-3 mr-1" />
                          Urgent
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="prose max-w-none mb-6">
                    <h2 className="text-xl font-semibold text-black mb-3">Their Story</h2>
                    <p className="text-gray-700 leading-relaxed">{caseData.story}</p>
                  </div>

                  <div>
                    <h2 className="text-xl font-semibold text-black mb-3">What They Need</h2>
                    <ul className="space-y-2">
                      {caseData.needs.map((need, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-[#007A3D] mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{need}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Tabs for Documents and Updates */}
              <Tabs defaultValue="updates" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="updates">Updates</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>

                <TabsContent value="updates" className="space-y-4">
                  {caseData.updates.map((update, index) => (
                    <Card key={index} className="bg-white">
                      <CardContent className="p-6">
                        <div className="flex space-x-4">
                          <img
                            src={update.image || "/placeholder.svg"}
                            alt={update.title}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-semibold text-black">{update.title}</h3>
                              <span className="text-sm text-gray-500">{update.date}</span>
                            </div>
                            <p className="text-gray-700">{update.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="documents" className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {caseData.documents.map((doc, index) => (
                      <Card key={index} className="bg-white hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <FileText className="w-8 h-8 text-[#007A3D]" />
                            <div className="flex-1">
                              <h3 className="font-medium text-black">{doc.name}</h3>
                              <p className="text-sm text-gray-500">{doc.type}</p>
                            </div>
                            <Button variant="ghost" size="sm" className="text-[#007A3D]">
                              <Download className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Donation Progress */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-[#007A3D] mb-1">${caseData.raised.toLocaleString()}</div>
                    <div className="text-gray-600">raised of ${caseData.target.toLocaleString()} goal</div>
                  </div>

                  <div className="mb-6">
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                      <div
                        className="bg-[#007A3D] h-3 rounded-full transition-all duration-300"
                        style={{ width: `${progressPercentage}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{Math.round(progressPercentage)}% funded</span>
                      <span>{caseData.daysLeft} days left</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center space-x-4 mb-6 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{caseData.donors} donors</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>Verified</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white text-lg py-3">
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>

                  <p className="text-xs text-gray-500 text-center mt-3">
                    Donations are processed securely through our verified partners
                  </p>
                </CardContent>
              </Card>

              {/* Share */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-4">Share This Case</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Share on Facebook
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Share on Twitter
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      Copy Link
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-black mb-4">Trust & Verification</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#007A3D]" />
                      <span className="text-sm text-gray-700">Identity Verified</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#007A3D]" />
                      <span className="text-sm text-gray-700">Documents Reviewed</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-[#007A3D]" />
                      <span className="text-sm text-gray-700">Local Partner Confirmed</span>
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
