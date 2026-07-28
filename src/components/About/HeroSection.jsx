import React from "react";
import { motion } from "framer-motion";
import { FaBolt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="flex items-center justify-center px-5 pt-20 pb-14">
      <div className="max-w-4xl text-center">

        {/* Animated Icon */}

        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, -8, 8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-lime-400 shadow-[0_0_40px_rgba(163,230,53,0.35)]"
        >
          <FaBolt className="text-4xl text-black" />
        </motion.div>

        {/* Heading */}

        <h1 className="font-syne text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          About{" "}
          <span className="text-lime-400">
            SkyMart
          </span>
        </h1>

        {/* Description */}

        <p className="mx-auto mt-6 font-dm max-w-3xl text-lg leading-9 text-zinc-400">
          SkyMart is a next-generation e-commerce platform built to make online
          shopping fast, fair, and enjoyable — for everyone.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;