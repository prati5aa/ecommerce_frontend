import React from "react";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { FaSearchPlus } from "react-icons/fa";
import { LiaSearchPlusSolid } from "react-icons/lia";

function Cards({ itemName, code, price, img }) {
  return (
    <div> 
      <div className="group w-[200px]  bg-white  overflow-hidden transition-transform duration-300 hover:-translate-y-3  hover:shadow-xl hover:bg-[#2F1AC4]  hover:text-white relative">
        <div className="hidden  absolute top-[15px] left-[14px]  flex gap-[5px] group-hover:block group-hover:flex">
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[19px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
            <CiShoppingCart />
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[19px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
            <CiHeart />
          </div>
          <div className="w-[30px] h-[30px] flex justify-center items-center rounded-full text-[19px] text-[#1389FF] hover:text-[#2F1AC4]  hover:bg-[#EEEFFB90]">
            <LiaSearchPlusSolid />
          </div>
        </div>
        <div className="bg-[#F6F7FB] flex justify-center items-center h-[180px] w-full ">
          <img className="w-[100px] h-[100px] transition-transform duration-300 group-hover:scale-90   " src={img} />
          <div className="absolute bottom-34 flex hidden bg-[#08D15F] w-fit text-[12px] text-white rounded-[2px] p-2 group-hover:block">
            View Details
          </div>
        </div>
        <div className="flex flex-col items-center p-5">
          <p className="font-[400] text-[18px] ">{itemName}</p>
          <div className="flex gap-1 h-1 m-2">
            <div className="rounded bg-[#05E6B7]  w-[14px]"></div>
            <div className="rounded bg-[#F701A8] w-[14px]"></div>
            <div className="rounded bg-[#00009D] w-[14px]"></div>
          </div>
          <p className="font-[500] text-[14px] text-[#151875] group-hover:text-white  ">
            Code -{code}{" "}
          </p>
          <p className="font-[500] text-[14px] text-[#151875] group-hover:text-white ">
            {price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
