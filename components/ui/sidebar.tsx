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
import { MobileMenu } from "@/app/constant/mobile-menu";
// import { CollapsibleMobile } from "./CollapsibleMobile";

export function Sidebar() {
  return (
    <Drawer direction="right">
      <DrawerTrigger asChild>
        <MenuIcon className="size-10" />
      </DrawerTrigger>
      <DrawerContent className="min-h-screen">
        {MobileMenu.map((item) => (
          <React.Fragment key={item.id}>
            <DrawerDescription>
              <Link href={item.link}>
                <DrawerClose
                  key={item.id}
                  className="text-white px-5 font-bold p-2 text-2xl ">
                  {item.title}
                </DrawerClose>
              </Link>
            </DrawerDescription>
          </React.Fragment>
        ))}

        <DrawerClose asChild>
          <X
            color="white"
            strokeWidth={1}
            className="right-5 top-6  absolute"
            size={50}
          />
        </DrawerClose>
      </DrawerContent>
    </Drawer>
  );
}
