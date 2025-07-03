import React, { useState } from 'react'
import FilterBar from '../components/Resuable/FilterBar';
import Breadcrumbs from '../components/Resuable/Breadcrumb';
import HeroNav from '../components/Resuable/HeroNav';
import ProductCard from '../components/cards/ProductCard';
import Pagination from '../components/Resuable/Pagination';
import {productDetails} from '../data/productData'; // Adjust the import path as necessary

const ShopGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage,setItemsPerPage] = useState(4) // ← how many products per page

  const totalPages = Math.ceil(productDetails.length / itemsPerPage)

  // Calculate slice indexes


  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = productDetails.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <>
      <div>
        <Breadcrumbs />
        <HeroNav />
      </div>

      {/* Pass currentPage props to FilterBar and Pagination */}
      <FilterBar        
        setItemsPerPage={setItemsPerPage}
      />

      <div className='w-full flex flex-wrap justify-center gap-[30px] mx-auto mt-8'>
        {currentItems.map((item, index) => (
          <ProductCard product={item} key={index} />
        ))}
      </div>

      <div className='flex justify-center mt-6'>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </>
  )
}

export default ShopGrid