import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";

const ProductNavigation = ({
  hasPrevious,
  hasNext,
  onPrevious,
  onNext,
}) => {


  return (
    <div className="flex flex-col gap-4 pt-4 sm:flex-row">

      {/* Previous */}

      <motion.button
        whileHover={hasPrevious ? { x: -3 } : {}}
        whileTap={hasPrevious ? { scale: 0.97 } : {}}
        onClick={onPrevious}
        disabled={!hasPrevious}
        className={`flex flex-1 items-center justify-center gap-3 rounded-2xl border px-6 py-4 font-semibold transition-all
        ${
          hasPrevious
            ? "border-zinc-700 bg-[#111111] text-white hover:border-lime-400 hover:text-lime-400"
            : "cursor-not-allowed border-zinc-800 bg-[#111111] text-zinc-600"
        }`}
      >
        <FaArrowLeft />
        Previous
      </motion.button>

      {/* Next */}

      <motion.button
        whileHover={hasNext ? { x: 3 } : {}}
        whileTap={hasNext ? { scale: 0.97 } : {}}
        onClick={onNext}
        disabled={!hasNext}
        className={`flex flex-1 items-center justify-center gap-3 rounded-2xl border px-6 py-4 font-semibold transition-all
        ${
          hasNext
            ? "border-lime-400 bg-lime-400 text-black hover:bg-lime-300"
            : "cursor-not-allowed border-zinc-800 bg-[#111111] text-zinc-600"
        }`}
      >
        Next
        <FaArrowRight />
      </motion.button>

    </div>
  );
};

export default ProductNavigation;