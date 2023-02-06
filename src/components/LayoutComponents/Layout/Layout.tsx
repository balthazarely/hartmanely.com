import { Header, Footer } from "@/components/LayoutComponents";

interface ILayoutProps {
  children: JSX.Element;
}

export function Layout({ children }: ILayoutProps): JSX.Element {
  return (
    <div className="flex h-screen flex-col">
      <div className="z-50 ">
        <Header />
      </div>
      <div className="z-0 mt-20 flex-grow transition-all duration-200 md:mt-28">
        {children}
      </div>
      <div className="flex flex-col gap-4"></div>
      <Footer />
    </div>
  );
}
