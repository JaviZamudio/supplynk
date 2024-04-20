"use client"

import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";
import {
  Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue,
  Card, CardHeader, CardBody, CardFooter, Avatar, Link
} from "@nextui-org/react";
import { providerItems, users } from "@/constants/suppy";
import { Button } from "@nextui-org/react";


export default function IndividualSupplierPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const currentUser = users.find(user => user.id === parseInt(id));

  return (
    <>
      <Header titulo="Individual Supplier" />

      <Card className="w-full max-w-4xl p-4 mt-6 mx-auto">
        <CardHeader className="flex gap-5">
          {currentUser && ( // Verificar si se encontró un usuario
            <div key={currentUser.id} className="flex">
              <Avatar isBordered radius="full" size="lg" src={currentUser.avatar} className="mr-4" />
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold">{currentUser.name}</h1>
                <p>{currentUser.email}</p>
                <p>{currentUser.phone}</p>
              </div>
            </div>
          )}
        </CardHeader>
        <Divider orientation="vertical" />
        <CardBody className="flex py-6">
          <div className="flex">
            <div className="flex flex-col gap-1">
              <span className="material-symbols-outlined">work</span>
              <span className="material-symbols-outlined">location_on</span>
              <span className="material-symbols-outlined">link</span>
            </div>
            <div className="ml-4 flex flex-col">
              <p className="text-xl">{currentUser?.role}</p>
              <p className="text-xl">{currentUser?.address}</p>
              <p className="text-xl">{currentUser?.office + ' ' + currentUser?.cubicle}</p>
            </div>
          </div>
        </CardBody>

        <Divider />
        <CardFooter className="flex flex-row gap-8 justify-end px-8 pb-1" >
          <Button isIconOnly variant="light"><span className="material-symbols-outlined">videocam</span></Button>
          <Button isIconOnly variant="light"><span className="material-symbols-outlined">chat</span></Button>
          <Button isIconOnly variant="light"><span className="material-symbols-outlined">calendar_month</span></Button>
          <Button isIconOnly variant="light"><span className="material-symbols-outlined">mail</span></Button>
        </CardFooter>
      </Card>

      <Table aria-label="Example static collection table" className="mt-10" topContent={
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold">Inventario del Proveedor</h2>
            <span className="text-sm text-default-400">Descripción breve de las categorías del inventario del proveedor.</span>
          </div>
          <Button color="primary" variant="solid" size="md"
            as={Link}
            href="/documents/new"
            startContent={<span className="material-symbols-outlined !text-xl">add</span>}
          >
            Crear Solicitud
          </Button>
        </div>
      }>

        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Descripción</TableColumn>
          <TableColumn>Estado</TableColumn>
          <TableColumn>Precio Unitario</TableColumn>
        </TableHeader>
        <TableBody>
          {providerItems.map((providerItem) => (
            <TableRow key={providerItem.id} >
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-bold text-base capitalize">{providerItem.name}</p>
                  <span className="text-default-400 text-sm">{providerItem.description}</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">{providerItem.description}</p>
                </div>
              </TableCell>
              <TableCell>
                <Chip color={providerItem.status === "Available" ? "success" : "danger"} variant="flat">
                  {providerItem.status}
                </Chip>

              </TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  variant="flat"
                  size="sm"
                  as={Link}
                  startContent={<span className="material-symbols-outlined !text-xl">payments</span>}
                >
                  {providerItem.unitPrice}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  )
}