import { useTranslation } from "@/utils/translation"

export default function Features() {
  const { t } = useTranslation()

  return (
    <main className="flex-grow place-content-center text-center">
      <div className="text-2xl lg:text-5xl font-bold">{t('error_404')}</div>
    </main>
  )
}
