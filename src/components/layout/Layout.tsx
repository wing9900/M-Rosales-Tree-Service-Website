import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  hideCTA?: boolean;
}

const Layout = ({ children, hideCTA = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">
        {children}
      </main>
      <Footer hideCTA={hideCTA} />
    </div>
  );
};

export default Layout;