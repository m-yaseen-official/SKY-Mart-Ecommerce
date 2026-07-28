import axios from "axios";
import { createContext, useState } from "react";

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

const getProductsByCategory = async (category)=>{
  console.log(category);
  const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
  setProducts(res.data.products);
}
const getCategoriesData = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products/categories");
    setCategories(res.data)
  } catch (error) {
    console.log("errors in api->", error);
  }
}






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
      getProductData,
      getCategoriesData,
      getProductsByCategory,
      }}>
      {children}
    </Auth.Provider>
  )
}

export {Auth, AuthProvider}