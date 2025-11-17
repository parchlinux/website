import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const router = useRouter();

  const toggleLanguage = () => {
    const newLocale = router.locale === 'fa' ? 'en' : 'fa';
    const { pathname, asPath, query } = router;

    router.push({ pathname, query }, asPath, { locale: newLocale });

    document.documentElement.dir = newLocale === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLocale;
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage}>
      <Globe className="h-4 w-4" />
      <span className="sr-only">تغییر زبان</span>
    </Button>
  );
}