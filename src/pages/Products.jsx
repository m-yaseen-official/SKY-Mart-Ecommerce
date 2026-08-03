import React, { useContext, useEffect } from "react";
import { Auth } from "../context/AuthContext";
import ProductCard from "../components/Products/ProductCard";
import { useParams } from "react-router";
import Loader from "../components/Loader/Loader";
import SerachProduct from "../components/Products/SerachProduct";

const Products = () => {
  const {
    products,
    getProductsData,
    getProductsByCategory,
    categoryLoading,
    productsLoading,
  } = useContext(Auth);
  const { category } = useParams();

  useEffect(() => {
    if (!category) {
      getProductsData();
      return;
    }
    getProductsByCategory(category);
  }, [category]);

  if (productsLoading || categoryLoading) {
    return <Loader />;
  }
  return (
    <div className="mx-auto w-full max-w-7xl  px-10 flex flex-col gap-7 mt-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-syne font-bold text-4xl">All Products</h1>
        <p className="text-zinc-600 font-semibold font-dm text-md">
          {products.length} products found
        </p>
      </div>
      <div>
      <SerachProduct />
      </div>
      <div className=" grid  grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  overflow-hidden  ">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

// grid grid-cols-4 gap-5 overflow-hidden px-15 py-5 mt-5
