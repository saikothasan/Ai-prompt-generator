import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

export async function POST(req: Request) {
  const { topic, aiTool } = await req.json()

  if (!topic) {
    return new Response(JSON.stringify({ error: "Topic is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  let promptTemplate = ""
  switch (aiTool) {
    case "chatgpt":
      promptTemplate = `Generate an engaging conversation starter or question for ChatGPT based on the topic: "${topic}". The prompt should encourage an informative and interactive dialogue.`
      break
    case "ai-video":
      promptTemplate = `Create a detailed video generation prompt for an AI video tool, focusing on the theme: "${topic}". Include specifics about style, mood, scenes, and any particular elements to be featured.`
      break
    case "ai-image":
      promptTemplate = `Craft a descriptive image generation prompt for an AI art tool, centered around the concept: "${topic}". Specify style, colors, composition, and any key elements to be included in the image.`
      break
    case "ai-audio":
      promptTemplate = `Develop an audio generation prompt for an AI music or sound creation tool, based on the theme: "${topic}". Describe the desired genre, mood, instruments, and any specific audio characteristics.`
      break
    case "ai-code":
      promptTemplate = `Formulate a coding task or challenge for an AI code generation tool, related to: "${topic}". Specify the programming language, desired functionality, and any particular requirements or constraints.`
      break
    case "ai-writing":
      promptTemplate = `Create a writing prompt for an AI writing assistant, focusing on the subject: "${topic}". Specify the type of content (e.g., article, story, essay), target audience, and key points to be addressed.`
      break
    case "ai-translation":
      promptTemplate = `Develop a translation task for an AI language model, involving the theme: "${topic}". Specify the source and target languages, and any particular cultural or contextual considerations.`
      break
    case "ai-summarization":
      promptTemplate = `Craft a summarization task for an AI tool, centered on the subject: "${topic}". Specify the type of content to be summarized, desired length of the summary, and key aspects to focus on.`
      break
    default:
      promptTemplate = `Generate a versatile AI prompt related to: "${topic}". The prompt should be adaptable for various AI applications and encourage creative and practical outputs.`
  }

  try {
    const { text } = await generateText({
      model: openai("gpt-4-turbo"),
      prompt: promptTemplate,
    })

    return new Response(JSON.stringify({ prompt: text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error generating prompt:", error)
    return new Response(JSON.stringify({ error: "Failed to generate prompt" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

