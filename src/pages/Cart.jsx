import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '../components/Resuable/Breadcrumb'
import HeroNav from '../components/Resuable/HeroNav'
import Footer from '../components/footer'
import api from '../api'
import { toast } from 'react-toastify'
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi'

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [updating, setUpdating] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    fetchCartItems()
  }, [])

  const fetchCartItems = async () => {
    try {
      setLoading(true)
      // Try to fetch from backend first
      try {
        const response = await api.get('/cart')
        const data = response.data
        const items = data.cart || data.cartItems || data.items || data || []
        setCartItems(Array.isArray(items) ? items : [])
      } catch (error) {
        console.log('Backend cart not available, using localStorage:', error)
        // Fallback to localStorage
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
        setCartItems(localCart)
      }
    } catch (error) {
      console.error('Error fetching cart:', error)
      const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
      setCartItems(localCart)
    } finally {
      setLoading(false)
    }
  }

  const updateCartItem = async (productId, quantity) => {
    if (quantity < 1) {
      removeCartItem(productId)
      return
    }

    setUpdating({ ...updating, [productId]: true })
    
    try {
      // Try backend first
      try {
        await api.put(`/cart/${productId}`, { quantity })
        await fetchCartItems()
        toast.success('Cart updated')
      } catch (error) {
        // Fallback to localStorage
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
        const updatedCart = localCart.map(item =>
          item.id === productId || item._id === productId
            ? { ...item, quantity }
            : item
        )
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        setCartItems(updatedCart)
        toast.success('Cart updated')
      }
    } catch (error) {
      console.error('Error updating cart:', error)
      toast.error('Failed to update cart')
    } finally {
      setUpdating({ ...updating, [productId]: false })
    }
  }

  const removeCartItem = async (productId) => {
    setUpdating({ ...updating, [productId]: true })
    
    try {
      // Try backend first
      try {
        await api.delete(`/cart/${productId}`)
        await fetchCartItems()
        toast.success('Item removed from cart')
      } catch (error) {
        // Fallback to localStorage
        const localCart = JSON.parse(localStorage.getItem('cart') || '[]')
        const updatedCart = localCart.filter(
          item => item.id !== productId && item._id !== productId
        )
        localStorage.setItem('cart', JSON.stringify(updatedCart))
        setCartItems(updatedCart)
        toast.success('Item removed from cart')
      }
    } catch (error) {
      console.error('Error removing item:', error)
      toast.error('Failed to remove item')
    } finally {
      setUpdating({ ...updating, [productId]: false })
    }
  }

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price?.replace(/[^0-9.]/g, '') || 0)
      const quantity = item.quantity || 1
      return total + (price * quantity)
    }, 0)
  }

  const calculateSubtotal = () => {
    return calculateTotal()
  }

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.warning('Your cart is empty')
      return
    }
    // Navigate to checkout page (you can create this later)
    toast.info('Checkout functionality coming soon!')
    // navigate('/checkout')
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div>
      <Breadcrumbs />
      <HeroNav name="Shopping Cart" />
      
      <div className="w-full bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
              <p className="text-2xl text-gray-600">Your cart is empty</p>
              <p className="text-gray-500">Add some products to get started!</p>
              <button
                onClick={() => navigate('/shop')}
                className="px-6 py-3 bg-[#FB2E86] text-white rounded hover:bg-pink-600"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="md:col-span-2">
                <h2 className="text-2xl font-bold text-[#151875] mb-6">
                  Cart Items ({cartItems.length})
                </h2>
                <div className="space-y-4">
                  {cartItems.map((item) => {
                    const itemId = item.id || item._id || item.productId
                    const price = parseFloat(item.price?.replace(/[^0-9.]/g, '') || 0)
                    const quantity = item.quantity || 1
                    const itemTotal = price * quantity
                    
                    return (
                      <div
                        key={itemId}
                        className="flex gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <div className="w-24 h-24 bg-[#F6F7FB] rounded flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.imgPath || item.image || '/images/chair1.png'}
                            alt={item.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.src = '/images/chair1.png'
                            }}
                          />
                        </div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-[#151875] mb-1">
                            {item.name || item.productName}
                          </h3>
                          <p className="text-sm text-gray-500 mb-2">
                            {item.code || 'Code - N/A'}
                          </p>
                          <p className="text-lg font-bold text-[#FB2E86]">
                            ${price.toFixed(2)}
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-end gap-2">
                          <button
                            onClick={() => removeCartItem(itemId)}
                            className="text-red-500 hover:text-red-700 p-2"
                            disabled={updating[itemId]}
                          >
                            <FiTrash2 />
                          </button>
                          
                          <div className="flex items-center gap-2 border border-gray-300 rounded">
                            <button
                              onClick={() => updateCartItem(itemId, quantity - 1)}
                              disabled={updating[itemId] || quantity <= 1}
                              className="p-2 hover:bg-gray-100 disabled:opacity-50"
                            >
                              <FiMinus />
                            </button>
                            <span className="px-4 py-2 min-w-[50px] text-center">
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateCartItem(itemId, quantity + 1)}
                              disabled={updating[itemId]}
                              className="p-2 hover:bg-gray-100"
                            >
                              <FiPlus />
                            </button>
                          </div>
                          
                          <p className="text-lg font-bold text-[#151875]">
                            ${itemTotal.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="md:col-span-1">
                <div className="bg-[#F9F8FE] p-6 rounded-lg sticky top-4">
                  <h2 className="text-2xl font-bold text-[#151875] mb-6">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal:</span>
                      <span className="font-bold text-[#151875]">
                        ${calculateSubtotal().toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping:</span>
                      <span className="font-bold text-[#151875]">$10.00</span>
                    </div>
                    <div className="border-t border-gray-300 pt-4">
                      <div className="flex justify-between">
                        <span className="text-xl font-bold text-[#151875]">Total:</span>
                        <span className="text-xl font-bold text-[#FB2E86]">
                          ${(calculateTotal() + 10).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleCheckout}
                    className="w-full py-3 bg-[#FB2E86] text-white rounded hover:bg-pink-600 font-bold text-lg"
                  >
                    Proceed to Checkout
                  </button>
                  
                  <button
                    onClick={() => navigate('/shop')}
                    className="w-full py-3 mt-4 border-2 border-[#FB2E86] text-[#FB2E86] rounded hover:bg-pink-50 font-bold"
                  >
                    Continue Shopping
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default Cart
