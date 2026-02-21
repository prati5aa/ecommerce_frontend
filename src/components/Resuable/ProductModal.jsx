import React from 'react'
import { IoClose } from 'react-icons/io5'

const ProductModal = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg p-8 max-w-md w-[90%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <IoClose className="text-2xl" />
        </button>

        <div className="text-center">
          <div className="mb-6">
            <div className="w-24 h-24 bg-[#F6F7FB] rounded-lg flex items-center justify-center mx-auto mb-4">
              <img
                src={product.imgPath || product.image || '/images/chair1.png'}
                alt={product.name}
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.target.src = '/images/chair1.png'
                }}
              />
            </div>
            <h2 className="text-2xl font-bold text-[#151875] mb-2">
              {product.name || 'Product'}
            </h2>
            <p className="text-lg text-[#FB2E86] font-bold">
              {product.price || '$0.00'}
            </p>
          </div>

          <div className="bg-[#F9F8FE] rounded-lg p-6 mb-6">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-[#FB2E86] rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">ℹ️</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#151875] mb-3">
              Frontend Practice Project
            </h3>
            <p className="text-[#A9ACC6] leading-relaxed">
              This is a product created for frontend practice. The backend integration is not yet completed. 
              This is a demonstration of the frontend UI/UX implementation.
            </p>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={onClose}
              className="px-6 py-3 bg-[#FB2E86] text-white rounded hover:bg-pink-600 transition-colors font-bold"
            >
              Got it
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductModal
