import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import PromptHistoryList from "@/components/prompt-history-list"

export default async function HistoryPage() {
  const supabase = createServerComponentClient({ cookies })
  const {
    data: { session },
  } = await supabase.auth.getSession()

  if (!session) {
    redirect("/auth")
  }

  const { data: promptHistory } = await supabase
    .from("prompt_history")
    .select("*")
    .eq("user_id", session.user.id)
    .order("created_at", { ascending: false })

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Prompt History</h1>
      {promptHistory && promptHistory.length > 0 ? (
        <PromptHistoryList history={promptHistory} />
      ) : (
        <p className="text-center text-gray-500">You haven't enhanced any prompts yet.</p>
      )}
    </div>
  )
}

