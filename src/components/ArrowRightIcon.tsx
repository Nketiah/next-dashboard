import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { twMerge } from 'tailwind-merge'


type Props = {
    size: number
    className?: string
}
const ArrowRightIcon = ({size,className}:Props) => {

  return (
    <>
      <SlArrowRight
       size={size}
       className={twMerge('text-navLight', className)}
      />
    </>
  )
}

export default ArrowRightIcon