import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Auth } from '../context/AuthContext';
import ProductGallery from '../components/ProductDetail/ProductGallery';
import ProductInfo from '../components/ProductDetail/ProductInfo';
import Loader from '../components/Loader/Loader';

const ProductDetails = () => {

  const {getSingleProduct, singleProduct, productLoading } = useContext(Auth);
  const {id} =  useParams()

  useEffect(()=>{
    getSingleProduct(id);
  },[])
  
  console.log(id);
    if(productLoading) { 
      return <Loader /> 
    }
      
  return (
    <div>
      <ProductGallery product={singleProduct} />
      <ProductInfo product={singleProduct} />
    </div>
  )
}

export default ProductDetails