import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import BackToTop from "../component/BackToTop";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      id="top"
      className="min-h-screen bg-[var(--color-surface-muted)] text-[var(--color-foreground)]"
    >
      <Header />
      <main className="">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
