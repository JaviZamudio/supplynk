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
//['Barras de Metal', 'Vigas de Metal', 'Calderos', 'Llaves', 'Tenedores', 'Cucharas', 'Cuchillos']
const requests: { myRequests: Request[] } = {
    myRequests: [
        {
            nombre: "Barras de Metal",
            lote: 1,
            indiceLote: 12,
            indiceEstablecido: 12,
            valorCP: 1,
            valorCPK: 0.95 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Barras de Metal",
            lote: 2,
            indiceLote: 12,
            indiceEstablecido: 12,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Barras de Metal",
            lote: 3,
            indiceLote: 12,
            indiceEstablecido: 12,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Vigas de Metal",
            lote: 1,
            indiceLote: 8,
            indiceEstablecido: 10,
            valorCP: 0.8,
            valorCPK: 0.84 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Vigas de Metal",
            lote: 2,
            indiceLote: 10,
            indiceEstablecido: 10,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Vigas de Metal",
            lote: 3,
            indiceLote: 9,
            indiceEstablecido: 10,
            valorCP: 0.9,
            valorCPK: 0.9 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Calderos",
            lote: 1,
            indiceLote: 20,
            indiceEstablecido: 20,
            valorCP: 1,
            valorCPK: 0.9 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Calderos",
            lote: 2,
            indiceLote: 14,
            indiceEstablecido: 20,
            valorCP: 0.7,
            valorCPK: 0.65 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Calderos",
            lote: 2,
            indiceLote: 20,
            indiceEstablecido: 20,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Llaves",
            lote: 1,
            indiceLote: 27,
            indiceEstablecido: 30,
            valorCP: 0.9,
            valorCPK: 0.9 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Llaves",
            lote: 2,
            indiceLote: 30,
            indiceEstablecido: 30,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Llaves",
            lote: 3,
            indiceLote: 27,
            indiceEstablecido: 30,
            valorCP: 0.9,
            valorCPK: 0.9 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Tenedores",
            lote: 1,
            indiceLote: 7,
            indiceEstablecido: 10,
            valorCP: 0.7,
            valorCPK: 0.8 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Tenedores",
            lote: 2,
            indiceLote: 9,
            indiceEstablecido: 10,
            valorCP: 0.9,
            valorCPK: 0.86 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Tenedores",
            lote: 3,
            indiceLote: 8,
            indiceEstablecido: 10,
            valorCP: 0.8,
            valorCPK: 0.8 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cucharas",
            lote: 1,
            indiceLote: 10,
            indiceEstablecido: 10,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cucharas",
            lote: 2,
            indiceLote: 10,
            indiceEstablecido: 10,
            valorCP: 1,
            valorCPK: 0.9 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cucharas",
            lote: 3,
            indiceLote: 10,
            indiceEstablecido: 10,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cuchillos",
            lote: 1,
            indiceLote: 10,
            indiceEstablecido: 10,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cuchillos",
            lote: 2,
            indiceLote: 9,
            indiceEstablecido: 10,
            valorCP: 0.9,
            valorCPK: 0.85 // Cambiado de valorCPL a valorCPK
        },
        {
            nombre: "Cuchillos",
            lote: 3,
            indiceLote: 10,
            indiceEstablecido: 10,
            valorCP: 1,
            valorCPK: 1 // Cambiado de valorCPL a valorCPK
        }
    ]
};

export default function PageCPS() {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const CPPromedio: number = 0.9085
    const CPKromedio: number = 0.89

    return (

        <>
            <Header titulo="CP - CPK - Analisis" />
            <section className="grid grid-cols-2 p-8 gap-8 w-full max-w-6xl mx-auto">
                <BTCP />
                <BTCPK />
                <CardValue analysis="CP-Promedio" value={`${CPPromedio}`} />
                <CardValue analysis="CPK-Promedio" value={`${CPKromedio}`} />
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