"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Play, ExternalLink, Youtube } from "lucide-react"
import { motion } from "framer-motion"

const tutorials = [
  {
    title: "BitcoinTry - Comprar Cripto sin KYC",
    url: "https://www.youtube.com/watch?v=WUloMyPBJ0U",
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Reservaciones de Hotel con Crypto",
    url: "https://www.youtube.com/watch?v=ZJlgTFzAxPo",
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Órdenes Limit en Matcha.xyz",
    url: "https://www.youtube.com/watch?v=aJe0pt0ziyY",
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Órdenes Limit en 1inch.io",
    url: "https://www.youtube.com/watch?v=dtWMcYZKsWQ",
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Comprar Crypto con Tarjeta en Binance",
    url: "https://www.youtube.com/watch?v=-_VZjAZV3gI",
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
  {
    title: "Vender Bitcoin por Pesos Mexicanos",
    url: "https://www.youtube.com/watch?v=CsvKwpfdLdk",
    thumbnail: "/placeholder.svg?height=200&width=350",
  },
]

export function TutorialsSection() {
  return (
    <section
      id="tutoriales"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 bg-gradient-to-r from-slate-900/30 to-purple-900/20"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-cerise-400 to-purple-400 bg-clip-text text-transparent px-4">
            Tutoriales Especializados
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            En mi canal de YouTube tienes toda una lista de reproducción donde he ido poniendo todos los video
            tutoriales relacionados con cripto en un mismo lugar.
          </p>

          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-2xl hover:shadow-red-500/25 transition-all duration-300"
            onClick={() =>
              window.open("https://www.youtube.com/playlist?list=PLZRcecQyEdVIscgbZsl51EKGp22dgWAqF", "_blank")
            }
          >
            <Youtube className="mr-2 h-5 w-5 sm:h-6 sm:w-6" />
            Ver Playlist Completa
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel className="w-full">
            <CarouselContent className="-ml-2 md:-ml-4">
              {tutorials.map((tutorial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card className="group relative overflow-hidden bg-slate-900/50 border-slate-700/50 backdrop-blur-sm hover:bg-slate-800/50 transition-all duration-500 cursor-pointer h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="p-0 relative">
                      <div className="relative overflow-hidden">
                        <img
                          src={tutorial.thumbnail || "/placeholder.svg"}
                          alt={tutorial.title}
                          className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" />
                          </div>
                        </div>
                      </div>

                      <div className="p-4 sm:p-6">
                        <h3 className="text-base sm:text-lg font-semibold text-white group-hover:text-cerise-300 transition-colors mb-4 line-clamp-2 leading-tight">
                          {tutorial.title}
                        </h3>

                        <Button
                          variant="ghost"
                          className="w-full justify-between text-red-400 hover:text-white hover:bg-red-600/20 group/btn text-sm sm:text-base"
                          onClick={() => window.open(tutorial.url, "_blank")}
                        >
                          Ver Tutorial
                          <ExternalLink className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700 -left-4 sm:-left-12" />
            <CarouselNext className="border-slate-700 bg-slate-800/50 text-white hover:bg-slate-700 -right-4 sm:-right-12" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  )
}
