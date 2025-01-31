import Hero from "@/components/hero"
import Features from "@/components/features"
import About from "@/components/about"
import FAQ from "@/components/faq"
import PromptEnhancer from "@/components/prompt-enhancer"
import AITools from "@/components/ai-tools"

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Hero />
      <Features />
      <PromptEnhancer />
      <AITools />
      <About />
      <FAQ />
    </main>
  )
}

