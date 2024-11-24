"use server";

import { ContactFormValidation } from "../contact/lib/ContactValidation";
import * as z from "zod";

export const inquiry = async (
  values: z.infer<typeof ContactFormValidation>
) => {
  const validatedSchema = ContactFormValidation.safeParse(values);

  if (!validatedSchema.success) {
    return {
      error: "Something went wrong",
    };
  }

  const { name, email, phone, message } = validatedSchema.data;

  try {
    const response = await fetch("http://localhost:3000/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });

    console.log({response})
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return { success: "pesan berhasil di kirim" };
  } catch (error) {
    console.log({error})
    return { error: "something went wrong" };
  }
};
