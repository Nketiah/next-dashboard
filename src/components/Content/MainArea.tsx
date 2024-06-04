import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx"
import Navbar from '../Header/Navbar'



const MainArea = () => {
  return (
    <>
      <section className='h-screen flex-1 relative'>
        <Navbar/>
        <section className='p-5'>
          Main Area
        </section>
      </section>
    </>
  )
}

export default MainArea