"use client";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { z } from "zod";
import { FC, ReactNode, useState } from "react";
import { ContactFormValidation } from "@/app/contact/lib/ContactValidation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import FormField from "../form-field";

interface ContactFormProps {}

const SubmitBtn = ({ isLoading }: { isLoading: boolean }): ReactNode => {
  switch (isLoading) {
    case true:
      return (
        <Button
          disabled
          variant={"default"}
          className="h-10 text-base font-medium min-w-40">
          loading...
        </Button>
      );

    default:
      return (
        <Button
          variant={"default"}
          className="h-10 text-base font-[600] min-w-40"
          type="submit">
          Kirim Pesan
        </Button>
      );
  }
};

const ContactForm: FC<ContactFormProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<z.infer<typeof ContactFormValidation>>({
    resolver: zodResolver(ContactFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit() {
    setIsLoading(true);
    try {
    //   const data = {
    //     ...values,
    //   };
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }
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
        {/* <FormField
          fieldID={"service"}
          name={"Layanan"}
          control={form.control}
          placeholder={"eg. Konsultasi"}
        /> */}
        <FormField
          fieldID={"message"}
          name={"Pesan"}
          type="textarea"
          control={form.control}
          placeholder={"eg. Saya ingin berkonsultasi tentang cargo "}
        />
        <div className="flex justify-end col-span-2 mt-4 my-3">
          <SubmitBtn isLoading={isLoading} />
        </div>
      </form>
    </Form>
  );
};

export default ContactForm;
