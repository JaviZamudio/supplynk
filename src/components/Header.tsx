"use client"

import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button, Popover, PopoverTrigger, PopoverContent, Divider, Badge } from "@nextui-org/react";
export default function Header({ titulo }: { titulo: string }) {
  return (
    <header className="w-full py-4 px-2 flex justify-between items-center">
      <h2 className="text-3xl font-bold">{titulo}</h2>

      {/* Buttons */}
      <div className="flex gap-4">
        <Popover showArrow placement="bottom-end">
          <PopoverTrigger>
            <Button variant="flat" isIconOnly>
              <span className="material-symbols-outlined">
                notifications
              </span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-4 flex flex-col items-start">
            <h1 className="text-lg font-medium">
              Notifications
            </h1>

            <div className="flex flex-col gap-2 mt-2 w-64 h-56 overflow-hidden p-1 overflow-y-auto">
              {/* <p className="text-sm opacity-75 p-4">
                  You have no notifications
                </p> */}

              <Badge content="" color="primary">
                <div className="flex flex-col gap-1 rounded-lg bg-content2 p-2 w-full">
                  <p className="text-sm font-medium">
                    Nueva solicitud
                  </p>
                  <p className="text-xs opacity-75">
                    Tienes una nueva solicitud de cotización de parte del proveedor: <strong>Proveedor 1</strong>
                  </p>
                </div>
              </Badge>
              <Badge content="" color="primary">
                <div className="flex flex-col gap-1 rounded-lg bg-content2 p-2 w-full">
                  <p className="text-sm font-medium">
                    Nueva solicitud
                  </p>
                  <p className="text-xs opacity-75">
                    Tienes una nueva solicitud de cotización de parte del proveedor: <strong>Proveedor 1</strong>
                  </p>
                </div>
              </Badge>

              <Divider />

              <Badge content="" color="primary" isInvisible={true}>
                <div className="flex flex-col gap-1 rounded-lg bg-content1 p-2 w-full">
                  <p className="text-sm font-medium">
                    Nueva solicitud
                  </p>
                  <p className="text-xs opacity-75">
                    Tienes una nueva solicitud de cotización de parte del proveedor: <strong>Proveedor 1</strong>
                  </p>
                </div>
              </Badge>
              <Badge content="" color="primary" isInvisible={true}>
                <div className="flex flex-col gap-1 rounded-lg bg-content1 p-2 w-full">
                  <p className="text-sm font-medium">
                    Nueva solicitud
                  </p>
                  <p className="text-xs opacity-75">
                    Tienes una nueva solicitud de cotización de parte del proveedor: <strong>Proveedor 1</strong>
                  </p>
                </div>
              </Badge>
            </div>
          </PopoverContent>
        </Popover>

        <Button variant="faded" isIconOnly>
          <span className="material-symbols-outlined">
            person
          </span>
        </Button>
      </div>
    </header>
  )
}
