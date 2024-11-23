import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SiX, SiGithub, SiMastodon } from "@icons-pack/react-simple-icons";
import { Coffee } from "lucide-react";
import { useTranslation } from "@/utils/translation";

import team from "@/data/team";

export default function Team() {
  const { t, lang } = useTranslation();

  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-8">
          {t("team.title")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map(member => (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name[lang]}
                    width={72}
                    height={72}
                    className="rounded-full"
                  />
                  <div className="grow">
                    <CardTitle>{member.name[lang]}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">{member.stack[lang]}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {member.socials.twitter && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                          <SiX className="h-4 w-4" />
                          <span className="sr-only">X</span>
                        </a>
                      </Button>
                    )}
                    {member.socials.github && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                          <SiGithub className="h-4 w-4" />
                          <span className="sr-only">GitHub</span>
                        </a>
                      </Button>
                    )}
                    {member.socials.mastodon && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.socials.mastodon} target="_blank" rel="noopener noreferrer">
                          <SiMastodon className="h-4 w-4" />
                          <span className="sr-only">Mastodon</span>
                        </a>
                      </Button>
                    )}
                    {member.socials.donate && (
                      <Button variant="outline" size="icon" asChild>
                        <a href={member.socials.donate} target="_blank" rel="noopener noreferrer">
                          <Coffee className="h-4 w-4" />
                          <span className="sr-only">{t("team.donate")}</span>
                        </a>
                      </Button>
                    )}
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
