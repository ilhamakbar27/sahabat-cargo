"use client"

import React from 'react'
import {mobileCheck} from './mobile-check'

const ChatWhatsapp = ({ children, phone, message, ...restProps }) => {
  const isMobile = mobileCheck()
  const baseUrl = isMobile
    ? 'https://api.whatsapp.com/send'
    : 'https://web.whatsapp.com/send'

  const queryParams = phone ? `?phone=${phone}${message ? `&text=${encodeURIComponent(message)}` : ''}` : ''

  return (
    <a
      href={baseUrl + queryParams}
      target="_blank"
      rel="noreferrer noopener"
      {...restProps}
    >
      {children}
    </a>
  )
}

export default ChatWhatsapp
