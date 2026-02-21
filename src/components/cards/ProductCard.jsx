import React, { useState, useEffect } from "react";
import { BiHeart, BiSearch } from "react-icons/bi";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import api from "../../api";
import ProductModal from "../Resuable/ProductModal";

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [showModal, setShowModal] = useState(false)
  
  useEffect(() => {
    // Check if product is already in wishlist
    const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const isInWishlist = wishlist.some(item => item.id === product?.id)
    setIsWishlisted(isInWishlist)
  }, [product?.id])
  
  if (!product) {
    return null
  }
  
  const handleViewDetails = () => {
    if (product.id) {
      navigate(`/product/${product.id}`)
    } else {
      console.error('Product ID is missing:', product)
    }
  }

  const handleAddToCart = async (e) => {
    e.stopPropagation()
    
    try {
      // Try backend API first
      try {
        await api.post('/cart', {
          productId: product.id || product._id,
          quantity: 1,
          product: {
            id: product.id || product._id,
            name: product.name,
            price: product.price,
            imgPath: product.imgPath,
            code: product.code
          }
        })
        toast.success(`${product.name} added to cart`)
        // Trigger cart update event for header
        window.dispatchEvent(new Event('cartUpdated'))
      } catch (apiError) {
        console.log('Backend cart API not available, using localStorage:', apiError)
        // Fallback to localStorage
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
        const productInCart = existingCart.find(item => 
          item.id === product.id || item._id === product.id
        )
        
        if (productInCart) {
          productInCart.quantity += 1
          toast.info(`${product.name} quantity updated in cart`)
        } else {
          existingCart.push({ ...product, quantity: 1 })
          toast.success(`${product.name} added to cart`)
        }
        
        localStorage.setItem('cart', JSON.stringify(existingCart))
        // Trigger cart update event for header
        window.dispatchEvent(new Event('cartUpdated'))
      }
    } catch (error) {
      console.error('Error adding to cart:', error)
      toast.error('Failed to add to cart')
    }
  }

  const handleAddToWishlist = (e) => {
    e.stopPropagation()
    const existingWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]')
    const productInWishlist = existingWishlist.find(item => item.id === product.id)
    
    if (productInWishlist) {
      const updatedWishlist = existingWishlist.filter(item => item.id !== product.id)
      localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
      setIsWishlisted(false)
      toast.info(`${product.name} removed from wishlist`)
    } else {
      existingWishlist.push(product)
      localStorage.setItem('wishlist', JSON.stringify(existingWishlist))
      setIsWishlisted(true)
      toast.success(`${product.name} added to wishlist`)
    }
  }

  const handleQuickView = (e) => {
    e.stopPropagation()
    setShowModal(true)
  }

  const handleCardClick = () => {
    // Show modal for some products (you can add logic to determine which products)
    // For now, show modal for products with even IDs
    const productId = parseInt(product.id) || 0
    if (productId % 2 === 0) {
      setShowModal(true)
    } else {
      handleViewDetails()
    }
  }
   
  return (
    <>
      <ProductModal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        product={product}
      />
      <div className="w-[270px] h-fit shadow-sm group relative transition-transform hover:-translate-y-3">
        <div className="bg-[#F6F7FB] h-[236px] pt-[46px] w-full flex flex-col items-center relative">
            <div className="absolute top-[18px] left-[18px] flex gap-4 items-center z-10">
                <IoCartOutline 
                  className="icon-hover cursor-pointer text-[#151875] hover:text-[#FB2E86] transition-colors" 
                  onClick={handleAddToCart}
                  title="Add to cart"
                />
                <BiHeart 
                  className={`icon-hover cursor-pointer transition-colors ${
                    isWishlisted ? 'text-[#FB2E86] fill-[#FB2E86]' : 'text-[#151875] hover:text-[#FB2E86]'
                  }`}
                  onClick={handleAddToWishlist}
                  title="Add to wishlist"
                />
                <BiSearch 
                  className="icon-hover cursor-pointer text-[#151875] hover:text-[#FB2E86] transition-colors" 
                  onClick={handleQuickView}
                  title="Quick view"
                />
            </div>
          <div className="w-[178px] aspect-square mb-3 flex items-center justify-center">
            <img 
              src={product.imgPath || '/images/chair1.png'} 
              alt={product.name || 'product image'} 
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.src = '/images/chair1.png'
              }}
            />
          </div>
          <button 
            className="opacity-0 transition-all duration-300 group-hover:opacity-100 absolute bottom-2 bg-[#08D15F] w-fit rounded-[2px] px-3 py-2 text-white text-sm cursor-pointer" 
            onClick={handleCardClick}
          >
            View Details
          </button>
        </div>

        <div className="w-full flex flex-col items-center py-4 gap-3 transition-all duration-400 ease-in-out group-hover:bg-[#2F1AC4]">
          <p className="text-[#FB2E86] text-[18px] font-[700] text-center px-2">
            {product.name || 'Product Name'}
          </p>
          <div className="flex gap-1 w-[54px]">
            <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]" />
            <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]" />
            <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px] group-hover:bg-[#FFEAC1]" />
          </div>
          <p className="text-[#151875] text-[14px]">{product.code || 'Code - N/A'}</p>
          <p className="text-[#151875] text-[14px] font-[600]">{product.price || '$0.00'}</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;