import React from 'react'

const HeroNav = ({name}) => {
  return (
    <div>
       <div className='flex flex-col justify-center  mt-20 h-[200px] bg-[#F6F5FF]'>
        <p className='text-[#101750] px-80 text-[35px] font-[700]'> {name}</p>
        <p className='text-[16px] px-80 font-[500] flex gap-2'>
            <span className='text-[#101750]'>Home</span>
            <span className='text-[#101750]'>. Pages</span>
            <span className='text-[#FB2E86]'>. {name}</span>
        </p>
      </div>
    </div>
  )
}

export default HeroNav
