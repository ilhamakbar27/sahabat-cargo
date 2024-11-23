import { z } from "zod";

export const ContactFormValidation = z.object({
  name: z.string().min(1, "Nama harus diisi !"),
  email: z.string().email({ message: "Email tidak valid." }),
  phone: z.string().min(10, { message: "Nomor telepon minimal 10 digit." }),
  message: z.string().min(10, { message: "Pesan minimal 10 karakter." }),
});
