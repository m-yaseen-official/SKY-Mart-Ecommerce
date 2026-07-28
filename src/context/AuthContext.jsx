import axios from "axios";
import { createContext, useEffect, useState } from "react";

const Auth = createContext();


const AuthProvider = ({children})=>{

  const [registeredUsers, setregisterUser] = useState(JSON.parse(localStorage.getItem("registerUser")) || [])

  const [loggedInUser, setLoggedInUser] = useState(JSON.parse(localStorage.getItem("loggedInUser"))
);

  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);


const getProductData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    setProducts(res.data.products)
  } catch (error) {
    console.log("errors in api->", error);
  }
}

const getCategoriesData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    setCategories(res.data)
  } catch (error) {
    console.log("errors in api->", error);
  }
}



useEffect(()=>{
getProductData();
getCategoriesData();
},[])



  return (
    <Auth.Provider value={
      {
      isCartOpen,
      setIsCartOpen,
      open,
      setOpen,
      products,
      registeredUsers,
      setregisterUser,
      loggedInUser,
      setLoggedInUser,
      categories,
      getProductData
      }}>
      {children}
    </Auth.Provider>
  )
}

export {Auth, AuthProvider}