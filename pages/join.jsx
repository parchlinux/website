import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from "@/utils/translation"
import { Users, Book, MessageCircle, Code, ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SiBluesky, SiDiscord, SiMastodon, SiTelegram, SiX } from "@icons-pack/react-simple-icons";

const JoinCard = ({ icon: Icon, caption, link, text, url, arrow: Arrow }) => (
  <Card className="animate-in fade-in zoom-in duration-300">
    <CardHeader>
      <div className="flex gap-4 justify-between">
        <CardTitle>
          <Icon className="h-6 w-6 inline-block align-middle me-2" />
          {caption}
        </CardTitle>
        <Button asChild variant="outline" className="rounded-full">
          <Link href={url}>{link} <Arrow size={16} /></Link>
        </Button>
      </div>
    </CardHeader>
    <CardContent>{text}</CardContent>
  </Card>
)

export default function Join() {
  const { t, lang } = useTranslation();

  const arrow = lang == 'fa' ? ArrowLeftCircle : ArrowRightCircle

  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">{t('join.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <JoinCard
            icon={Users}
            caption={t('join.caption.forum')}
            url="https://forum.parchlinux.com"
            link={t('join.link.forum')}
            text={t('join.text.forum')}
            arrow={arrow} />
          <JoinCard
            icon={Book}
            caption={t('join.caption.wiki')}
            url="https://wiki.parchlinux.com"
            link={t('join.link.wiki')}
            text={t('join.text.wiki')}
            arrow={arrow} />
          <JoinCard
            icon={MessageCircle}
            caption={t('join.caption.chat')}
            url="https://matrix.to/#/%23parch:bsd.cafe"
            link={t('join.link.chat')}
            text={t('join.text.chat')}
            arrow={arrow} />
          <JoinCard
            icon={Code}
            caption={t('join.caption.contrib')}
            url="https://git.parchlinux.com"
            link={t('join.link.contrib')}
            text={t('join.text.contrib')}
            arrow={arrow} />
        </div>
      </div>
    </main>
  )
}
