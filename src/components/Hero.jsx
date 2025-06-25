import React from 'react'
import lamp from '../assets/lamp.png' // Corrected the image path
import { LuDiamond, LuDiamondMinus } from 'react-icons/lu'
import { FaDiamond } from 'react-icons/fa6'
function Hero() {
  return (
    <div>
        <div className="flex  items-center bg-[#F2F0FF] w-full h-[500px] relative">
        <img src={lamp} alt="lamp" className="absolute left-[80px] inset-0 mt-2 h-[387px] w-[387px] object-cover " />
        <div className=" absolute left-[390px] flex flex-col gap-2 items-start   text-[#0D0E43] w-[500px] ">
            <span className='text-[#FB2E86] text-[14px] font-[600]'>Best Furniture For Your Castle....</span>
            <span className='font-[700] text-[40px] text-black leading-[132%] tracking-[2%]'>New Furniture Collection Trends in 2025</span>
            <span className='font-[700] text-[14px] text-[#8A8FB9] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                in phasellus non in justo.</span>     
            <button className='bg-[#FB2E86] w-[163px] text-white font-[700] text-[17px] h-[50px] rounded-[2px]'>Shop now</button>       

        </div>
        <img src="images/sofa.png" alt="sofa" className='absolute left-[930px] top-[50px] h-[400px] w-[400px] object-cover' />

        <div className='absolute left-160 bottom-5'> <div className='flex items-center gap-[6px] text-[10px] text-[#FB2E86]'>
           <div className='w-[7px] border-[#FB2E86] border-[1px] rounded-[1px] bg-[#FB2E86] h-[7px] rotate-45'></div>
                      <div className='w-[7px] border-[#FB2E86] border-[1px] rounded-[1px]  h-[7px] rotate-45'></div>
           <div className='w-[7px] border-[#FB2E86] border-[1px] rounded-[1px]  h-[7px] rotate-45'></div>

           </div> </div>
        </div>
    </div>
  )
}

export default Hero
