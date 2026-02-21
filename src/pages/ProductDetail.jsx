import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShowPro from '../components/ShowPro.jsx'
import ProDesc from '../components/ProDesc.jsx'
import HeroNav from '../components/Resuable/HeroNav.jsx'
import Breadcrumbs from '../components/Resuable/Breadcrumb.jsx'
import { API_BASE_URL_FULL } from '../api'
import { toast } from 'react-toastify'

const ProductDetail = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const pageName = "Product Details"

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true)
        const response = await fetch(`${API_BASE_URL_FULL}/product/${id}`)
        
        if (!response.ok) {
          throw new Error('Product not found')
        }
        
        const data = await response.json()
        setProduct(data.product || data)
      } catch (error) {
        console.error('Error fetching product:', error)
        toast.error('Failed to load product details')
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchProduct()
    }
  }, [id])

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-xl text-gray-600">Product not found</p>
      </div>
    )
  }

  return (
    <div>
      <HeroNav name={pageName} />
      <ShowPro product={product} />
      <ProDesc product={product} />
    </div>
  )
}

export default ProductDetail
