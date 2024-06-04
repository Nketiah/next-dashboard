import { StateProvider } from '@/context'
import './globals.css'
import { Poppins } from "next/font/google"


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
  return (
    <html lang="en">
      <body className={poppins.className}>
        <StateProvider>
          {children}
        </StateProvider>
      </body>
    </html>
  )
}
