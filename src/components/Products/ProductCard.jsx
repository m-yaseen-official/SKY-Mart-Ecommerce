import React from 'react'
import { motion } from "framer-motion";
import {  FaCheck , FaShoppingCart, FaStar } from "react-icons/fa";

const ProductCard = ({product}) => {
  return (
   <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group w-full max-w-75 min-h-100 rounded-3xl border border-lime-500/50 bg-[#111111] overflow-hidden   hover:shadow-[0_10px_30px_rgba(163,230,53,0.15)]"
    >

      {/* Image Section */}
      <div className="relative bg-white p-4">

        {/* Category Badge */}
        <span className="absolute top-3 left-3 rounded-full bg-gray-500 px-3 py-1 text-xs font-medium text-white capitalize">
          {product.category}
        </span>

        <img
          src={product.image}
          alt={product.title}
          className="h-50 w-100 object-contain"
        />
      </div>

      {/* Content */}
      <div className="space-y-3 p-5">

        {/* Category */}
        <p className="text-xs text-gray-500 capitalize">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="line-clamp-2 text-lg font-bold leading-8 text-white">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={`text-sm ${
                index < Math.round(product.rating.rate)
                  ? "text-yellow-400"
                  : "text-gray-600"
              }`}
            />
          ))}

          <span className="ml-2 text-sm text-gray-500">
            ({product.rating.count})
          </span>
        </div>

        <hr className="border-gray-700" />

        {/* Price & Button */}
        <div className="flex items-center justify-between">

          <h3 className="text-4xl font-bold text-lime-400">
            ${product.price}
          </h3>

          <button className="flex items-center gap-2 rounded-xl border border-green-600 bg-green-900/30 px-5 py-3 font-medium text-green-400 transition hover:bg-green-700 hover:text-white">
            <FaCheck />
            Add
          </button>

        </div>
      </div>


    </motion.div>
  
  )
}

export default ProductCard