import React, { useState } from 'react'

const Discount = () => {

    const tabs=[
        {
            id:1,
            name:"Wood Chair"
        },
        {
            id:2,
            name:"Plastic Chair"
        },
        {
            id:3,
            name:"Sofa Collection"
        }
    ]
     
    const [imageLink, setImageLink] = useState("images/discount.png");

    const pics=[
        { id:1,img:"images/discount.png"},
        { id:2,img:"images/latest2.png"},
        { id:3,img:"images/latest4.png"}]
    const [activeTab, setActiveTab] = useState(1);
    const handleClick=(id)=>{
        setActiveTab(id)
        if (id==1){
            setImageLink("images/discount.png")
        }
        else if (id==2){
            setImageLink("images/latest4.png")
        }
        else if (id==3){
            setImageLink("images/latest3.png")
        }
        
    }
  return (
    <div>
      <div className='flex flex-col gap-7  items-center mt-15 mb-5 w-full'>
        <p className='text-[35px] font-[700] text-[#151875]'> Discount Item</p>
        <div className='flex justify-between w-[30%]'>
           { tabs.map((tab,index)=>(
               <span 
                 key={tab.id}
                 className={`text-[18px] font-[600] cursor-pointer 
            ${activeTab === tab.id
              ? "text-[#FB2E86]"
              : "text-[#151875]"}`} 
                 onClick={()=>handleClick(tab.id)}
               >
                 {tab.name}
               </span>
           ))
           }
        </div>
        <div className='flex w-[80%] items-center gap-4 justify-center '>

        <div className='flex flex-col items-start gap-4 w-[45%]'>
                <p className='text-[#151875] text-[35px] font-[700] '>20% Discount Of All Products</p>
                <p className='text-[21px] text-[#FB2E86] font-[400]'>Eams Sofa Compact</p>
                <p className='text-[17px] text-[#B7BACB] font-[400]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className='flex justify-between w-full'>
                   <div className='flex flex-col gap-[10px]'>
                    <span className='text-[#B8B8DC] text-[16px]'>Material expose like metals</span>
                    <span className='text-[#B8B8DC] text-[16px]'>Simple neutral colours.</span>
                   </div>
                   <div className='flex flex-col gap-[10px]'>
                     <span className='text-[#B8B8DC] text-[16px]'>Clear lines and geomatric figures</span>
                     <span className='text-[#B8B8DC] text-[16px]'>Material expose like metals</span>
                   </div>
                </div>
                <button className='bg-[#FB2E86] rounded-[2px] text-white text-[17px] py-4 w-[180px]'>Shop Now</button>
        </div>
        <div className=' aspect-square bg-[#EEEFFB] rounded-full '>
        <img className='w-[350px] h-[250] p-2' src={imageLink}/> </div>
        </div>
      </div>
    </div>
  )
}

export default Discount
