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
        <DrawerDescription className="min-h-screen  text-xl font-bold ">
          <p className="mt-28">Ini Menu Sidebar</p>
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
        <DrawerClose asChild>
          <X
            color="white"
            strokeWidth={1}
            className="right-5 top-6    absolute"
            size={50}
          />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
