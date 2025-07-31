"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, BookOpen, Network } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    title: "Herramientas Blockchain",
    description:
      "Una selecta lista de protocolos blockchain que te puedo recomendar utilizar para cada situación diferente, en las diferentes blockchains",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-400",
    href: "#cross-chain-swaps",
  },
  {
    title: "Tutoriales Crypto",
    description:
      "Accede a los múltiples tutoriales donde te explico como utilizar los diferentes protocolos, desde Dexes, agregadores cripto o cross chain swaps",
    icon: BookOpen,
    gradient: "from-purple-500 to-pink-400",
    href: "#tutoriales",
  },
  {
    title: "PulseChain",
    description:
      "Información y herramientas especializadas para la red de PulseChain, la blockchain más eficiente del ecosistema",
    icon: Network,
    gradient: "from-cerise-500 to-rose-400",
    href: "#pulsechain",
  },
]

export function ServicesGrid() {
  return (
    <section id="servicios-especializados" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
            Servicios Especializados
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Descubre las herramientas y conocimientos que necesitas para navegar el mundo crypto con confianza
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon className="w-full h-full text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-cerise-300 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <CardDescription className="text-slate-300 text-base leading-relaxed mb-6">
                    {service.description}
                  </CardDescription>

                  <Button
                    variant="ghost"
                    className="w-full justify-between text-cerise-400 hover:text-white hover:bg-cerise-600/20 group/btn"
                    onClick={() => document.querySelector(service.href)?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Explorar
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
