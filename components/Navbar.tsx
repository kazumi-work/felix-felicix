'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-sand-50/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="font-serif text-2xl font-bold text-sand-900 hover:text-primary transition">
          Kazumi
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/portfolio" className="text-sand-700 hover:text-primary transition font-medium">
            作品集
          </Link>
          <Link href="/services" className="text-sand-700 hover:text-primary transition font-medium">
            服務
          </Link>
          <Link href="/#about" className="text-sand-700 hover:text-primary transition font-medium">
            關於
          </Link>
          <a 
            href="#contact" 
            className="btn text-sm"
          >
            聯絡我
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-sand-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-sand-900 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-sand-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-sand-50 border-b border-primary/10 md:hidden py-4 px-4">
            <div className="flex flex-col gap-4">
              <Link href="/portfolio" className="text-sand-700 hover:text-primary transition font-medium">
                作品集
              </Link>
              <Link href="/services" className="text-sand-700 hover:text-primary transition font-medium">
                服務
              </Link>
              <Link href="/#about" className="text-sand-700 hover:text-primary transition font-medium">
                關於
              </Link>
              <a href="#contact" className="btn text-sm">
                聯絡我
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
