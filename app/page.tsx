import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TrustedSection from '@/components/TrustedSection'
import AboutSection from '@/components/AboutSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import { SponsorMarquee } from '@/components/sponsor-marquee'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      {/* <Preloader /> */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      {/* <TrustedSection /> */}
      <SponsorMarquee />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
