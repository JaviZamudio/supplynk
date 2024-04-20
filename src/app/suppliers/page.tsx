"use client"

import Header from "@/components/Header";
import { Divider } from "@nextui-org/react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue } from "@nextui-org/react";
import { columns, users } from "@/constants/suppy";
import { Button } from "@nextui-org/react";

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
            {/* Table */}
            <div className="flex flex-rows">
                <h2>Proveedores Actuales</h2>
                <Button
                    color="secondary"
                    variant="solid"
                    size="sm"
                    startContent={<span className="material-symbols-outlined !text-xl">person_add</span>}
                >
                    Añadir
                </Button>
            </div>

            {/* Table */}
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Rol</TableColumn>
                    <TableColumn>Estado</TableColumn>
                    <TableColumn>Accion</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow key="1">
                        <TableCell>
                            <User
                                name="Adrian Zavaleta"
                                description="Product Designer"
                                avatarProps={{
                                    src: "https://avatars.githubusercontent.com/u/60676513?v=4"
                                }}
                            />
                        </TableCell>
                        <TableCell>CEO</TableCell>
                        <TableCell>Active</TableCell>
                        <TableCell>
                            Añadir
                        </TableCell>
                    </TableRow>
                    <TableRow key="2">
                        <TableCell>
                            <User
                                name="Jane Doe"
                                description="Product Designer"
                                avatarProps={{
                                    src: "https://avatars.githubusercontent.com/u/30373425?v=4"
                                }}
                            />
                        </TableCell>
                        <TableCell>Technical Lead</TableCell>
                        <TableCell>Paused</TableCell>
                        <TableCell>Añadir</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </>
    )
}

function handleRedirecton() {
    return (
        <>
            <Button
                color="secondary"
                variant="solid"
                size="sm"
                startContent={<span className="material-symbols-outlined !text-xl">visibility</span>}
            >
                Ver
            </Button>
        </>
    )
}
