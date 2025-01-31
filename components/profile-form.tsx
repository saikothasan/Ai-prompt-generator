"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/use-toast"

export default function ProfileForm({ profile }: { profile: any }) {
  const [name, setName] = useState(profile?.name || "")
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const { error } = await supabase.from("profiles").upsert({ id: profile.id, name })

    if (error) {
      toast({ title: "Error", description: error.message, variant: "destructive" })
    } else {
      toast({ title: "Success", description: "Profile updated successfully" })
    }
    setLoading(false)
  }

  return (
    <form onSubmit={updateProfile} className="space-y-4">
      <Input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <Button type="submit" disabled={loading}>
        Update Profile
      </Button>
    </form>
  )
}

