import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaRegHeart } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import { TbPhoneCall } from "react-icons/tb";
import api from "../api";

function Header() {
  const [cartCount, setCartCount] = useState(0)

  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        // Try backend first
        try {
          const response = await api.get('/cart')
          const data = response.data
          const items = data.cart || data.cartItems || data.items || data || []
          const count = Array.isArray(items) 
            ? items.reduce((sum, item) => sum + (item.quantity || 1), 0)
            : 0
          setCartCount(count)
        } catch (error) {
          // Fallback to localStorage
          const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
          const count = localCart.reduce((sum, item) => sum + (item.quantity || 1), 0)
          setCartCount(count)
        }
      } catch (error) {
        console.error('Error fetching cart count:', error)
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
        const count = localCart.reduce((sum, item) => sum + (item.quantity || 1), 0)
        setCartCount(count)
      }
    }

    fetchCartCount()

    // Listen for cart updates
    const handleCartUpdate = () => {
      fetchCartCount()
    }

    window.addEventListener('cartUpdated', handleCartUpdate)
    return () => window.removeEventListener('cartUpdated', handleCartUpdate)
  }, [])

  return (
    <div className="flex justify-center bg-[#7E33E0]">
      <div className="text-white bg-[#7E33E0] flex justify-between items-center w-[80%] h-[44px]">
        <div className="flex gap-[10px]">
          <p className="flex items-center gap-2">
            <CgMail />
            <span className="text-sm font-[700]">pratik@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            <TbPhoneCall />
            <span className="text-sm font-[700]">(1234)567890</span>
          </p>
        </div>
      
        <div className="flex gap-[15px]">
          <ul className="flex gap-[8px] text-[14px]">
            <li className="flex items-center gap-1 text-sm font-[700]">
              English <RiArrowDropDownLine />
            </li>
            <li className="flex items-center gap-1 text-sm font-[700]"> 
              USD <RiArrowDropDownLine />
            </li>
            <li className="flex items-center gap-1 text-sm font-[700]">
              Login <RxPerson />
            </li>
            <li className="flex items-center gap-1 text-sm font-[700]">
              Wishlist <FaRegHeart />
            </li>
          </ul>
          <Link to="/cart" className="relative flex items-center">
            <BsCart2 className="text-xl cursor-pointer hover:text-pink-200 transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#FB2E86] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount > 9 ? '9+' : cartCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;