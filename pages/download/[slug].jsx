import { Button } from "@/components/ui/button"
import { useTranslation } from "@/utils/translation"
import { Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import details from "@/data/downloadDetails"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { SiGitlab } from "@icons-pack/react-simple-icons"

export async function getServerSideProps(context) {
  const { query } = context;
  const item = details[query.slug] || null;
  return { props: { item } };
}

export default function DownloadPage({ item }) {
  const { t, lang } = useTranslation()
  const router = useRouter()

  useEffect(() => {
    if (!item) {
      router.push('/download');
    }
  }, [item, router]);

  if (!item) return null;

  const Details = t('details.comp')

  return (
    <main className="px-4 py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6 space-y-8">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center">{item.text[lang]}</h2>
        <Image src={item.img} width={800} height={450} className="mx-auto rounded-xl border shadow" />
        <Card className="max-w-[50rem] mx-auto p-8 bg-muted text-lg">
          <Details
            text={item.text[lang]}
            build_date={item.build_date}
            size={item.size}
            hash={item.hash}
            maintainer={item.maintainer} />
        </Card>
        <div className="flex justify-center">
          {item.changelog && (
            <Button asChild variant="outline" size="lg" className="rounded-full text-lg py-6 flex me-4">
              <Link href={item.changelog} download>
                <SiGitlab className="h-4 w-4" />
                {t('details.changelog')}
              </Link>
            </Button>
          )}
          <Button asChild size="lg" className="rounded-full text-lg py-6 flex">
            <Link href={item.href} download>
              <Download className="h-4 w-4" />
              {t('details.download', item.text[lang])}
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
