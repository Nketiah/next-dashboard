"use client"
import { useMainStateProvider } from '@/context'
import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {

const {hideSidebar, setHideSideBar}:any = useMainStateProvider()

  return (
    <>
     <section className='border-b w-full h-[70px] shadow flex items-center justify-between px-7'>
        <div>
          <RxHamburgerMenu 
           size={23} 
           onClick={()=> setHideSideBar((prev:boolean)=> !prev)}
           className="cursor-pointer"
         />
        </div>
        <div>Navbar</div>
     </section>
    </>
  )
}

export default Navbar