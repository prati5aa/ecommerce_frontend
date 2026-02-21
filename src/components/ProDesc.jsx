import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa'

const ProDesc = ({ product }) => {
  const [activeTab, setActiveTab] = useState('description')

  if (!product) {
    return null
  }

  const description = product.description || product.fullDescription || 'Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr.'

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'info', label: 'Additional Info' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'video', label: 'Video' }
  ]

  return (
    <div className='flex mt-20 w-full justify-center bg-[#F9F8FE]'>
      <div className='flex flex-col items-center justify-center w-[80%] py-10'>
        <div className='flex items-center justify-center gap-10 text-[#151875] text-[16px] font-[700]'>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-2 border-b-2 transition-colors ${
                activeTab === tab.id 
                  ? 'border-[#FB2E86] text-[#FB2E86]' 
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        <div className='flex flex-col items-start justify-center w-[80%] gap-4 mx-auto mt-10 text-[14px] font-[700]'>
          {activeTab === 'description' && (
            <>
              <p className='text-[20px] text-[#151875]'>Product Description</p>
              <p className='text-[#A9ACC6]'>{description}</p>
              <p className='text-[20px] text-[#151875]'>More details:</p>
              <ul className='text-[#A9ACC6]'>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />High-quality materials and craftsmanship</li>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Durable and long-lasting design</li>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Easy to assemble and maintain</li>
                <li className='flex gap-3'><FaCheck className='text-[12px] mt-1' />Satisfaction guaranteed or money back</li>
              </ul>
            </>
          )}
          
          {activeTab === 'info' && (
            <>
              <p className='text-[20px] text-[#151875]'>Additional Information</p>
              <div className='text-[#A9ACC6] space-y-2'>
                <p><strong className='text-[#151875]'>Brand:</strong> {product.brand || 'Premium Brand'}</p>
                <p><strong className='text-[#151875]'>Material:</strong> {product.material || 'High-quality materials'}</p>
                <p><strong className='text-[#151875]'>Dimensions:</strong> {product.dimensions || 'Standard size'}</p>
                <p><strong className='text-[#151875]'>Weight:</strong> {product.weight || 'Lightweight'}</p>
                <p><strong className='text-[#151875]'>Warranty:</strong> {product.warranty || '1 year warranty'}</p>
              </div>
            </>
          )}
          
          {activeTab === 'reviews' && (
            <>
              <p className='text-[20px] text-[#151875]'>Customer Reviews</p>
              <div className='text-[#A9ACC6] space-y-4'>
                <div className='border-b pb-4'>
                  <p className='font-[700] text-[#151875]'>John Doe</p>
                  <p className='text-sm'>⭐⭐⭐⭐⭐</p>
                  <p>Great product! Very satisfied with my purchase.</p>
                </div>
                <div className='border-b pb-4'>
                  <p className='font-[700] text-[#151875]'>Jane Smith</p>
                  <p className='text-sm'>⭐⭐⭐⭐</p>
                  <p>Good quality and fast delivery. Would recommend!</p>
                </div>
              </div>
            </>
          )}
          
          {activeTab === 'video' && (
            <>
              <p className='text-[20px] text-[#151875]'>Product Video</p>
              <div className='w-full aspect-video bg-gray-200 rounded flex items-center justify-center text-[#A9ACC6]'>
                <p>Video content coming soon</p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProDesc
