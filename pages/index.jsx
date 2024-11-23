import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/utils/translation"

export default function Home() {
  const { t } = useTranslation();
  return (
    <main className="py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="mx-auto container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl/none">
            {t('home.title')}
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            {t('home.description')}
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/download">
                <Download className="me-2 h-4 w-4" /> {t('home.downloadButton')}
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/features">{t('home.learnMoreButton')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
