"use client"
import { Tabs, Tab, Card, Input, CardBody, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow, Button, Modal, ModalContent, ModalHeader, ModalBody } from "@nextui-org/react";

import Header from "@/components/Header"
import { useState } from "react";

export default function PageData() {
    return (
        <>
            <Header titulo="Datos" />
            <section>
                <div className="flex w-full flex-col">
                    <Tabs aria-label="Options">
                        {/*Suministros*/}
                        <Tab key="photos" title="Suministros">
                            <Card>
                                <CardBody>
                                    <Table topContent={
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold">Formulario de Inicialización de Suministros</h2>
                                                <span className="text-sm text-default-400">Inicialización de Datos Masivos para Análisis de Experiencia del Usuario.</span>
                                            </div>
                                            <NewRegisterModal />
                                        </div>
                                    }>
                                        <TableHeader>
                                            <TableColumn>ID</TableColumn>
                                            <TableColumn>Name</TableColumn>
                                            <TableColumn>Description</TableColumn>
                                            <TableColumn>Stock</TableColumn>
                                            <TableColumn>Classification</TableColumn>
                                            <TableColumn>Product</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>1</TableCell>
                                                <TableCell>Cinta</TableCell>
                                                <TableCell>Cinta para Tubos</TableCell>
                                                <TableCell>13</TableCell>
                                                <TableCell>Suministro</TableCell>
                                                <TableCell>Cinta para tubos de aislar</TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>2</TableCell>
                                                <TableCell>Tornillo</TableCell>
                                                <TableCell>Tornillo Phillips 2.5x20mm</TableCell>
                                                <TableCell>25</TableCell>
                                                <TableCell>Hardware</TableCell>
                                                <TableCell>Tornillo para fijación de paneles</TableCell>
                                            </TableRow>

                                            <TableRow key="3">
                                                <TableCell>3</TableCell>
                                                <TableCell>Llave</TableCell>
                                                <TableCell>Llave ajustable de 8 pulgadas</TableCell>
                                                <TableCell>8</TableCell>
                                                <TableCell>Herramientas</TableCell>
                                                <TableCell>Llave para múltiples usos</TableCell>
                                            </TableRow>

                                            <TableRow key="4">
                                                <TableCell>4</TableCell>
                                                <TableCell>Pegamento</TableCell>
                                                <TableCell>Pegamento para madera de secado rápido</TableCell>
                                                <TableCell>15</TableCell>
                                                <TableCell>Adhesivos</TableCell>
                                                <TableCell>Pegamento resistente al agua</TableCell>
                                            </TableRow>

                                            <TableRow key="5">
                                                <TableCell>5</TableCell>
                                                <TableCell>Cable</TableCell>
                                                <TableCell>Cable HDMI de alta velocidad</TableCell>
                                                <TableCell>20</TableCell>
                                                <TableCell>Electrónica</TableCell>
                                                <TableCell>Cable para conectar dispositivos multimedia</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                        {/*Suministros*/}

                        {/*Productos*/}
                        <Tab key="music" title="Productos">
                            <Card>
                                <CardBody>
                                    <Table topContent={
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold">Formulario de Inicialización para Productos</h2>
                                                <span className="text-sm text-default-400">Inicialización de Datos Masivos para Análisis de Experiencia del Usuario.</span>
                                            </div>
                                            <NewRegisterModal />
                                        </div>
                                    }>
                                        <TableHeader>
                                            <TableColumn>ID</TableColumn>
                                            <TableColumn>Name</TableColumn>
                                            <TableColumn>Description</TableColumn>
                                            <TableColumn>Classification</TableColumn>
                                            <TableColumn>Stock</TableColumn>
                                            <TableColumn>Price</TableColumn>
                                            <TableColumn>User</TableColumn>
                                            <TableColumn>Supplies Needed</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>1</TableCell>
                                                <TableCell>Cinta</TableCell>
                                                <TableCell>Cinta para Tubos</TableCell>
                                                <TableCell>Suministro</TableCell>
                                                <TableCell>13</TableCell>
                                                <TableCell>19.99</TableCell>
                                                <TableCell>Adrian Zavaleta</TableCell>
                                                <TableCell>Tubos de aislamiento, Tijeras</TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>2</TableCell>
                                                <TableCell>Tornillo</TableCell>
                                                <TableCell>Tornillo Phillips 2.5x20mm</TableCell>
                                                <TableCell>Hardware</TableCell>
                                                <TableCell>25</TableCell>
                                                <TableCell>2.99</TableCell>
                                                <TableCell>Zoey Lang</TableCell>
                                                <TableCell>Destornillador, Llave inglesa</TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>3</TableCell>
                                                <TableCell>Llave</TableCell>
                                                <TableCell>Llave ajustable de 8 pulgadas</TableCell>
                                                <TableCell>Herramientas</TableCell>
                                                <TableCell>8</TableCell>
                                                <TableCell>14.99</TableCell>
                                                <TableCell>Emiliano Aquetzalli</TableCell>
                                                <TableCell>Ninguno</TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>4</TableCell>
                                                <TableCell>Pegamento</TableCell>
                                                <TableCell>Pegamento para madera de secado rápido</TableCell>
                                                <TableCell>Adhesivos</TableCell>
                                                <TableCell>15</TableCell>
                                                <TableCell>5.99</TableCell>
                                                <TableCell>Jonathan Herrera</TableCell>
                                                <TableCell>Ninguno</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                        {/*Productos*/}

                        {/*Ofertas de Suministros*/}
                        <Tab key="games" title="Ofertas de Suministros">
                            <Card>
                                <CardBody>
                                    <Table topContent={
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold">Formulario de Inicialización de Ofertas Suministros</h2>
                                                <span className="text-sm text-default-400">Inicialización de Datos Masivos para Análisis de Experiencia del Usuario.</span>
                                            </div>
                                            <NewRegisterModal />
                                        </div>
                                    }>
                                        <TableHeader>
                                            <TableColumn>Name</TableColumn>
                                            <TableColumn>Description</TableColumn>
                                            <TableColumn>Price</TableColumn>
                                            <TableColumn>Origin Port</TableColumn>
                                            <TableColumn>Company</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>Cinta</TableCell>
                                                <TableCell>Cinta para Tubos</TableCell>
                                                <TableCell>19.99</TableCell>
                                                <TableCell>Port of Los Angeles</TableCell>
                                                <TableCell>Acme Corporation</TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>Tornillo</TableCell>
                                                <TableCell>Tornillo Phillips 2.5x20mm</TableCell>
                                                <TableCell>2.99</TableCell>
                                                <TableCell>Port of Miami</TableCell>
                                                <TableCell>Bolt Industries</TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>Llave</TableCell>
                                                <TableCell>Llave ajustable de 8 pulgadas</TableCell>
                                                <TableCell>14.99</TableCell>
                                                <TableCell>Port of Seattle</TableCell>
                                                <TableCell>ToolMaster Inc.</TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Pegamento</TableCell>
                                                <TableCell>Pegamento para madera de secado rápido</TableCell>
                                                <TableCell>5.99</TableCell>
                                                <TableCell>Port of New York</TableCell>
                                                <TableCell>GlueTech Ltd.</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                        {/*Ofertas de Suministros*/}

                        {/*Compañias*/}
                        <Tab key="videos" title="Compañias">
                            <Card>
                                <CardBody>
                                    <Table topContent={
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h2 className="text-xl font-bold">Formulario de Inicialización de Información de las Compañías</h2>
                                                <span className="text-sm text-default-400">Inicialización de Datos Masivos para Análisis de Experiencia del Usuario.</span>
                                            </div>
                                            <NewRegisterModal />
                                        </div>
                                    }>
                                        <TableHeader>
                                            <TableColumn>Name</TableColumn>
                                            <TableColumn>Description</TableColumn>
                                            <TableColumn>Location</TableColumn>
                                            <TableColumn>Supply List</TableColumn>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow key="1">
                                                <TableCell>Cinta adhesiva</TableCell>
                                                <TableCell>Cinta adhesiva de doble cara para uso en interiores y exteriores</TableCell>
                                                <TableCell>Almacén A</TableCell>
                                                <TableCell>Cinta adhesiva, Tijeras</TableCell>
                                            </TableRow>
                                            <TableRow key="2">
                                                <TableCell>Guantes de seguridad</TableCell>
                                                <TableCell>Guantes de seguridad resistentes al corte para uso industrial</TableCell>
                                                <TableCell>Almacén B</TableCell>
                                                <TableCell>Guantes de seguridad, Cuchillo de seguridad</TableCell>
                                            </TableRow>
                                            <TableRow key="3">
                                                <TableCell>Máscaras faciales</TableCell>
                                                <TableCell>Máscaras faciales desechables de 3 capas</TableCell>
                                                <TableCell>Almacén C</TableCell>
                                                <TableCell>Máscaras faciales, Gel desinfectante</TableCell>
                                            </TableRow>
                                            <TableRow key="4">
                                                <TableCell>Botas de trabajo</TableCell>
                                                <TableCell>Botas de trabajo con punta de acero y suela antideslizante</TableCell>
                                                <TableCell>Almacén D</TableCell>
                                                <TableCell>Botas de trabajo, Protector de punta de acero</TableCell>
                                            </TableRow>

                                        </TableBody>
                                    </Table>
                                </CardBody>
                            </Card>
                        </Tab>
                        {/*Compañias*/}
                    </Tabs>
                </div>
            </section>
        </>
    )
}


