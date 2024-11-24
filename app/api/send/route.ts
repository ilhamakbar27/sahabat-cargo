import EmailTemplate from "@/app/emails/email-template";
import { NextRequest } from "next/server";
import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  const { name, email, phone, message } = await request.json();

  const result = await resend.emails.send({
    from: email,
    to: "milham.nj25@gmail.com",
    subject: "Ada pesan dari " + email,
    react: EmailTemplate({
      name,
      email,
      phone,
      message,
    }),
  });

  return Response.json({
    data: result,
  });
}
