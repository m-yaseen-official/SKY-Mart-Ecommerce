import React from "react";
import { motion } from "framer-motion";
import {
  FaShoppingCart,
  FaStar,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <motion.div
      onClick={()=> navigate(`${product.id}`)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      viewport={{ once: true }}
      className="group w-full max-w-90 overflow-hidden rounded-3xl border border-zinc-800 bg-[#111111] shadow-lg duration-300 hover:border-lime-500"
    >
      {/* Image */}
      <div className="relative bg-white p-6">
        {/* Discount */}
        <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
          -{product.discountPercentage.toFixed(0)}%
        </span>

        {/* Category */}
        <span className="absolute right-4 top-4 rounded-full bg-zinc-800 px-3 py-1 text-xs capitalize text-white">
          {product.category}
        </span>

        <img
          src={product.thumbnail}
          alt={product.title}
          className="mx-auto h-52 object-contain transition duration-300 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="space-y-4 p-5 h-80 flex flex-col justify-between ">
        {/* Brand */}
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium uppercase tracking-widest text-lime-400">
            {product.brand}
          </p>

          <div className="flex items-center gap-1 text-yellow-400">
            <FaStar />
            <span className="text-sm text-white">
              {product.rating}
            </span>
          </div>
        </div>

        {/* Title */}
        <h2 className="line-clamp-2 text-xl font-bold text-white">
          {product.title} 
        </h2>

        {/* Description */}
        <p className="line-clamp-2 text-sm leading-6 text-gray-400">
          {product.description}
        </p>


        {/* Price */}
        <div className="flex items-end gap-3">
          <h3 className="text-3xl font-bold text-lime-400">
            ${discountedPrice}
          </h3>

          <span className="text-lg text-gray-500 line-through">
            ${product.price}
          </span>
        </div>

        {/* Button */}
        <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-lime-500 py-3 font-semibold text-black transition hover:bg-lime-400">
          <FaShoppingCart />
          Add To Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;