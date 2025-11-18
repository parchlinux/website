"use client"
import { useRouter } from "next/router";
import rosetta from "rosetta";
import { useState, useEffect } from "react";

import en from '../i18n/en';
import fa from '../i18n/fa';

const i18n = rosetta({
  en: en,
  fa: fa,
});

export const useTranslation = () => {
  const router = useRouter();
  // Set initial locale from router, default to 'en'
  const [locale, setLocale] = useState(router.locale || 'en');

  useEffect(() => {
    // Once on the client, determine the effective locale
    const browserLang = navigator.language.split('-')[0];
    const effectiveLocale = router.locale || browserLang || 'en';
    
    // Update the i18n instance and the state
    i18n.locale(effectiveLocale);
    setLocale(effectiveLocale);
  }, [router.locale]);

  // Set the locale for the current render
  i18n.locale(locale);

  return {
    t: i18n.t.bind(i18n),
    lang: locale
  };
}