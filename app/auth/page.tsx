import AuthForm from "@/components/auth-form"

export default function AuthPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Sign In / Sign Up</h1>
      <AuthForm />
    </div>
  )
}

