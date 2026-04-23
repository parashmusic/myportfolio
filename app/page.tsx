import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TrustedSection from '@/components/TrustedSection'
import About from '@/components/about-section/About'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import Preloader from '@/components/Preloader'
import { SponsorMarquee } from '@/components/sponsor-marquee'
import AboutSection from '@/components/AboutSection'

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
      <AboutSection/>
      {/* <About /> */}
      <CTASection />
      <Footer />
    </main>
  )
}