function NewRegisterModal() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className="flex flex-row space-between p-6">
                <Button color="secondary" variant="bordered" size="md"
                    startContent={<span className="material-symbols-outlined !text-xl">upload_file</span>}
                    onPress={() => alert("Informe Descargado Correctamente.")}
                >
                    Importar
                </Button>
                <Button color="secondary" variant="solid" size="md" className="ml-4"
                    startContent={<span className="material-symbols-outlined !text-xl">download</span>}
                    onPress={() => alert("Informe Descargado Correctamente.")}
                >
                    Descargar
                </Button>
                <Button color="primary" variant="solid" size="md" className="ml-4"
                    onClick={() => setOpen(true)}
                    startContent={<span className="material-symbols-outlined !text-xl">add</span>}
                >
                    Nuevo Registro
                </Button>

            </div>


            <Modal isOpen={open} onClose={() => setOpen(false)}>
                <ModalContent>
                    <ModalHeader>Crea un nuevo registro</ModalHeader>
                    <ModalBody >
                        <form className="mb-2">
                            <Input label="ID" size="sm" variant="bordered" className="!mb-3" />
                            <Input label="Name" size="sm" variant="bordered" className="!mb-3" />
                            <Input label="Description" size="sm" variant="bordered" className="!mb-3" />
                            <Input label="Stock" size="sm" variant="bordered" className="!mb-3" />
                            <Input label="Classification" size="sm" variant="bordered" className="!mb-3" />
                            <Input label="Product" size="sm" variant="bordered" className="!mb-3" />

                            <Button color="primary" variant="solid" size="md" type="submit" className="mt-4">Crear</Button>


                        </form>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}