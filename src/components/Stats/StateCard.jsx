import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ icon, value, title, subtitle, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="bg-[#111111] border border-zinc-700 rounded-3xl p-6 hover:border-lime-400 transition-all duration-300"
    >
      <div className="flex items-center gap-4">
        <div
          className={`h-14 w-14 rounded-2xl flex items-center justify-center ${color}`}
        >
          {icon}
        </div>

        <div>
          <h2 className="text-3xl font-bold">{value}</h2>

          <p className="text-zinc-300">{title}</p>

          <p className="text-sm text-zinc-500">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default StatCard;