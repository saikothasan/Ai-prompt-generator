import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type PromptHistoryItem = {
  id: string
  original_prompt: string
  enhanced_prompt: string
  ai_tool: string
  created_at: string
}

export default function PromptHistoryList({ history }: { history: PromptHistoryItem[] }) {
  return (
    <div className="space-y-4">
      {history.map((item) => (
        <Card key={item.id}>
          <CardHeader>
            <CardTitle>{item.ai_tool}</CardTitle>
            <CardDescription>{new Date(item.created_at).toLocaleString()}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div>
                <h4 className="font-semibold">Original Prompt:</h4>
                <p>{item.original_prompt}</p>
              </div>
              <div>
                <h4 className="font-semibold">Enhanced Prompt:</h4>
                <p>{item.enhanced_prompt}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

