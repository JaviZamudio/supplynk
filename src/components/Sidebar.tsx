'use client'

import React from 'react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { sidebarLinks } from '@/constants';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className='flex flex-grow flex-col max-w-60 justify-between bg-primary text-primary-foreground p-6 pt-28'>
      <div className='flex flex-1 flex-col gap-6'>
        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);
          return (
            <NextLink
              href={item.route}
              key={item.label}
              className={`flex gap-4 items-center p-4 rounded-lg justify-start ${isActive ? 'bg-primary' : ''}`}
            >
              <span className="material-symbols-outlined">
                {item.icon}
              </span>
              <p className="text-lg font-semibold max-lg:hidden">
                {item.label}
              </p>
            </NextLink>
          );

        })}
      </div>
    </section>
  );
}
