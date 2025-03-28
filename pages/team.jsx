import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SiX, SiGithub, SiMastodon } from "@icons-pack/react-simple-icons";
import { Coffee } from "lucide-react";
import { useTranslation } from "@/utils/translation";

import teams from "@/data/team";

export default function Team() {
  const { t, lang } = useTranslation();

  const getNameFontSize = (name) => {
    if (name.length > 20) return "text-md";
    if (name.length > 15) return "text-base";
    return "text-lg";
  };

  const TeamSection = ({ title, members }) => (
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-center mb-6">
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-grow max-w-[80px] mx-4"></div>
        <h3 className="text-2xl font-bold text-center">{title[lang]}</h3>
        <div className="h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent flex-grow max-w-[80px] mx-4"></div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        {members.map(member => (
          <Card key={member.name.en} className="animate-in fade-in zoom-in duration-300">
            <CardHeader className="p-4">
              <div className="flex items-center gap-4">
                <img
                  src={member.image}
                  alt={member.name[lang]}
                  width={64}
                  height={64}
                  className="rounded-full"
                />
                <div className="grow min-w-0">
                  <CardTitle className={`${getNameFontSize(member.name[lang])} md:truncate`}>
                    {member.name[lang]}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground mt-1 md:truncate">{member.stack[lang]}</p>
                </div>
                <div className="flex flex-row-reverse gap-1 md:gap-1.5 flex-shrink-0">
                  {member.socials.twitter && (
                    <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 p-1 md:p-1" asChild>
                      <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <SiX className="h-7 w-7 md:h-8 md:w-8" />
                        <span className="sr-only">X</span>
                      </a>
                    </Button>
                  )}
                  {member.socials.github && (
                    <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 p-1 md:p-1" asChild>
                      <a href={member.socials.github} target="_blank" rel="noopener noreferrer">
                        <SiGithub className="h-7 w-7 md:h-8 md:w-8" />
                        <span className="sr-only">GitHub</span>
                      </a>
                    </Button>
                  )}
                  {member.socials.mastodon && (
                    <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 p-1 md:p-1" asChild>
                      <a href={member.socials.mastodon} target="_blank" rel="noopener noreferrer">
                        <SiMastodon className="h-7 w-7 md:h-8 md:w-8" />
                        <span className="sr-only">Mastodon</span>
                      </a>
                    </Button>
                  )}
                  {/* {member.socials.donate && (
                    <Button variant="outline" size="icon" className="h-9 w-9 md:h-10 md:w-10 p-1 md:p-1" asChild>
                      <a href={member.socials.donate} target="_blank" rel="noopener noreferrer">
                        <Coffee className="h-7 w-7 md:h-8 md:w-8" />
                        <span className="sr-only">{t("team.donate")}</span>
                      </a>
                    </Button>
                  )} */}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <main className="py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl text-center mb-12">
          {t("team.title")}
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <TeamSection 
            title={teams.technical}
            members={teams.technical.members} 
          />
          <TeamSection 
            title={teams.design}
            members={teams.design.members} 
          />
          <TeamSection 
            title={teams.web}
            members={teams.web.members} 
          />
        </div>
      </div>
    </main>
  );
}
