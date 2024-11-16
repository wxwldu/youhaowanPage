'use client'

import { useRouter } from "next/navigation"
import type { Locale } from "@/i18n/config"

interface LogoutButtonProps {
  lang: Locale
  children: React.ReactNode
  className?: string
}

export function LogoutButton({ lang, children, className }: LogoutButtonProps) {
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('userEmail')
    router.refresh()
    router.push(`/${lang}`)
  }

  return (
    <button onClick={handleLogout} className={className}>
      {children}
    </button>
  )
}
