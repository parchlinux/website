import BaseLayout from "@/components/Base";
import "@/styles/globals.css";
import { useTranslation } from "@/utils/translation";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const { t } = useTranslation()

  return <ThemeProvider attribute="class">
    <BaseLayout>
      <Component {...pageProps} />
      <Head>
        <title>{t('home.title')}</title>
      </Head>
    </BaseLayout>
  </ThemeProvider>;
}
