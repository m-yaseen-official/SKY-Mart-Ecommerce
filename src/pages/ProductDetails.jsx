import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { Auth } from "../context/AuthContext";
import ProductGallery from "../components/ProductDetail/Left Side/ProductGallery";
import ProductInfo from "../components/ProductDetail/Right Side/ProductInfo";
import Loader from "../components/Loader/Loader";
import QuantitySelector from "../components/ProductDetail/Right Side/QuantitySelector";
import ProductActions from "../components/ProductDetail/Right Side/ProductActions";
import ProductFeatures from "../components/ProductDetail/Right Side/ProductFeatures";
import ProductNavigation from "../components/ProductDetail/Right Side/ProductNavigation";
import Reviews from "../components/ProductDetail/Reviews/Reviews";
import RelatedProducts from "../components/ProductDetail/RelatedProducts/RelatedProducts";

const ProductDetails = () => {
  const { getSingleProduct, singleProduct, productLoading, products } =
    useContext(Auth);
  const { id } = useParams();
  const totalProducts = products.length;
  const navigate = useNavigate();
  const productId = Number(id);

  const handlePrevious = () => {
    navigate(`/products/${productId - 1}`);
  };

  const handleNext = () => {
    navigate(`/products/${productId + 1}`);
  };

  useEffect(() => {
    getSingleProduct(id);
  }, []);

  if (productLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <ProductGallery product={singleProduct} />
      </div>
      <div>
        <ProductInfo product={singleProduct} />

        <QuantitySelector />

        <ProductActions />

        <ProductFeatures product={singleProduct} />
        
        <ProductNavigation
          hasPrevious={productId > 1}
          hasNext={productId < totalProducts}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />

        <Reviews  reviews={singleProduct?.reviews} />
        <RelatedProducts />
      </div>
    </div>
  );
};

export default ProductDetails;
