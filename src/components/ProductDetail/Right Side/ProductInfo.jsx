import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import ProductFeatures from "./ProductFeatures";
import { Auth } from "../../../context/AuthContext";

const ProductInfo = () => {

  const {singleProduct} = useContext(Auth);

  const discountedPrice = (
    singleProduct.price -
    (singleProduct.price * singleProduct.discountPercentage) / 100
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
        <span className="inline-block text-[#D9FF00] bg-[#D9FF00]/15  border border-[#D9FF00]/40 rounded-full px-3 py-1 text-xs font-bold font-dm">
          {singleProduct.category}
        </span>

        <h1 className="text-3xl font-syne font-bold mt-5">{singleProduct.title}</h1>

        <div className="flex items-center gap-3 mt-4">
          ⭐⭐⭐⭐☆
          <span>{singleProduct.rating}</span>
          <span className="text-zinc-600 text-sm font-semibold">
            {/* ({singleProduct.reviews} reviews) */}
          </span>
        </div>

        <div className="my-8 border-y border-white/70 py-4">
          <h2 className="text-4xl font-syne font-bold text-[#D9FF00]">
            {discountedPrice}
          </h2>
          <span className="text-lg text-gray-500 line-through">
            ${singleProduct.price}
          </span>
        </div>

        <p className="text-zinc-500 text-sm font-semibold leading-8">
          {singleProduct.description}
        </p>

        <div className="flex gap-4 mt-8">
          <button className="flex-1 h-12 rounded-2xl cursor-pointer bg-[#D9FF00] text-black font-semibold">
            Add To Cart
          </button>

          <button className="w-12 rounded-2xl cursor-pointer   border hover:border-red-500/50 hover:text-red-500/50  border-white/20">
            ♡
          </button>
        </div>
        <div>
          <ProductFeatures />
        </div>

        {/* <ProductNavigation
            showPrevious={currentIndex > 0}
            onPrevious={() => {}}
            onNext={() => {}}
          /> */}
      </div>
    </motion.div>
  );
};

export default ProductInfo;
