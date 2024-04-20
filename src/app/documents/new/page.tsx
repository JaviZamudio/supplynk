"use client"

import Header from '@/components/Header';
import { Autocomplete, AutocompleteItem, Button, Input, Textarea, Select, SelectItem, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow, Divider } from '@nextui-org/react';
import { users, providerItems } from '@/constants/suppy';
import { useState } from 'react';

export default function NewDocumentPage() {
  const [form, setForm] = useState({
    proveedor: '',
    observaciones: '',
    items: [
      { producto: '', cantidad: 0, detalles: '' }
    ]
  });

  const handleNewItem = () => {
    setForm({
      ...form,
      items: [...form.items, { producto: '', cantidad: 0, detalles: '' }]
    });
  }

  const handleRemoveItem = (index: number) => {
    setForm({
      ...form,
      items: form.items.filter((_, i) => i !== index)
    });
  }

  return (
    <div className='flex flex-col flex-grow h-full overflow-hidden'>
      <Header titulo="Creación de Documento" />
      <span className=''>Solicitud de Compra a un proveedor, segun las proyecciones de stock</span>
      <Divider className='my-8' />

      <div className='flex flex-grow overflow-hidden'>
        {/* formulario */}
        <form className='space-y-4 overflow-y-auto p-4'>
          <h2 className='text-2xl font-medium'>Solicitud de Compra</h2>

          {/* Proveedor */}
          <Autocomplete label="Proveedor" placeholder="Buscar proveedor para la solicitud">
            {users.map((user) => (
              <AutocompleteItem key={user.id} value={user.name}>
                {user.name}
              </AutocompleteItem>
            ))}
          </Autocomplete>

          <Textarea label="Observaciones" placeholder="Escribe alguna observación o consideración" />

          <h3 className='text-lg font-medium'>Items</h3>

          <div className="flex flex-col gap-4">
            {form.items.map((item, index) => (
              <div key={index} className='flex gap-4 items-center'>
                <Autocomplete label="Producto" placeholder="Buscar producto" className='w-2/6'>
                  {providerItems.map((item) => (
                    <AutocompleteItem key={item.id} value={item.name}>
                      {item.name}
                    </AutocompleteItem>
                  ))}
                </Autocomplete>

                <Input label="Cantidad" type="number" placeholder='Cantidad' className='w-1/6' />

                <Input label="Detalles" placeholder="Detalles del producto" className='w-3/6' />

                <Button isIconOnly size="sm" onClick={() => handleRemoveItem(index)}>
                  <span className="material-symbols-outlined !text-xl">close</span>
                </Button>

              </div>
            ))}

            <Button startContent={<span className="material-symbols-outlined !text-xl">add</span>} color='primary' variant='flat' className='w-full' onClick={handleNewItem}>Agregar Item</Button>

            <Divider className='my-2' />

            <div className='flex justify-end gap-4'>
              <Button color='danger' variant="bordered" className='ml-4'>Cancelar</Button>
              <Button color='primary'>Crear Solicitud</Button>
            </div>
          </div>
        </form>
        {/* Tabla de Items */}

        <Divider orientation='vertical' className='mx-4 h-full' />

        {/* Proyecciones */}
        <div className='flex flex-col gap-6 w-full max-w-md p-1'>
          {/* Titulo */}
          <div className='flex justify-between items-center'>
            <h3 className='text-xl font-medium'>Proyecciones</h3>
            <Select placeholder="Selecciona una proyeccion" className='w-40' defaultSelectedKeys={['1']}>
              <SelectItem value="1" key="1">1 Mes</SelectItem>
              <SelectItem value="2" key="2">2 Meses</SelectItem>
              <SelectItem value="3" key="3">3 Meses</SelectItem>
            </Select>
          </div>

          {/* Tabla */}
          <Table>
            <TableHeader>
              <TableColumn>Producto</TableColumn>
              <TableColumn>Necesitas</TableColumn>
              <TableColumn>Stock Actual</TableColumn>
              <TableColumn>Recomedacion</TableColumn>
            </TableHeader>
            <TableBody>
              {providerItems.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                  <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                  <TableCell>{Math.floor(Math.random() * 100)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}