import React from "react";
import { FaArrowRight, FaBolt, FaLock, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";

const Login = () => {
  return (
    <div className=" h-screen  flex  items-center bg-black text-white">
      {/* left section  */}
      <div className="border-r ps-20 h-full flex flex-col flex-2 justify-center ">
        <div className="flex gap-3 items-center mb-20">
          <div className="h-9 w-9 rounded-lg bg-lime-400 flex items-center justify-center">
          <FaBolt className="text-black" />
        </div>
        <h1 className="font-syne font-bold text-3xl">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
        </div>
        <span className="text-lime-400 mb-4 font-dm text-lg uppercase font-semibold">Welcome Back</span>
        <h3 className="text-5xl font-syne font-bold leading-tight mb-5">
          Shop the future. <br /> <span className="text-lime-400">Today.</span>
        </h3>
        <p className="text-zinc-400/50 font-semibold mb-8 font-dm">
          Thousands of products, lightning-fast delivery, <br /> and prices that make
          your wallet happy.
        </p>

        <div className="flex gap-5 items-center ">
          <div className="flex flex-col items-center justify-center  border rounded-2xl w-45  h-20">
            <h4 className="font-syne text-xl font-bold">20K+</h4>
            <p className="text-xs font-semibold">Products</p>
          </div>
          <div className="flex flex-col items-center justify-center  border rounded-2xl w-45  h-20">
            <h4 className="font-syne text-xl font-bold">20K+</h4>
            <p className="text-xs font-semibold">Products</p>
          </div>
          <div className="flex flex-col items-center justify-center  border rounded-2xl w-45  h-20">
            <h4 className="font-syne text-xl font-bold">20K+</h4>
            <p className="text-xs font-semibold">Products</p>
          </div>
        </div>
      </div>
      {/* right section */}
      <div className="h-full px-28 flex flex-col justify-center flex-1">
        <div className="border rounded-2xl p-7 w-115 bg-zinc-950">
        <div className="">
          <h2 className="font-syne text-2xl font-bold mb-1">Sign in</h2>
          <p className="text-zinc-500 mb-8">Enter your credentials to continue</p>
        </div>
        <form >
          <div className="flex w-100 items-center gap-4 mb-5  border p-3 px-4 rounded-2xl">
            <MdOutlineEmail />
            <input type="text" placeholder="Email adress" id="" />
          </div>
          <div className="flex w-100 justify-between items-center gap-4 border  mb-5 p-3 px-5 rounded-2xl">
            <div className="flex gap-4 items-center">
            <FaLock />
            <input type="text" placeholder="Password" id="" />
            </div>
            <div className="flex items-center gap-2">

            <IoEyeOutline />
            <FaRegEyeSlash />
            </div>
          </div>

          <button className=" bg-lime-500 mb-5 w-100 rounded-2xl justify-center p-3 flex items-center gap-2">
            Sign in <FaArrowRight />
          </button>
          <p className="items-center justify-center font-semibold text-gray-600 flex gap-2">
            Don't have an account?
            <span className="text-lime-400">Create one</span>
          </p>
        </form>
      </div>
      <div></div>
      </div>
    </div>
  );
};

export default Login;
