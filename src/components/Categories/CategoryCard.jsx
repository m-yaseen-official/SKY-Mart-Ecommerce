import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptop,
  FaTshirt,
  FaGem,
  FaCouch,
  FaMobileAlt,
  FaGamepad,
  FaShoppingBag,
  FaAppleAlt,
  FaHome,
  FaHeartbeat,
  FaCar,
  FaMotorcycle,
} from "react-icons/fa";
import { useNavigate } from "react-router";

const icons = {
  beauty: <FaHeartbeat />,
  fragrances: <FaShoppingBag />,
  furniture: <FaCouch />,
  groceries: <FaShoppingBag />,
  kitchen: <FaHome />,
  laptops: <FaLaptop />,
  smartphones: <FaMobileAlt />,
  motorcycle: <FaMotorcycle />,
  vehicle: <FaCar />,
  tops: <FaTshirt />,

  "mens-shirts": <FaTshirt />,
  "mens-shoes": <FaTshirt />,
  "mens-watches": <FaLaptop />,

  "womens-bags": <FaShoppingBag />,
  "womens-dresses": <FaTshirt />,
  "womens-jewellery": <FaGem />,
  "womens-shoes": <FaTshirt />,
  "womens-watches": <FaLaptop />,
};
const CategoryCard = ({ categoryItem }) => {
  const icon = icons[categoryItem.slug] || <FaShoppingBag />;
  const navigate = useNavigate();
  return (
    <motion.div
    onClick={()=> navigate(`/products/${categoryItem.slug}`)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="group cursor-pointer rounded-3xl border border-zinc-700 bg-[#111111] p-6 transition-all duration-300 hover:border-lime-400"
    >
      <div className="flex flex-col items-center text-center border boreder">
        {/* Icon */}
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 text-4xl text-lime-400 transition-all duration-300 group-hover:bg-lime-400 group-hover:text-black">
          {icon}
        </div>

        {/* Category Name */}
        <h3 className="mt-5 text-lg font-semibold text-white">
          {categoryItem.name}
        </h3>

        {/* Slug */}
        <p className="mt-2 text-sm capitalize text-zinc-400">
          {categoryItem.slug.replaceAll("-", " ")}
        </p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;