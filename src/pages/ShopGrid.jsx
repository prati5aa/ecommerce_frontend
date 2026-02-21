import React, { useState, useEffect } from 'react'
import FilterBar from '../components/Resuable/FilterBar';
import Breadcrumbs from '../components/Resuable/Breadcrumb';
import HeroNav from '../components/Resuable/HeroNav';
import ProductCard from '../components/cards/ProductCard';
import Pagination from '../components/Resuable/Pagination';
import { API_BASE_URL_FULL } from '../api';
import api from '../api';
import { toast } from 'react-toastify';
import { productDetails } from '../data/productData';

// Fallback products in case API fails
const fallbackProducts = productDetails.map((product, index) => ({
  id: product.id || index + 1,
  name: product.name || 'Product',
  price: product.price || '$0.00',
  imgPath: product.imgPath || '/images/chair1.png',
  code: product.Code || `Code - Y${String(index + 1).padStart(5, '0')}`
}));

const ShopGrid = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('default')

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        console.log('Fetching products from:', `${API_BASE_URL_FULL}/product`)
        
        // Try using axios first (handles auth automatically)
        let data
        try {
          const response = await api.get('/product')
          data = response.data
          console.log('API Response (axios):', data)
        } catch (axiosError) {
          // Fallback to fetch if axios fails
          console.warn('Axios failed, trying fetch:', axiosError)
          const fetchResponse = await fetch(`${API_BASE_URL_FULL}/product`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          
          if (!fetchResponse.ok) {
            const errorText = await fetchResponse.text()
            console.error('Fetch Error Response:', errorText)
            throw new Error(`Failed to fetch products: ${fetchResponse.status} ${fetchResponse.statusText}`)
          }
          
          data = await fetchResponse.json()
          console.log('API Response (fetch):', data)
        }
        
        // Handle different response structures
        let productsList = []
        if (Array.isArray(data)) {
          productsList = data
        } else if (data.products && Array.isArray(data.products)) {
          productsList = data.products
        } else if (data.data && Array.isArray(data.data)) {
          productsList = data.data
        } else if (data.result && Array.isArray(data.result)) {
          productsList = data.result
        } else if (data.product && Array.isArray(data.product)) {
          productsList = data.product
        } else {
          console.warn('Unexpected API response structure:', data)
          console.warn('Full response:', JSON.stringify(data, null, 2))
          productsList = []
        }
        
        console.log('Products list length:', productsList.length)
        if (productsList.length > 0) {
          console.log('First product sample:', productsList[0])
        }
        
        // Transform products to match expected format
        const transformedProducts = productsList.map((product, index) => {
          // Handle price formatting
          let priceValue = product.price
          if (typeof priceValue === 'number') {
            priceValue = `$${priceValue.toFixed(2)}`
          } else if (typeof priceValue === 'string') {
            if (!priceValue.startsWith('$')) {
              const numericValue = priceValue.replace(/[^0-9.]/g, '')
              if (numericValue) {
                priceValue = `$${parseFloat(numericValue).toFixed(2)}`
              } else {
                priceValue = '$0.00'
              }
            }
          } else {
            priceValue = '$0.00'
          }
          
          const transformed = {
            id: product._id || product.id || `product-${index + 1}`,
            name: product.productName || product.name || 'Unnamed Product',
            price: priceValue,
            imgPath: product.image || product.imgPath || product.images?.[0] || product.img || '/images/chair1.png',
            code: product.code || product.Code || `Code - Y${String(index + 1).padStart(5, '0')}`
          }
          return transformed
        })
        
        console.log('✅ Transformed products count:', transformedProducts.length)
        if (transformedProducts.length > 0) {
          console.log('Sample transformed product:', transformedProducts[0])
        }
        
        if (transformedProducts.length === 0) {
          console.warn('❌ No products found in response, using fallback products')
          toast.info('Using sample products. API may be unavailable.')
          // Use fallback products
          setProducts(fallbackProducts)
          setFilteredProducts(fallbackProducts)
        } else {
          console.log(`✅ Successfully loaded ${transformedProducts.length} products`)
          setProducts(transformedProducts)
          setFilteredProducts(transformedProducts)
        }
        setCurrentPage(1) // Reset to first page when products load
      } catch (error) {
        console.error('Error fetching products:', error)
        console.log('Using fallback products due to error')
        toast.info('Using sample products. Check console for API errors.')
        // Use fallback products on error
        setProducts(fallbackProducts)
        setFilteredProducts(fallbackProducts)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Filter and sort products
  useEffect(() => {
    let filtered = [...products]

    // Apply search filter
    if (searchQuery.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.code.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0
          return priceA - priceB
        })
        break
      case 'price-high':
        filtered.sort((a, b) => {
          const priceA = parseFloat(a.price.replace(/[^0-9.]/g, '')) || 0
          const priceB = parseFloat(b.price.replace(/[^0-9.]/g, '')) || 0
          return priceB - priceA
        })
        break
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name))
        break
      case 'name-desc':
        filtered.sort((a, b) => b.name.localeCompare(a.name))
        break
      default:
        // Keep original order
        break
    }

    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when filter changes
  }, [products, searchQuery, sortBy])

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="text-gray-600">Loading products...</p>
      </div>
    )
  }

  return (
    <>
      <div>
        <Breadcrumbs />
        <HeroNav />
      </div>

      <FilterBar        
        setItemsPerPage={setItemsPerPage}
        products={products}
        filteredProducts={filteredProducts}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {filteredProducts.length === 0 ? (
        <div className='flex flex-col justify-center items-center min-h-[400px] gap-4'>
          <p className='text-xl text-gray-600'>No products found</p>
          <p className='text-sm text-gray-500'>Please check your connection or try again later</p>
          <p className='text-xs text-gray-400'>Check browser console for API response details</p>
          <button 
            onClick={() => {
              setLoading(true)
              window.location.reload()
            }} 
            className='px-4 py-2 bg-[#FB2E86] text-white rounded hover:bg-pink-600'
          >
            Refresh Page
          </button>
        </div>
      ) : (
        <>
          <div className='w-full flex flex-wrap justify-center gap-[30px] mx-auto mt-8 px-4'>
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <ProductCard product={item} key={item.id || `product-${item.name}-${Math.random()}`} />
              ))
            ) : (
              <p className='text-gray-600'>No products on this page</p>
            )}
          </div>

          {totalPages > 1 && (
            <div className='flex justify-center mt-6 mb-8'>
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                setCurrentPage={setCurrentPage}
              />
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ShopGrid