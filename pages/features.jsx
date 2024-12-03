import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useTranslation } from "@/utils/translation"

import features from "@/data/features"

export default function Features() {
  const { t, lang } = useTranslation()

  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">
          {t('features.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {
            features.map(({ title, desc, icon: Icon }) => (
              <Card className="animate-in fade-in zoom-in duration-300">
                <CardHeader>
                  <Icon size={72} className="mx-auto mb-4 stroke-muted-foreground" />
                  <CardTitle><h2 className="text-center text-2xl">{title[lang]}</h2></CardTitle>
                </CardHeader>
                <CardContent>
                  {desc[lang]}
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </main>
  )
}
