"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MessageSquare, Clock } from "lucide-react"
import { motion } from "framer-motion"

export function ConsultancySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900/20 to-cerise-900/20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-cerise-500/30 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-cerise-600/10 to-purple-600/10" />

            <CardContent className="relative z-10 p-6 sm:p-8 md:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <div className="flex justify-center mb-4 sm:mb-6">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-cerise-500 to-purple-500 p-4 sm:p-5">
                    <MessageSquare className="w-full h-full text-white" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent">
                  Consultoría Cripto
                </h2>

                <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto px-4">
                  Si tienes alguna duda sobre Criptomonedas, Blockchain y cualquier tema relacionado o necesitas ayuda
                  personalizada con algún tema específico en Cripto puedes agendar una llamada 1:1 conmigo y resolver
                  todas tus dudas.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="text-center p-4 sm:p-6 rounded-xl bg-slate-800/50 border border-cerise-500/20">
                  <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-cerise-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Sesión Personalizada</h3>
                  <p className="text-slate-400 text-sm">Agenda tu consulta 1:1</p>
                </div>

                <div className="text-center p-4 sm:p-6 rounded-xl bg-slate-800/50 border border-purple-500/20">
                  <Clock className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Resolución Inmediata</h3>
                  <p className="text-slate-400 text-sm">Respuestas a tus dudas específicas</p>
                </div>

                <div className="text-center p-4 sm:p-6 rounded-xl bg-slate-800/50 border border-blue-500/20 sm:col-span-2 lg:col-span-1">
                  <MessageSquare className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Experiencia +10 Años</h3>
                  <p className="text-slate-400 text-sm">Conocimiento profundo del mercado</p>
                </div>
              </div>

              <div className="text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-cerise-600 to-purple-600 hover:from-cerise-700 hover:to-purple-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-cerise-500/25 transition-all duration-300"
                    onClick={() => window.open("https://book.stripe.com/5kA3cc7p28364Te28n", "_blank")}
                  >
                    <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                    Agendar Consultoría
                  </Button>
                  
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                    onClick={() => window.open("https://skipshift.io/?r=rolandocryptos", "_blank")}
                  >
                    <svg className="mr-2 h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Comprar Cripto Sin KYC
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
