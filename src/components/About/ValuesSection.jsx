import React from "react";
import {
  FiShield,
  FiTruck,
  FiHeart,
  FiStar,
} from "react-icons/fi";

const values = [
  {
    id: 1,
    icon: <FiShield />,
    title: "Trust",
    description:
      "Every product is verified for quality and authenticity before listing.",
  },
  {
    id: 2,
    icon: <FiTruck />,
    title: "Speed",
    description:
      "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    id: 3,
    icon: <FiHeart />,
    title: "Community",
    description:
      "Built around real customer feedback, not just business metrics.",
  },
  {
    id: 4,
    icon: <FiStar />,
    title: "Quality",
    description:
      "We curate the best products with no filler, no junk, just quality.",
  },
];

const ValuesSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-5 mt-20">

      <h2 className="text-center font-syne text-3xl font-bold text-white mb-12">
        What We Stand For
      </h2>

      <div className="grid gap-6 md:grid-cols-2">

        {values.map((item) => (
          <div
            key={item.id}
            className="group rounded-3xl border border-zinc-700 bg-[#121212] p-6 transition-all duration-300 hover:border-lime-400 hover:-translate-y-1"
          >
            <div className="flex items-start gap-5">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400/10 text-2xl text-lime-400">
                {item.icon}
              </div>

              <div>

                <h3 className="text-xl font-syne font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 font-dm leading-7 text-zinc-400">
                  {item.description}
                </p>

              </div>

            </div>
          </div>
        ))}

      </div>

    </section>
  );
};

export default ValuesSection;