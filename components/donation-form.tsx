"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Heart, CreditCard, Banknote, Smartphone } from "lucide-react"

interface DonationFormProps {
  familyName: string
  familyId: string
  onClose: () => void
  language?: "en" | "ar"
}

const translations = {
  en: {
    donateToFamily: "Donate to",
    amount: "Donation Amount",
    customAmount: "Custom Amount",
    donationType: "Donation Type",
    oneTime: "One-time Donation",
    monthly: "Monthly Donation",
    paymentMethod: "Payment Method",
    creditCard: "Credit Card",
    bankTransfer: "Bank Transfer",
    mobilePay: "Mobile Payment",
    cardNumber: "Card Number",
    expiryDate: "Expiry Date",
    cvv: "CVV",
    cardholderName: "Cardholder Name",
    email: "Email Address",
    phone: "Phone Number",
    message: "Message to Family (Optional)",
    anonymous: "Make this donation anonymous",
    terms: "I agree to the terms and conditions",
    donate: "Complete Donation",
    cancel: "Cancel",
    processing: "Processing...",
    selectAmount: "Select an amount or enter custom amount",
    enterMessage: "Enter a message of support for the family",
  },
  ar: {
    donateToFamily: "تبرع لـ",
    amount: "مبلغ التبرع",
    customAmount: "مبلغ مخصص",
    donationType: "نوع التبرع",
    oneTime: "تبرع لمرة واحدة",
    monthly: "تبرع شهري",
    paymentMethod: "طريقة الدفع",
    creditCard: "بطاقة ائتمان",
    bankTransfer: "تحويل بنكي",
    mobilePay: "دفع عبر الهاتف",
    cardNumber: "رقم البطاقة",
    expiryDate: "تاريخ الانتهاء",
    cvv: "رمز الأمان",
    cardholderName: "اسم حامل البطاقة",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    message: "رسالة للعائلة (اختياري)",
    anonymous: "اجعل هذا التبرع مجهول الهوية",
    terms: "أوافق على الشروط والأحكام",
    donate: "إتمام التبرع",
    cancel: "إلغاء",
    processing: "جاري المعالجة...",
    selectAmount: "اختر مبلغاً أو أدخل مبلغاً مخصصاً",
    enterMessage: "أدخل رسالة دعم للعائلة",
  },
}

export function DonationForm({ familyName, familyId, onClose, language = "en" }: DonationFormProps) {
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [donationType, setDonationType] = useState("one-time")
  const [paymentMethod, setPaymentMethod] = useState("credit-card")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    email: "",
    phone: "",
    message: "",
  })

  const t = translations[language]
  const isRTL = language === "ar"

  const predefinedAmounts = ["25", "50", "100", "250", "500", "1000"]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!acceptTerms) return

    setIsProcessing(true)

    // Simulate donation processing
    setTimeout(() => {
      setIsProcessing(false)
      onClose()
      // Here you would typically redirect to a success page or show a success message
    }, 2000)
  }

  const selectedAmount = customAmount || amount

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className={`w-full max-w-2xl max-h-[90vh] overflow-y-auto ${isRTL ? "text-right" : "text-left"}`}>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <div>
            <CardTitle className="text-xl font-bold text-[#007A3D]">
              {t.donateToFamily} {familyName}
            </CardTitle>
            <CardDescription className="text-gray-600">{t.selectAmount}</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Amount Selection */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">{t.amount}</Label>
              <div className="grid grid-cols-3 gap-2">
                {predefinedAmounts.map((amt) => (
                  <Button
                    key={amt}
                    type="button"
                    variant={amount === amt ? "default" : "outline"}
                    className={`${
                      amount === amt
                        ? "bg-[#007A3D] hover:bg-[#007A3D]/90 text-white"
                        : "border-gray-300 hover:border-[#007A3D]"
                    }`}
                    onClick={() => {
                      setAmount(amt)
                      setCustomAmount("")
                    }}
                  >
                    ${amt}
                  </Button>
                ))}
              </div>
              <div>
                <Label htmlFor="custom-amount" className="text-sm text-gray-600">
                  {t.customAmount}
                </Label>
                <Input
                  id="custom-amount"
                  type="number"
                  placeholder="0"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value)
                    setAmount("")
                  }}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Donation Type */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">{t.donationType}</Label>
              <RadioGroup value={donationType} onValueChange={setDonationType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time">{t.oneTime}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly">{t.monthly}</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Method */}
            <div className="space-y-3">
              <Label className="text-sm font-medium">{t.paymentMethod}</Label>
              <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="credit-card" id="credit-card" />
                  <CreditCard className="w-4 h-4" />
                  <Label htmlFor="credit-card">{t.creditCard}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                  <Banknote className="w-4 h-4" />
                  <Label htmlFor="bank-transfer">{t.bankTransfer}</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mobile-pay" id="mobile-pay" />
                  <Smartphone className="w-4 h-4" />
                  <Label htmlFor="mobile-pay">{t.mobilePay}</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Payment Details */}
            {paymentMethod === "credit-card" && (
              <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="card-number">{t.cardNumber}</Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="expiry">{t.expiryDate}</Label>
                    <Input
                      id="expiry"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">{t.cvv}</Label>
                    <Input
                      id="cvv"
                      placeholder="123"
                      value={formData.cvv}
                      onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="cardholder-name">{t.cardholderName}</Label>
                    <Input
                      id="cardholder-name"
                      placeholder="John Doe"
                      value={formData.cardholderName}
                      onChange={(e) => setFormData({ ...formData, cardholderName: e.target.value })}
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Contact Information */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">{t.email}</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">{t.phone}</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="message">{t.message}</Label>
                <Textarea
                  id="message"
                  placeholder={t.enterMessage}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={3}
                />
              </div>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
                <Label htmlFor="anonymous" className="text-sm">
                  {t.anonymous}
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" checked={acceptTerms} onCheckedChange={setAcceptTerms} />
                <Label htmlFor="terms" className="text-sm">
                  {t.terms}
                </Label>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1 border-gray-300 bg-transparent"
              >
                {t.cancel}
              </Button>
              <Button
                type="submit"
                disabled={!selectedAmount || !acceptTerms || isProcessing}
                className="flex-1 bg-[#D32F2F] hover:bg-[#D32F2F]/90 text-white"
              >
                <Heart className="w-4 h-4 mr-2" />
                {isProcessing ? t.processing : `${t.donate} $${selectedAmount}`}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
