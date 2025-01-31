import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Enhance Your AI Prompts
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Supercharge your prompts for ChatGPT, AI video, image generation, and more. Get better results with our
              advanced prompt enhancement tool.
            </p>
          </div>
          <div className="space-x-4">
            <Button variant="secondary" size="lg" asChild>
              <a href="#prompt-enhancer">
                Enhance Your Prompt
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

