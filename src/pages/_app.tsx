import { Layout } from "@/components/LayoutComponents";
import "@/styles/globals.scss";
import { getNavProjects, getSiteSettings, NavCategory, SiteSettings } from "@/lib/payload";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";

interface Props extends AppProps {
  navCategories: NavCategory[];
  siteSettings: SiteSettings | null;
}

export default function MyApp({ Component, pageProps, navCategories, siteSettings }: Props) {
  return (
    <Layout navCategories={navCategories} siteSettings={siteSettings}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const [navCategories, siteSettings] = await Promise.all([
    getNavProjects(),
    getSiteSettings(),
  ]);
  return { ...appProps, navCategories, siteSettings };
};
