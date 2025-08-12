import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-yaqeen-green">Ya</span>
              <span className="text-2xl font-bold text-yaqeen-red">qeen</span>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Connecting families in Gaza with global supporters through transparent, verified humanitarian assistance.
              Every donation makes a real difference.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-yaqeen-green transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yaqeen-green transition-colors">
                <Twitter className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-yaqeen-green transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cases" className="text-gray-300 hover:text-yaqeen-green transition-colors">
                  Browse Cases
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-gray-300 hover:text-yaqeen-green transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/register/family" className="text-gray-300 hover:text-yaqeen-green transition-colors">
                  Register Family
                </Link>
              </li>
              <li>
                <Link href="/register/donor" className="text-gray-300 hover:text-yaqeen-green transition-colors">
                  Become a Donor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@yaqeen.org</span>
              </li>
              <li className="flex items-center space-x-2 text-yaqeen-red">
                <Phone className="w-4 h-4" />
                <span>Urgent: +970-XXX-XXXX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Yaqeen. All rights reserved. Built with hope for Gaza.</p>
        </div>
      </div>
    </footer>
  )
}
