"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Shield, TrendingUp, Zap, Eye, DollarSign, Bot, ChartBar, Lock } from "lucide-react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const toolCategories = [
  {
    title: "Cross-Chain Swaps",
    description: "Herramientas para realizar intercambios entre diferentes blockchains de manera segura y eficiente.",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-400",
    tools: [
      {
        title: "SmolRefuel",
        description: "Recarga GAS en más de 50 blockchains diferentes. Envía ETH de una red y recíbelo en otra.",
        videoUrl: "https://www.youtube.com/watch?v=E_6q_dDpnJ0",
        toolUrl: "https://smolrefuel.com/",
        tags: ["Gas", "Multi-chain", "Swaps"],
      },
      {
        title: "ChangeNOW",
        description: "Cross Chain Swap sin necesidad de conectar wallet. Cambia tokens entre diferentes blockchains.",
        videoUrl: "https://www.youtube.com/watch?v=YKr5JRR0YvY",
        toolUrl: "https://changenow.io/",
        tags: ["Cross-chain", "No KYC", "Instant"],
      },
    ],
  },
  {
    title: "Bots de Trading",
    description: "Herramientas automatizadas para trading de memes y altcoins con funciones avanzadas.",
    icon: Bot,
    gradient: "from-purple-500 to-pink-400",
    tools: [
      {
        title: "GmGm",
        description: "Bot avanzado para tradear memes y altcoins de manera eficiente y automatizada.",
        videoUrl: "https://www.youtube.com/watch?v=aOwqNyvJP88",
        toolUrl: "https://gmgn.ai/?ref=z9YuEeic&chain",
        tags: ["Trading", "Memes", "Automation"],
      },
      {
        title: "Photon",
        description: "Bot especializado en trading de memes y altcoins con funciones avanzadas.",
        videoUrl: "https://www.youtube.com/watch?v=1cnj1PHkmVo",
        toolUrl: "#",
        tags: ["Trading", "Memes", "Bot"],
      },
    ],
  },
  {
    title: "Análisis On-Chain",
    description: "Plataformas para análisis detallado de transacciones y comportamiento en múltiples blockchains.",
    icon: Eye,
    gradient: "from-orange-500 to-red-400",
    tools: [
      {
        title: "Arkham Intelligence",
        description: "Plataforma completa para análisis de más de 10 blockchains. Crea entidades, activa alertas y personaliza paneles.",
        videoUrl: "https://www.youtube.com/watch?v=VaMm98RooXs",
        toolUrl: "https://auth.arkm.com/es/register?ref=PulseChain",
        tags: ["Analytics", "Tracking", "Intelligence"],
      },
    ],
  },
  {
    title: "Precios y Pools",
    description: "Herramientas para monitoreo de precios y análisis de pools de liquidez en tiempo real.",
    icon: ChartBar,
    gradient: "from-yellow-500 to-orange-400",
    tools: [
      {
        title: "DexScreener",
        description: "Monitoreo en tiempo real de precios y pools de liquidez en múltiples blockchains.",
        videoUrl: "https://www.youtube.com/watch?v=o9thLzTZgi0",
        toolUrl: "https://dexscreener.com/",
        tags: ["Prices", "Pools", "Real-time"],
      },
      {
        title: "AlphaTrace",
        description: "Herramienta avanzada para seguimiento de precios y análisis de mercado en Ethereum.",
        videoUrl: "https://www.youtube.com/watch?v=Kf1Yr8y58xc",
        toolUrl: "https://eth.alphatrace.co/explore/maestro",
        tags: ["Ethereum", "Analytics", "Trading"],
      },
      {
        title: "BirdEye",
        description: "Plataforma especializada en monitoreo de precios y pools en Solana.",
        videoUrl: "",
        toolUrl: "https://birdeye.so/",
        tags: ["Solana", "Prices", "Analytics"],
      },
      {
        title: "Cielo Finance",
        description: "Herramienta para análisis de mercado y seguimiento de pools de liquidez.",
        videoUrl: "",
        toolUrl: "https://app.cielo.finance/feed",
        tags: ["DeFi", "Analytics", "Pools"],
      },
    ],
  },
  {
    title: "Revisar Contratos",
    description: "Herramientas de seguridad para análisis de contratos inteligentes y detección de riesgos.",
    icon: Lock,
    gradient: "from-red-500 to-pink-400",
    tools: [
      {
        title: "Token Sniffer",
        description: "Analiza contratos inteligentes para detectar posibles scams y riesgos.",
        videoUrl: "",
        toolUrl: "https://tokensniffer.com/",
        tags: ["Security", "Audit", "Scam Detection"],
      },
      {
        title: "GoPlus Scan",
        description: "Herramienta de seguridad para análisis de tokens y contratos.",
        videoUrl: "",
        toolUrl: "https://gopluslabs.io/token-security/",
        tags: ["Security", "Token Analysis", "Risk Detection"],
      },
      {
        title: "RugCheck",
        description: "Verifica la seguridad de tokens y detecta posibles rugpulls.",
        videoUrl: "",
        toolUrl: "https://rugcheck.xyz/",
        tags: ["Security", "Rugpull Detection", "Audit"],
      },
      {
        title: "De.Fi Scanner",
        description: "Escáner completo para análisis de seguridad en tokens DeFi.",
        videoUrl: "",
        toolUrl: "https://de.fi/scanner",
        tags: ["DeFi", "Security", "Scanner"],
      },
    ],
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

                <div className="max-w-5xl mx-auto">
          <Tabs defaultValue={toolCategories[0].title} className="w-full">
            <TabsList className="h-auto flex flex-wrap justify-center gap-2 bg-slate-900/50 p-2 mb-6">
              {toolCategories.map((category, categoryIndex) => (
                <TabsTrigger
                  key={category.title}
                  value={category.title}
                  className="flex items-center gap-2 data-[state=active]:bg-slate-800 data-[state=active]:text-cerise-300"
                >
                  <div
                    className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.gradient} p-1.5 flex-shrink-0`}
                  >
                    <category.icon className="w-full h-full text-white" />
                  </div>
                  <span>{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {toolCategories.map((category, categoryIndex) => (
              <TabsContent
                key={category.title}
                value={category.title}
                className="mt-0 border-none p-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-4"
                >
                  <Card className="bg-slate-900/50 border-slate-700/50 overflow-hidden">
                    <CardHeader className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} p-3 flex-shrink-0`}
                        >
                          <category.icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl font-bold text-white mb-2">
                            {category.title}
                          </CardTitle>
                          <CardDescription className="text-slate-300">
                            {category.description}
                          </CardDescription>
                        </div>
                      </div>

                      <div className="grid gap-6">
                        {category.tools && category.tools.map((tool, toolIndex) => (
                          <div key={tool.title} className="border-t border-slate-700/50 pt-6">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-2">{tool.title}</h3>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  {tool.tags.map((tag) => (
                                    <Badge
                                      key={tag}
                                      variant="secondary"
                                      className="bg-slate-700/50 text-slate-300 text-xs"
                                    >
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {tool.videoUrl && (
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    className="border-cerise-500/50 text-cerise-400 hover:bg-cerise-500/20 bg-transparent"
                                    onClick={() => window.open(tool.videoUrl, "_blank")}
                                  >
                                    <Play className="h-4 w-4 mr-1" />
                                    Video
                                  </Button>
                                )}
                                <Button
                                  size="sm"
                                  className="bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700"
                                  onClick={() => window.open(tool.toolUrl, "_blank")}
                                >
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  Usar
                                </Button>
                              </div>
                            </div>
                            <CardDescription className="text-slate-300 text-sm leading-relaxed">
                              {tool.description}
                            </CardDescription>
                          </div>
                        ))}
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
