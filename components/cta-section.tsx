import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
            Join thousands of entrepreneurs who are simplifying their operations and scaling with confidence. Start your
            free trial today—no credit card required.
          </p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
            Get Started Free
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
