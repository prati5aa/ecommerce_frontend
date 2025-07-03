import React from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'

const ShowPro = () => {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex items-center w-[80%]   gap-10 mt-20 p-4 shadow-lg'>
        <div className="flex gap-3 w-[45%] h-[440px]">
          <div className='w-[130px] flex flex-col  gap-2'>
        <img src='/images/prod2.jpg' className='w-[140px] h-[140px] object-cover rounded-[2px]' />
        <img src='/images/prod3.jpg' className='w-[140px] h-[140px] object-cover rounded-[2px]'/>
        <img src='/images/prod4.jpg' className='w-[140px] h-[140px] object-cover rounded-[2px]'/>
          </div>
          <img src='/images/prod1.jpg' className='w-[300px] h-[440px] object-cover rounded-[2px]' />

        </div>
        <div className='flex flex-col w-[55%] items-start gap-4 mt-20 py-4 text-[#151875]'>
            <p className='flex text-amber-300 gap-2'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /> </p>
            <p className='text-[16px] font-[400]'>$32.00</p>
            <p className='text-[16px] font-[700]'>Color</p>
            <p className='text-[16px] font-[700]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
            <p className='flex items-center justify-center px-15 gap-5 w-full text-[16px] font-[400]'>Add To cart <CiHeart /></p>
            <p className='text-[16px] font-[700]'>Categories:</p>
            <p className='text-[16px] font-[700]'>Tags</p>
            <p className='text-[16px] font-[700] '>Share</p>
        </div>
      </div>
    </div>
  )
}

export default ShowPro
