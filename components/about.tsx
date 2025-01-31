import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <Image
            alt="AI Prompt Enhancement Illustration"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="310"
            src="/placeholder.svg"
            width="550"
          />
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Our AI Prompt Enhancer</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our AI-powered prompt enhancer is designed to help you get the most out of various AI tools. By analyzing
              your initial prompts and applying advanced prompt engineering techniques, we help you create more
              effective, detailed, and context-rich prompts. This leads to better outputs from AI models, whether you're
              using ChatGPT, creating AI-generated videos, images, or working with any other AI tool.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

