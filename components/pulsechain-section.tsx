"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Zap, TrendingUp, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function PulseChainSection() {
  return (
    <section id="pulsechain" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cerise-500/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cerise-600/20 to-purple-600/20" />

            <CardContent className="relative z-10 p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cerise-500 to-purple-500 p-5">
                    <Zap className="w-full h-full text-white" />
                  </div>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
                  PulseChain Ecosystem
                </h2>

                <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                  Descubre el poder de PulseChain, la blockchain más eficiente y económica del ecosistema. Herramientas
                  especializadas y recursos exclusivos para maximizar tu experiencia.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-cerise-500/20">
                  <TrendingUp className="w-12 h-12 text-cerise-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Bajas Comisiones</h3>
                  <p className="text-slate-400 text-sm">Transacciones ultra económicas</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-purple-500/20">
                  <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Alta Velocidad</h3>
                  <p className="text-slate-400 text-sm">Confirmaciones instantáneas</p>
                </div>

                <div className="text-center p-6 rounded-xl bg-slate-800/50 border border-blue-500/20">
                  <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">Seguridad</h3>
                  <p className="text-slate-400 text-sm">Red descentralizada y segura</p>
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Badge className="bg-cerise-600/20 text-cerise-300 border-cerise-500/30">DeFi</Badge>
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-500/30">NFTs</Badge>
                <Badge className="bg-blue-600/20 text-blue-300 border-blue-500/30">Gaming</Badge>
                <Badge className="bg-green-600/20 text-green-300 border-green-500/30">Staking</Badge>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cerise-500/25 transition-all duration-300"
                  onClick={() =>
                    window.open(
                      "https://metamask.github.io/phishing-warning/v5.0.0/#hostname=pulsemex.com&href=https%3A%2F%2Fpulsemex.com%2F",
                      "_blank",
                    )
                  }
                >
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Explorar PulseChain
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
