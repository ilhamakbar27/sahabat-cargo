"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { mobileCheck } from "./mobile-check";
// import { isMobile, BrowserView, MobileView } from "react-device-detect";

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
  }, []);

  const baseUrl = isMobileDevice
    ? "https://api.whatsapp.com/send"
    : "https://web.whatsapp.com/send";

  const queryParams = phone
    ? `?phone=${phone}${message ? `&text=${encodeURIComponent(message)}` : ""}`
    : "";
  return (
    <>
      <Link
        href={baseUrl + queryParams}
        target="_blank"
        rel="noreferrer noopener"
        {...restProps}
      >
        {children}
      </Link>

      {/* <BrowserView>
        <h1 className="text-white">This is rendered only in browser</h1>
      </BrowserView>
      <MobileView>
        <h1 className="">This is rendered only on mobile</h1>
      </MobileView> */}
    </>
  );
};

export default ChatWhatsapp;
