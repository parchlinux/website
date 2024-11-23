import { useTranslation } from "@/utils/translation"
import { Card } from "@/components/ui/card"
import whitepaper from "@/data/whitepaper"

export default function DownloadPage() {
  const { lang } = useTranslation();

  return (
    <main className="p-4 md:p-8 lg:p-16">
      <Card className="prose lg:prose-lg dark:prose-invert !container mx-auto p-12">
        <div className="" dangerouslySetInnerHTML={{ __html: whitepaper[lang] }}></div>
      </Card>
    </main>
  )
}
