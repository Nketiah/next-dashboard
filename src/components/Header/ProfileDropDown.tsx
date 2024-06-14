"use client"
import { useMainStateProvider } from '@/context'
import React from 'react'
import { FaUserCircle } from "react-icons/fa"
import { BsChatLeftText } from "react-icons/bs"
import { RiWalletLine } from "react-icons/ri"
import { IoSettingsOutline } from "react-icons/io5"
import { GoSignOut } from "react-icons/go"
import { signOut } from 'next-auth/react'
import Router from 'next/router'
import { useRouter } from 'next/navigation'




const ProfileDropDown = () => {
const {toggleProfileDropDown, setToggleProfileDown}:any = useMainStateProvider()
const router = useRouter()


  return (
    <>
        <section className={`py-2 cursor-pointer w-44 bg-white rounded shadow-xl absolute top-[4.3rem] right-7 ${toggleProfileDropDown ? 'opacity-100' : 'opacity-0 invisible'}`} style={{ transition: 'opacity 0.3s ease' }}>
            <div className="px-4 py-2 text-gray-800 hover:bg-slate-100 flex items-center gap-2">
               <FaUserCircle size={14} className='text-gray-400' />
                Profile
            </div>
            <div className="px-4 py-2 text-gray-800 hover:bg-slate-100 flex items-center gap-2">
              <BsChatLeftText size={14} className='text-gray-500' />
                Messages
            </div>
            <div className="px-4 py-2 text-gray-800 hover:bg-slate-100 flex items-center gap-2">
               <RiWalletLine size={14} className='text-gray-500' />
                Balance
            </div>
            <div className="px-4 py-2 text-gray-800 hover:bg-slate-100 flex items-center gap-2">
              <IoSettingsOutline size={15} className='text-gray-500' />
                Settings
           </div>
            <div onClick={()=> {
              signOut()
              window.location.href = "/"
              // router.push("/")
              setToggleProfileDown(false)
              }}  
              className="px-4 py-2 text-gray-800 hover:bg-slate-100 flex items-center gap-2">
             <GoSignOut size={15} className='text-gray-500' />
                Log out
           </div>
        </section>
    </>
  )
}

export default ProfileDropDown