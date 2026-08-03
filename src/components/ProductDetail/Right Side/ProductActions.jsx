import React from "react";
import { motion } from "framer-motion";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductActions = () => {
  return (
    <div className="space-y-5">

      {/* Add To Cart + Wishlist */}

      <div className="flex items-center gap-4">

        {/* Add To Cart */}

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="flex-1 rounded-2xl bg-lime-400 py-4 font-semibold text-black transition hover:bg-lime-300"
        >
          <span className="flex items-center justify-center gap-3">

            <FaShoppingCart />

            Add To Cart

          </span>

        </motion.button>

        {/* Wishlist */}

        <motion.button
          whileHover={{
            scale: 1.05,
            borderColor: "#A3E635",
          }}
          whileTap={{ scale: 0.95 }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-700 bg-[#111111] text-xl text-white transition"
        >
          <FaHeart />
        </motion.button>

      </div>

    </div>
  );
};

export default ProductActions;