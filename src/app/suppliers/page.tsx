"use client"

import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";
import { Popover, PopoverTrigger, PopoverContent, Input, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { users } from "@/constants/suppy";
import { Button } from "@nextui-org/react";
import Link from "next/link";

const statusColorMap = {
  active: "success",
  paused: "danger",
  vacation: "warning",
};

export default function Suppliers() {
  return (

    <>
      <Header titulo="Proveedores" />
      <span className="my-2">
        Aqui puedes ver la lista de proveedores actuales y poder contactar con ell@s.
      </span>
      <Divider className="my-4" />

      {/* Title */}

      <div className="flex flex-rows items-center my-4 w-full pr-12">
        <h2 className="p-3 text-2xl font-medium">Proveedores Actuales</h2>
        <Popover placement="right" showArrow offset={10}>
          <PopoverTrigger>
            <Button
              color="primary"
              variant="solid"
              size="md"
              className="ml-4"
              startContent={<span className="material-symbols-outlined !text-xl">person_add</span>}
            >
              Añadir
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 ">
            <p className="text-small font-bold text-foreground w-full p-2">Enlace</p>
            <div className="flex flex-rows">
              <Input defaultValue="qwebhqweqenqwey7q8w323" label="Enlace de Perfil" size="sm" variant="bordered" readOnly={true} className="!mb-2"
                startContent={<span className="material-symbols-outlined !text-xl -m-1">link</span>}
                endContent={<Button isIconOnly size="sm" onPress={() => alert("Enlace Copiado")}>
                  <span className="material-symbols-outlined !text-xl">content_copy</span>
                </Button>}
              />
            </div>
          </PopoverContent>
        </Popover>
      </div>


      {/* Table */}

      <Table aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Rol</TableColumn>
          <TableColumn>Estado</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>
        <TableBody>
          {/* <TableRow key={user.id}>
              <TableCell>
                <User
                  name={user.name}
                  description={user.role}
                  avatarProps={{
                    src: user.avatar
                  }}
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">{user.role}</p>
                  <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                </div>
              </TableCell>
              <TableCell>{user.status}</TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  variant="solid"
                  size="sm"
                  as={Link}
                  href=""
                  startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
                >
                  Ver
                </Button>
              </TableCell>
            </TableRow> */}
          {users.map((user) => (
            < TableRow key={user.id} >
              <TableCell>
                <User
                  name={user.name}
                  description={user.role}
                  avatarProps={{
                    src: user.avatar
                  }}
                />
              </TableCell>
              <TableCell>
                <div className="flex flex-col">
                  <p className="text-bold text-sm capitalize">{user.role}</p>
                  <p className="text-bold text-sm capitalize text-default-400">{user.team}</p>
                </div>
              </TableCell>
              <TableCell>Paused</TableCell>
              <TableCell className="flex gap-2">
                <Button color="primary" variant="ghost" size="sm"
                  as={Link}
                  href="/documents/new"
                  startContent={<span className="material-symbols-outlined !text-xl">add</span>}
                >
                  Solicitud
                </Button>
                <Button
                  color="secondary"
                  variant="solid"
                  size="sm"
                  as={Link}
                  href={`suppliers/${user.id}`}
                  startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
                >
                  Ver
                </Button>
              </TableCell>
            </TableRow>
          ))}

          {/* <TableRow key="2">
            <TableCell>
              <User
                name="Jane Doe"
                description="Product Designer"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                }}
              />
            </TableCell>
            <TableCell>
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">CEO</p>
                <p className="text-bold text-sm capitalize text-default-400">Management</p>
              </div>
            </TableCell>
            <TableCell>Paused</TableCell>
            <TableCell>
              <Button
                color="secondary"
                variant="solid"
                size="sm"
                as={Link}
                href=""
                startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
              >
                Ver
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell>
              <User
                name="Emiliano Aquetzalli"
                description="Product Designer"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/89048919?v=4"

                }}
              />
            </TableCell>
            <TableCell><div className="flex flex-col">
              <p className="text-bold text-sm capitalize">Technical Lead</p>
              <p className="text-bold text-sm capitalize text-default-400">Development</p>
            </div></TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button
                color="secondary"
                variant="solid"
                size="sm"
                as={Link}
                href=""
                startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
              >
                Ver
              </Button>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell>
              <User
                name="Jonathan Herrera"
                description="Product Designer"
                avatarProps={{
                  src: "https://avatars.githubusercontent.com/u/56328863?v=4"

                }}
              />
            </TableCell>
            <TableCell><div className="flex flex-col">
              <p className="text-bold text-sm capitalize">Community Manager</p>
              <p className="text-bold text-sm capitalize text-default-400">Marketing</p>
            </div></TableCell>
            <TableCell>Active</TableCell>
            <TableCell>
              <Button
                color="secondary"
                variant="solid"
                size="sm"
                as={Link}
                href=""
                startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
              >
                Ver
              </Button>
            </TableCell>
          </TableRow> */}

        </TableBody>
      </Table >
    </>
  )
}

