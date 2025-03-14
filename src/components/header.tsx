"use client"

import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/">
            <Image
              src="/logo.png"
              alt="Fevo"
              width={300}
              height={150}
              className="h-24 w-auto"
              priority
            />
            </Link>
          </div>

          {/* Navigation Links */}
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

          {/* Sign In Button */}
          <div className="flex items-center gap-4">
            <Link href="/register" className="text-sm font-medium text-gray-600 hover:text-black hidden sm:block">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}