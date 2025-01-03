"use client";

import * as React from "react";
// import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CheckIcon } from "lucide-react";
import { Label } from "../ui/label";

const kota = [
  {
    value: "jakarta",
    label: "Jakarta",
  },
  {
    value: "surabaya",
    label: "Surabaya",
  },
  {
    value: "palembang",
    label: "Palembang",
  },
  {
    value: "bandung",
    label: "Bandung",
  },
  {
    value: "medan",
    label: "Medan",
  },
  {
    value: "yogyakarta",
    label: "Yogyakarta",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <div className="flex flex-col gap-1.5">
      <Label className="flex justify-start items-start" htmlFor="framework">
        Kota asal
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[400px] max-md:w-[350px] justify-between">
            {value
              ? kota.find((framework) => framework.value === value)?.label
              : "Masukkan kota asal"}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[400px] max-md:w-[350px] p-0">
          <Command>
            <CommandInput placeholder="Cari kota tujuan" className="h-9" />
            <CommandList>
              <CommandEmpty>Tidak ditemukan.</CommandEmpty>
              <CommandGroup>
                {kota.map((framework) => (
                  <CommandItem
                    key={framework.value}
                    value={framework.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}>
                    {framework.label}
                    <CheckIcon
                      className={cn(
                        "ml-auto h-4 w-4",
                        value === framework.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
