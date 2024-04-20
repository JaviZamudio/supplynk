"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Header from "@/components/Header";


export default function PageABC() {
  return (
    <>
      <Header titulo="Analisis - ABC" />
      <section className="w-full border-y-2 h-12"> {/*bar */}

        <Button
          variant="bordered"
          className=" h-full border-0 rounded-none border-x-2"
        >
          Open Menu
        </Button>

        <Dropdown placement="bottom-start" showArrow>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className=" h-full border-0 rounded-none border-r-2"
            >
              Open Menu
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">1 mes</DropdownItem>
            <DropdownItem key="copy">2 meses</DropdownItem>
            <DropdownItem key="edit">3 meses</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>
      <section>  {/* chars*/}

      </section>
      <section> {/* Table */}

      </section>
    </>
  )
}