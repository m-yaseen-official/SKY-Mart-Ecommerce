import React from 'react'
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaUndoAlt,
} from "react-icons/fa";
import FeatureCard from './FeatureCard'


const Features = () => {
  const features = [
  {
    icon: <FaTruck />,
    title: "Free Shipping",
    description:
      "Enjoy free shipping on all orders over $99 anywhere in the country.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    description:
      "Your transactions are encrypted and protected with industry-standard security.",
  },
  {
    icon: <FaUndoAlt />,
    title: "Easy Returns",
    description:
      "Not satisfied? Return your order within 30 days without any hassle.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    description:
      "Our support team is available day and night to assist you anytime.",
  },
];

  return (
     <section className="px-5 lg:px-10 py-20">
      <div className="text-center mb-14">
        <p className="text-lime-400 uppercase tracking-[3px] font-semibold">
          Why Choose Us
        </p>

        <h2 className="font-syne mt-4 text-3xl md:text-4xl font-bold">
          Shopping Made Simple
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-zinc-400">
          We provide premium products with fast delivery,
          secure checkout, and customer-first service.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            {...feature}
          />
        ))}
      </div>
    </section>
  )
}

export default Features