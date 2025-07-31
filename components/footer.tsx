"use client"

import { motion } from "framer-motion"
import { Instagram, Twitter, Youtube, MessageCircle, Send } from "lucide-react"
import Image from "next/image"

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/rolandocryptos",
    color: "hover:text-pink-400",
    bgColor: "hover:bg-pink-400/10",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/rolandocryptos",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-400/10",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@rolandocryptos",
    color: "hover:text-red-400",
    bgColor: "hover:bg-red-400/10",
  },
  {
    name: "TikTok",
    icon: MessageCircle,
    href: "https://tiktok.com/@rolandocryptos",
    color: "hover:text-purple-400",
    bgColor: "hover:bg-purple-400/10",
  },
  {
    name: "Telegram",
    icon: Send,
    href: "https://t.me/rolandocryptos",
    color: "hover:text-cyan-400",
    bgColor: "hover:bg-cyan-400/10",
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
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-slate-400 transition-all duration-300 ${social.color} ${social.bgColor} hover:border-current`}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
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
                <a
                  href="mailto:contacto@rolandocryptos.com"
                  className="text-purple-400 hover:text-purple-300 transition-colors break-all"
                >
                  contacto@rolandocryptos.com
                </a>
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
            © 2024 RolandoCryptos. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4 sm:gap-6 text-sm text-slate-400">
            <button className="hover:text-cerise-400 transition-colors">Términos de Servicio</button>
            <button className="hover:text-cerise-400 transition-colors">Política de Privacidad</button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cerise-500/50 to-transparent" />
    </footer>
  )
}
