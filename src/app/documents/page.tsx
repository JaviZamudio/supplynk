"use client"

import Header from "@/components/Header";
import { Button, Card, CardBody, CardHeader, Chip, Divider, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Tab, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, Tabs, User } from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";

interface Document {
  stage: "Solicitud" | "Cotizacion" | "Orden de Compra" | "Factura";
  title: string;
  date: string;
  status: {
    text: "Solicitud" | "Aprobado" | "Rechazado";
    color: "warning" | "primary" | "success" | "default" | "secondary" | "danger" | undefined;
  };
}

interface Request {
  date: string;
  name: string;
  provider: string;
  stage: {
    text: "Solicitud" | "Cotizacion" | "Orden de Compra" | "Factura" | "Aprobado" | "Rechazado";
    color: "warning" | "primary" | "success" | "default" | "secondary" | "danger" | undefined;
  };
  documents: Document[];
}

const requests: { myRequests: Request[]; shared: Request[]; } = {
  myRequests: [
    {
      date: "2021-10-20",
      name: "Solicitud de tornillos",
      provider: "Jane Smith",
      stage: {
        text: "Solicitud",
        color: "primary",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Tornillos",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Placas",
      provider: "John Doe",
      stage: {
        text: "Cotizacion",
        color: "warning",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Placas",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Placas Varios",
          date: "2021-10-15",
          status: {
            text: "Solicitud",
            color: "primary",
          }
        }
      ]
    },

    {
      date: "2021-10-15",
      name: "Cotizacion de Cables",
      provider: "John Doe",
      stage: {
        text: "Rechazado",
        color: "danger",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Cables",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Cables Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Cables",
      provider: "John Doe",
      stage: {
        text: "Cotizacion",
        color: "warning",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Cables",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Cables Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Cables Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        }
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Varillas",
      provider: "John Doe",
      stage: {
        text: "Orden de Compra",
        color: "success",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Varillas",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Varillas Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Varillas Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Orden de Compra",
          title: "Orden de Compra de Varillas",
          date: "2021-10-20",
          status: {
            text: "Solicitud",
            color: "primary",
          }
        }
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Tubos",
      provider: "John Doe",
      stage: {
        text: "Factura",
        color: "success",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Tubos",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Tubos Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Tubos Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Orden de Compra",
          title: "Orden de Compra de Tubos",
          date: "2021-10-20",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Factura",
          title: "Factura de Tubos",
          date: "2021-10-25",
          status: {
            text: "Solicitud",
            color: "primary",
          }
        },
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Tubos",
      provider: "John Doe",
      stage: {
        text: "Aprobado",
        color: "success",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Tubos",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Tubos Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Tubos Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Orden de Compra",
          title: "Orden de Compra de Tubos",
          date: "2021-10-20",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Factura",
          title: "Factura de Tubos",
          date: "2021-10-25",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
      ]
    },

  ],
  shared: [
    {
      date: "2021-10-15",
      name: "Cotizacion de Placas",
      provider: "John Doe",
      stage: {
        text: "Cotizacion",
        color: "warning",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Placas",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Placas Varios",
          date: "2021-10-15",
          status: {
            text: "Solicitud",
            color: "primary",
          }
        }
      ]
    },
    {
      date: "2021-10-20",
      name: "Solicitud de tornillos",
      provider: "Jane Smith",
      stage: {
        text: "Solicitud",
        color: "primary",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Tornillos",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
      ]
    },

    {
      date: "2021-10-15",
      name: "Cotizacion de Cables",
      provider: "John Doe",
      stage: {
        text: "Cotizacion",
        color: "warning",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Cables",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Cables Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Cables Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        }
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Varillas",
      provider: "John Doe",
      stage: {
        text: "Orden de Compra",
        color: "success",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Varillas",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Varillas Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Varillas Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Orden de Compra",
          title: "Orden de Compra de Varillas",
          date: "2021-10-20",
          status: {
            text: "Solicitud",
            color: "primary",
          }
        }
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Cables",
      provider: "John Doe",
      stage: {
        text: "Rechazado",
        color: "danger",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Cables",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Cables Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
      ]
    },
    {
      date: "2021-10-15",
      name: "Cotizacion de Tubos",
      provider: "John Doe",
      stage: {
        text: "Factura",
        color: "success",
      },
      documents: [
        {
          stage: "Solicitud",
          title: "Solicitud de Tubos",
          date: "2021-10-10",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Tubos Varios",
          date: "2021-10-15",
          status: {
            text: "Rechazado",
            color: "danger",
          }
        },
        {
          stage: "Cotizacion",
          title: "Cotizacion de Tubos Varios",
          date: "2021-10-15",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Orden de Compra",
          title: "Orden de Compra de Tubos",
          date: "2021-10-20",
          status: {
            text: "Aprobado",
            color: "success",
          }
        },
        {
          stage: "Factura",
          title: "Factura de Tubos",
          date: "2021-10-25",
          status: {
            text: "Solicitud",
            color: "primary",
          }
        },
      ]
    },


  ]
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
            <Table aria-label="Example static collection table"
              topContent={
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Mis Solicitudes</h2>
                    <span className="text-sm text-default-400">Aqui puedes ver las solicitudes que has creado.</span>
                  </div>
                  <Button color="primary" variant="solid" size="md"
                    as={Link}
                    href="/documents/new"
                    startContent={<span className="material-symbols-outlined !text-xl">add</span>}
                  >
                    Crear Solicitud
                  </Button>
                </div>
              }
            >
              <TableHeader>
                <TableColumn>FECHA</TableColumn>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>PROVEEDOR</TableColumn>
                <TableColumn>ESTADO</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {requests.myRequests.map((request, index) => (
                  <TableRow key={index}>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.provider}</TableCell>
                    <TableCell>
                      <Chip color={request.stage.color} variant="flat">
                        {request.stage.text}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <MyRequestModal request={request} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Tab>

          <Tab key="shared" title="Solicitudes Para Mi">
            <Table aria-label="Example static collection table"
              topContent={
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold">Solicitudes Para Mi</h2>
                    <span className="text-sm text-default-400">Solicitudes que te han solicitado tus colaboradores.</span>
                  </div>
                </div>
              }
            >
              <TableHeader>
                <TableColumn>FECHA</TableColumn>
                <TableColumn>NOMBRE</TableColumn>
                <TableColumn>PROVEEDOR</TableColumn>
                <TableColumn>ESTADO</TableColumn>
                <TableColumn>ACCIONES</TableColumn>
              </TableHeader>
              <TableBody>
                {requests.shared.map((request, index) => (
                  <TableRow key={index}>
                    <TableCell>{request.date}</TableCell>
                    <TableCell>{request.name}</TableCell>
                    <TableCell>{request.provider}</TableCell>
                    <TableCell>
                      <Chip color={request.stage.color} variant="flat">
                        {request.stage.text}
                      </Chip>
                    </TableCell>
                    <TableCell>
                      <MyRequestModal request={request} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

function MyRequestModal({ request }: { request: Request }) {
  const [isOpen, setIsOpen] = useState(false);

  const currentStage = request.documents[request.documents.length - 1].stage;
  const isRejected = request.documents.some(doc => doc.stage === currentStage && doc.status.text === "Rechazado");
  const solicitud = request.documents.find(doc => doc.stage === "Solicitud");
  const cotizaciones = request.documents.filter(doc => doc.stage === "Cotizacion");
  const ordenes = request.documents.filter(doc => doc.stage === "Orden de Compra");
  const facturas = request.documents.filter(doc => doc.stage === "Factura");

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

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="4xl" scrollBehavior="outside">
        <ModalContent>
          <ModalHeader>
            <h2 className="text-2xl font-bold flex items-center gap-4">{request.name} <Chip color={request.stage.color} variant="flat">{request.stage.text}</Chip></h2>
          </ModalHeader>
          <ModalBody className="flex flex-col">
            {/* Process */}
            <div>
              <h2 className="text-lg font-bold">Documentos</h2>

              <div className="flex flex-col gap-4">

                <div>
                  <h3 className="text-base font-medium mt-4">1. Solicitud</h3>
                  {request.documents.filter(doc => doc.stage === "Solicitud").map((doc, index) => (
                    <DocumentCard key={index} title={doc.title} date={doc.date} status={doc.status} />
                  ))}
                </div>

                {solicitud && (
                  <div>
                    <h3 className="text-base font-medium mt-4">2. Cotizacion</h3>

                    {cotizaciones.map((doc, index) => (
                      <DocumentCard key={index} title={doc.title} date={doc.date} status={doc.status} actions={doc.status.text === "Solicitud"} />
                    ))}

                    {cotizaciones.length === 0 && (
                      <div className="text-sm text-default-400 py-8 px-12">
                        El Proveedor debe Generar la cotizacion para poder continuar con el proceso.
                      </div>
                    )}
                  </div>
                )}

                {cotizaciones.some(doc => doc.status.text === "Aprobado") && (
                  <div>
                    <h3 className="text-base font-medium mt-4">3. Orden de Compra</h3>

                    {ordenes.map((doc, index) => (
                      <DocumentCard key={index} title={doc.title} date={doc.date} status={doc.status} />
                    ))}

                    {(ordenes.length === 0 || ordenes[ordenes.length - 1].status.text === "Rechazado") && (
                      <div className="flex flex-col items-start py-8  px-12">
                        <span className="text-sm text-default-400 ">
                          Ahora debes Generar una orden de compra para continuar con el proceso.
                        </span>

                        <Button color="primary" variant="solid" size="md" className="mt-4"
                          startContent={<span className="material-symbols-outlined !text-xl">add</span>}
                        >
                          Crear Orden de Compra
                        </Button>
                      </div>
                    )}

                    {ordenes[ordenes.length - 1]?.status.text === "Solicitud" && (
                      <div className="flex flex-col items-start py-8  px-12">
                        <span className="text-sm text-default-400 ">
                          El Proveedor debe aceptar la orden de compra para poder continuar con el proceso.
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {ordenes.some(doc => doc.status.text === "Aprobado") && (
                  <div>
                    <h3 className="text-base font-medium mt-4">4. Factura</h3>
                    {facturas.map((doc, index) => (
                      <DocumentCard key={index} title={doc.title} date={doc.date} status={doc.status} actions={doc.status.text === "Solicitud"} />
                    ))}
                  </div>
                )}


                {/* <div>
                  <h3 className="text-base font-medium mt-4">2. Cotizacion</h3>
                  <DocumentCard title="Cotizacion de Tornillos Varios" date="2021-10-14" status={{ text: "Rechazado", color: "danger" }} />
                  <DocumentCard title="Cotizacion de Tornillos Varios" date="2021-10-15" status={{ text: "Aprobada", color: "success" }} />
                </div>
                <div>
                  <h3 className="text-base font-medium mt-4">3. Orden de Compra</h3>
                  <DocumentCard title="Orden de Compra de Tornillos" date="2021-10-20" status={{ text: "Solicitud", color: "primary" }} />
                </div>
                <div>
                  <h3 className="text-base font-medium mt-4">4. Factura</h3>

                  <div className="text-sm text-default-400 py-8 px-12">
                    El Proveedor debe aceptar la orden de compra para poder generar la factura.
                  </div>
                </div> */}
              </div>
            </div>

          </ModalBody>
          <ModalFooter>
            {/* Comments */}
            <div className="mt-4 space-y-4 pb-4">
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

function DocumentCard({ title, date, status, actions }: { title: string, date: string, status: { text: string, color: "warning" | "primary" | "success" | "default" | "secondary" | "danger" | undefined }, actions?: boolean }) {
  return (
    <Card className="max-w-2xl mt-2">
      <CardBody className="flex flex-row items-center justify-between gap-8">
        <div className="flex flex-col space-y-0">
          <span className="flex gap-4">{title} <Chip size="sm" color={status.color} variant="flat">{status.text}</Chip></span>
          <span className="text-xs opacity-60">{date}</span>
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
          <Button isIconOnly color="default" variant="solid" size="sm">
            <span className="material-symbols-outlined !text-xl">more_vert</span>
          </Button>
        </div>
      </CardBody>


      {actions && (
        <>
          <Divider />
          <CardBody className="flex flex-row justify-end items-center gap-4">
            <span className="text-sm text-default-400 mr-auto">Debes Aprobar o Rechazar el documento</span>
            <Button color="primary" variant="solid" size="md" startContent={<span className="material-symbols-outlined !text-xl">thumb_up</span>}>Aprobar</Button>
            <Button color="danger" variant="solid" size="md" startContent={<span className="material-symbols-outlined !text-xl">thumb_down</span>}>Rechazar</Button>
          </CardBody>
        </>
      )}
    </Card>
  );
}