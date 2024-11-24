"use client"

import * as React from "react";
import { MenuIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { X } from "lucide-react";
import Link from "next/link";

// import { CollapsibleMobile } from "./CollapsibleMobile";

export function Sidebar() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <MenuIcon className="size-10 mx-4 font-bold" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerDescription className="min-h-screen   text-xl font-bold ">
          {/* <p className="mt-28">Ini Menu Sidebar</p> */}
          <div className="flex flex-col mt-24 p-10 text-white gap-3 px-5">
            <Link href="/">
              <DrawerClose>
                <h2>Beranda</h2>
              </DrawerClose>
            </Link>
            <Link href="/services">
              <DrawerClose>
               Layanan
              </DrawerClose>
            </Link>
            <Link href="/contact">
              <DrawerClose>
                Kontak
              </DrawerClose>
            </Link>
          </div>
        </DrawerDescription>
        {/* <div className="flex flex-col font-semibold p-5 pt-10 gap-3">
          {MobileMenu.map((item) =>
            item.link === "" ? (
              <DrawerDescription className="text-white text-2xl " key={item.id}>
                <CollapsibleMobile
                  menuData={
                    item.title === "業界別プログラム"
                      ? DropdownMenuJobs
                      : MobileCompanyMenu
                  }
                  title={item.title}
                />
              </DrawerDescription>
            ) : (
              <React.Fragment key={item.id}>
                <Link href={item.link}>
                  <DrawerClose key={item.id} className="text-white  text-2xl ">
                    {item.title}
                  </DrawerClose>
                </Link>
              </React.Fragment>
            )
          )}
        </div> */}
        <DrawerClose className="mt-32 z-30" asChild>
          <X
            color="white"
            strokeWidth={1}
            className="right-10 top-6  absolute"
            size={60}
          />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
