import React from "react";
import { FaBoxOpen, FaDollarSign, FaStar, FaTags } from "react-icons/fa";
import StateCard from "../Stats/StateCard";
import ProductCard from "../Products/ProductCard";




const Stats = () => {
  const stats = [
    {
      value: "4",
      title: "Cart Items",
      subtitle: "In your bag",
      icon: <FaBoxOpen size={24} />,
      color: "bg-lime-400/10 text-lime-400",
    },

    {
      value: "$699.96",
      title: "Cart Value",
      subtitle: "Ready to checkout",
      icon: <FaDollarSign size={24} />,
      color: "bg-blue-500/10 text-blue-400",
    },

    {
      value: "5",
      title: "Top Products",
      subtitle: "Highly rated",
      icon: <FaStar size={24} />,
      color: "bg-yellow-500/10 text-yellow-400",
    },

    {
      value: "6",
      title: "Categories",
      subtitle: "To explore",
      icon: <FaTags size={24} />,
      color: "bg-purple-500/10 text-purple-400",
    },
  ];

  return (
    <section className="px-5 lg:px-10 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <StateCard key={index} {...item} />
        ))}
      </div>
      </section>
  );
};

export default Stats;
