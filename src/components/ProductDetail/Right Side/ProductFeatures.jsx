import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaShieldAlt,
  FaUndoAlt,
} from "react-icons/fa";
import { Auth } from "../../../context/AuthContext";

const ProductFeatures = () => {
  
  const {singleProduct} = useContext(Auth);
  console.log(singleProduct);
  const features = [
    {
      icon: <FaShippingFast size={18}/>,
      title: "Fast Shipping",
      description: singleProduct.shippingInformation,
    },
    {
      icon: <FaShieldAlt size={18} />,
      title: "Warranty",
      description: singleProduct.warrantyInformation,
    },
    {
      icon: <FaUndoAlt size={18} />,
      title: "Return Policy",
      description: singleProduct.returnPolicy,
    },
  ];

  return (    
          <div className="grid grid-cols-3 gap-4 mt-8">
            {features.map((features,index)=>{
              return (
                <div key={index} className="border border-white/10 rounded-2xl h-20 flex flex-col items-center justify-center p-5 ">
              <span className="text-[#D9FF00]">{features.icon}</span>
              <p className="mt-3 font-bold text-zinc-400  text-xs ">{features.title} </p>
              <small className="text-zinc-600 text-xs font-bold">
                {features.description}
              </small>
            </div>
              )
            })
            }
</div>
          

  );
};

export default ProductFeatures;