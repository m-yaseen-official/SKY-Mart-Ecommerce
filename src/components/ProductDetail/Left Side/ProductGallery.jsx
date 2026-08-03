import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Auth } from "../../../context/AuthContext";

const ProductGallery = () => {

  const {singleProduct} = useContext(Auth)

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-3xl  h-125 w-125 flex justify-center items-center border border-red-500"
    >
      <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            src={singleProduct.thumbnail}
            alt={singleProduct?.title}
          className="w-full  max-w-lg object-contain p-9 "
        />

    // </motion.div>
  );
};

export default ProductGallery;

