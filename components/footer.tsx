"use client"

import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { BsInstagram, BsTwitterX, BsYoutube, BsTiktok, BsTelegram } from "react-icons/bs"
import Image from "next/image"
import { getCurrentYear } from "@/lib/utils"

const socialLinks = [
  {
    name: "Instagram",
    icon: BsInstagram,
    href: "https://www.instagram.com/rolandocryptos/",
    color: "text-pink-500/90 hover:text-pink-500",
    bgColor: "bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-orange-500/10",
    gradient: "from-pink-500 via-purple-500 to-orange-500",
  },
  {
    name: "Twitter",
    icon: BsTwitterX,
    href: "https://x.com/RolandoCryptos",
    color: "text-slate-100/90 hover:text-slate-100",
    bgColor: "bg-slate-900/80",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    name: "YouTube",
    icon: BsYoutube,
    href: "https://www.youtube.com/@rolandocryptos",
    color: "text-red-600/90 hover:text-red-600",
    bgColor: "bg-red-600/10",
    gradient: "from-red-600 to-red-700",
  },
  {
    name: "TikTok",
    icon: BsTiktok,
    href: "https://www.tiktok.com/@rolando.cryptos",
    color: "text-slate-100/90 hover:text-slate-100",
    bgColor: "bg-gradient-to-br from-pink-500/10 via-cyan-500/10 to-slate-100/10",
    gradient: "from-pink-500 via-cyan-500 to-slate-100",
  },
  {
    name: "Telegram",
    icon: BsTelegram,
    href: "https://t.me/RolandocRyptos",
    color: "text-sky-500/90 hover:text-sky-500",
    bgColor: "bg-sky-500/10",
    gradient: "from-sky-400 to-sky-600",
  },
]

const quickLinks = [
  { name: "Herramientas Web3", href: "#herramientas-web3" },
  { name: "Tutoriales", href: "#tutoriales" },
  { name: "PulseChain", href: "#pulsechain" },
  { name: "Comunidad VIP", href: "#comunidad-vip" },
]

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 border-t border-slate-800/50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(222,49,99,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="sm:col-span-2 lg:col-span-2"
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 p-2">
                <Image
                  src="/logo-rolando.png"
                  alt="RolandoCryptos Logo"
                  width={64}
                  height={64}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
                  RolandoCryptos
                </h3>
                <p className="text-slate-400 text-sm">Tu guía experto en crypto</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-4 sm:mb-6 max-w-md text-sm sm:text-base">
              Más de 10 años de experiencia en el mundo de las criptomonedas y blockchain. Herramientas avanzadas,
              tutoriales especializados y mentoría personalizada para maximizar tu éxito en DeFi.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${social.bgColor} border border-slate-700/50 flex items-center justify-center transition-all duration-300 ${social.color} hover:border-current relative overflow-hidden group`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <social.icon className={`w-4 h-4 sm:w-5 sm:h-5 relative z-10 ${social.name === "TikTok" ? "scale-125" : ""}`} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
                    className="text-slate-400 hover:text-cerise-400 transition-colors duration-300 text-sm sm:text-base text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-base sm:text-lg font-semibold text-white mb-4 sm:mb-6">Contacto</h4>
            <div className="space-y-3 sm:space-y-4">
              <div className="text-sm sm:text-base text-slate-400">
                <p className="mb-2">¿Tienes dudas sobre crypto?</p>
                <button
                  onClick={() => document.querySelector("#comunidad-vip")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-cerise-400 hover:text-cerise-300 transition-colors font-medium"
                >
                  Únete a la comunidad VIP
                </button>
              </div>

              <div className="text-sm sm:text-base text-slate-400">
                <p className="mb-2">Consultoría personalizada</p>
                <div className="flex flex-col">
                  <a
                    href="mailto:contacto@rrrdigital.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                  >
                    contacto@rrrdigital.com
                  </a>
                  <a
                    href="mailto:rolando@rrrdigital.com"
                    className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                  >
                    rolando@rrrdigital.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {getCurrentYear()} RolandoCryptos. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-400">
            <button className="hover:text-cerise-400 transition-colors">Términos de Servicio</button>
            <button className="hover:text-cerise-400 transition-colors">Política de Privacidad</button>
          </div>
        </motion.div>

        {/* Kirovich Credit */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 pt-4 border-t border-slate-800/30 text-center"
        >
          <p className="text-slate-400 text-sm">
            Creado por:{" "}
            <a
              href="https://kirovich.cl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cerise-400 hover:text-cerise-300 transition-all duration-300 font-semibold hover:underline hover:scale-105 inline-block"
            >
              Kirovich
            </a>
          </p>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cerise-500/50 to-transparent" />
    </footer>
  )
}
