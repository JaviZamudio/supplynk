"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Divider } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";

import Header from "@/components/Header";
import BTAI from "@/components/charts/BTAI";
import LTAH from "@/components/charts/LTAH";
import DTAP from "@/components/charts/DTAP";

interface Request {
  nombre: string;
  unidad_Almacenada: number;
  precio: number;
  unidad_Vendida: number;
  porcentaje_Ganancia: number;
  clasificacion: {
    text: string;
    color: "warning" | "secondary" | "success" | undefined;
  }

}

const requests: {
  myRequests: Request[];
} = {
  myRequests: [
    {
      "nombre": "Martillo",
      "unidad_Almacenada": 100,
      "precio": 15.99,
      "unidad_Vendida": 70,
      "porcentaje_Ganancia": 25,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    },
    {
      "nombre": "Destornillador",
      "unidad_Almacenada": 150,
      "precio": 8.49,
      "unidad_Vendida": 120,
      "porcentaje_Ganancia": 20,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    },
    {
      "nombre": "Tornillo",
      "unidad_Almacenada": 1000,
      "precio": 0.25,
      "unidad_Vendida": 800,
      "porcentaje_Ganancia": 30,
      "clasificacion": {
        "text": "Clasificacion B",
        "color": "secondary"
      }
    },
    {
      "nombre": "Sierra eléctrica",
      "unidad_Almacenada": 20,
      "precio": 99.99,
      "unidad_Vendida": 15,
      "porcentaje_Ganancia": 35,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    },
    {
      "nombre": "Pintura blanca",
      "unidad_Almacenada": 200,
      "precio": 12.5,
      "unidad_Vendida": 150,
      "porcentaje_Ganancia": 20,
      "clasificacion": {
        "text": "Clasificacion C",
        "color": "warning"
      }
    },
    {
      "nombre": "Cinta métrica",
      "unidad_Almacenada": 80,
      "precio": 6.99,
      "unidad_Vendida": 60,
      "porcentaje_Ganancia": 25,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    }
  ]

}


export default function PageABC() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Header titulo="Analisis - ABC" />
      <section className="w-full border-y-2 flex-shrink-0 py-2 space-x-2"> {/*bar */}
        <Button
          variant="bordered"
          className=""
        >
          Now
        </Button>

        <Dropdown placement="bottom-start" showArrow className="rounded-none">
          <DropdownTrigger>
            <Button
              variant="bordered"
              endContent={
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              }
            >
              Time
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="rounded-none">
            <DropdownItem key="new">1 mes</DropdownItem>
            <DropdownItem key="copy">2 meses</DropdownItem>
            <DropdownItem key="edit">3 meses</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      <section className="grid grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">  {/* chars*/}
        <BTAI />
        <DTAP />
        <LTAH />
      </section>

      <Divider className="my-4" />

      <section className="p-5"> {/* Table */}
        <div className=" w-full flex mb-3 justify-between">
          <h1 className="text-2xl text-extrabold">Lista de productos</h1>
          <Button onPress={onOpen} color="success">
            <span className="material-symbols-outlined">
              add
            </span>
          </Button>
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">Ingresa Nuevo Producto</ModalHeader>
                  <ModalBody>
                    <Input
                      type="text"
                      label="Nombre"
                      placeholder="Nombre del producto"
                      labelPlacement="outside"
                    />

                    <Input
                      type="number"
                      label="Precio"
                      placeholder="0.00"
                      labelPlacement="outside"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">$</span>
                        </div>
                      }
                    />
                    <Input
                      type="number"
                      label="Unidad Almacenada"
                      placeholder="0"
                      labelPlacement="outside"
                    />
                    <Input
                      type="number"
                      label="Unidad Vendida"
                      placeholder="0"
                      labelPlacement="outside"
                    />
                    <Input
                      type="number"
                      label="% ganancias"
                      placeholder="0"
                      labelPlacement="outside"
                      startContent={
                        <div className="pointer-events-none flex items-center">
                          <span className="text-default-400 text-small">%</span>
                        </div>
                      }
                    />

                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onPress={onClose}>
                      Agregar Producto
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
        <Table aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Nombre</TableColumn>
            <TableColumn>Unidad Almacenada</TableColumn>
            <TableColumn>Precio</TableColumn>
            <TableColumn>Unidad Vendida</TableColumn>
            <TableColumn>% Ganancia</TableColumn>
            <TableColumn>Clasificacion</TableColumn>
          </TableHeader>
          <TableBody>
            {requests.myRequests.map((product, index) => (
              <TableRow key={index}>
                <TableCell>{product.nombre}</TableCell>
                <TableCell className="text-center">{product.unidad_Almacenada}</TableCell>
                <TableCell>{product.precio}</TableCell>
                <TableCell className="text-center">{product.unidad_Vendida}</TableCell>
                <TableCell className="text-center">{product.porcentaje_Ganancia}</TableCell>
                <TableCell>
                  <Chip color={product.clasificacion.color} variant="flat">
                    {product.clasificacion.text}
                  </Chip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </>
  )
}