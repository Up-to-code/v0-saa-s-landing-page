import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ValueProposition } from "@/components/value-proposition"
import { PlatformsSection } from "@/components/platforms-section"
import { CommunitySection } from "@/components/community-section"
import { HowWeWork } from "@/components/how-we-work"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <PlatformsSection />
      <CommunitySection />
      <HowWeWork />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  )
}
