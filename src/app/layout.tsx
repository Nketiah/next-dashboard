import { StateProvider } from '@/context'
import './globals.css'
import { Poppins } from "next/font/google"
import SessionProvider from '@/components/SessionProvider'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'


const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
})



export const metadata = {
  title: 'Next Dashboard',
  description: 'Modern Dashboard by create next app',
}



export default function RootLayout({children}:{children: React.ReactNode}) {
  // const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={poppins.className}>
        <StateProvider>
          <SessionProvider>
          {children}
          </SessionProvider>
        </StateProvider>
      </body>
    </html>
  )
}
