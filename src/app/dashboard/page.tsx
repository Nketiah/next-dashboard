import MainArea from '@/components/Content/MainArea'
import DashboardSidebar from '@/components/Sidebar/DashboardSidebar'
import React from 'react'



const DashboardHome = () => {
  return (
    <>
      <section className='flex'>
        <DashboardSidebar/>
        <MainArea/>
      </section>
    </>
  )
}

export default DashboardHome