"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Divider } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
import {useState} from "react"

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
      "nombre": "Barras de Metal",
      "unidad_Almacenada": 2000,
      "precio": 920,
      "unidad_Vendida": 1000,
      "porcentaje_Ganancia": 23,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    },
    {
      "nombre": "Vigas de Metal",
      "unidad_Almacenada": 300,
      "precio": 8400,
      "unidad_Vendida": 100,
      "porcentaje_Ganancia": 21,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    },
    {
      "nombre": "Calderas",
      "unidad_Almacenada": 20,
      "precio": 84000,
      "unidad_Vendida": 10,
      "porcentaje_Ganancia": 21,
      "clasificacion": {
        "text": "Clasificacion A",
        "color": "success"
      }
    },
    {
      "nombre": "Llaves",
      "unidad_Almacenada": 15000,
      "precio": 56,
      "unidad_Vendida": 10000,
      "porcentaje_Ganancia": 14,
      "clasificacion": {
        "text": "Clasificacion B",
        "color": "secondary"
      }
    },
    {
      "nombre": "Tenedores",
      "unidad_Almacenada": 15000,
      "precio": 32,
      "unidad_Vendida": 10000,
      "porcentaje_Ganancia": 8,
      "clasificacion": {
        "text": "Clasificacion B",
        "color": "secondary"
      }
    },
    {
      "nombre": "Cucharas",
      "unidad_Almacenada": 12500,
      "precio": 28,
      "unidad_Vendida": 10000,
      "porcentaje_Ganancia": 7,
      "clasificacion": {
        "text": "Clasificacion C",
        "color": "warning"
      }
    },
    {
      "nombre": "Cuchillos",
      "unidad_Almacenada": 12500,
      "precio": 24,
      "unidad_Vendida": 10000,
      "porcentaje_Ganancia": 6,
      "clasificacion": {
        "text": "Clasificacion C",
        "color": "warning"
      }
    }
  ]

}


export default function PageABC() {

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleOptionSelect = (option: string) => {
    switch (option) {
      case "1 mes":
        setSelectedOption("1 mes");
        break;
      case "2 meses":
        setSelectedOption("2 meses");
        break;
      case "3 meses":
        setSelectedOption("3 meses");
        break;
      default:
        setSelectedOption("");
    }
  };

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
              {selectedOption || "Time"}
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="rounded-none">
            <DropdownItem key="new" onClick={() => handleOptionSelect("1 mes")}>1 mes</DropdownItem>
            <DropdownItem key="copy" onClick={() => handleOptionSelect("2 meses")}>2 meses</DropdownItem>
            <DropdownItem key="edit" onClick={() => handleOptionSelect("3 meses")}>3 meses</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </section>

      <section className="grid grid-cols-2 gap-8 p-8 max-w-5xl mx-auto">  {/* chars*/}
        <BTAI caseData={selectedOption}/>
        <DTAP caseData={selectedOption}/>
        <LTAH caseData={selectedOption}/>
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