import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "UTC has been a game-changer for our restaurant chain. Managing inventory, payroll, and customer data across multiple locations is now effortless.",
    name: "Michael Chen",
    company: "Taste & Co.",
    role: "CEO",
  },
  {
    quote:
      "As a healthcare startup, compliance and security are critical. UTC's platform gives us peace of mind while streamlining our operations.",
    name: "Dr. Emily Rodriguez",
    company: "HealthBridge",
    role: "Founder",
  },
  {
    quote:
      "The community aspect is incredible. I've connected with founders from completely different industries and learned so much from their experiences.",
    name: "James Patterson",
    company: "EduTech Solutions",
    role: "Co-Founder",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Trusted by Founders Everywhere
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See what entrepreneurs from diverse industries are saying about UTC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300">
              <CardContent className="pt-8 pb-8">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
