import React, { useContext, useState } from "react";
import { FaArrowRight, FaBolt, FaLock, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();

  const { registeredUsers, setLoggedInUser } = useContext(Auth);
  const [showPassword, setShowPassword] = useState(false);

console.log(registeredUsers);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  let formSubmit = (data) => {
    console.log(data);
    let user = registeredUsers.find((val) => {
      return val.email === data.email && val.password === data.password;
    });

    if (!user) {
      toast.error("invalid creds or user not found");
      reset();
      return;
    }

    setLoggedInUser(user);
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    toast.success("User loggedin");
    reset();
    navigate("/home");
  };

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
        <span className="text-lime-400 mb-4 font-dm text-lg uppercase font-semibold">
          Welcome Back
        </span>
        <h3 className="text-5xl font-syne font-bold leading-tight mb-5">
          Shop the future. <br /> <span className="text-lime-400">Today.</span>
        </h3>
        <p className="text-zinc-400/50 font-semibold mb-8 font-dm">
          Thousands of products, lightning-fast delivery, <br /> and prices that
          make your wallet happy.
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
            <p className="text-zinc-500 mb-8">
              Enter your credentials to continue
            </p>
          </div>

          <form onSubmit={handleSubmit(formSubmit)}>
            <div className="flex w-100 items-center gap-4  border border-zinc-800 p-3 px-4 rounded-2xl">
              <MdOutlineEmail />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                className="p-1 outline-none w-full"
                type="email"
                placeholder="Email adress"
              />
            </div>
            {errors.email ? (
            <p className="text-red-500 mb-5">{errors.email.message}</p>
          ) : (
            <div className="mb-5"></div>
          )}
            <div className=" flex gap-3 border border-zinc-800 p-3  rounded-2xl p  w-100 items-center">
              <FaLock />
              <input
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                    message:
                      "Password must contain uppercase, lowercase, number and special character",
                  },
                })}
                className="outline-none ps-2.5 w-full  py-1"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id=""
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
              </button>
            </div>
          {errors.password ? (
            <p className="text-red-500 mb-5">{errors.passwordord.message}</p>
          ) : (
            <div className="mb-5"></div>
          )}
            <button className=" bg-lime-500 mb-5 w-100 rounded-2xl text-black font-bold font-syne  justify-center p-3 flex items-center gap-2">
              Sign in <FaArrowRight />
            </button>
            <p className="items-center justify-center font-semibold text-gray-600 flex gap-2">
              Don't have an account?
              <span
                onClick={() => navigate("/register")}
                className="cursor-pointer font-syne text-lime-400"
              >
                Create one
              </span>
            </p>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
