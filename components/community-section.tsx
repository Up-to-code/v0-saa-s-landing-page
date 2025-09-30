import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, MessageCircle, BookOpen, Lightbulb } from "lucide-react"

const benefits = [
  {
    icon: Users,
    title: "Diverse Network",
    description: "Connect with founders from retail, healthcare, education, hospitality, and beyond.",
  },
  {
    icon: MessageCircle,
    title: "Peer Support",
    description: "Share experiences, ask questions, and learn from entrepreneurs at every stage.",
  },
  {
    icon: BookOpen,
    title: "Exclusive Resources",
    description: "Access templates, guides, and tools designed for founders across all industries.",
  },
  {
    icon: Lightbulb,
    title: "Expert Insights",
    description: "Learn from industry leaders through webinars, workshops, and mentorship programs.",
  },
]

export function CommunitySection() {
  return (
    <section id="community" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
            Join a Community for All Founders
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto text-pretty leading-relaxed">
            UTC welcomes entrepreneurs from every industry. Whether you're in tech, retail, healthcare, education,
            hospitality, or any other sector, you belong here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <Card key={index} className="bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-10 py-6">
            <Users className="w-5 h-5 mr-2" />
            Join the Community Today
          </Button>
        </div>
      </div>
    </section>
  )
}
