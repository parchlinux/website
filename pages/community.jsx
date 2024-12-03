import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { SiGitlab } from "@icons-pack/react-simple-icons";
import { useTranslation } from "@/utils/translation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

import communityData from "@/data/community";

const ProjectDialog = ({ name, page, url, repo }) => {
  const { t } = useTranslation();
  
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{name}</DialogTitle>
      </DialogHeader>
      <DialogDescription className="space-y-4">
        <Image src="/carburetor.png" alt="Carburetor" width={800} height={450} className="max-w-full" />
        <div className="bg-muted rounded-xl shadow-inner text-lg">
          <ul className="divide-y-2 divide-background *:p-4">
            <li>{t("community.url")}: <Link href={url} className="text-blue-500" dir="ltr">{url}</Link></li>
            <li>{t("community.repo")}: <Link href={repo} className="text-blue-500" dir="ltr">{repo}</Link></li>
          </ul>
        </div>
        <article className="prose lg:prose-lg dark:prose-invert prose-pre:[direction:ltr]">
          <Markdown>{page}</Markdown>
        </article>
      </DialogDescription>
    </DialogContent>
  )
}

export default function Community() {
  const { t, lang } = useTranslation();
  const [apps, setApps] = useState(communityData.apps);
  const [q, setQ] = useState('');

  useEffect(() => {
    const qq = q.trim().toLowerCase()
    setApps(communityData.apps.filter(app => (
      app.name[lang].toLowerCase().includes(qq) ||
      app.desc[lang].toLowerCase().includes(qq) ||
      app.cat[lang].toLowerCase().includes(qq)
    )))
  }, [q])

  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">
          {t("community.title")}
        </h2>
        <div className="my-12 max-w-2xl mx-auto">
          <input type="search"
            className="bg-background rounded-full border shadow px-5 py-3 block mx-auto w-full"
            placeholder={t("community.search")}
            value={q} onInput={(e) => setQ(e.target.value)} />
          <div className="flex flex-wrap gap-2 mt-3">
            {communityData.categories.map(cat => (
              cat[lang] == q
                ? <Button className="rounded-full" onClick={() => setQ('')}>{cat[lang]}</Button>
                : <Button variant="outline" className="rounded-full" onClick={() => setQ(cat[lang])}>{cat[lang]}</Button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {
            apps.length
              ? apps.map(app => (
                <Dialog>
                  <DialogTrigger>
                    <Card className="animate-in fade-in zoom-in duration-300">
                      <CardHeader>
                        <div className="space-y-2">
                          <h3 className="text-lg font-bold">{app.name[lang]}</h3>
                          <p className="text-sm text-muted-foreground mt-2">{app.desc[lang]}</p>
                          <p className="">{app.cat[lang]}</p>
                        </div>
                      </CardHeader>
                    </Card>
                  </DialogTrigger>
                  <ProjectDialog
                    name={app.name[lang]}
                    url={app.url}
                    repo={app.repo}
                    page={app.page[lang]} />
                </Dialog>
              ))
              : (
                <div className="col-span-full flex">
                  <div className="m-auto">{t("community.no_result")}</div>
                </div>
              )
          }
        </div>
      </div>
    </main>
  )
}
