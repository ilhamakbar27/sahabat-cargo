import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";

// import { PhoneIcon as WhatsappIcon } from "lucide-react";
import { MapPin, Package, Truck, Calendar, X } from "lucide-react";
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
import { AnimatePresence, motion } from "framer-motion";
import { Loader2 } from "lucide-react"; // Assuming Loader2 component is defined elsewhere
// import { MapPinIcon, PackageIcon, TruckIcon, CalendarIcon } from "lucide-react"; //
// import { ShippingIllustration } from "./shipping-illustration";
import ChatWhatsapp from "@/lib/ChatWhatsapp";
// import Image from "next/image";

// Define the FormSchema using zod
const FormSchema = z.object({
  from: z.string().min(1, { message: "Asal pengiriman harus diisi" }),
  to: z.string().min(1, { message: "Tujuan pengiriman harus diisi" }),
  weight: z.number().min(1, { message: "Berat harus lebih dari 0 kg" }),
});

type FormData = z.infer<typeof FormSchema>;

export function PriceList() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [filteredDestinations, setFilteredDestinations] = useState<string[]>(
    []
  );
  const [shippingDetails, setShippingDetails] = useState<{
    from: string;
    to: string;
    weight: number;
    totalPrice: number;
    deliveryEstimate: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      from: "",
      to: "",
      weight: undefined,
    },
  });

  function handleOriginChange(origin: string) {
    form.setValue("from", origin);
    form.setValue("to", "");
    setFilteredDestinations(
      shippingDestinations
        .filter((dest) => dest.from === origin)
        .map((dest) => dest.to)
    );
  }

  function onSubmit(data: FormData) {
    setIsLoading(true);
    setTimeout(() => {
      const destinationData = shippingDestinations.find(
        (dest) => dest.from === data.from && dest.to === data.to
      );

      if (!destinationData) {
        form.setError("to", {
          type: "manual",
          message: `Tidak ada rute dari ${data.from} ke ${data.to}.`,
        });
        setIsLoading(false);
        return;
      }

      if (data.weight < destinationData.minWeight) {
        form.setError("weight", {
          type: "manual",
          message: `Berat minimal untuk ${destinationData.from} ke ${destinationData.to} adalah ${destinationData.minWeight} kg.`,
        });
        setIsLoading(false);
        return;
      }

      const totalPrice = destinationData.pricePerKg * data.weight;

      setShippingDetails({
        from: destinationData.from,
        to: destinationData.to,
        weight: data.weight,
        totalPrice,
        deliveryEstimate: destinationData.deliveryEstimate,
      });

      setIsLoading(false);
      setDialogOpen(true);
    }, 1000); // Simulating API call with 1 second delay
  }

  return (
    <Card className="w-[450px] max-md:w-[370px] shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className=" bg-[#164C9D]   text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">
          Cek Harga Pengiriman
        </CardTitle>
        <CardDescription className="text-blue-100">
          Hitung biaya pengiriman Anda dalam sekejap.
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="from"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Asal
                  </FormLabel>
                  <Select
                    onValueChange={(value) => handleOriginChange(value)}
                    {...field}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full ">
                        <SelectValue placeholder="Pilih asal pengiriman" />
                      </SelectTrigger>
                    </FormControl>
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
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="to"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Tujuan
                  </FormLabel>
                  <Select onValueChange={field.onChange} {...field}>
                    <FormControl>
                      <SelectTrigger className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5">
                        <SelectValue placeholder="Pilih tujuan pengiriman" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {filteredDestinations.map((to) => (
                        <SelectItem key={to} value={to}>
                          {to}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="weight"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm font-medium text-gray-700">
                    Berat (kg)
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Masukkan Berat dalam kg"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      {...field}
                      value={field.value || ""}
                      onChange={(e) => field.onChange(+e.target.value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              size="lg"
              className="w-full  bg-[#164C9D]  hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Menghitung...
                </>
              ) : (
                "Cek Harga Sekarang"
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      <AnimatePresence>
        {dialogOpen && (
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogContent className="sm:max-w-[460px] bg-gradient-to-br from-white to-blue-50 rounded-lg shadow-2xl">
              <DialogHeader>
                <DialogTitle className="text-3xl font-bold text-blue-900 mb-2">
                  Detail Pengiriman
                </DialogTitle>
                <DialogDescription className="text-blue-700 text-lg">
                  Rincian biaya pengiriman Anda:
                </DialogDescription>
              </DialogHeader>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-3">
                <DetailItem
                  icon={MapPin}
                  label="Asal"
                  value={shippingDetails?.from || ""}
                />
                <DetailItem
                  icon={MapPin}
                  label="Tujuan"
                  value={shippingDetails?.to || ""}
                />
                <DetailItem
                  icon={Package}
                  label="Berat"
                  value={`${shippingDetails?.weight || ""} kg`}
                />
                <DetailItem
                  icon={Truck}
                  label="Total Harga"
                  value={`Rp ${shippingDetails?.totalPrice?.toLocaleString()}`}
                  highlight
                />
                <DetailItem
                  icon={Calendar}
                  label="Estimasi Waktu"
                  value={shippingDetails?.deliveryEstimate || ""}
                />
              </motion.div>
              <DialogFooter className="mt-8">
                <Button
                  onClick={() => setDialogOpen(false)}
                  variant="outline"
                  className="w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-4 rounded-full border-2 border-blue-600 transition-colors duration-200">
                  <X className="w-5 h-5 mr-2" />
                  Tutup
                </Button>
                <Button className=" bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition-colors duration-200">
                  <ChatWhatsapp
                    phone="+6281313130765"
                    message={`Halo, saya tertarik untuk memesan layanan kargo. Berikut adalah detail pengiriman saya:
              🚩 Rute: ${shippingDetails?.from} ke ${shippingDetails?.to}
              📦 Berat: ${shippingDetails?.weight} kg
              💵 Estimasi Biaya: Rp ${shippingDetails?.totalPrice.toLocaleString()}
              ⏳ Perkiraan Waktu Pengiriman: ${
                shippingDetails?.deliveryEstimate
              }`}>
                    Pesan Sekarang via WhatsApp
                  </ChatWhatsapp>
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </Card>
  );
}

interface DetailItemProps {
  icon: React.ElementType;
  label: string;
  value: string;
  highlight?: boolean;
}

function DetailItem({
  icon: Icon,
  label,
  value,
  highlight = false,
}: DetailItemProps) {
  return (
    <div className="flex items-center justify-between py-3 border-b border-blue-100">
      <span className="flex items-center text-blue-800">
        <Icon className="mr-3 h-6 w-6 text-blue-500" />
        {label}
      </span>
      <span
        className={`font-semibold ${
          highlight ? "text-2xl text-green-600" : "text-blue-900"
        }`}>
        {value}
      </span>
    </div>
  );
}
