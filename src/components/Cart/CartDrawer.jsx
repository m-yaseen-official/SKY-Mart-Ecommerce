import React, { useContext } from "react";
import { Auth } from "../../context/AuthContext";
import { FaTimes } from "react-icons/fa";

const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen } = useContext(Auth);

  return (
    <>
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        ></div>
      )}

      <div
        className={`
        h-screen
        fixed
        w-100
        top-0
        right-0
        z-50
        bg-[#111111]
        shadow-2xl
        transition-all
        duration-300
        flex 
        flex-col
        ${isCartOpen ? "translate-x-0" : "translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <h1 className="text-white text-2xl font-semibold">Shopping Cart</h1>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-white text-xl hover:text-red-500 transition"
          >
            <FaTimes />
          </button>
        </div>
        <div className="border-gray-600 border flex-1 overflow-y-auto p-5 space-y-4">
          <h1 className="text-white">Cart Items Here</h1>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
