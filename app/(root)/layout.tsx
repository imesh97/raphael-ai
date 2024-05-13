import MobileNav from "@/components/shared/MobileNav";
import SidebarNav from "@/components/shared/SidebarNav";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="root">
      <SidebarNav />
      <MobileNav />
      <div className="root-container">
        <div className="wrapper">{children}</div>
      </div>
    </main>
  );
};

export default Layout;
