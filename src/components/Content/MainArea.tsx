import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import Navbar from '../Header/Navbar'
import { GoArrowDownRight } from "react-icons/go"
import { AiOutlineShopping } from "react-icons/ai"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { RiWalletLine } from "react-icons/ri"
import Card from '../Card'




const MainArea = () => {
  return (
    <>
      <section className='h-screen overflow-y-auto flex-1 '>
        <Navbar />
        <main className='relative'>
          <div className='grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4'>
            <Card iconBgColor='bg-appGreen-100' iconColor='text-appGreen-500' text='total earnings' title='net earnings' />
            <Card iconBgColor='bg-appBlue-100' iconColor='text-appBlue-500' text='orders' title='orders' />
            <Card iconBgColor='bg-appOrange-100' iconColor='text-appOrange-500' text='customers' title='details' />
            <Card iconBgColor='bg-appDark-50' iconColor='text-appDark-900' text='my balance' title='withdraw money' />
        </div>
        </main>
      </section>
    </>
  )
}

export default MainArea