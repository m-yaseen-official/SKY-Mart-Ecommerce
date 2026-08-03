import React from 'react'
import ProductGallery from '../Left Side/ProductGallery'
import ProductInfo from '../Right Side/ProductInfo'

const DetailedCard = () => {
  
  return (
        <div className="grid lg:grid-cols-2 ">
     {/* LEFT  */}
      <ProductGallery  />

        {/* RIGHT */}
     <ProductInfo  />

      </div>

    )
}

export default DetailedCard