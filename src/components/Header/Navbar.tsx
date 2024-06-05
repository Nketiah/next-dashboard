"use client"
import { useMainStateProvider } from '@/context'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { IoMdNotificationsOutline } from "react-icons/io";
import IMG from "../../images/dev.jpg"
import Image from 'next/image'




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
           <div className='bg-slate-200 rounded-full p-2 cursor-pointer relative'>
             <p className='absolute -mt-3 ml-4 text-xs bg-red-400 text-white rounded-full w-5 h-4 text-center'>8</p>
             <IoMdNotificationsOutline 
              size={22} 
              className='text-gray-500'
             />
           </div>
           <div>2</div>
           <div className='h-[70px] bg-slate-100 w-36 flex gap-2 items-center cursor-pointer'>
            <Image className='rounded-full h-10 w-10 object-cover ml-3' src={IMG} alt="no-img" />
             <div className='flex flex-col items-center'>
               <p className='text-sm font-medium text-appDark-100'>Nketiah</p>
               <p className='text-xs text-gray-400'>Developer</p>
             </div>
           </div>
        </div>
     </section>
    </>
  )
}

export default Navbar