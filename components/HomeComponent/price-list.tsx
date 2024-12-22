import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
// ShippingIllustration
import { PhoneIcon as WhatsappIcon } from "lucide-react";
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
import { MapPinIcon, PackageIcon, TruckIcon, CalendarIcon } from "lucide-react"; //
// import { ShippingIllustration } from "./shipping-illustration";
import ChatWhatsapp from "@/lib/ChatWhatsapp";

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
      <CardHeader className=" bg-[#0c2d5f]  text-white rounded-t-lg">
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
                      <SelectTrigger className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
                      <SelectTrigger className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
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
            <DialogContent className="bg-white rounded-lg shadow-xl max-w-md mx-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Detail Pengiriman
                </DialogTitle>
                <DialogDescription className="text-gray-600">
                  Berikut adalah rincian biaya pengiriman Anda:
                </DialogDescription>
              </DialogHeader>
              {shippingDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="flex items-center text-gray-600">
                      <MapPinIcon className="mr-2 h-5 w-5" /> Asal
                    </span>
                    <span className="font-semibold text-gray-900">
                      {shippingDetails.from}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="flex items-center text-gray-600">
                      <MapPinIcon className="mr-2 h-5 w-5" /> Tujuan
                    </span>
                    <span className="font-semibold text-gray-900">
                      {shippingDetails.to}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="flex items-center text-gray-600">
                      <PackageIcon className="mr-2 h-5 w-5" /> Berat
                    </span>
                    <span className="font-semibold text-gray-900">
                      {shippingDetails.weight} kg
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b">
                    <span className="flex items-center text-gray-600">
                      <TruckIcon className="mr-2 h-5 w-5" /> Total Harga
                    </span>
                    <span className="font-semibold text-xl text-blue-600">
                      Rp {shippingDetails.totalPrice.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="flex items-center text-gray-600">
                      <CalendarIcon className="mr-2 h-5 w-5" /> Estimasi Waktu
                    </span>
                    <span className="font-semibold text-gray-900">
                      {shippingDetails.deliveryEstimate}
                    </span>
                  </div>
                </motion.div>
              )}
              <DialogFooter className="mt-6 flex justify-between">
                <Button
                  type="button"
                  onClick={() => setDialogOpen(false)}
                  variant="default"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors duration-200">
                  Tutup
                </Button>
                <ChatWhatsapp
                  phone="+6281313130765"
                  message={`Halo, saya tertarik untuk memesan layanan kargo. Berikut adalah detail pengiriman saya:\n
                  🚩 Rute: ${shippingDetails?.from} ke ${shippingDetails?.to}\n
                  📦 Berat: ${shippingDetails?.weight} kg\n
                  💵 Estimasi Biaya: Rp ${shippingDetails?.totalPrice}\n
                  ⏳ Perkiraan Waktu Pengiriman: ${shippingDetails?.deliveryEstimate}`}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center py-2 border border-transparent text-lg font-medium rounded-full text-blue-900 bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-300">
                    <WhatsappIcon className="w-6 h-6 mr-2" />
                    <span className="font-extrabold tracking-wide">
                      Pesan Sekarang
                    </span>
                  </motion.button>
                </ChatWhatsapp>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </Card>
  );
}
