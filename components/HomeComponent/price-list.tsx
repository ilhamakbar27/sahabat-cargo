import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
import { ComboboxDemo } from "./combobox";

interface Province {
  id: string;
  name: string;
}

export const provinces: Province[] = [
  {
    id: "1",
    name: "Aceh",
  },
  {
    id: "2",
    name: "Bali",
  },
  {
    id: "3",
    name: "Jakarta",
  },
  {
    id: "4",
    name: "Surabaya",
  },
];

export function PriceList() {
  return (
    <Card className="w-[450px] max-md:w-[300px]">
      <CardHeader>
        <CardTitle>Input Harga </CardTitle>
        <CardDescription>Lihat harga dalam 1 klik saja.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">Kota asal</Label>
              <Select>
                <SelectTrigger id="framework">
                  <SelectValue placeholder="Pilih provinsi asal" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {provinces.map((province) => (
                    <SelectItem key={province.id} value={province.id}>
                      {province.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <ComboboxDemo />
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Berat (kg) </Label>
              <Input
                type="number"
                id="name"
                placeholder="Masukkan Berat dalam kg"
              />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Dialog>
          <DialogTrigger asChild>
            <Button size={"lg"}>Cek harga sekarang</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-white">
            <DialogHeader>
              <DialogTitle>Tarif Dari Jakarta ke Bali</DialogTitle>
            </DialogHeader>
            <DialogDescription>
              Harga Tarif adalah Rp. 100.000
            </DialogDescription>
            <DialogFooter>
              <DialogClose>
                <Button type="submit">Save changes</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
