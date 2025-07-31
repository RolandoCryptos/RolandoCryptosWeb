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

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <HeroSection />
      <ServicesGrid />
      <ConsultancySection />
      <Web3ToolsSection />
      <TutorialsSection />
      <PulseChainSection />
      <VipSection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
