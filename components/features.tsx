import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap, Target, Sparkles, Lightbulb } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Instant Enhancement",
      description: "Transform your basic prompts into powerful, detailed instructions for AI tools.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Tool-Specific Optimization",
      description: "Get prompts tailored for specific AI tools like ChatGPT, DALL-E, or Midjourney.",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Improved AI Outputs",
      description: "Achieve better, more accurate results from AI tools with enhanced prompts.",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Learn Prompt Engineering",
      description: "Understand best practices in prompt crafting by seeing your prompts enhanced.",
    },
  ]

  return (
    <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {feature.icon}
                  <span>{feature.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

