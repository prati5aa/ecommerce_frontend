import React from "react";
import { BsCart2 } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { TbPhoneCall } from "react-icons/tb";

function header() {
  return (
    <div className="flex justify-center bg-[#7E33E0]  ">
      <div className=" text-white bg-[#7E33E0] flex justify-between items-center w-[80%] h-[44px]">
        <div className="flex gap-[10px]">
          <p className="flex items-center gap-2">
            <CgMail />
            <span className="text-sm font-[700]">pratik@gmail.com</span>{" "}
          </p>
          <p className="flex items-center gap-2">
            <TbPhoneCall />
            <span className="text-sm font-[700]">(1234)567890</span>{" "}
          </p>
        </div>
      
    
    <div className="flex gap-[15px]  ">
          <ul className="flex gap-[8px] text-[14px]">
            <li className="flex items-center gap-1 text-sm font-[700]">
                English <RiArrowDropDownLine />
            </li>
            <li className="flex items-center gap-1 text-sm font-[700]"> 
                USD <RiArrowDropDownLine />
            </li>
            <li className="flex items-center gap-1 text-sm font-[700]">
                Login<RxPerson />

            </li>
            <li className="flex items-center gap-1 text-sm font-[700]">
                Wishlist<FaRegHeart />

            </li>
            
          </ul>
          <BsCart2/>

        </div>

      
      </div>
    </div>
  );
}

export default header;
