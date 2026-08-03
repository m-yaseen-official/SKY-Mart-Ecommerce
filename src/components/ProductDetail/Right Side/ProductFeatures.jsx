import React from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
} from "react-icons/fa";

const ProductFeatures = ({ product }) => {
  const features = [
    {
      icon: <FaShippingFast />,
      title: "Fast Shipping",
      description: product.shippingInformation,
    },
    {
      icon: <FaShieldAlt />,
      title: "Warranty",
      description: product.warrantyInformation,
    },
    {
      icon: <FaUndoAlt />,
      title: "Return Policy",
      description: product.returnPolicy,
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {features.map((feature, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -5,
            borderColor: "#A3E635",
          }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-zinc-700 bg-[#111111] p-5"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-lime-400/10 text-2xl text-lime-400">
            {feature.icon}
          </div>

          <h3 className="text-lg font-semibold text-white">
            {feature.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductFeatures;