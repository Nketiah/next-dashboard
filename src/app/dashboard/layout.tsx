import React from 'react'

export default function DashboardLayout({children}:{children: React.ReactNode}) {
    return (
      <>
      <section className='bg-secondary'>
        {children}
      </section>
      </>
    )
  }