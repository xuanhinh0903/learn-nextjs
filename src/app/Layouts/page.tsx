"use client";

import { Footer, Header } from "./components";

export default function LayoutRoot({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div style={{ minHeight: "calc(100vh - 150px)" }}>{children}</div>
      <Footer />
    </>
  );
}
