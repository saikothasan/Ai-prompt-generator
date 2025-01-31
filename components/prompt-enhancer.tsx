"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Copy, Wand2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

const aiTools = [
  { value: "general", label: "General AI" },
  { value: "chatgpt", label: "AI Chatbot" },
  { value: "ai-video", label: "AI Video Generation" },
  { value: "ai-image", label: "AI Image Generation" },
  { value: "ai-audio", label: "AI Audio Generation" },
  { value: "ai-code", label: "AI Code Generation" },
  { value: "ai-writing", label: "AI Writing Assistant" },
  { value: "ai-translation", label: "AI Translation" },
  { value: "ai-summarization", label: "AI Summarization" },
]

export default function PromptEnhancer() {
  const [originalPrompt, setOriginalPrompt] = useState("")
  const [enhancedPrompt, setEnhancedPrompt] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [aiTool, setAITool] = useState("general")
  const [session, setSession] = useState<any>(null)
  const { toast } = useToast()
  const supabase = createClientComponentClient()
  const router = useRouter()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const enhancePrompt = async () => {
    if (!originalPrompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a prompt to enhance.",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch("/api/enhance", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ originalPrompt, aiTool }),
      })
      if (!response.ok) {
        throw new Error("Failed to enhance prompt")
      }
      const data = await response.json()
      setEnhancedPrompt(data.enhancedPrompt)
      toast({
        title: "Success",
        description: "Prompt enhanced successfully!",
      })

      // Save to history if user is logged in
      if (session) {
        await supabase.from("prompt_history").insert({
          user_id: session.user.id,
          original_prompt: originalPrompt,
          enhanced_prompt: data.enhancedPrompt,
          ai_tool: aiTool,
        })
      }
    } catch (error) {
      console.error("Error enhancing prompt:", error)
      toast({
        title: "Error",
        description: "Failed to enhance prompt. Please try again.",
        variant: "destructive",
      })
    }
    setIsLoading(false)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    toast({
      title: "Copied",
      description: "Prompt copied to clipboard!",
    })
  }

  return (
    <section id="prompt-enhancer" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>AI Prompt Enhancer (Powered by Google's Gemini)</CardTitle>
            <CardDescription>Improve your prompts for better AI-generated results</CardDescription>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Original Prompt:</h3>
                  <div className="relative">
                    <Textarea
                      placeholder="Enter your prompt here"
                      value={originalPrompt}
                      onChange={(e) => setOriginalPrompt(e.target.value)}
                      className="min-h-[200px]"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(originalPrompt)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">Enhanced Prompt:</h3>
                  <div className="relative">
                    <Textarea
                      value={enhancedPrompt}
                      readOnly
                      className="min-h-[200px]"
                      placeholder="Your enhanced prompt will appear here"
                    />
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute top-2 right-2"
                      onClick={() => copyToClipboard(enhancedPrompt)}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              <Button onClick={enhancePrompt} disabled={isLoading} className="w-full">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enhancing...
                  </>
                ) : (
                  <>
                    <Wand2 className="mr-2 h-4 w-4" />
                    Enhance Prompt
                  </>
                )}
              </Button>
              {!session && (
                <p className="text-sm text-center text-muted-foreground">
                  <Button variant="link" onClick={() => router.push("/auth")}>
                    Sign in
                  </Button>{" "}
                  to save your prompt history
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

