import React from 'react'
import { motion } from "framer-motion";
import {
  FaLaptop,
  FaTshirt,
  FaGem,
  FaCouch,
  FaMobileAlt,
  FaGamepad,
  FaArrowRight,
} from "react-icons/fa";
import CategoryCard from './CategoryCard';
import { useNavigate } from 'react-router';


const Categories = () => {

  const navigate = useNavigate();
  const categoryData = [
  {
    title: "Electronics",
    products: 25,
    icon: <FaLaptop />,
  },
  {
    title: "Fashion",
    products: 18,
    icon: <FaTshirt />,
  },
  {
    title: "Jewelry",
    products: 12,
    icon: <FaGem />,
  },
  {
    title: "Furniture",
    products: 10,
    icon: <FaCouch />,
  },
  {
    title: "Mobiles",
    products: 30,
    icon: <FaMobileAlt />,
  },
  {
    title: "Gaming",
    products: 16,
    icon: <FaGamepad />,
  },
];
  return (
    <section className="px-5 lg:px-10 py-14">
      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-5">
        <div>
          <h2 className="font-syne text-2xl font-bold mt-2">
            Shop by Category
          </h2>
        </div>

        <motion.button onClick={()=> navigate('/products')}
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 text-lime-400 font-semibold"
        >
          View All

          <FaArrowRight />
        </motion.button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {categoryData.map((item, index) => (
          <CategoryCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default Categories