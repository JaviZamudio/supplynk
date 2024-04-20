"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
import LTAFP from "@/components/charts/LTAFP";


export default function Home() {
  return (
    <main>
      <LTAFP />
      <Button color="primary">Click me</Button>
      <Button color="secondary">Click me</Button>
    </main>
  );
}
