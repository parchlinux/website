import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { SiGitlab } from "@icons-pack/react-simple-icons";
import { useTranslation } from "@/utils/translation";
import { useState } from "react";

import communityData from "@/data/community";

export default function Community() {
  const { t, lang } = useTranslation();
  const [apps, setApps] = useState(communityData.apps);

  const search = q => {
    setApps(communityData.apps.filter(app => (
      app.name[lang].toLowerCase().includes(q) ||
      app.desc[lang].toLowerCase().includes(q) ||
      app.cat[lang].toLowerCase().includes(q)
    )))
  }

  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">
          {t("community.title")}
        </h2>
        <div className="my-12">
          <input type="search"
            className="bg-background rounded-full border shadow-lg px-5 py-3 block mx-auto w-[40rem] max-w-full"
            placeholder={t("community.search")}
            onInput={(e) => search(e.target.value.trim().toLowerCase())} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {apps.map(app => (
            <Card className="animate-in fade-in zoom-in duration-300">
              <CardHeader>
                <div className="flex gap-2">
                  <div className="grow space-y-2">
                    <h3 className="text-lg font-bold">{app.name[lang]}</h3>
                    <p className="text-sm text-muted-foreground mt-2">{app.desc[lang]}</p>
                    <p className="">{app.cat[lang]}</p>
                  </div>
                  <div className="shrink-0">
                    <Button variant="outline" size="icon" asChild>
                      <a href={app.href} target="_blank">
                        <SiGitlab className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
