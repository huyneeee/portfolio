import React from "react";
import { Header } from "@/components/layout/Header";
import Head from "next/head";
export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  console.log("children", children);

  return (
    <>
      <Head>
        <title>HuyNee | Frontend Developer</title>
        <meta name="description" content="Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Header /> */}
      <div className="overflow-hidden">{children}</div>
    </>
  );
};
