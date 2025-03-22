"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="relative">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image src="/logo.png" alt="Fevo" width={300} height={150} className="h-24 w-auto" priority />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-black">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-black">
              How It Works
            </Link>
            <Link href="#faq" className="text-sm font-medium text-gray-600 hover:text-black">
              FAQ
            </Link>
          </nav>

          {/* Sign In Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/register" className="text-sm font-medium text-gray-600 hover:text-black">
              Sign In
            </Link>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-black focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 bg-white shadow-lg z-50">
          <div className="px-4 py-3 space-y-4">
            <nav className="flex flex-col space-y-3">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-black py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-gray-600 hover:text-black py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-gray-600 hover:text-black py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-gray-600 hover:text-black py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

