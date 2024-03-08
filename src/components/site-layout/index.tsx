import React from "react";
import { Header } from "@/components/site-layout/header";
import { Footer } from "@/components/site-layout/footer";

export const SiteLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={"min-h-dvh flex flex-col"}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
