import axios from "axios";
import { createContext, useState } from "react";

const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [registeredUsers, setregisterUser] = useState(
    JSON.parse(localStorage.getItem("registerUser")) || [],
  );

  const [loggedInUser, setLoggedInUser] = useState(
    JSON.parse(localStorage.getItem("loggedInUser")),
  );

  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);
  const [singleProduct, setSingleProduct] = useState({});

  const [productsLoading, setProductsLoading] = useState(false);

const [categoriesLoading, setCategoriesLoading] = useState(false);
const [categoryLoading, setCategoryLoading] = useState(false);

const [productLoading, setProductLoading] = useState(false);


  const getProductsData = async () => {
    try {
      setProductsLoading(true)
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.log("errors in api->", error);
    }finally{
      setProductsLoading(false)
    }
  };

  const getProductsByCategory = async (category) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/category/${category}`,
      );
      setCategoryLoading(true)
      setProducts(res.data.products);
    } catch (error) {
      console.log(error);
    }finally{
      setCategoryLoading(false)
    }
  };
  const getCategoriesData = async () => {
    try {
      setCategoriesLoading(true)
      const res = await axios.get("https://dummyjson.com/products/categories");
      setCategories(res.data);
    } catch (error) {
      console.log("errors in api->", error);
    }finally{
      setCategoriesLoading(false)
    }
  };

  const getSingleProduct = async (id) => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProductLoading(true);
      setSingleProduct(res.data);
    } catch (error) {
      console.log(error);
    }finally{
      setProductLoading(false)
    }
  };

  return (
    <Auth.Provider
      value={{
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
        getProductsData,
        getCategoriesData,
        getProductsByCategory,
        getSingleProduct,
        singleProduct,
        productsLoading,
        categoriesLoading,
        categoryLoading,
        productLoading
      }}
    >
      {children}
    </Auth.Provider>
  );
};

export { Auth, AuthProvider };
