import { Card, CardContent } from "@/components/ui/card"
import { Phone, Target, Rocket, HeadphonesIcon, Quote } from "lucide-react"

const steps = [
  {
    icon: Phone,
    title: "Discovery Call",
    description: "We start with a conversation to understand your business goals, challenges, and current workflows.",
  },
  {
    icon: Target,
    title: "Custom Strategy",
    description: "Our team designs a tailored integration plan that aligns with your specific needs and objectives.",
  },
  {
    icon: Rocket,
    title: "Implementation",
    description: "We handle the technical setup and ensure all your platforms are connected seamlessly.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Continuous monitoring, optimization, and dedicated support to ensure your success.",
  },
]

export function HowWeWork() {
  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            How We Work With You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A proven 4-step process to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <Card className="border-2 hover:border-primary transition-all duration-300 h-full">
                  <CardContent className="pt-8 pb-8 text-center">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            )
          })}
        </div>

        {/* Featured Testimonial */}
        <Card className="max-w-3xl mx-auto border-2 border-primary/20 bg-card">
          <CardContent className="pt-10 pb-10">
            <Quote className="w-10 h-10 text-primary mb-4" />
            <p className="text-lg text-foreground mb-6 leading-relaxed italic">
              "UTC transformed how we manage our operations. The integration process was seamless, and their team was
              with us every step of the way. We've saved countless hours and can now focus on growing our business."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold">SJ</span>
              </div>
              <div>
                <p className="font-bold text-foreground">Sarah Johnson</p>
                <p className="text-sm text-muted-foreground">Founder, Bloom Retail Co.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
