"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, memo, useState } from "react";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

interface CustomFormFieldProps {
  fieldID: string;
  control: Control<any>;
  name: string;
  type?: string;
  placeholder?: string;
  variant?: string;
  caption?: string;
}

const CustomFormField: FC<CustomFormFieldProps> = ({
  fieldID,
  name,
  control,
  type = "input",
  variant = "full",
  placeholder,
  caption,
}) => {
  const [focus, setFocus] = useState<boolean>(false);

  switch (type) {
    case "input":
      return (
        <FormField
          control={control}
          name={fieldID}
          render={({ field }) => (
            <FormItem
              className={`flex flex-col ${variant === "full" && "col-span-2"}`}>
              <FormLabel className="text-md text-left">{name}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={placeholder} className="" />
              </FormControl>

              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
      );

    case "input-number":
      return (
        <FormField
          control={control}
          name={fieldID}
          render={({ field }) => (
            <FormItem
              className={`flex flex-col ${variant === "full" && "col-span-2"}`}>
              <FormLabel className="text-md text-left">{name}</FormLabel>
              <FormControl>
                <div
                  className={`flex items-center justify-between rounded-lg ${
                    focus ? "ring-gray-800 ring-1" : "ring-gray-300 ring-1"
                  }`}>
                  {caption === "Rp." && (
                    <span className="pl-3 text-sm text-gray-500">Rp.</span>
                  )}
                  <Input
                    // {...field}
                    name={field.name}
                    ref={field.ref}
                    disabled={field.disabled}
                    onChange={field.onChange}
                    value={field.value}
                    onBlur={() => setFocus(false)}
                    placeholder={placeholder}
                    type="number"
                    min={"0"}
                    onFocus={() => setFocus(true)}
                    className="border-none shadow-none ring-0 focus-visible:ring-0"
                  />
                  {caption === "Month" && (
                    <span className="pr-3 text-sm text-gray-500">Month</span>
                  )}
                  {caption === "People" && (
                    <span className="pr-3 text-sm text-gray-500">People</span>
                  )}
                </div>
              </FormControl>

              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
      );

    // case "datetime":
    //   return (
    //     <FormField
    //       control={control}
    //       name={fieldID}
    //       render={({ field }) => (
    //         <FormItem
    //           className={`flex flex-col ${variant === "full" && "col-span-2"}`}
    //         >
    //           <FormLabel className="text-lg text-left">{name}</FormLabel>

    //           <Popover>
    //             <PopoverTrigger asChild>
    //               <FormControl>
    //                 <Button
    //                   className={cn(
    //                     "w-full flex text-gray-400 h-12 font-normal justify-start bg-transparent ring-1 hover:bg-transparent focus:ring-2 transition-all duration-300 focus:ring-[#FA4040] focus-within:ring-[#FA4040] ring-gray-300 pl-2 gap-2",
    //                     !field.value && "text-gray-500"
    //                   )}
    //                 >
    //                   <FaRegCalendarAlt className="w-4 h-4 mr-1" />
    //                   {field.value ? (
    //                     <span className="text-black">
    //                       {format(field.value, "dd/MM/yyyy")}
    //                     </span>
    //                   ) : (
    //                     <span>Pick a date</span>
    //                   )}
    //                 </Button>
    //               </FormControl>
    //             </PopoverTrigger>
    //             <PopoverContent align="start">
    //               <Calendar
    //                 mode="single"
    //                 selected={field.value}
    //                 onSelect={field.onChange}
    //                 formatters={{
    //                   formatCaption: (date, options) =>
    //                     format(date, "LLLL yyyy", options),
    //                 }}
    //                 disabled={(date) =>
    //                   date <
    //                   new Date(
    //                     `${new Date().getFullYear()}-${
    //                       new Date().getMonth() + 1
    //                     }-${new Date().getDate()}`
    //                   )
    //                 }
    //                 initialFocus
    //               />
    //             </PopoverContent>
    //           </Popover>

    //           <FormMessage className="shad-error" />
    //         </FormItem>
    //       )}
    //     />
    //   );

    case "textarea":
      return (
        <FormField
          control={control}
          name={fieldID}
          render={({ field }) => (
            <FormItem
              className={`flex flex-col ${variant === "full" && "col-span-2"}`}>
              <FormLabel className="text-md  text-left">{name}</FormLabel>

              <FormControl>
                <Textarea
                  {...field}
                  placeholder={placeholder}
                  // defaultValue={defaultValue}
                  className="min-h-32"
                />
              </FormControl>

              <FormMessage className="shad-error" />
            </FormItem>
          )}
        />
      );
  }
};

export default memo(CustomFormField);
