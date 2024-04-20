"use client"

// PAGINA PARA EL DASHBOARD PRINCIPAL CON TODAS LAS GRAFIQUITAS

import Header from "@/components/Header"
import CardValue from "@/components/charts/CardValue"
import BTAI from "@/components/charts/BTAI";
import LTAH from "@/components/charts/LTAH";
import LTCAMEP from "@/components/charts/LTCAMEP";

export default function Hola() {
  const value: number = 1.5;
  return (
    <>
      <Header titulo="Dashboard" />
      {/* <section className="w-full pt-6 px-5 flex justify-evenly flex-shrink-0 flex-wrap ">
        <CardValue analysis="CP - promedio" value={value} />
        <CardValue analysis="CPK - promedio" value={value} />
        <CardValue analysis="Costo de inventario" value={value} />
      </section>
      <section className="w-full pt-6 px-5 flex justify-evenly flex-shrink-0 flex-wrap ">
        <BTAI />
        <LTAH />
        <LTCAMEP />
      </section> */}

      <section className="w-full mt-6 grid grid-cols-3 gap-4 px-8 content-stretch">
        <CardValue analysis="CP - promedio" value={`${value}K`} />
        <CardValue analysis="Costo de inventario" value={`${value}%`} />
        <CardValue analysis="CPK - promedio" value={`$${value}M`} />
      </section>
      <section className="w-full grid grid-cols-2 gap-8 content-stretch p-8">
        <BTAI />
        <LTAH />
        <LTCAMEP />
      </section>
    </>


  )
}