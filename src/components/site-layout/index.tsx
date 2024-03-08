import React from "react";
import { Header } from "@/components/site-layout/header";
import { Footer } from "@/components/site-layout/footer";

export const SiteLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
