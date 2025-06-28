import React from 'react'
import Cards from './Cards';
import TrendingCards from './TrendingCard';
const card=[
  {
    itemName: "Cantilever Chair",
    code: "Y523201",
    price: "$42.00",
    img: "images/chair1.png"
  },
  {
    itemName: "Cantilever Chair",
    code: "Y523202",
    price: "$50.00",
    img: "images/chair2.png"
  },
  {
    itemName: "Cantilever Chair",
    code: "Y523203",
    price: "$36.00",
    img: "images/chair3.png"
  },
  {
    itemName: "Cantilever Chair",
    code: "Y523204",
    price: "$40.00",
    img: "images/chair4.png"
  }
];
const Trending = () => {
  return (
    <div className='w-full flex items-center justify-center mt-10'>
        <div className='flex flex-col items-center justify-center w-[70%] gap-5'>
            <p className='text-[42px] font-[700] text-[#151875]'> Trending Products</p>
       <div className='flex items-center justify-center w-full   gap-[20px] '>
         { card.map((item,index)=>(
             <TrendingCards
             key={index}
             itemName={item.itemName}
             code={item.code}
             price={item.price}
             img={item.img}/>
            ))
        }
         
        </div>

        <div className='flex items-center justify-center w-full gap-2'  >
          
          {/* shop now div */}
            <div className='w-[37%] h-[230px] bg-[#EEEFFB] relative'>
                <div className='flex flex-col  justify-center gap-2 p-5 '>

                    <p className=' text-[#151875] text-[26px] font-[700]'>23% off in all products</p>
                    <p className='text-[#FB2E86] text-[16px] font-[600] '>Shop Now</p>
                    <img className='absolute bottom-0 right-0 w-[180px] h-[180px]' src="images/clock.png"/>
                </div>
            </div>
            {/* view collection div */}
            <div className='w-[37%] h-[230px] bg-[#EEEFFB] relative'>
                <div className='flex flex-col  justify-center gap-2 p-5'>

                    <p className=' text-[#151875] text-[26px] font-[700]'>23% off in all products</p>
                    <p className='text-[#FB2E86] text-[16px] font-[600] '>View Collection</p>
                    <img className='absolute bottom-0 right-0 w-[250px] ' src="images/bed.png"/>
                </div>

            </div>
            <div className='w-[26%] flex flex-col h-[230px] gap-2'>
                {/* item 1 */}
                <div className=' flex gap-2'>
                   <div className='bg-[#EEEFFB] w-25 flex justify-center'> <img src="images/trend.png" /> </div>
                <p className='flex flex-col'>
                    <span className='text-[16px] text-[#151875] font-[700]'>Executive Seat chair</span>
                    <span  className='text-[12px] font-[400] text-[#151875] line-through'>$32.00</span>
                    </p></div>

                    {/* item2 */}
                <div className=' flex gap-2'>
                    <div className='bg-[#EEEFFB] w-25 flex justify-center'> <img src="images/trend.png" /> </div>
                    <p className='flex flex-col'>
                    <span className='text-[16px] text-[#151875] font-[700]'>Executive Seat chair</span>
                    <span className='text-[12px] font-[400] text-[#151875] line-through '>$32.00</span>
                    </p>
                </div>
                {/* item3 */}
                <div className=' flex gap-2'>
                    <div className='bg-[#EEEFFB] w-25 flex justify-center'> <img src="images/trend.png" /> </div>
                    <p className='flex flex-col'>
                    <span className='text-[16px] text-[#151875] font-[700]'>Executive Seat chair</span>
                    <span className='text-[12px] font-[400] text-[#151875] line-through'>$32.00</span>
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Trending
