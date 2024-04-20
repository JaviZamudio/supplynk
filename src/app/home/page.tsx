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
      <section className="w-full pt-6 px-5 flex justify-evenly flex-shrink-0 flex-wrap ">{/*cards */}
        <CardValue analysis="CP - promedio" value={value} />
        <CardValue analysis="CPK - promedio" value={value} />
        <CardValue analysis="Costo de inventario" value={value} />
      </section>
      <section className="w-full pt-6 px-5 flex justify-evenly flex-shrink-0 flex-wrap ">{/*chars */}
        <BTAI />
        <LTAH />
        <LTCAMEP />
      </section>
    </>


  )
}