"use client"
import { useMainStateProvider } from '@/context'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdNotificationsOutline } from "react-icons/io";





const Navbar = () => {

const {hideSidebar, setHideSideBar}:any = useMainStateProvider()

  return (
    <>
     <section className='bg-white  border-b w-full h-[70px] shadow-sm flex items-center justify-between px-7 sticky top-0 z-50'>
        <div>
          <RxHamburgerMenu 
           size={23} 
           onClick={()=> setHideSideBar((prev:boolean)=> !prev)}
           className="cursor-pointer"
         />
        </div>
        <div className='flex gap-8 items-center'>
           <div className=''>
             <IoMdNotificationsOutline 
              size={21} 
              className='text-gray-500 hover:bg-gray-200 hover:rounded-full'
             />
           </div>
           <div>2</div>
           <div>2</div>
        </div>
     </section>
    </>
  )
}

export default Navbar