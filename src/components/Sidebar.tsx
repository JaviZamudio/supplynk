'use client'

import React from 'react';
import NextLink from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { sidebar } from '@/constants';
import { Listbox, ListboxSection, ListboxItem } from "@nextui-org/react"
import Image from 'next/image';

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleRouteSelection = (route: string) => {
    router.push(route);
  };

  return (
    <>
      <section className='flex flex-grow flex-col w-full max-w-60 justify-between bg-primary text-primary-foreground p-4'>
        <div className='flex flex-col items-center justify-center my-4'>
          <Image
            src="/logo.svg"
            alt="logo"
            width={80}
            height={80}
            className='mb-2'
          />
          <h2 className='text-center font-bold text-2xl tracking-widest'>Supplynk</h2>
        </div>
        <div className='flex flex-1 flex-col gap-6'>
          <Listbox variant="flat" aria-label="Listbox menu with sections" onAction={(key) => { handleRouteSelection(key.toString()) }}>
            {sidebar.map((section, index) => (
              <ListboxSection key={index} title={section.title} showDivider classNames={{
                heading: 'text-primary-foreground opacity-75',
                divider: 'bg-primary-foreground opacity-25',
              }}>
                {section.items.map((item, itemIndex) => (
                  <ListboxItem key={item.route} className='hover:!bg-white px-4 py-2'
                    startContent={<span className="material-symbols-outlined !text-xl">{item.icon}</span>}
                  >
                    {item.label}
                  </ListboxItem>
                ))}
              </ListboxSection>
            ))}
          </Listbox>

          {/*

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (

            <NextLink
              href={item.route}
              key={item.label}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start`}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
              <Listbox variant="flat" aria-label="Listbox menu with sections">
                <ListboxSection title="Actions" showDivider>
                  <ListboxItem
                    key="new"
                    description="Create a new file">
                    New File
                  </ListboxItem>
                </ListboxSection>
              </Listbox>
            </NextLink>
          );

        })}/*/}
        </div>
      </section>
    </>
  );
}
