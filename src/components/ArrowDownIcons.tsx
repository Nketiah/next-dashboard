import React from 'react'
import { SlArrowDown } from "react-icons/sl";
import { twMerge } from 'tailwind-merge'


type Props = {
    size: number
    className?: string
}
const ArrowDownIcons = ({size,className}:Props) => {

  return (
    <>
      <SlArrowDown
       size={size}
       className={twMerge('text-navLight', className)}
      />
    </>
  )
}

export default ArrowDownIcons