import React, { useContext, useEffect } from "react";
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
import CategoryCard from "./CategoryCard";
import { useNavigate } from "react-router";
import { Auth } from "../../context/AuthContext";
import Loader from "../Loader/Loader";

const Categories = () => {
  const navigate = useNavigate();
  const { categories, getCategoriesData, categoriesLoading } = useContext(Auth);

  useEffect(() => {
    getCategoriesData();
  }, []);

  if (categoriesLoading) {
    return <Loader />
  }
  return (
    <section className="px-5 lg:px-10 py-14">
      {/* Heading */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-5">
        <div>
          <h2 className="font-syne text-2xl font-bold mt-2">
            Shop by Category
          </h2>
        </div>

        <motion.button
          onClick={() => navigate("/products")}
          whileHover={{ x: 5 }}
          className="flex items-center gap-3 text-lime-400 font-semibold"
        >
          View All
          <FaArrowRight />
        </motion.button>
      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
        {categories.slice(0, 6).map((item, index) => (
          <CategoryCard key={index} categoryItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Categories;
