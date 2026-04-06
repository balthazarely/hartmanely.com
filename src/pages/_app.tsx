import { Layout } from "@/components/LayoutComponents";
import "@/styles/globals.scss";
import { getNavProjects, NavCategory } from "@/lib/payload";
import type { AppContext, AppProps } from "next/app";
import App from "next/app";

interface Props extends AppProps {
  navCategories: NavCategory[];
}

export default function MyApp({ Component, pageProps, navCategories }: Props) {
  return (
    <Layout navCategories={navCategories}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  const navCategories = await getNavProjects();
  return { ...appProps, navCategories };
};
