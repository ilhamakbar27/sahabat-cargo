"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { FC, useState, useTransition } from "react";
import { ContactFormValidation } from "@/app/contact/lib/ContactValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormField from "../form-field";
import { FormError } from "./form-error";
import { FormSuccess } from "./form-success";
import { inquiry } from "@/app/action/inquiry";

interface ContactFormProps {}

const ContactForm: FC<ContactFormProps> = ({}) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof ContactFormValidation>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      inquiry(values).then((data) => {
        setError(data.error);
        setSuccess(data.success);
      });
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid mb-5 flex-1 mt-5 grid-cols-2 gap-2">
        <FormField
          fieldID={"name"}
          name={"Nama"}
          control={form.control}
          placeholder={"eg. Salam"}
        />
        <FormField
          fieldID={"email"}
          name={"Email"}
          control={form.control}
          placeholder={"eg.salam@mail.com"}
        />
        <FormField
          fieldID={"phone"}
          name={"Nomor Telepon"}
          control={form.control}
          placeholder={"eg. 081234567890"}
        />
        <FormField
          fieldID={"message"}
          name={"Pesan"}
          type="textarea"
          control={form.control}
          placeholder={"eg. Saya ingin berkonsultasi tentang cargo "}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          disabled={isPending}
          className="w-full mt-5 "
          size={"lg"}>
          Kirim pesan
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
