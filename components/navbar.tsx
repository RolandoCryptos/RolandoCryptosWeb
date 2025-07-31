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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-2xl" : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-2 sm:gap-3 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => scrollToSection("#home")}
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-1">
                <Image
                  src="/logo-rolando.png"
                  alt="RolandoCryptos Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-bold bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
                RolandoCryptos
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-cerise-400 ${
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

            {/* Desktop CTA Button */}
            <div className="hidden lg:block">
              <Button
                onClick={() => scrollToSection("#comunidad-vip")}
                className="bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white px-4 xl:px-6 py-2 rounded-xl font-semibold shadow-lg hover:shadow-cerise-500/25 transition-all duration-300 text-sm"
              >
                Únete VIP
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-cerise-400 transition-colors z-60 relative"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-950/95 backdrop-blur-md" />

            {/* Menu Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="relative z-50 flex flex-col items-center justify-center min-h-screen px-6"
            >
              <div className="w-full max-w-sm space-y-8">
                {/* Mobile Logo */}
                <div className="text-center mb-12">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-2">
                    <Image
                      src="/logo-rolando.png"
                      alt="RolandoCryptos Logo"
                      width={64}
                      height={64}
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
                    RolandoCryptos
                  </h2>
                </div>

                {/* Navigation Items */}
                <nav className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-6 py-4 text-lg font-medium transition-all duration-300 rounded-xl border border-transparent hover:border-cerise-500/30 hover:bg-cerise-500/10 ${
                        activeSection === item.href.substring(1)
                          ? "text-cerise-400 bg-cerise-500/10 border-cerise-500/30"
                          : "text-slate-300 hover:text-cerise-400"
                      }`}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </nav>

                {/* Mobile CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                  className="pt-8"
                >
                  <Button
                    onClick={() => scrollToSection("#comunidad-vip")}
                    className="w-full bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg"
                  >
                    Únete VIP
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
