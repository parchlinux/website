import { Button } from "@/components/ui/button"
import { useTranslation } from "@/utils/translation"
import { Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import raspberry from "@/data/raspberry"

export default function DownloadPage() {
  const { t, lang } = useTranslation();

  return (
    <main className="px-4 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">{t('download.title')}</h2>
        <div className="space-y-4">
          <Card className="flex max-xl:flex-col p-8 gap-8 items-center shadow-sm bg-muted">
            <div className="shrink-0 space-y-4 w-80">
              <h3 className="text-2xl font-bold sm:text-3xl md:text-4xl text-center">{raspberry.title[lang]}</h3>
              <p className="text-center">{raspberry.desc[lang]}</p>
            </div>
            <div className="grow flex flex-wrap justify-stretch gap-4">
              {raspberry.links.map(link => (
                <Card className="p-4 space-y-4">
                  <Image className="rounded-md border" src={link.img} width={320} height={180} />
                  <div className="flex justify-between items-center">
                    <strong>{link.text[lang]}</strong>
                    {
                      link.soon ?
                        <Button disabled>
                          {t('download.soon')}
                        </Button> :
                        <Button asChild size="icon">
                          <Link href={link.href} download>
                            <Download className="h-4 w-4" />
                          </Link>
                        </Button>
                    }
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
