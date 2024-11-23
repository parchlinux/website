import { useRouter } from 'next/router'
import { Button } from "@/components/ui/button"
import { Globe } from 'lucide-react'
import { useTranslation } from '@/utils/translation'

export function LanguageSwitcher() {
  const router = useRouter()
  const { t } = useTranslation()

  const toggleLanguage = () => {
    const newLocale = router.locale === 'fa' ? 'en' : 'fa'
    const { pathname, asPath, query } = router
    router.push({ pathname, query }, asPath, { locale: newLocale })
    document.dir = { fa: 'rtl', en: 'ltr' }[newLocale]
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
      <Globe className="h-4 w-4" />
      <span className="sr-only">{t('navigation.toggle_language')}</span>
    </Button>
  )
}
