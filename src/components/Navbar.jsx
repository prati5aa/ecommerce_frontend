import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import api from "../api";

function Navbar() {
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0)
  
  const isActive = (path) => {
    return location.pathname === path ? 'text-[#FB2E86]' : '';
  };

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
    <div className="flex justify-center py-[15px] bg-[#FFFFFF] text-[#0D0E43]">
      <div className="flex justify-between items-center w-[80%] h-[40px]">
        <div className="flex items-center gap-22">
          <Link to="/" className="flex items-center font-[600] text-[#0D0E43] text-[34px] hover:text-[#FB2E86] transition-colors">Hekto</Link>
          <ol className="flex text-[#0D0E43] gap-5 text-sm font-[500] ml-8">
            <li className={`text-[16px] font-[400] ${isActive('/')}`}>
              <Link to="/">Home</Link>
            </li>
            <li className={`text-[16px] font-[400] ${isActive('/about')}`}>
              <Link to="/about">About</Link>
            </li>
            <li className={`text-[16px] font-[400] ${isActive('/shop') || location.pathname.startsWith('/product')}`}>
              <Link to="/shop">Shop</Link>
            </li>
            
            <li className="text-[16px] font-[400]">Blog</li>
            <li className="text-[16px] font-[400]">Contact</li>
          </ol>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center h-[40px] w-[317px]">
            <input type="search" className="border-[#E7E6EF] border-[2px] text-[#555555] px-2 text-[24px] h-full w-full " />
            <button className=" flex justify-center items-center font-[800] bg-[#FB2E86] h-[40px] w-[51px] text-[20px] text-white"><MdSearch /></button>
          </div>
          
          
          
        </div>
      </div>
    </div>
  );
}
  
export default Navbar;
