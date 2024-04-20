"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import BTCP from "@/components/charts/BTCP";
import BTCPK from "@/components/charts/BTCPK";

export default function Home() {
  return (
    <main>
      <BTCP />
      <BTCPK />
      <Button color="primary">Click me</Button>
      <Button color="secondary">Click me</Button>
    </main>
  );
}
