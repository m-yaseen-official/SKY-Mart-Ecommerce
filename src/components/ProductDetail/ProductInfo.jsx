import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import QuantitySelector from "./QuantitySelector";
import ProductActions from "./ProductActions";
import ProductFeatures from "./ProductFeatures";

const ProductInfo = ({ product }) => {
  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  // console.log(product.reviews.length);

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col gap-6"
    >
      {/* Category */}
      <div>
        <span className="rounded-full border border-lime-500/40 bg-lime-500/10 px-4 py-1 text-sm font-medium capitalize text-lime-400">
          {product.category}
        </span>
      </div>

      {/* Brand */}
      <div>
        <p className="text-sm uppercase tracking-[3px] text-zinc-500">
          {product.brand}
        </p>

        <h1 className="mt-2 text-3xl font-bold leading-tight text-white sm:text-4xl">
          {product.title}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={
                index < Math.round(product.rating)
                  ? "text-yellow-400"
                  : "text-zinc-700"
              }
            />
          ))}
        </div>

        <span className="font-medium text-white">
          {product.rating}
        </span>

        <span className="text-zinc-500">
          ({product?.reviews?.length} Reviews )
        </span>
      </div>

      <hr className="border-zinc-800" />

      {/* Price */}
      <div className="flex flex-wrap items-center gap-4">
        <h2 className="text-4xl font-bold text-lime-400">
          {discountedPrice}
        </h2>

        <span className="text-xl text-zinc-500 line-through">
          {product.price}
        </span>

        <span className="rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
          -{product.discountPercentage}%
        </span>
      </div>

      {/* Stock */}
      <div>
        <span
          className={`rounded-full px-4 py-2 text-sm font-medium ${
            product.stock > 0
              ? "bg-green-500/20 text-green-400"
              : "bg-red-500/20 text-red-400"
          }`}
        >
          {product.availabilityStatus}
        </span>
      </div>

      {/* Description */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-white">
          Description
        </h3>

        <p className="leading-8 text-zinc-400">
          {product.description}
        </p>
      </div>

      {/* Quantity */}
      <QuantitySelector />

      {/* Buttons */}
      <ProductActions />

      {/* Features */}
      <ProductFeatures product={product} />
    </motion.div>
  );
};

export default ProductInfo;