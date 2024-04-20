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
            nombre: "Martillo",
            demandaAnual: 1000,
            cantidadPedida: 500,
            costoPedido: 10,
            precioProducto: 20,
            porcientoPrecioCompra: 50,
        },
        {
            nombre: "Destornillador",
            demandaAnual: 1500,
            cantidadPedida: 800,
            costoPedido: 8,
            precioProducto: 15,
            porcientoPrecioCompra: 60,
        },
        {
            nombre: "Tornillo",
            demandaAnual: 2000,
            cantidadPedida: 1000,
            costoPedido: 5,
            precioProducto: 10,
            porcientoPrecioCompra: 50,
        },
        {
            nombre: "Sierra eléctrica",
            demandaAnual: 500,
            cantidadPedida: 250,
            costoPedido: 30,
            precioProducto: 100,
            porcientoPrecioCompra: 70,
        },
        {
            nombre: "Pintura blanca",
            demandaAnual: 1200,
            cantidadPedida: 600,
            costoPedido: 15,
            precioProducto: 25,
            porcientoPrecioCompra: 60,
        },
        {
            nombre: "Cinta métrica",
            demandaAnual: 800,
            cantidadPedida: 400,
            costoPedido: 5,
            precioProducto: 10,
            porcientoPrecioCompra: 50,
        },
        {
            nombre: "Llave inglesa",
            demandaAnual: 600,
            cantidadPedida: 300,
            costoPedido: 12,
            precioProducto: 18,
            porcientoPrecioCompra: 65,
        },
        {
            nombre: "Broca de metal",
            demandaAnual: 700,
            cantidadPedida: 350,
            costoPedido: 6,
            precioProducto: 8,
            porcientoPrecioCompra: 75,
        },
        {
            nombre: "Pegamento multiusos",
            demandaAnual: 900,
            cantidadPedida: 450,
            costoPedido: 7,
            precioProducto: 12,
            porcientoPrecioCompra: 58,
        },
        {
            nombre: "Nivel de burbuja",
            demandaAnual: 400,
            cantidadPedida: 200,
            costoPedido: 9,
            precioProducto: 15,
            porcientoPrecioCompra: 60,
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