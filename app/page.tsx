import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesGrid } from "@/components/services-grid"
import { ConsultancySection } from "@/components/consultancy-section"
import { Web3ToolsSection } from "@/components/web3-tools-section"
import { TutorialsSection } from "@/components/tutorials-section"
import { PulseChainSection } from "@/components/pulsechain-section"
import { VipSection } from "@/components/vip-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
        <HeroSection />
        <ServicesGrid />
        <ConsultancySection />
        <Web3ToolsSection />
        <TutorialsSection />
        <PulseChainSection />
        <VipSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
