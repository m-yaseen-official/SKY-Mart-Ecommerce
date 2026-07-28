import React from 'react'
import { motion } from "framer-motion";

const FeatureCard = ({icon, title, description }) => {

  return (
  <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group rounded-3xl border border-zinc-700 bg-[#111111] p-8 hover:border-lime-400 transition-all duration-300"
    >
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-lime-400/10 text-3xl text-lime-400 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-black">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </motion.div>
  )
}

export default FeatureCard