import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "framer-motion";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-white">
        Quantity
      </h3>

      <div className="flex w-fit items-center overflow-hidden rounded-2xl border border-zinc-700 bg-[#151515]">
        {/* Minus */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={decrease}
          className="flex h-14 w-14 items-center justify-center border-r border-zinc-700 text-white transition hover:bg-lime-400 hover:text-black"
        >
          <FaMinus />
        </motion.button>

        {/* Quantity */}
        <div className="flex h-14 w-16 items-center justify-center text-lg font-semibold text-white">
          {quantity}
        </div>

        {/* Plus */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={increase}
          className="flex h-14 w-14 items-center justify-center border-l border-zinc-700 text-white transition hover:bg-lime-400 hover:text-black"
        >
          <FaPlus />
        </motion.button>
      </div>
    </div>
  );
};

export default QuantitySelector;