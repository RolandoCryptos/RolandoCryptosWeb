"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Shield, TrendingUp, Zap, Eye, DollarSign } from "lucide-react"
import { motion } from "framer-motion"

const tools = [
  {
    title: "Cross-Chain Swaps",
    description:
      "Esta herramienta te permite recargar GAS en más de 50 blockchains diferentes, por ejemplo, puedes enviar $5 USD de ETH en Optimism para obtener $5 USD de ETH en Arbitrum.",
    videoUrl: "https://www.youtube.com/watch?v=E_6q_dDpnJ0",
    toolUrl: "https://sites.google.com/view/rolandocryptos/herramientas-web3?authuser=0#h.k5z0gj6azl6r",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-400",
    tags: ["Gas", "Multi-chain", "Swaps"],
  },
  {
    title: "ChangeNOW",
    description:
      "Cross Chain Swap que te permite cambiar un token de una red por un token de OTRA red diferente, SIN necesidad de conectar tu wallet. Muy efectivo para cambios entre diferentes blockchains.",
    videoUrl: "https://www.youtube.com/watch?v=YKr5JRR0YvY",
    toolUrl: "https://sites.google.com/view/rolandocryptos/herramientas-web3?authuser=0#h.fwnt5isz9qge",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-400",
    tags: ["Cross-chain", "No KYC", "Instant"],
  },
  {
    title: "Bots de Trading",
    description:
      "Herramientas avanzadas como GmGm y Photon para tradear memes y altcoins de manera eficiente y automatizada.",
    videoUrl: "https://www.youtube.com/watch?v=aOwqNyvJP88",
    toolUrl: "https://gmgn.ai/?ref=z9YuEeic&chain",
    icon: DollarSign,
    gradient: "from-purple-500 to-pink-400",
    tags: ["Trading", "Automation", "Memes"],
  },
  {
    title: "Análisis On-Chain",
    description:
      "Con Arkham Intelligence puedes hacer análisis extenso y detallado de más de 10 blockchains diferentes, crear entidades, activar alertas y crear paneles personalizados.",
    videoUrl: "https://www.youtube.com/watch?v=VaMm98RooXs",
    toolUrl: "https://auth.arkm.com/es/register?ref=PulseChain",
    icon: Eye,
    gradient: "from-orange-500 to-red-400",
    tags: ["Analytics", "Tracking", "Intelligence"],
  },
  {
    title: "Precios y Pools",
    description:
      "Herramientas como DexScreener, AlphaTrace y BirdEye para monitorear precios de criptomonedas y pools de liquidez en tiempo real.",
    videoUrl: "https://www.youtube.com/watch?v=o9thLzTZgi0",
    toolUrl: "https://dexscreener.com/",
    icon: TrendingUp,
    gradient: "from-yellow-500 to-orange-400",
    tags: ["Prices", "Pools", "Real-time"],
  },
  {
    title: "Revisar Contratos",
    description:
      "Herramientas esenciales para revisar contratos inteligentes y detectar scams, rugpulls y otros riesgos antes de invertir.",
    videoUrl: "",
    toolUrl: "https://tokensniffer.com/",
    icon: Shield,
    gradient: "from-red-500 to-pink-400",
    tags: ["Security", "Audit", "Safety"],
  },
]

export function Web3ToolsSection() {
  return (
    <section id="herramientas-web3" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent px-4">
            Herramientas Web3
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto px-4">
            Las mejores herramientas del ecosistema crypto para maximizar tu experiencia DeFi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group relative overflow-hidden bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 h-full">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="relative z-10 p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${tool.gradient} p-3 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}
                    >
                      <tool.icon className="w-full h-full text-white" />
                    </div>
                    <div className="flex flex-wrap gap-2 sm:flex-nowrap">
                      {tool.videoUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-cerise-500/50 text-cerise-400 hover:bg-cerise-500/20 bg-transparent text-xs sm:text-sm"
                          onClick={() => window.open(tool.videoUrl, "_blank")}
                        >
                          <Play className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          Video
                        </Button>
                      )}
                      <Button
                        size="sm"
                        className="bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-xs sm:text-sm"
                        onClick={() => window.open(tool.toolUrl, "_blank")}
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                        Usar
                      </Button>
                    </div>
                  </div>

                  <CardTitle className="text-xl sm:text-2xl font-bold text-white group-hover:text-cerise-300 transition-colors mb-3">
                    {tool.title}
                  </CardTitle>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {tool.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent className="relative z-10 p-4 sm:p-6 pt-0">
                  <CardDescription className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
