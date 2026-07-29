import React from "react";
import { motion } from "framer-motion";
import { FaShoppingBag } from "react-icons/fa";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0B0B]">
      <div className="flex flex-col items-center gap-8">

        {/* Animated Circle */}
        <div className="relative flex items-center justify-center">

          {/* Outer Ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-28 w-28 rounded-full border-4 border-lime-500 border-t-transparent"
          />

          {/* Inner Ring */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-20 w-20 rounded-full border-4 border-zinc-700 border-b-transparent"
          />

          {/* Logo */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
            }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-lime-400 text-2xl text-black"
          >
            <FaShoppingBag />
          </motion.div>

        </div>

        {/* Brand */}
        <motion.h2
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="font-syne text-3xl font-bold tracking-wider text-white"
        >
          Sky
          <span className="text-lime-400">Mart</span>
        </motion.h2>

        {/* Loading */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="text-sm tracking-[6px] uppercase text-zinc-400"
        >
          Loading...
        </motion.div>

      </div>
    </div>
  );
};

export default Loader;