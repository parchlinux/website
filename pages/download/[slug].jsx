import { Button } from "@/components/ui/button"
import { useTranslation } from "@/utils/translation"
import { Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import details from "@/data/downloadDetails"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { SiGitlab } from "@icons-pack/react-simple-icons"

export async function getServerSideProps(context) {
  const { query } = context
  const item = details[query.slug] || null
  return { props: { item } }
}

export default function DownloadPage({ item }) {
  const { t, lang } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    if (!item) router.push('/download')
  }, [item, router])

  if (!item) return null

  const Details = t('details.comp')

  return (
    <main className="px-4 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-12">

        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center">
          {item.text[lang]}
        </h2>

        <Image
          src={item.img}
          width={1200}
          height={675}
          alt={item.text[lang]}
          className="mx-auto rounded-2xl border-2 border-border shadow-2xl"
          priority
        />

        <Card className="max-w-4xl mx-auto glass-card overflow-hidden">
          <CardContent className="p-10 md:p-14">
            <div className="space-y-8 text-lg">
              <Details
                text={item.text[lang]}
                build_date={item.build_date}
                size={item.size}
                hash={item.hash}
                maintainer={item.maintainer}
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex flex-col sm:flex-row gap-6 justify-center">

          {item.changelog && (
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-7 min-w-[240px]">
              <Link href={item.changelog} target="_blank" rel="noopener noreferrer">
                <SiGitlab className="h-6 w-6 ml-3" />
                {t('details.changelog')}
              </Link>
            </Button>
          )}

          <Button asChild size="lg" className="btn-primary rounded-full px-12 py-8 text-xl font-bold min-w-[280px] shadow-2xl">
            <Link href={item.href} download>
              <Download className="h-8 w-8 ml-4" />
              {t('details.download', item.text[lang])}
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="rounded-full px-8 py-7 min-w-[240px]">
            <Link href={`https://efp.balena.io/open-image-url?imageUrl=${encodeURIComponent(item.href)}`} target="_blank" rel="noopener noreferrer">
              {t('details.balenaEtcher')}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}