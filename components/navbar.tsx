"use client"

import { useState, useEffect } from "react"
import { Menu, X, Shield } from "lucide-react"
import Link from "next/link"
import Logo from "./logo"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  const navLinks = [
    { name: "About", id: "about-section" },
    { name: "Schedule", id: "schedule-section" },
    { name: "Participate", id: "participate-section" },
    { name: "Prizes", id: "prizes-section" },
    { name: "FAQ", id: "faq-section" },
    { name: "Contact", id: "contact-section" },
  ]

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center"
    >
      <div className={`w-auto mx-4 md:mx-8 mt-4 px-6 md:px-8 py-4 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-lg border border-border rounded-full"
          : ""
      }`}>
        <div className="flex items-center justify-center gap-6 md:gap-8">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <Logo 
              size="md" 
              variant={isScrolled ? "colored" : "light"}
            />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-semibold transition-colors hover:scale-105 transform transition-transform ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-primary-foreground hover:text-primary-foreground/80"
                }`}
              >
                {link.name}
              </button>
            ))}
            
            {/* Code of Conduct Button */}
            <Link
              href="/code-of-conduct"
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105 transform ${
                isScrolled
                  ? "bg-purple-600 hover:bg-purple-700 text-white"
                  : "bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground backdrop-blur-sm"
              }`}
            >
              <Shield className="w-4 h-4" />
              Code of Conduct
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-all ${
              isScrolled 
                ? "hover:bg-muted" 
                : "hover:bg-primary-foreground/20"
            }`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} aria-hidden="true" />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div 
            className={`md:hidden mt-4 py-4 border-t rounded-lg shadow-lg transition-all animate-slide-up ${
              isScrolled 
                ? "border-border bg-background/95 backdrop-blur-md" 
                : "border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-md"
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 animate-slide-up ${
                    isScrolled
                      ? "hover:bg-muted text-foreground"
                      : "hover:bg-primary-foreground/20 text-primary-foreground"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  aria-label={`Navigate to ${link.name} section`}
                >
                  {link.name}
                </button>
              ))}
              
              {/* Mobile Code of Conduct Button */}
              <Link
                href="/code-of-conduct"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 animate-slide-up ${
                  isScrolled
                    ? "bg-purple-600 hover:bg-purple-700 text-white"
                    : "bg-primary-foreground/20 hover:bg-primary-foreground/30 text-primary-foreground"
                }`}
                style={{ animationDelay: `${navLinks.length * 50}ms` }}
              >
                <Shield className="w-4 h-4" />
                Code of Conduct
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
