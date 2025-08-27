import Link from "next/link";
import { useTranslation } from "@/utils/translation"
import { SiBluesky, SiDiscord, SiInstagram, SiLinkedin, SiMastodon, SiPeertube, SiTelegram, SiThreads, SiX, SiYoutube } from "@icons-pack/react-simple-icons";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="py-6 bg-muted mt-auto">
      <div className="mx-auto container px-4 md:px-6">
        <div className="flex max-lg:flex-col gap-4 justify-between items-center">
          <nav className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/features">{t('navigation.features')}</Link>
            <Link href="/download">{t('navigation.download')}</Link>
            <Link href="/community">{t('navigation.community')}</Link>
            <Link href="/join">{t('navigation.join')}</Link>
            <Link href="https://blog.parchlinux.com">{t('navigation.blog')}</Link>
            <Link href="/team">{t('navigation.team')}</Link>
            <Link href="/privacy">{t('footer.privacyPolicy')}</Link>
            <Link href="/whitepaper">{t('footer.whitepaper')}</Link>
            {/* <Link href="/tos">{t('footer.termsOfService')}</Link> */}
          </nav>
          <div className="flex flex-wrap justify-center items-center gap-4">
            <Link href="https://youtube.com/@ParchLinux">
              <SiYoutube className="w-4 h-4" />
            </Link>
            <Link href="https://tubedu.org/c/parch">
              <SiPeertube className="w-4 h-4" />
            </Link>
            <Link href="https://ieji.de/@parchlinux" rel="me">
              <SiMastodon className="w-4 h-4" />
            </Link>
            <Link href="https://threads.net/@parchlinux">
              <SiThreads className="w-4 h-4" />
            </Link>
            <Link href="https://x.com/parchgnulinux">
              <SiX className="w-4 h-4" />
            </Link>
            <Link href="https://www.linkedin.com/company/parch-linux">
              <SiLinkedin className="w-4 h-4" />
            </Link>
            <Link href="https://instagram.com/parchlinux">
              <SiInstagram className="w-4 h-4" />
            </Link>
            <Link href={t('footer.link_tel')}>
              <SiTelegram className="w-4 h-4" />
            </Link>
            <Link href="https://discord.gg/9RW5cRByAM">
              <SiDiscord className="w-4 h-4" />
            </Link>
            <Link href="https://bsky.app/profile/parchlinux.com">
              <SiBluesky className="w-4 h-4" />
            </Link>
            <div className="text-sm">
              {t('footer.copyright')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
