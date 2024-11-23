"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslation } from "@/utils/translation"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const { t } = useTranslation()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <Sun className="h-[1.5rem] w-[1.3rem] hidden dark:block" />
      <Moon className="h-5 w-5 block dark:hidden" />
      <span className="sr-only">{t('navigation.toggle_theme')}</span>
    </Button>
  )
}
