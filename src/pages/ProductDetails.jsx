import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { Auth } from "../context/AuthContext";
import Loader from "../components/Loader/Loader";
import DetailedCard from "../components/ProductDetail/ProductDetailedCard/DetailedCard";

const ProductDetails = () => {
  const { getSingleProduct, productLoading } =
    useContext(Auth);
  const { id } = useParams();
  
  useEffect(() => {
    getSingleProduct(id);
  }, []);

  return (
    <section className="max-w-6xl mx-auto border px-5 py-10 text-white">
      <DetailedCard  />
    </section>
  );
};

export default ProductDetails;
