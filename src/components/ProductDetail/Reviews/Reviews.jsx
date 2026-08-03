import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaUserCircle } from "react-icons/fa";

const Reviews = ({ reviews }) => {
  return (
    <section className="mt-20">

      {/* Heading */}

      <div className="mb-10 flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-white">
            Customer Reviews
          </h2>

          <p className="mt-2 text-zinc-400">
            {reviews.length} Reviews
          </p>

        </div>

      </div>

      {/* Reviews */}

      <div className="space-y-6">

        {reviews.map((review, index) => (

          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.1,
            }}
            viewport={{ once: true }}
            className="rounded-3xl border border-zinc-800 bg-[#111111] p-6"
          >

            {/* Top */}

            <div className="flex items-start justify-between gap-5">

              <div className="flex items-center gap-4">

                <div className="text-5xl text-lime-400">
                  <FaUserCircle />
                </div>

                <div>

                  <h3 className="font-semibold text-white">
                    {review.reviewerName}
                  </h3>

                  <p className="text-sm text-zinc-500">
                    {new Date(review.date).toLocaleDateString()}
                  </p>

                </div>

              </div>

              {/* Rating */}

              <div className="flex gap-1">

                {[...Array(5)].map((_, i) => (

                  <FaStar
                    key={i}
                    className={
                      i < review.rating
                        ? "text-yellow-400"
                        : "text-zinc-700"
                    }
                  />

                ))}

              </div>

            </div>

            {/* Comment */}

            <p className="mt-6 leading-8 text-zinc-400">
              {review.comment}
            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default Reviews;