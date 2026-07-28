import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { Auth } from '../context/AuthContext';

const ProductDetails = () => {

  const {getSingleProduct, singleProduct} = useContext(Auth);
  const {id} =  useParams()

  useEffect(()=>{
    getSingleProduct(id);
  },[])
  
  console.log(id);
  
  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails