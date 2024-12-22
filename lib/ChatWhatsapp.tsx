"use client";

import React, { useState, useEffect } from "react";
import { mobileCheck } from "./mobile-check";

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
  const isMobile = mobileCheck();
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    setIsMobileDevice(isMobile);
  }, [isMobile]);

  const baseUrl = isMobileDevice
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";

  const queryParams = phone
    ? `?phone=${phone}${message ? `&text=${encodeURIComponent(message)}` : ""}`
    : "";
  return (
    <>
      <a
        href={baseUrl + queryParams}
        target="_blank"
        rel="noreferrer noopener"
        {...restProps}>
        {children}
      </a>
    </>
  );
};

export default ChatWhatsapp;
