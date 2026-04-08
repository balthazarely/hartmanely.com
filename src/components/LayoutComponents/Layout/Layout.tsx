import { Header, Footer } from "@/components/LayoutComponents";
import { NavCategory } from "@/lib/payload";

interface ILayoutProps {
  children: JSX.Element;
  navCategories: NavCategory[];
}

export function Layout({ children, navCategories }: ILayoutProps): JSX.Element {
  return (
    <div className="flex h-screen flex-col bg-white">
      <div className="z-50 ">
        <Header navCategories={navCategories} />
      </div>
      <main className="z-0 mt-20 flex-grow transition-all duration-200 md:mt-28">
        {children}
      </main>
      <div className="flex flex-col gap-4"></div>
      <Footer />
    </div>
  );
}
