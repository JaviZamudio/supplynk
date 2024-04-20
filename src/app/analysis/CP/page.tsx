"use client"

import { Button } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input, Link } from "@nextui-org/react"

import Header from "@/components/Header";
import BTCP from "@/components/charts/BTCP";
import BTCPK from "@/components/charts/BTCPK";
import CardValue from "@/components/charts/CardValue";

interface Request {
    nombre: string;
    lote: number;
    indiceLote: number;
    indiceEstablecido: number;
    valorCP: number;
    valorCPK: number;
}

const requests: { myRequests: Request[] } = {
    myRequests: [
        {
            nombre: "Martillo",
            lote: 1,
            indiceLote: 10,
            indiceEstablecido: 5,
            valorCP: 15.99,
            valorCPK: 12.99 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Destornillador",
            lote: 2,
            indiceLote: 8,
            indiceEstablecido: 4,
            valorCP: 8.49,
            valorCPK: 7.99 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Tornillo",
            lote: 3,
            indiceLote: 12,
            indiceEstablecido: 6,
            valorCP: 0.25,
            valorCPK: 0.20 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Sierra eléctrica",
            lote: 4,
            indiceLote: 15,
            indiceEstablecido: 7,
            valorCP: 99.99,
            valorCPK: 89.99 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Pintura blanca",
            lote: 5,
            indiceLote: 20,
            indiceEstablecido: 10,
            valorCP: 12.5,
            valorCPK: 10.99 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cinta métrica",
            lote: 6,
            indiceLote: 9,
            indiceEstablecido: 3,
            valorCP: 6.99,
            valorCPK: 5.99 // Cambiado de valorCPL a valorCPK
        }
    ]
};

export default function PageCPS() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const value: number = 1.6

    return (

        <>
            <Header titulo="CP - CPK - Analisis" />
            <section className="grid grid-cols-2 p-8 gap-8 w-full max-w-6xl mx-auto">
                <BTCP />
                <BTCPK />
                <CardValue analysis="CP" value={`${value}k`} />
                <CardValue analysis="CPK" value={`$${value}M`} />
            </section>
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
                                            label="Lote"
                                            placeholder="0"
                                            labelPlacement="outside"
                                        />

                                        <Input
                                            type="number"
                                            label="Índice de Lote"
                                            placeholder="0"
                                            labelPlacement="outside"
                                        />

                                        <Input
                                            type="number"
                                            label="Índice Establecido"
                                            placeholder="0"
                                            labelPlacement="outside"
                                        />

                                        <Input
                                            type="number"
                                            label="Desviacion Estandar"
                                            placeholder="0"
                                            labelPlacement="outside"
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
                        <TableColumn>Lote</TableColumn>
                        <TableColumn> Indice Lote </TableColumn>
                        <TableColumn>Índice Establecido</TableColumn>
                        <TableColumn>Valor CP</TableColumn>
                        <TableColumn>Valor CPK</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {requests.myRequests.map((product, index) => (
                            <TableRow key={index}>
                                <TableCell>{product.nombre}</TableCell>
                                <TableCell className="text-center">{product.lote}</TableCell>
                                <TableCell className="text-center">{product.indiceLote}</TableCell>
                                <TableCell className="text-center">{product.indiceEstablecido}</TableCell>
                                <TableCell>{product.valorCP}</TableCell>
                                <TableCell>{product.valorCPK}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </section>
        </>
    );
}