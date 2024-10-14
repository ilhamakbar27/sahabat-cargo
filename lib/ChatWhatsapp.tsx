"use client";

import Link from "next/link";
import React from "react";
// import {mobileCheck} from './mobile-check'
import { isMobile } from "react-device-detect";

interface ChatWhatsappProps {
  children: React.ReactNode;
  phone?: string;
  message?: string;
}
const ChatWhatsapp = ({
  children,
  phone,
  message,
  ...restProps
}: ChatWhatsappProps) => {
  const baseUrl = isMobile
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";

  const queryParams = phone
    ? `?phone=${phone}${message ? `&text=${encodeURIComponent(message)}` : ""}`
    : "";

  return (
    <Link
      href={baseUrl + queryParams}
      target="_blank"
      rel="noreferrer noopener"
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default ChatWhatsapp;
