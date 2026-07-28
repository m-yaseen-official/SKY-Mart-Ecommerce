import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Auth = createContext();


const AuthProvider = ({children})=>{
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [products, setProducts] = useState([]);

  console.log(products);

const getProductData = async () => {
  try {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data)
  } catch (error) {
    console.log("errors in api->", error);
  }
}

useEffect(()=>{
getProductData();
},[])



  return (
    <Auth.Provider value={{isCartOpen,setIsCartOpen,open, setOpen, products}}>
      {children}
    </Auth.Provider>
  )
}

export {Auth, AuthProvider}