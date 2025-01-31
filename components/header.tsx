"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import type { Session } from "@supabase/supabase-js"
import { Menu, X } from "lucide-react"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"

export default function Header({ session }: { session: Session | null }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const supabase = createClientComponentClient()
  const router = useRouter()

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const authItems = session
    ? [
        { href: "/profile", label: "Profile" },
        { href: "/history", label: "History" },
      ]
    : [{ href: "/auth", label: "Sign In" }]

  return (
    <header className="w-full py-6 px-4 sm:px-6 lg:px-8 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AI Prompt Enhancer
        </Link>
        <nav className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline">
              {item.label}
            </Link>
          ))}
          <ThemeToggle />
          {session ? (
            <>
              {authItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <Button size="sm" variant="outline">
                    {item.label}
                  </Button>
                </Link>
              ))}
              <Button size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/auth">
              <Button size="sm">Sign In</Button>
            </Link>
          )}
        </nav>
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium hover:underline">
                {item.label}
              </Link>
            ))}
            {authItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <Button size="sm" variant="outline" className="w-full">
                  {item.label}
                </Button>
              </Link>
            ))}
            {session && (
              <Button size="sm" onClick={handleSignOut} className="w-full">
                Sign Out
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

