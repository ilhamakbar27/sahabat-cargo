import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import React from "react";
import { Button } from "@/components/ui/button";

const DialogPrice = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"lg"}>Cek harga sekarang</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>Tarif Dari Jakarta ke Bali</DialogTitle>
        </DialogHeader>
        <DialogDescription>Harga Tarif adalah Rp. 100.000</DialogDescription>
        <DialogFooter>
          <DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPrice;
