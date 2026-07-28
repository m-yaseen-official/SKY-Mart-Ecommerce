import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import ProductCard from '../components/Products/ProductCard'
import { FiSearch } from 'react-icons/fi'
import { IoChevronDownOutline } from 'react-icons/io5'

const Products = () => {

const {products} = useContext(Auth)
console.log(products);
  return (
    <div className='mx-auto w-full max-w-7xl border px-10 flex flex-col gap-7 mt-5'>
  <div className='flex flex-col gap-1'>
    <h1 className='font-syne font-bold text-4xl'>All Products</h1>
    <p className='text-zinc-600 font-semibold font-dm text-md'>{products.length} products found</p>
</div>
 <div className="w-full rounded-2xl border border-neutral-700 bg-[#111111] p-3">
      <div className="flex items-center flex-col gap-3 lg:flex-row">
        {/* Search Input */}
        <div className="relative flex-1">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-500" />

          <input
            type="text"
            placeholder="Search products..."
            className="h-11 w-full rounded-xl border border-neutral-700 bg-[#1A1A1A] pl-12 pr-4 text-white placeholder:text-gray-500 focus:border-white focus:outline-none"
          />
        </div>

        {/* Dropdowns */}
        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Category */}
          <div className="relative">
            <select
              className="h-11 min-w-[180px] appearance-none rounded-xl border border-neutral-700 bg-[#1A1A1A] px-4 pr-10 text-white focus:border-white focus:outline-none"
            >
              <option>All Categories</option>
              <option>Electronics</option>
              <option>Fashion</option>
              <option>Furniture</option>
            </select>

            <IoChevronDownOutline className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              className="h-11 min-w-[180px] appearance-none rounded-xl border border-neutral-700 bg-[#1A1A1A] px-4 pr-10 text-white focus:border-white focus:outline-none"
            >
              <option>Featured</option>
              <option>Newest</option>
              <option>Popular</option>
              <option>Price</option>
            </select>

            <IoChevronDownOutline className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </div>
    <div className=' grid  grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  overflow-hidden  '>
      {
        products.map((product)=>{
          return(
            <ProductCard key={product.id} product={product} />
          )
        })
      }
    </div>
    </div>
  )
}

export default Products

// grid grid-cols-4 gap-5 overflow-hidden px-15 py-5 mt-5