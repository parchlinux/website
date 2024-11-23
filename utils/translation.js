import { useRouter } from "next/router";
import rosetta from "rosetta"

import en from "@/i18n/en"
import fa from "@/i18n/fa"

const i18n = rosetta({
  en,
  fa,
})

export const useTranslation = () => {
  const router = useRouter();
  i18n.locale(router.locale || 'fa')
  return {
    t: i18n.t.bind(i18n),
    lang: i18n.locale()
  }
}
