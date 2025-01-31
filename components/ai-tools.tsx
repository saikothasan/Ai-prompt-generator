import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, Video, Image, Headphones, Code, PenTool, Languages, FileText } from "lucide-react"

const aiTools = [
  {
    icon: <MessageSquare className="h-8 w-8" />,
    name: "AI Chatbot",
    description: "Engage in human-like conversations and get answers to your questions.",
  },
  {
    icon: <Video className="h-8 w-8" />,
    name: "AI Video Generation",
    description: "Create stunning videos with AI-generated content and effects.",
  },
  {
    icon: <Image className="h-8 w-8" />,
    name: "AI Image Generation",
    description: "Generate unique images from text descriptions using advanced AI models.",
  },
  {
    icon: <Headphones className="h-8 w-8" />,
    name: "AI Audio Generation",
    description: "Produce music, sound effects, and voice overs with AI technology.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    name: "AI Code Generation",
    description: "Get help with coding tasks and generate code snippets using AI.",
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    name: "AI Writing Assistant",
    description: "Enhance your writing with AI-powered suggestions and improvements.",
  },
  {
    icon: <Languages className="h-8 w-8" />,
    name: "AI Translation",
    description: "Translate text between languages with high accuracy using AI.",
  },
  {
    icon: <FileText className="h-8 w-8" />,
    name: "AI Summarization",
    description: "Quickly summarize long texts and documents using AI technology.",
  },
]

export default function AITools() {
  return (
    <section id="ai-tools" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Explore AI Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.map((tool, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  {tool.icon}
                  <span>{tool.name}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{tool.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

