import React, { useState } from "react";
import { motion } from "framer-motion";

const ProductGallery = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(
    product?.thumbnail || product?.images?.[0]
  );
console.log(product);
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      {/* Main Image */}
      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-white p-4 sm:p-6 lg:p-8">
        <div className="flex items-center justify-center h-[260px] sm:h-[360px] md:h-[430px] lg:h-[520px] xl:h-[580px]">
          <motion.img
            key={selectedImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt={product?.title}
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Thumbnail Images */}
      <div className="mt-5 flex flex-wrap justify-center gap-3 lg:justify-start">
        {product?.images?.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border bg-white p-2 transition-all duration-300

            ${
              selectedImage === image
                ? "border-lime-400"
                : "border-zinc-700 hover:border-lime-400"
            }`}
          >
            <img
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className="h-16 w-16 object-contain sm:h-20 sm:w-20"
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default ProductGallery;