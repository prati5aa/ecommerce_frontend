import React, { useState } from 'react'
import { CiHeart } from 'react-icons/ci'
import { FaStar } from 'react-icons/fa'
import { toast } from 'react-toastify'
import api from '../api'

const ShowPro = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  if (!product) {
    return null
  }

  const images = product.images || [product.image || product.imgPath || '/images/prod1.jpg']
  const mainImage = Array.isArray(images) ? images[selectedImage] : images
  const displayImages = Array.isArray(images) ? images : [images, images, images]

  const handleAddToCart = async () => {
    try {
      // Try backend API first
      try {
        await api.post('/cart', {
          productId: product.id || product._id,
          quantity: quantity,
          product: {
            id: product.id || product._id,
            name: product.productName || product.name,
            price: product.price,
            imgPath: product.image || product.imgPath || product.images?.[0],
            code: product.code
          }
        })
        toast.success(`${product.productName || product.name} added to cart!`)
        // Trigger cart update event for header
        window.dispatchEvent(new Event('cartUpdated'))
      } catch (apiError) {
        console.log('Backend cart API not available, using localStorage:', apiError)
        // Fallback to localStorage
        const existingCart = JSON.parse(localStorage.getItem('cart') || '[]')
        const productId = product.id || product._id
        const productInCart = existingCart.find(item => 
          item.id === productId || item._id === productId
        )
        
        if (productInCart) {
          productInCart.quantity += quantity
          toast.info(`${product.productName || product.name} quantity updated in cart`)
        } else {
          existingCart.push({
            id: productId,
            name: product.productName || product.name,
            price: product.price,
            imgPath: product.image || product.imgPath || product.images?.[0],
            code: product.code,
            quantity: quantity
          })
          toast.success(`${product.productName || product.name} added to cart!`)
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

  const renderStars = (rating = 5) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <FaStar key={i} className={i < rating ? 'text-amber-400' : 'text-gray-300'} />
    ))
  }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className='flex items-center w-[80%] gap-10 mt-20 p-4 shadow-lg'>
        <div className="flex gap-3 w-[45%] h-[440px]">
          <div className='w-[130px] flex flex-col gap-2'>
            {displayImages.slice(0, 3).map((img, index) => (
              <img 
                key={index}
                src={img} 
                className={`w-[140px] h-[140px] object-cover rounded-[2px] cursor-pointer border-2 ${
                  selectedImage === index ? 'border-blue-500' : 'border-transparent'
                }`}
                onClick={() => setSelectedImage(index)}
                alt={`Product view ${index + 1}`}
              />
            ))}
          </div>
          <img 
            src={mainImage} 
            className='w-[300px] h-[440px] object-cover rounded-[2px]' 
            alt={product.productName || product.name}
          />
        </div>
        <div className='flex flex-col w-[55%] items-start gap-4 mt-20 py-4 text-[#151875]'>
          <h1 className='text-[24px] font-[700] text-[#151875]'>
            {product.productName || product.name}
          </h1>
          <div className='flex text-amber-300 gap-2'>
            {renderStars(product.rating || 5)}
          </div>
          <p className='text-[20px] font-[700] text-[#FB2E86]'>
            ${product.price || '32.00'}
          </p>
          <div className='flex items-center gap-4'>
            <p className='text-[16px] font-[700]'>Quantity:</p>
            <div className='flex items-center gap-2'>
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className='w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100'
              >
                -
              </button>
              <span className='w-12 text-center'>{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className='w-8 h-8 border rounded flex items-center justify-center hover:bg-gray-100'
              >
                +
              </button>
            </div>
          </div>
          <p className='text-[16px] font-[400] text-[#A9ACC6]'>
            {product.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.'}
          </p>
          <button 
            onClick={handleAddToCart}
            className='flex items-center justify-center gap-3 px-6 py-3 bg-[#FB2E86] text-white rounded hover:bg-pink-600 transition-colors'
          >
            Add To Cart <CiHeart />
          </button>
          <div className='flex flex-col gap-2'>
            <p className='text-[16px] font-[700]'>
              Categories: <span className='font-[400] text-[#A9ACC6]'>{product.category || 'Furniture'}</span>
            </p>
            <p className='text-[16px] font-[700]'>
              Tags: <span className='font-[400] text-[#A9ACC6]'>{product.tags || 'Modern, Chair, Office'}</span>
            </p>
            <p className='text-[16px] font-[700]'>
              Share: 
              <span className='font-[400] text-[#A9ACC6] ml-2'>Facebook, Twitter, Pinterest</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowPro
