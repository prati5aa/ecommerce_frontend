import React, { useState, useEffect } from 'react'
import { IoClose } from 'react-icons/io5'
import { FaGift, FaRocket } from 'react-icons/fa'

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenPopup = localStorage.getItem('hasSeenWelcomePopup')
    
    if (!hasSeenPopup) {
      
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 1000)
      
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    // Remember that user has seen the popup
    localStorage.setItem('hasSeenWelcomePopup', 'true')
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleClose}
    >
      <div 
        className="bg-white rounded-lg p-8 max-w-lg w-full relative shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
        >
          <IoClose className="text-2xl" />
        </button>

        <div className="text-center">
          <div className="mb-6">
            
          
          </div>

          <div className="bg-gradient-to-br from-[#F9F8FE] to-[#F6F7FB] rounded-lg p-6 mb-6 border-2 border-[#FB2E86]">
            <h3 className="text-xl font-bold text-[#151875] mb-3">
              Frontend Practice Project
            </h3>
            <p className="text-[#A9ACC6] leading-relaxed mb-4">
              This is a product created for frontend practice. The backend integration is not yet completed. 
              This is a demonstration of the frontend UI/UX implementation.
            </p>
          
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleClose}
              className="px-8 py-3 bg-[#FB2E86] text-white rounded-lg hover:bg-pink-600 transition-colors font-bold shadow-lg hover:shadow-xl"
            >
              Start Shopping
            </button>
          </div>
          
          <p className="text-xs text-[#A9ACC6] mt-4">
            You can close this popup and it won't show again
          </p>
        </div>
      </div>
    </div>
  )
}

export default WelcomeModal
