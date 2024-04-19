import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";
export default function Header({ titulo }: { titulo: string }) {
    return (
        <header className="w-full h-20 flex justify-between items-center">
            <div className="p-5 text-3xl font-bold">
                <h2>{titulo}</h2>
            </div>
            <div className="flex m-5 text-xl">
                <div className=" p-3">
                    <Dropdown>
                        <DropdownTrigger>
                            <Button
                                variant="bordered"
                            >
                                <span className="material-symbols-outlined">
                                    notifications
                                </span>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Static Actions">
                            <DropdownItem key="new">New file</DropdownItem>
                            <DropdownItem key="copy">Copy link</DropdownItem>
                            <DropdownItem key="edit">Edit file</DropdownItem>
                            <DropdownItem key="delete" className="text-danger" color="danger">
                                Delete file
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                </div>
                <div className="p-3">
                    <span className="material-symbols-outlined">
                        person
                    </span>
                </div>
            </div>
        </header>
    )
}
