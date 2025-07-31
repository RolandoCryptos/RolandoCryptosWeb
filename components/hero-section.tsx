"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero-section.jpg-7oJ6w0CKyFvXwjSQOE4Z1UyZaAFvFy.jpeg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-purple-950/80 to-cerise-950/90" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 sm:w-2 sm:h-2 bg-cerise-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cerise-400 via-purple-400 to-blue-400 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            RolandoCryptos
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Tu guía experto en el mundo de las criptomonedas y blockchain. Herramientas avanzadas, tutoriales
            especializados y mentoría personalizada.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cerise-600 to-cerise-500 hover:from-cerise-700 hover:to-cerise-600 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cerise-500/25 transition-all duration-300 group"
              onClick={() => {
                const toolsSection = document.querySelector("#herramientas-web3")
                if (toolsSection) {
                  toolsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Explorar Herramientas
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-purple-400/50 text-purple-300 hover:bg-purple-400/10 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl backdrop-blur-sm bg-transparent"
              onClick={() => {
                const tutorialsSection = document.querySelector("#tutoriales")
                if (tutorialsSection) {
                  tutorialsSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Ver Tutoriales
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        onClick={() => {
          const nextSection =
            document.querySelector("#servicios-especializados") || document.querySelector("section:nth-of-type(2)")
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" })
          }
        }}
      >
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-cerise-400/50 rounded-full flex justify-center hover:border-cerise-400 transition-colors">
          <div className="w-1 h-2 sm:h-3 bg-cerise-400 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}
