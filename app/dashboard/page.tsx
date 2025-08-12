"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, DollarSign, Users, TrendingUp, Bell, Settings, ExternalLink, MapPin } from "lucide-react"

export default function DonorDashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock donor data
  const donorData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    joinDate: "January 2024",
    totalDonated: 1250,
    familiesSupported: 5,
    avatar: "/placeholder.svg?height=80&width=80&text=SJ",
  }

  const donationHistory = [
    {
      id: 1,
      family: "Al-Mahmoud Family",
      amount: 500,
      date: "2024-01-15",
      status: "Delivered",
      type: "Medical Treatment",
      image: "/placeholder.svg?height=60&width=60&text=Family+1",
    },
    {
      id: 2,
      family: "Abu Hassan Family",
      amount: 300,
      date: "2024-01-10",
      status: "In Progress",
      type: "Food & Shelter",
      image: "/placeholder.svg?height=60&width=60&text=Family+2",
    },
    {
      id: 3,
      family: "Al-Zahra Family",
      amount: 200,
      date: "2024-01-05",
      status: "Delivered",
      type: "Education Support",
      image: "/placeholder.svg?height=60&width=60&text=Family+3",
    },
  ]

  const favoriteFamilies = [
    {
      id: 1,
      name: "Al-Mahmoud Family",
      type: "Medical Treatment",
      location: "Gaza City",
      progress: 85,
      image: "/placeholder.svg?height=100&width=100&text=Family+1",
      lastUpdate: "2 days ago",
    },
    {
      id: 2,
      name: "Abu Hassan Family",
      type: "Food & Shelter",
      location: "Khan Younis",
      progress: 60,
      image: "/placeholder.svg?height=100&width=100&text=Family+2",
      lastUpdate: "1 week ago",
    },
  ]

  const recentUpdates = [
    {
      id: 1,
      family: "Al-Mahmoud Family",
      title: "Layla's Treatment Progress",
      message: "Thank you for your support! Layla is responding well to treatment.",
      date: "2 days ago",
      image: "/placeholder.svg?height=50&width=50&text=Update+1",
    },
    {
      id: 2,
      family: "Abu Hassan Family",
      title: "New Temporary Housing",
      message: "The family has moved to better temporary accommodation.",
      date: "1 week ago",
      image: "/placeholder.svg?height=50&width=50&text=Update+2",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#F5F5F5]">
        {/* Dashboard Header */}
        <section className="bg-white border-b border-gray-200 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <Avatar className="w-12 h-12 sm:w-16 sm:h-16 mx-auto sm:mx-0">
                <AvatarImage src={donorData.avatar || "/placeholder.svg"} />
                <AvatarFallback className="bg-[#007A3D] text-white text-lg sm:text-xl">
                  {donorData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                  Welcome back, {donorData.name.split(" ")[0]}!
                </h1>
                <p className="text-sm sm:text-base text-gray-600">Member since {donorData.joinDate}</p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <Card className="bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#007A3D]/10 rounded-full flex items-center justify-center">
                    <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#007A3D]">
                      ${donorData.totalDonated.toLocaleString()}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600">Total Donated</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#007A3D]/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#007A3D]">{donorData.familiesSupported}</p>
                    <p className="text-xs sm:text-sm text-gray-600">Families Supported</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#007A3D]/10 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#007A3D]" />
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#007A3D]">98%</p>
                    <p className="text-xs sm:text-sm text-gray-600">Impact Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Dashboard Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
              <TabsTrigger value="overview" className="text-xs sm:text-sm py-2 sm:py-3">
                Overview
              </TabsTrigger>
              <TabsTrigger value="donations" className="text-xs sm:text-sm py-2 sm:py-3">
                Donations
              </TabsTrigger>
              <TabsTrigger value="favorites" className="text-xs sm:text-sm py-2 sm:py-3">
                Favorites
              </TabsTrigger>
              <TabsTrigger value="settings" className="text-xs sm:text-sm py-2 sm:py-3">
                Settings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6">
                {/* Recent Updates */}
                <Card className="bg-white">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-[#007A3D] flex items-center space-x-2 text-base sm:text-lg">
                      <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Recent Updates</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                    {recentUpdates.map((update) => (
                      <div key={update.id} className="flex space-x-3 p-3 bg-gray-50 rounded-lg">
                        <img
                          src={update.image || "/placeholder.svg"}
                          alt={update.title}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-black text-sm sm:text-base truncate">{update.title}</h4>
                          <p className="text-xs text-gray-600 mb-1">{update.family}</p>
                          <p className="text-xs sm:text-sm text-gray-700 line-clamp-2">{update.message}</p>
                          <p className="text-xs text-gray-500 mt-1">{update.date}</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Favorite Families Quick View */}
                <Card className="bg-white">
                  <CardHeader className="px-4 sm:px-6">
                    <CardTitle className="text-[#007A3D] flex items-center space-x-2 text-base sm:text-lg">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Favorite Families</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3 sm:space-y-4 px-4 sm:px-6">
                    {favoriteFamilies.map((family) => (
                      <div key={family.id} className="p-3 border rounded-lg">
                        <div className="flex items-center space-x-3 mb-3">
                          <img
                            src={family.image || "/placeholder.svg"}
                            alt={family.name}
                            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-black text-sm sm:text-base truncate">{family.name}</h4>
                            <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                              <MapPin className="w-3 h-3 flex-shrink-0" />
                              <span className="truncate">{family.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="flex justify-between text-xs sm:text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-[#007A3D] font-medium">{family.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-[#007A3D] h-2 rounded-full" style={{ width: `${family.progress}%` }} />
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-500">Updated {family.lastUpdate}</span>
                          <Button size="sm" className="bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white text-xs px-3 py-1">
                            Donate
                          </Button>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="donations" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-base sm:text-lg">Donation History</CardTitle>
                </CardHeader>
                <CardContent className="px-4 sm:px-6">
                  <div className="space-y-3 sm:space-y-4">
                    {donationHistory.map((donation) => (
                      <div
                        key={donation.id}
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 border rounded-lg"
                      >
                        <img
                          src={donation.image || "/placeholder.svg"}
                          alt={donation.family}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-black text-sm sm:text-base truncate">{donation.family}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-xs sm:text-sm text-gray-600 mb-1 space-y-1 sm:space-y-0">
                            <Badge variant="secondary" className="text-[#007A3D] bg-[#007A3D]/10 text-xs w-fit">
                              {donation.type}
                            </Badge>
                            <span className="hidden sm:inline">•</span>
                            <span>{donation.date}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-1 sm:space-y-0">
                            <span className="text-base sm:text-lg font-bold text-[#007A3D]">${donation.amount}</span>
                            <Badge
                              className={
                                donation.status === "Delivered"
                                  ? "bg-green-100 text-green-800 text-xs"
                                  : "bg-yellow-100 text-yellow-800 text-xs"
                              }
                            >
                              {donation.status}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm" className="text-[#007A3D] p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="favorites" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                {favoriteFamilies.map((family) => (
                  <Card key={family.id} className="bg-white">
                    <CardContent className="p-4 sm:p-6">
                      <div className="flex items-center space-x-3 sm:space-x-4 mb-4">
                        <img
                          src={family.image || "/placeholder.svg"}
                          alt={family.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-black text-sm sm:text-base truncate">{family.name}</h3>
                          <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                            <MapPin className="w-3 h-3 flex-shrink-0" />
                            <span className="truncate">{family.location}</span>
                          </div>
                          <Badge variant="secondary" className="text-[#007A3D] bg-[#007A3D]/10 mt-1 text-xs">
                            {family.type}
                          </Badge>
                        </div>
                      </div>
                      <div className="mb-4">
                        <div className="flex justify-between text-xs sm:text-sm mb-1">
                          <span className="text-gray-600">Funding Progress</span>
                          <span className="text-[#007A3D] font-medium">{family.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-[#007A3D] h-2 rounded-full" style={{ width: `${family.progress}%` }} />
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                        <Button className="flex-1 bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white text-sm h-10">
                          Donate Now
                        </Button>
                        <Button
                          variant="outline"
                          className="border-[#007A3D] text-[#007A3D] bg-transparent text-sm h-10"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4 sm:space-y-6 mt-4 sm:mt-6">
              <Card className="bg-white">
                <CardHeader className="px-4 sm:px-6">
                  <CardTitle className="text-[#007A3D] text-base sm:text-lg">Account Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 px-4 sm:px-6">
                  <p className="text-sm sm:text-base text-gray-600">
                    Manage your account preferences and notification settings.
                  </p>
                  <Button className="bg-[#007A3D] hover:bg-[#007A3D]/90 text-white text-sm h-10">
                    <Settings className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  )
}
