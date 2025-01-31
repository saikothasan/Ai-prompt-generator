import Link from "next/link"
import { TextIcon as Telegram } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 sm:px-6 lg:px-8 border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2025 AI Prompt Enhancer. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <nav className="flex space-x-4">
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact Us
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Telegram className="h-4 w-4" />
            <Link href="https://t.me/yourchannelname" target="_blank" rel="noopener noreferrer">
              Join our Telegram
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  )
}

