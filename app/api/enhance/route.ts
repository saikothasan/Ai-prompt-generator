import { generateText } from "ai"
import { gemini } from "@ai-sdk/gemini"
import { rateLimiter } from "@/lib/rate-limiter"
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies })

  try {
    // Apply rate limiting
    await rateLimiter(req, NextResponse)
  } catch {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 })
  }

  const { originalPrompt, aiTool } = await req.json()

  if (!originalPrompt) {
    return NextResponse.json({ error: "Original prompt is required" }, { status: 400 })
  }

  const enhancementPrompt = `Enhance the following prompt for ${aiTool === "general" ? "general AI use" : aiTool}. Make it more specific, detailed, and effective. Consider adding relevant context, clarifying instructions, and incorporating best practices for prompt engineering. Here's the original prompt:

  "${originalPrompt}"

  Enhanced prompt:`

  try {
    const { text } = await generateText({
      model: gemini("gemini-1.5-flash"),
      prompt: enhancementPrompt,
    })

    // Get the user's session
    const {
      data: { session },
    } = await supabase.auth.getSession()

    // If the user is authenticated, save the prompt history
    if (session) {
      await supabase.from("prompt_history").insert({
        user_id: session.user.id,
        original_prompt: originalPrompt,
        enhanced_prompt: text,
        ai_tool: aiTool,
      })
    }

    return NextResponse.json({ enhancedPrompt: text })
  } catch (error) {
    console.error("Error enhancing prompt:", error)
    return NextResponse.json({ error: "Failed to enhance prompt" }, { status: 500 })
  }
}

