"use client";

import { NextUIProvider } from "@nextui-org/react";

export default function GlobalProviders({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider className={"flex h-screen overflow-hidden bg-background text-foreground"}>
      {children}
    </NextUIProvider>
  );
}