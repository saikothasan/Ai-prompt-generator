"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Copy } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const aiTools = [
  { value: "chatgpt", label: "ChatGPT" },
  { value: "ai-video", label: "AI Video Generation" },
  { value: "ai-image", label: "AI Image Generation" },
  { value: "ai-audio", label: "AI Audio Generation" },
  { value: "ai-code", label: "AI Code Generation" },
  { value: "ai-writing", label: "AI Writing Assistant" },
  { value: "ai-translation", label: "AI Translation" },
  { value: "ai-summarization", label: "AI Summarization" },
]

export default function PromptGenerator() {
  const [topic, setTopic] = useState("")
  const [prompt, setPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [aiTool, setAITool] = useState("chatgpt")
  const { toast } = useToast()

  const generatePrompt = async () => {
    if (!topic.trim()) {
      toast({
        title: "Error",
        description: "Please enter a topic.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic, aiTool }),
      })
      if (!response.ok) {
        throw new Error("Failed to generate prompt")
      }
      const data = await response.json()
      setPrompt(data.prompt)
      toast({
        title: "Success",
        description: "Prompt generated successfully!",
      })
    } catch (error) {
      console.error("Error generating prompt:", error)
      toast({
        title: "Error",
        description: "Failed to generate prompt. Please try again.",
        variant: "destructive",
      })
    }
    setIsLoading(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt)
    toast({
      title: "Copied",
      description: "Prompt copied to clipboard!",
    })
  }

  return (
    <section id="prompt-generator" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>AI Prompt Generator</CardTitle>
            <CardDescription>Generate prompts for various AI tools</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4">
              <Select value={aiTool} onValueChange={setAITool}>
                <SelectTrigger>
                  <SelectValue placeholder="Select AI tool" />
                </SelectTrigger>
                <SelectContent>
                  {aiTools.map((tool) => (
                    <SelectItem key={tool.value} value={tool.value}>
                      {tool.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                type="text"
                placeholder="Enter a topic or description"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
              <Button onClick={generatePrompt} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  "Generate Prompt"
                )}
              </Button>
              {prompt && (
                <div className="mt-4">
                  <h3 className="text-lg font-semibold mb-2">Generated Prompt:</h3>
                  <div className="relative">
                    <Textarea value={prompt} readOnly className="min-h-[100px]" />
                    <Button size="icon" variant="ghost" className="absolute top-2 right-2" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

