import React from 'react'
import { AiOutlineShopping } from "react-icons/ai"
import { AiOutlineDollarCircle } from "react-icons/ai"
import { FaRegUserCircle } from "react-icons/fa"
import { GoArrowDownRight } from 'react-icons/go'
import { RiWalletLine } from "react-icons/ri"



type Props = {
    iconColor: string
    iconBgColor: string
    text: string
    title: string
}


const Card = ({iconColor, iconBgColor, text, title}:Props) => {
    return (
        <>
            <section className='p-5'>
                <section className='flex flex-col justify-between bg-white w-full h-[145px] border shadow p-4 rounded hover:shadow-lg'>
                    <div className='flex items-center justify-between font-medium'>
                        <p className='text-appDark-100 text-[13px] uppercase'>{text}</p>
                        <div className='flex items-center text-[14px]'>
                            <GoArrowDownRight size={14} className='text-red-500' />
                            <p className='text-red-500 pl-1'>-3.57 %</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='flex flex-col items-center gap-5'>
                            <div className='text-appDark-800 text-[22px] font-semibold'>$559.25k</div>
                            <div className='text-appDark-200 text-[13px] underline'>
                               {`${title.includes('withdraw') ? 'withdraw money' : `View ${title}`  }`}
                            </div>
                        </div>
                        <div className={`${iconBgColor} p-[0.6rem] rounded mt-5`}>
                            <AiOutlineShopping size={30} className={`${iconColor}`} />
                        </div>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Card