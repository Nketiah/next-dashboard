"use client"
import React, { useState } from 'react'
import IMG from "../../images/dev.jpg"
import Image from 'next/image'
import Link from 'next/link'
import ArrowRightIcon from '../ArrowRightIcon'
import { VscDashboard } from "react-icons/vsc"
import { RxDashboard } from "react-icons/rx"
import { AiOutlineLayout } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { RiPagesLine } from "react-icons/ri"
import { RiSpaceShipFill } from "react-icons/ri"
import { MdOutlineDesignServices } from "react-icons/md"
import { ImStack } from "react-icons/im"
import { RiHonourLine } from "react-icons/ri"
import { LuFileText } from "react-icons/lu"
import { PiGridFourThin } from "react-icons/pi"
import { IoStatsChartSharp } from "react-icons/io5"
import { RiCompasses2Fill } from "react-icons/ri"
import { RiMapPinLine } from "react-icons/ri"
import { useMainStateProvider } from '@/context'




const DashboardSidebar = () => {

  const { hideSidebar, setHideSideBar }: any = useMainStateProvider()
  const [toggleDropDownLink, setToggleDropDownLink] = useState<number | null>(null)
  const [toggleSubItem, setToggleSubItem] = useState(false)

  const handleToggleDropDownLink = (linkId: number) => setToggleDropDownLink(toggleDropDownLink === linkId ? null : linkId)



  return (
    <>
      {/* {
        !hideSidebar && */}
      <section className={`${hideSidebar ? 'w-0' : 'w-[230px]'}  hidden sm:block bg-primary-500 h-screen  border-r border-primary-500 shadow-lg text-center relative duration-500`}>
        <header className={`text-white text-2xl text-center font-medium py-2 duration-500 ${hideSidebar && 'hidden'}`}>Next Admin</header>
        <section className={`overflow-y-auto max-h-[90vh] py-10 pl-5 pr-3 ${hideSidebar && 'invisible'}`}>
          {navLinks.map((group, index) => {
            return (
              <section key={index}>
                <div className='text-left text-sidebarTitle py-5 uppercase text-xs font-semibold'>{group.heading}</div>
                <div>
                  {group.links.map((item: any, index) => {
                    return (
                      <>
                        <div onClick={() => handleToggleDropDownLink(item.id + 1)} key={index} className='transition-all duration-300 ease-in-out item relative flex items-center justify-between pt-3 pb-3 hover:cursor-pointer'>
                          <div className={`flex items-center gap-3`}>
                            <div className={`${toggleDropDownLink === item.id + 1 ? 'text-white' : 'text-navLight'}`}>{item.icon}</div>
                            <Link href={"#"} className={`text-[15px] ${toggleDropDownLink === item.id + 1 ? 'text-white' : 'text-navLight'}`}>{item.name}</Link>
                          </div>
                          <ArrowRightIcon size={11} className={`${toggleDropDownLink === item.id + 1 ? 'rotate-down' : 'rotate-right'} `} />
                        </div>
                        <section className={`transition-all delay ease-linear ${toggleDropDownLink === item.id + 1 ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}>
                          <div>
                            {item.subLinks && item?.subLinks?.map((link: any, index: number) => (
                              <div className='flex items-center gap-4 ml-2 py-2' key={index}>
                                <p className='text-navLight'>-</p>
                                <Link className='text-sm text-navLight' href={link.href}>{link.name}</Link>
                              </div>
                            ))}
                          </div>
                        </section>
                      </>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </section>
        <footer className={`bg-slate-900 h-16 pt-5 absolute bottom-0 inset-x-0 flex gap-3 text-light items-center pb-5 ${hideSidebar && 'invisible'}`}>
          <Image className='rounded-full h-10 w-10 object-cover ml-3' src={IMG} alt="no-img" />
          <div className='flex flex-col items-start'>
            <p className='text-sm'>Nketiah Joseph</p>
            <p className='text-xs'>nketiahjoseph1@gmail.com</p>
          </div>
        </footer>
      </section>
      {/* } */}
    </>
  )
}

export default DashboardSidebar


export const navLinks = [
  {
    heading: "Menu",
    links: [
      {
        id: 1,
        href: "/dashboard",
        name: "Dashboards",
        icon: <VscDashboard size={20} />,
        subLinks: [
          { id: 1, name: "Analytics", href: "/analytics" },
          { id: 2, name: "CRM", href: "/crm" },
          { id: 3, name: "Ecommerce", href: "/ecommerce" },
          { id: 4, name: "Crypto", href: "/crypto" },
          { id: 5, name: "Projects", href: "/projects" },
          { id: 6, name: "NFT", href: "/nft" },
          { id: 7, name: "Job", href: "/job" },
        ]
      },
      {
        id: 2,
        href: "/apps",
        name: "Apps",
        icon: <RxDashboard size={20} />,
        subLinks: []
      },
      {
        id: 3,
        href: "/layouts",
        name: "Layouts",
        icon: <AiOutlineLayout size={20} />,
        subLinks: [
          { id: 1, name: "Analytics", href: "/analytics" },
          { id: 2, name: "CRM", href: "/crm" },
          { id: 3, name: "Ecommerce", href: "/ecommerce" },
          { id: 4, name: "Crypto", href: "/crypto" },
          { id: 5, name: "Projects", href: "/projects" },
          { id: 6, name: "NFT", href: "/nft" },
          { id: 7, name: "Job", href: "/job" },
        ]
      }
    ]
  },
  {
    heading: "Pages",
    links: [
      {
        id: 4,
        href: "/auth",
        name: "Authentication",
        icon: <FaRegUserCircle size={20} />,
        subLinks: []
      },
      {
        id: 5,
        href: "/pages",
        name: "Pages",
        icon: <RiPagesLine size={20} />,
        subLinks: []
      },
      {
        id: 6,
        href: "/landing",
        name: "Landing",
        icon: <RiSpaceShipFill size={20} />,
        subLinks: []
      }
    ]
  },
  {
    heading: "components",
    links: [
      { id: 7,  href: "/base-ui", name: "Base UI", icon: <MdOutlineDesignServices size={20} /> },
      { id: 8,  href: "/advance-ui", name: "Advance UI", icon: <ImStack size={20} /> },
      { id: 9,  href: "/widgets", name: "Widgets", icon: <RiHonourLine size={20} /> },
      { id: 10, href: "/forms", name: "Forms", icon: <LuFileText size={20} /> },
      { id: 11, href: "/tables", name: "Tables", icon: <PiGridFourThin size={20} /> },
      { id: 12, href: "/charts", name: "Charts", icon: <IoStatsChartSharp size={20} /> },
      { id: 13, href: "/icons", name: "Icons", icon: <RiCompasses2Fill size={20} /> },
      { id: 14, href: "/maps", name: "Maps", icon: <RiMapPinLine size={20} /> },
    ]
  }



  // { id: 11, href: "/one", name: "eleven" },
  // { id: 12, href: "/one", name: "twelve" },


]




/*

className={`pl-8 transform text-navLight transition-all duration-300 ease-in-out translate-y-0 opacity-100 scale-y-100 origin-top delay-100 ${toggleDropDownLink === item.id + 1 ? '' : 'translate-y-4 opacity-0 scale-y-0'}`}>
Analytics
CRM
Ecommerce
Crypto
Projects
NFT
Job
*/




//    