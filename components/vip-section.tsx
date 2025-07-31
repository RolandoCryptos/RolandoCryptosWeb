"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Users, Calendar, Bell, Clock, BookOpen, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

const benefits = [
  {
    icon: Users,
    title: "Comunidad Grupal en Telegram",
    description: "Conformada de gente talentosa del mundo crypto",
  },
  {
    icon: Calendar,
    title: "Múltiples Mentorías 1:1",
    description: "Sesiones personalizadas con agenda previa",
  },
  {
    icon: Clock,
    title: "Sesión Semanal en Vivo",
    description: "2-3 horas todos los sábados para resolver dudas",
  },
  {
    icon: Bell,
    title: "Alertas On-Chain",
    description: "Trackeo de entidades y movimientos del mercado",
  },
  {
    icon: BookOpen,
    title: "Soporte 24/7/365",
    description: "Resuelve tus dudas cuando las tengas",
  },
  {
    icon: TrendingUp,
    title: "Actualización Diaria",
    description: "Información actualizada de los cripto mercados",
  },
]

export function VipSection() {
  return (
    <section id="comunidad-vip" className="py-20 px-4 bg-gradient-to-br from-slate-900/50 to-purple-900/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-500 p-5">
              <Crown className="w-full h-full text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Comunidad VIP
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Infórmate y aprende sobre el mercado cripto accediendo a mi comunidad VIP, donde compartimos experiencias,
            información sobre criptomonedas, trading y alertas especializadas.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
                    <Crown className="h-8 w-8 text-yellow-400" />
                    Beneficios Exclusivos
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-lg">
                    Todo lo que obtienes al unirte a la comunidad VIP
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cerise-500 to-purple-500 p-3 flex-shrink-0">
                        <benefit.icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                        <p className="text-slate-400">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Single Payment */}
              <Card className="relative overflow-hidden bg-gradient-to-br from-slate-800/80 to-slate-900/80 border-yellow-500/30 backdrop-blur-sm">
                <div className="absolute top-4 right-4">
                  <Badge className="bg-yellow-600/20 text-yellow-300 border-yellow-500/30">Más Popular</Badge>
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Pago Único</CardTitle>
                  <CardDescription className="text-slate-400">Acceso completo de por vida</CardDescription>
                  <div className="text-4xl font-bold text-yellow-400 mt-4">$497 USD</div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400" />
                      Acceso de por vida
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400" />
                      Todos los beneficios incluidos
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400" />
                      Sin pagos recurrentes
                    </li>
                  </ul>

                  <Button
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white py-6 text-lg font-semibold rounded-xl"
                    onClick={() =>
                      window.open(
                        "https://buy.stripe.com/8wM8ww10EfvyclGcN2?locale=es-419&__embed_source=buy_btn_1R3k1ZCOwrIdNt0aIbr6JhaE",
                        "_blank",
                      )
                    }
                  >
                    Unirse Ahora
                  </Button>
                </CardContent>
              </Card>

              {/* Monthly Payment */}
              <Card className="bg-slate-900/50 border-slate-700/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white">Pago Mensual</CardTitle>
                  <CardDescription className="text-slate-400">Flexibilidad de pago</CardDescription>
                  <div className="text-4xl font-bold text-cerise-400 mt-4">
                    $97 USD<span className="text-lg text-slate-400">/mes</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400" />
                      Todos los beneficios
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400" />
                      Cancela cuando quieras
                    </li>
                    <li className="flex items-center gap-3 text-slate-300">
                      <Check className="h-5 w-5 text-green-400" />
                      Pago flexible
                    </li>
                  </ul>

                  <Button
                    variant="outline"
                    className="w-full border-cerise-500/50 text-cerise-400 hover:bg-cerise-500/20 py-6 text-lg font-semibold rounded-xl bg-transparent"
                    onClick={() =>
                      window.open(
                        "https://buy.stripe.com/8wM8ww7p23MQ99u28p?locale=es-419&__embed_source=buy_btn_1R3k9nCOwrIdNt0aH219mYej",
                        "_blank",
                      )
                    }
                  >
                    Comenzar Mensual
                  </Button>
                </CardContent>
              </Card>

              {/* Crypto Payment Info */}
              <Card className="bg-slate-900/30 border-slate-700/30 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-cerise-400" />
                    Pago con Criptomonedas
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Acepto ETH, WETH, WBTC, USDT, DAI y USDC en las siguientes redes:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Ethereum</Badge>
                    <Badge variant="secondary">BNB Smart Chain</Badge>
                    <Badge variant="secondary">Polygon</Badge>
                    <Badge variant="secondary">Arbitrum</Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Value Proposition */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-cerise-900/30 to-purple-900/30 border-cerise-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Quiero transmitirte mi conocimiento de +10 años en cripto
                </h3>
                <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                  El objetivo es que OBTENGAS la información PRECISA permitiéndote ahorrarte mucho DINERO perdido tras
                  los errores que pudieras tener. En Cripto con 1 clic puedes perderlo todo y peor aún, si no aprendes a
                  usar las herramientas correctas, cada clic podrías estar perdiendo dinero sin darte cuenta.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
