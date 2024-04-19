"use client"
import { Button } from "@nextui-org/react";
import Image from "next/image";
//import { BTAI } from "@/components/charts/BTAI";
//import { LTAH } from "@/components/charts/";
import { LTCAMEP } from "@/components/charts/LTCAMEP";


export default function Home() {
  return (
    <main>

      {/*<BTAI />
      <LTAH /> */}
      <LTCAMEP />
      <Button color="primary">Click me</Button>
      <Button color="secondary">Click me</Button>
    </main>
  );
}
