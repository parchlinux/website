import BaseLayout from "@/components/Base";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }) {
  return <ThemeProvider attribute="class">
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  </ThemeProvider>;
}
