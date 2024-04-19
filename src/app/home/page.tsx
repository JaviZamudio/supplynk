// PAGINA PARA EL DASHBOARD PRINCIPAL CON TODAS LAS GRAFIQUITAS

import Header from "@/components/Header"
import CardValue from "@/components/charts/CardValue"

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
      <section>{/*chars */}

      </section>
    </>


  )
}