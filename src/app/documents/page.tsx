"use client"

import Header from "@/components/Header";
import { Button, Card, CardBody, CardHeader, Chip, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs, User } from "@nextui-org/react";
import { useState } from "react";

interface Request {
  date: string;
  name: string;
  provider: string;
  status: {
    text: string;
    color: "warning" | "primary" | "success" | "default" | "secondary" | "danger" | undefined;
  };
}

const requests: {
  myRequests: Request[];
  shared: Request[]; // Replace 'any' with the appropriate type if available
} = {
  myRequests: [
    {
      date: "2021-10-10",
      name: "Compra de tornillos",
      provider: "Tony Reichert",
      status: {
        text: "Solicitud",
        color: "primary",
      },
    },
    {
      date: "2021-10-20",
      name: "Orden de compra",
      provider: "Jane Smith",
      status: {
        text: "Orden de Compra",
        color: "success",
      },
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de tornillos",
      provider: "John Doe",
      status: {
        text: "Cotizacion",
        color: "warning",
      },
    },
    {
      date: "2021-10-25",
      name: "Factura de compra",
      provider: "Mike Johnson",
      status: {
        text: "Factura",
        color: "warning",
      },
    },
    {
      date: "2021-10-30",
      name: "Orden de compra",
      provider: "Sarah Williams",
      status: {
        text: "Aprobado",
        color: "success",
      },
    },
    {
      date: "2021-11-05",
      name: "Orden de compra",
      provider: "Alex Brown",
      status: {
        text: "Rechazado",
        color: "danger",
      },
    }
  ],
  shared: []
};

export default function DocumentsPage() {
  return (
    <>
      <Header titulo="Documentos" />

      <span className="my-2">
        Aqui puedes ver tus solicitudes, y las que te han hecho.
      </span>

      <Divider className="my-4" />

      <div className="flex w-full flex-col">
        <Tabs aria-label="Options">
          <Tab key="myRequests" title="Mis Solicitudes">
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>FECHA</TableColumn>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>PROVEEDOR</TableColumn>
                <TableColumn>ESTADO</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {requests.myRequests.map((document, index) => (
                  <TableRow key={index}>
                    <TableCell>{document.date}</TableCell>
                    <TableCell>{document.name}</TableCell>
                    <TableCell>{document.provider}</TableCell>
                    <TableCell>
                      <Chip color={document.status.color} variant="flat">
                        {document.status.text}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <RequestModal />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Tab>

          <Tab key="shared" title="Compartidos">
            <Table aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
                <TableColumn>STATUS</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell>Tony Reichert</TableCell>
                  <TableCell>CEO</TableCell>
                  <TableCell>Active</TableCell>
                </TableRow>
                <TableRow key="2">
                  <TableCell>Zoey Lang</TableCell>
                  <TableCell>Technical Lead</TableCell>
                  <TableCell>Paused</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

function RequestModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        color="secondary"
        variant="solid"
        size="sm"
        startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
        onPress={() => setIsOpen(true)}
      >
        Ver
      </Button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="4xl">
        <ModalContent>
          <ModalHeader>
            Detalles de la solicitud
          </ModalHeader>
          <ModalFooter className="flex flex-col">
            {/* Process */}
            <div>
              <h2 className="text-lg font-bold">Documentos</h2>
              <div>
                <h3 className="text-base font-medium mt-4">1. Solicitud</h3>
                <Card className="w-fit mt-2">
                  <CardBody className="flex flex-row items-center justify-between gap-8">
                    <div className="flex flex-col space-y-0">
                      <span>Documento de solicitud</span>
                      <span className="text-xs opacity-60">19/10/2021</span>
                    </div>

                    <div className="flex flex-row space-x-2">
                      <Button color="primary" variant="solid" size="sm"
                        startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
                      >
                        Ver
                      </Button>
                      <Button color="secondary" variant="solid" size="sm"
                        startContent={<span className="material-symbols-outlined !text-xl">download</span>}
                      >
                        Descargar
                      </Button>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>

            {/* Actions */}

            {/* Comments */}
            <div className="mt-4 space-y-4">
              <h2 className="text-lg font-bold">Comentarios</h2>

              <form>
                <Input label="Comentario" placeholder="Escribe un comentario..."
                  endContent={<Button isIconOnly><span className="material-symbols-outlined !text-xl">send</span></Button>}
                />
              </form>
              <div>
                <Card>
                  <CardHeader className="flex items-center justify-between">
                    <User name="Tony Reichert" avatarProps={{ src: "https://i.pravatar.cc/150?u=a042581f4e29026024d" }} description={"19/10/2021"} />
                    <Chip color="primary" variant="flat">Solicitaud de Cambios</Chip>
                  </CardHeader>
                  <CardBody>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quasi eligendi aperiam molestias laudantium laborum veritatis quod est, fugit autem tempore ratione saepe tempora inventore excepturi quisquam deleniti, pariatur natus.</p>
                  </CardBody>
                </Card>
              </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal >
    </>
  );
}