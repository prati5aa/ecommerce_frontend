import React from 'react'
import { CiHeart, CiShoppingCart } from 'react-icons/ci'
import { LiaSearchPlusSolid } from 'react-icons/lia'

function Latest({name,price,img}) {
  return (
   
      <div className='flex flex-col gap-[4px]   w-[280px]   hover:shadow-xl group relative'>
        <div className="hidden  absolute bottom-[42px] left-[14px] gap-[1px] flex-col  group-hover:flex">
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full  text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <CiShoppingCart  />
                  </div>
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <CiHeart />
                  </div>
                  <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[16px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
                    <LiaSearchPlusSolid />
                  </div>
            </div>
        <div className='flex justify-center  items-center  w-full h-[180px] bg-[#F7F7F7] group-hover:bg-white '>
          <img className='p-[35px] w-[220px] h-[220px] object-cover transition-transform duration-300 group-hover:scale-90' src={img} alt='Product' />

        </div>
          <div className='flex justify-between items-center bg-white py-1 mb-1  w-full '>
            <p className='font-[500] text-[14px] text-[#151875] underline decoration-[#EEEFFB] decoration-2 underline-offset-4 '>{name} </p>
            <p className='font-[500] text-[14px] text-[#151875]'>{price}</p>
          </div>
        </div>
    
      

  )
}

export default Latest
