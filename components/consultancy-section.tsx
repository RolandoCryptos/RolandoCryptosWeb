"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageCircle, Star } from "lucide-react"
import { motion } from "framer-motion"

export function ConsultancySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-slate-900/50 to-purple-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cerise-500/30 backdrop-blur-sm overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cerise-600/10 to-purple-600/10" />

            <CardContent className="relative z-10 p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cerise-500 to-purple-500 p-5">
                  <MessageCircle className="w-full h-full text-white" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
                Consultoría Cripto Personalizada
              </h2>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                Si tienes alguna duda sobre Criptomonedas, Blockchain y cualquier tema relacionado o necesitas ayuda
                personalizada con algún tema específico en Cripto, puedes agendar una llamada 1:1 conmigo y resolver
                todas tus dudas.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-cerise-300">
                  <Star className="h-5 w-5" />
                  <span>+10 años de experiencia</span>
                </div>
                <div className="flex items-center gap-2 text-purple-300">
                  <Calendar className="h-5 w-5" />
                  <span>Sesiones personalizadas</span>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cerise-500/25 transition-all duration-300"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Agendar Consultoría
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
