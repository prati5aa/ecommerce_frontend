import React from "react";

import { MdSearch } from "react-icons/md";

function navbar() {
  return (
    <div className="flex justify-center py-[15px] bg-[#FFFFFF] text-[#0D0E43]">
      <div className="flex justify-between items-center w-[80%] h-[40px]">
        <div className="flex items-center gap-22">
          <p className=" flex items-center font-[600] text-[#0D0E43] text-[34px]">Hekto</p>
          <ol className="flex gap-5 text-sm font-[500] ">
            <li className=" text-[#0D0E43] text-[16px] font-[400] active:text-[#FB2E86]">Home</li>
            <li className=" text-[#0D0E43] text-[16px] font-[400] active:text-[#FB2E86]">Page</li>
            <li className=" text-[#0D0E43] text-[16px] font-[400] active:text-[#FB2E86]"><a href="/product">Products</a></li>
            <li className=" text-[#0D0E43] text-[16px] font-[400] active:text-[#FB2E86]">Blog</li>
            <li className=" text-[#0D0E43] text-[16px] font-[400] active:text-[#FB2E86]">Shop</li>
            <li className=" text-[#0D0E43] text-[16px] font-[400] active:text-[#FB2E86]">Contact</li>
          </ol>
        </div>
        <div className="flex items-center h-[40px] w-[317px]">
          <input type="search" className="border-[#E7E6EF] border-[2px] text-[#555555] px-2 text-[24px] h-full w-full " />
          <button className=" flex justify-center items-center font-[800] bg-[#FB2E86] h-[40px] w-[51px] text-[20px] text-white"><MdSearch /></button>
        </div>
      </div>
    </div>
  );
}

export default navbar;
