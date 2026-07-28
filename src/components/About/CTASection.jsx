import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router";

const CTASection = () => {
  const navigate = useNavigate();

  return (
    <section className="max-w-7xl mx-auto px-5 mt-20 mb-20">

      <div className="rounded-3xl border border-lime-400/30 bg-[#111111] px-6 py-14 text-center">

        <h2 className="text-4xl font-bold text-white">
          Ready to shop?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-zinc-400 leading-8">
          Explore thousands of quality products at unbeatable prices.
          Start shopping today and discover your next favourite item.
        </p>

        <button
          onClick={() => navigate("/products")}
          className="group cursor-pointer mt-10 inline-flex items-center gap-3 rounded-2xl bg-lime-400 px-8 py-4 text-lg font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-lime-300"
        >
          Browse Products

          <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>

      </div>

    </section>
  );
};

export default CTASection;