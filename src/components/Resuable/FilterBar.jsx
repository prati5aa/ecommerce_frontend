import React, { useState } from "react";
import { MdGridView, MdSearch } from "react-icons/md";
import { TfiViewListAlt } from "react-icons/tfi";

const FilterBar = ({ 
  setItemsPerPage, 
  products = [], 
  filteredProducts = [],
  searchQuery = '',
  setSearchQuery,
  sortBy = 'default',
  setSortBy
}) => {
  const [inputValue, setInputValue] = useState('12');

  const handleItemsPerPageChange = () => {
    const parsed = parseInt(inputValue);
    if (!isNaN(parsed) && parsed > 0) {
      setItemsPerPage(parsed);
    } else {
      alert("Please enter a number greater than 0");
      setInputValue('12')
    }
  };

  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      handleItemsPerPageChange()
    }
  }

  const productCount = filteredProducts.length || products.length || 0

  return (
    <div className="w-full flex flex-col gap-4 px-4 py-6">
      {/* Search Bar */}
      <div className="w-full flex justify-center">
        <div className="relative w-[75%] max-w-2xl">
          <MdSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search products by name or code..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border-[1px] border-[#E7E6EF] rounded-lg focus:outline-none focus:border-[#FB2E86] text-[#151875]"
          />
        </div>
      </div>

      {/* Filter Controls */}
      <div className="w-full flex justify-center">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-[75%] gap-4">
          <div>
            <p className="text-[22px] font-[700] text-[#151875]">
              Ecommerce Accessories & Fashion Items
            </p>
            <p className="text-sm text-[#8A8FB9]">
              About {productCount} {productCount === 1 ? 'result' : 'results'}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <label className="text-[#0f1b50] text-base">Sort:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border-[1px] border-[#E7E6EF] outline-[#221f49] outline-offset-1 px-3 py-2 rounded text-[#151875] bg-white cursor-pointer"
              >
                <option value="default">Default</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>

            {/* Items Per Page */}
            <div className="flex items-center gap-2">
              <label className="text-[#0f1b50] text-base">Per Page:</label>
              <input
                type="number"
                min="1"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleItemsPerPageChange}
                onKeyDown={handleKeyDown}
                className="border-[1px] border-[#E7E6EF] outline-[#221f49] outline-offset-1 w-[70px] px-2 py-2 rounded text-center"
              />
            </div>

            {/* View Toggle (for future use) */}
            <div className="flex items-center gap-2">
              <span className="text-[#0f1b50] text-base">View:</span>
              <div className="flex gap-2">
                <button className="p-2 border border-[#E7E6EF] rounded hover:bg-[#F6F7FB]">
                  <MdGridView className="text-[#151875] text-[18px]" />
                </button>
                <button className="p-2 border border-[#E7E6EF] rounded hover:bg-[#F6F7FB]">
                  <TfiViewListAlt className="text-[#151875] text-[16px]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;