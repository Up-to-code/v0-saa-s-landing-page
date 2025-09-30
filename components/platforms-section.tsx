import { Card, CardContent } from "@/components/ui/card"

const platforms = [
  {
    name: "Shopify",
    description: "E-commerce platform for online stores and retail point-of-sale systems",
    color: "bg-[#96bf48]",
  },
  {
    name: "Stripe",
    description: "Payment processing platform for online and mobile commerce",
    color: "bg-[#635bff]",
  },
  {
    name: "QuickBooks",
    description: "Accounting software for small and medium-sized businesses",
    color: "bg-[#2ca01c]",
  },
  {
    name: "Mailchimp",
    description: "Marketing automation and email marketing platform",
    color: "bg-[#ffe01b]",
  },
  {
    name: "Slack",
    description: "Team collaboration and communication platform",
    color: "bg-[#4a154b]",
  },
  {
    name: "HubSpot",
    description: "CRM and inbound marketing platform for growing businesses",
    color: "bg-[#ff7a59]",
  },
]

export function PlatformsSection() {
  return (
    <section id="platforms" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Connect Your Tools
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Seamlessly integrate with the platforms you already use to run your business.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group cursor-pointer"
            >
              <CardContent className="pt-8 pb-8">
                <div className={`w-12 h-12 ${platform.color} rounded-lg mb-4 flex items-center justify-center`}>
                  <span className="text-white font-bold text-xl">{platform.name[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{platform.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
