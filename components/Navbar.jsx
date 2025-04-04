import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useTranslation } from "@/utils/translation";

export function Navbar() {
  const { t } = useTranslation();
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto container px-4 flex h-14 items-center">
        <Link href="/" className="sm:me-6 flex items-center gap-2">
          <Image src="/parch.svg" alt="Parch Logo" width={32} height={32} />
          <span className="font-bold">{t('home.title')}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/features">{t('navigation.features')}</Link>
          <Link href="/download">{t('navigation.download')}</Link>
          <Link href="https://forum.parchlinux.com">{t('navigation.forum')}</Link>
          <Link href="https://wiki.parchlinux.com">{t('navigation.wiki')}</Link>
          <Link href="/community">{t('navigation.community')}</Link>
          <Link href="https://blog.parchlinux.com">{t('navigation.blog')}</Link>
          <Link href="/team">{t('navigation.team')}</Link>
        </nav>
        <div className="flex flex-1 items-center justify-end gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
