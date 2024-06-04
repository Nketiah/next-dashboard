"use client"
import React, { useState } from 'react';
import IMG from "../../images/dev.jpg"
import Image from 'next/image'
import Link from 'next/link'
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

const navLinks = [
  {
    heading: 'Menu',
    links: [
      {
        id: 1,
        href: '/dashboard',
        name: 'Dashboards',
        icon: <VscDashboard size={20} />,
        content: 'Dashboards',
      },
      {
        id: 2,
        href: '/apps',
        name: 'Apps',
        icon: <RxDashboard size={20} />,
        content: 'Apps',
      },
      {
        id: 3,
        href: '/layouts',
        name: 'Layouts',
        icon: <AiOutlineLayout size={20} />,
        content: 'Layouts',
      },
    ],
  },
  {
    heading: 'Pages',
    links: [
      {
        id: 4,
        href: '/auth',
        name: 'Authentication',
        icon: <FaRegUserCircle size={20} />,
        content: 'some stuff8888',
      },
      {
        id: 5,
        href: '/pages',
        name: 'Pages',
        icon: <RiPagesLine size={20} />,
        content: 'some stuff0000',
      },
      {
        id: 6,
        href: '/landing',
        name: 'Landing',
        icon: <RiSpaceShipFill size={20} />,
        content: 'some stuff66-77-88-2',
      },
    ],
  },
  {
    heading: 'components',
    links: [
      { id: 7, href: '/base-ui', name: 'Base UI', icon: <MdOutlineDesignServices size={20} /> },
      { id: 8, href: '/advance-ui', name: 'Advance UI', icon: <ImStack size={20} /> },
      { id: 9, href: '/widgets', name: 'Widgets', icon: <RiHonourLine size={20} /> },
      { id: 10, href: '/forms', name: 'Forms', icon: <LuFileText size={20} /> },
      { id: 11, href: '/tables', name: 'Tables', icon: <PiGridFourThin size={20} /> },
      { id: 12, href: '/charts', name: 'Charts', icon: <IoStatsChartSharp size={20} /> },
      { id: 13, href: '/icons', name: 'Icons', icon: <RiCompasses2Fill size={20} /> },
      { id: 14, href: '/maps', name: 'Maps', icon: <RiMapPinLine size={20} /> },
    ],
  },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed z-50 cursor-pointer text-black text-3xl m-6" onClick={toggleSidebar}>
        <i className={`fas fa-${isOpen ? 'times' : 'bars'}`}></i>
      </div>
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        dddd
        <div className="h-20 bg-gray-800 flex items-center justify-center">
          <img
            src="https://lh3.googleusercontent.com/a-/AOh14Gj99VObFyE8W_h8RrcwZO_aYiIHu5AAa_XpnOym=s600-k-no-rp-mo"
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-gray-600"
          />
          <h1 className="text-white text-xl font-bold ml-4">Mystery Code</h1>
        </div>
        <div className="mt-8">
          {navLinks.map((section, index) => (
            <div key={index} className="mx-4 mb-4">
              <h2 className="text-gray-400 text-sm font-semibold uppercase">{section.heading}</h2>
              {section.links.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className="flex items-center py-2 px-4 rounded-md hover:bg-gray-700 transition-colors duration-200"
                >
                  <span className="text-gray-400">{link.icon}</span>
                  <span className="text-gray-300 ml-2">{link.name}</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;