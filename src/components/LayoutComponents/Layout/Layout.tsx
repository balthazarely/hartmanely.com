import { Header, Footer } from "@/components/LayoutComponents";

interface ILayoutProps {
  children: JSX.Element;
}

export function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div className="flex flex-col h-screen ">
      <Header />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
