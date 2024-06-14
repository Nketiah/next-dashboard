"use client"
import React, { useEffect } from 'react'
import { SessionProvider as NextSessionProvider } from 'next-auth/react'


const SessionProvider = ({children}:any) => {
  return  <NextSessionProvider>{children}</NextSessionProvider>
}

export default SessionProvider