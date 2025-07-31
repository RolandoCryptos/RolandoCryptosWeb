"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Herramientas Web3", href: "#herramientas-web3" },
  { name: "Tutoriales", href: "#tutoriales" },
  { name: "PulseChain", href: "#pulsechain" },
  { name: "Comunidad VIP", href: "#comunidad-vip" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-2xl" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection("#home")}
          >
            <div className="w-12 h-12 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
              <Image
                src="/logo-rolando.png"
                alt="RolandoCryptos Logo"
                width={48}
                height={48}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
              RolandoCryptos
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cerise-400 ${
                  activeSection === item.href.substring(1) ? "text-cerise-400" : "text-slate-300"
                }`}
              >
                {item.name}
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cerise-500 to-purple-500"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#comunidad-vip")}
              className="bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-cerise-500/25 transition-all duration-300"
            >
              Únete VIP
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-cerise-400 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 py-4 border-t border-slate-800/50"
            >
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`text-left px-4 py-2 text-sm font-medium transition-all duration-300 hover:text-cerise-400 hover:bg-slate-800/30 rounded-lg ${
                      activeSection === item.href.substring(1) ? "text-cerise-400 bg-slate-800/30" : "text-slate-300"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
                <Button
                  onClick={() => scrollToSection("#comunidad-vip")}
                  className="mt-4 bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white rounded-xl font-semibold"
                >
                  Únete VIP
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
