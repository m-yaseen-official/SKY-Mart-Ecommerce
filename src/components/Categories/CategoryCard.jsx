import React from 'react'
import { motion } from "framer-motion";

const CategoryCard = ({icon,title,products}) => {
  return (
     <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 hover:border-lime-400 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        <div className="h-20 w-20 rounded-2xl bg-zinc-900 border border-zinc-700 flex items-center justify-center text-4xl text-lime-400 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
          {icon}
        </div>

        <h3 className="mt-5 text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-zinc-400 text-sm">
          {products} Products
        </p>
      </div>
    </motion.div>
  )
}

export default CategoryCard