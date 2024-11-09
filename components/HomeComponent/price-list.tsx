import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { shippingDestinations } from "@/lib/destinations";
// Define Zod schema for form validation
const FormSchema = z.object({
  from: z.string().nonempty({ message: "Asal harus dipilih." }),
  to: z.string().nonempty({ message: "Tujuan harus dipilih." }),
  weight: z
    .number({
      invalid_type_error: "Berat harus berupa angka.",
    })
    .min(1, "Berat minimal 1 kg."),
});

type FormData = z.infer<typeof FormSchema>;

export function PriceList() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [shippingDetails, setShippingDetails] = useState<{
    from: string;
    to: string;
    weight: number;
    totalPrice: number;
    deliveryEstimate: string;
  } | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      from: "",
      to: "",
      weight: undefined,
    },
  });

  function onSubmit(data: FormData) {
    // Find the destination combination
    const destinationData = shippingDestinations.find(
      (dest) => dest.from === data.from && dest.to === data.to
    );

    if (!destinationData) {
      form.setError("to", {
        type: "manual",
        message: `Tidak ada rute dari ${data.from} ke ${data.to}.`,
      });
      return;
    }

    // Ensure weight meets destination's minimum weight requirement
    if (data.weight < destinationData.minWeight) {
      form.setError("weight", {
        type: "manual",
        message: `Berat minimal untuk ${destinationData.from} ke ${destinationData.to} adalah ${destinationData.minWeight} kg.`,
      });
      return;
    }

    // Calculate the total price
    const totalPrice = destinationData.pricePerKg * data.weight;

    // Set shipping details and open dialog
    setShippingDetails({
      from: destinationData.from,
      to: destinationData.to,
      weight: data.weight,
      totalPrice,
      deliveryEstimate: destinationData.deliveryEstimate,
    });

    setDialogOpen(true);
  }

  return (
    <Card className="w-[450px] max-md:w-[370px]">
      <CardHeader>
        <CardTitle>Input Harga</CardTitle>
        <CardDescription>Lihat harga dalam 1 klik saja.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-3">
            {/* From (Asal) Field */}
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-start">
                    Asal
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih asal pengiriman" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          new Set(shippingDestinations.map((dest) => dest.from))
                        ).map((from) => (
                          <SelectItem key={from} value={from}>
                            {from}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.from?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            {/* To (Tujuan) Field */}
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-start">
                    Tujuan
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih tujuan pengiriman" />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          new Set(shippingDestinations.map((dest) => dest.to))
                        ).map((to) => (
                          <SelectItem key={to} value={to}>
                            {to}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage>{form.formState.errors.to?.message}</FormMessage>
                </FormItem>
              )}
            />
            {/* Weight Field */}
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex justify-start items-start">
                    Berat (kg)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Masukkan Berat dalam kg"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(+e.target.value)} // Convert string to number
                    />
                  </FormControl>
                  <FormMessage>
                    {form.formState.errors.weight?.message}
                  </FormMessage>
                </FormItem>
              )}
            />
            {/* Submit Button */}
            <Button type="submit" size={"lg"} className="w-full mt-4">
              Cek harga sekarang
            </Button>
          </form>
        </Form>
      </CardContent>

      {/* Shipping Details Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="bg-white rounded-lg shadow-md max-md:mx-auto p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold">
              Harga Pengiriman
            </DialogTitle>
            <DialogDescription className="text-md text-gray-500">
              Berikut adalah detail harga pengiriman:
            </DialogDescription>
          </DialogHeader>
          {shippingDetails && (
            <div className="mt-4 space-y-3">
              <div className="flex justify-between">
                <span className="font-medium">Asal:</span>
                <span className="text-gray-700">{shippingDetails.from}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Tujuan:</span>
                <span className="text-gray-700">{shippingDetails.to}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Berat:</span>
                <span className="text-gray-700">
                  {shippingDetails.weight} kg
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Total Harga:</span>
                <span className="text-gray-700">
                  Rp {shippingDetails.totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Estimasi Waktu:</span>
                <span className="text-gray-700">
                  {shippingDetails.deliveryEstimate}
                </span>
              </div>
            </div>
          )}
          <DialogFooter className="mt-6">
            <Button
              type="button"
              onClick={() => setDialogOpen(false)}
              variant="default"
              className="w-full">
              Tutup
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Card>
  );
}
