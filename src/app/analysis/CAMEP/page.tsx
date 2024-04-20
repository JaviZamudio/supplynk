"use client"

import { Button, Divider } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Link } from "@nextui-org/react";


import Header from "@/components/Header"
import LTCAMEP from "@/components/charts/LTCAMEP"
import { useState } from "react";

interface Request {
    nombre: string;
    demandaAnual: number;
    cantidadPedida: number;
    costoPedido: number;
    precioProducto: number;
    porcientoPrecioCompra: number;
}

const requests: { myRequests: Request[] } = {
    myRequests: [
        {
            nombre: "Calderas",
            demandaAnual: 120,
            cantidadPedida: 10,
            costoPedido: 42000,
            precioProducto: 84000,
            porcientoPrecioCompra: 34,
        },
        {
            nombre: "Vigas de Metal",
            demandaAnual: 1200,
            cantidadPedida: 100,
            costoPedido: 3600,
            precioProducto: 8400,
            porcientoPrecioCompra: 24,
        },
        {
            nombre: "Barras de Metal",
            demandaAnual: 12000,
            cantidadPedida: 1000,
            costoPedido: 400,
            precioProducto: 920,
            porcientoPrecioCompra: 24,
        },
        {
            nombre: "Llaves",
            demandaAnual: 120000,
            cantidadPedida: 10000,
            costoPedido: 25,
            precioProducto: 56,
            porcientoPrecioCompra: 14,
        },
        {
            nombre: "Tenedores",
            demandaAnual: 120000,
            cantidadPedida: 10000,
            costoPedido: 16,
            precioProducto: 32,
            porcientoPrecioCompra: 10,
        },
        {
            nombre: "Cucharas",
            demandaAnual: 120000,
            cantidadPedida: 11000,
            costoPedido: 12,
            precioProducto: 28,
            porcientoPrecioCompra: 10,
        },
        {
            nombre: "Cuchillos",
            demandaAnual: 120000,
            cantidadPedida: 10000,
            costoPedido: 12,
            precioProducto: 24,
            porcientoPrecioCompra: 10,
        },
        // Puedes agregar más productos de ferretería aquí
    ],
};


export default function PageCAMEP() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Header titulo="CAMEP - Analisis" />

            <section className="flex justify-center  flex-shrink-0 my-8">  {/* chars*/}
                <LTCAMEP />
            </section>

            <Divider />

            <section className="p-5"> {/* Table */}
                <div className=" w-full flex mb-3 justify-between">
                    <h1 className="text-2xl text-extrabold">Lista de productos</h1>
                    <Button onPress={() => setIsOpen(true)} color="success">
                        <span className="material-symbols-outlined">
                            add
                        </span>
                    </Button>
                    <Modal
                        isOpen={isOpen}
                        onOpenChange={setIsOpen}
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
                                            label="Demanda Anual"
                                            placeholder="0"
                                            labelPlacement="outside"
                                        />

                                        <Input
                                            type="number"
                                            label="Cantidad Pedida"
                                            placeholder="0"
                                            labelPlacement="outside"
                                        />

                                        <Input
                                            type="number"
                                            label="Costo de Pedido"
                                            placeholder="0"
                                            labelPlacement="outside"
                                            startContent={
                                                <div className="pointer-events-none flex items-center">
                                                    <span className="text-default-400 text-small">$</span>
                                                </div>
                                            }
                                        />

                                        <Input
                                            type="number"
                                            label="Precio del Producto"
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
                                            label="% Precio de Compra"
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
                <Table aria-label="Lista de productos ferreteros">
                    <TableHeader>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Demanda Anual</TableColumn>
                        <TableColumn>Cantidad Pedida</TableColumn>
                        <TableColumn>Costo de Pedido</TableColumn>
                        <TableColumn>Precio del Producto</TableColumn>
                        <TableColumn>% Precio de Compra</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {requests.myRequests.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.nombre}</TableCell>
                                <TableCell className="text-center">{product.demandaAnual}</TableCell>
                                <TableCell className="text-center">{product.cantidadPedida}</TableCell>
                                <TableCell>{product.costoPedido}</TableCell>
                                <TableCell>{product.precioProducto}</TableCell>
                                <TableCell>{product.porcientoPrecioCompra}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </>

    )
}