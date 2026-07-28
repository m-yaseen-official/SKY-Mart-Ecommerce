import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { CgProfile } from "react-icons/cg";
import { FaArrowRight, FaBolt, FaLock, FaRegEyeSlash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const Register = () => {

  const {
    registeredUsers,
    setregisterUser,
    setLoggedInUser} = useContext(Auth)

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const formHandler = (data) => {
    // Previous users
    

    // Check duplicate email
    const emailExists = registeredUsers.find((user) => user.email === data.email);

    if (emailExists) {
      alert("Email already exists");
      reset();
      return;
    }

    // Save new user
    let arr = [...registeredUsers,data];
    setregisterUser(arr);
    alert("Account Created Successfully");
    setLoggedInUser(data)
    localStorage.setItem("loggedInUser",JSON.stringify(data))
    localStorage.setItem("registerUser", JSON.stringify(arr));
    navigate("/home");
  
    reset();

  };

  return (
    <div className=" min-h-screen  flex flex-col justify-center  items-center bg-black text-white">
      <div className="flex gap-3 items-center mb-5">
        <div className="h-9 w-9 rounded-lg bg-lime-400 flex items-center justify-center">
          <FaBolt className="text-black" />
        </div>
        <h1 className="font-syne font-bold text-3xl">
          Sky<span className="text-lime-400">Mart</span>
        </h1>
      </div>

      <div className="border border-zinc-800 rounded-2xl w-110 py-6 flex flex-col items-center justify-center  bg-[#111111]">
        <div className="flex flex-col ">
          <h2 className="font-syne text-2xl font-bold mb-1">Create account</h2>
          <p className="text-zinc-500 mb-6">Join SkyMart and start shopping</p>
        </div>
        <form onSubmit={handleSubmit(formHandler)}>
          <div className="flex w-100 items-center gap-4   border border-zinc-800 p-3  px-4 rounded-2xl">
            <CgProfile />
            <input
              {...register("name", {
                required: " name is required",
                minLength:{
                  value:3,
                  message:"Minimum 3 characters required"
                },
                maxLength:{
                  value:15,
                  message:"Maximum 15 character required"
                }
              })}
              type="text"
              className="w bg-transparent rounded outline-none py-2"
              placeholder=" name"
              id=""
            />
          </div>
          {errors.name ? (
            <p className="text-red-500 mb-5">{errors.name.message}</p>
          ) : (
            <div className="mb-5"></div>
          )}

          <div className="flex w-100 items-center gap-4 mb-1  border border-zinc-800 p-3  px-4 rounded-2xl">
            <MdOutlineEmail />
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
              type="email"
              className="w bg-transparent rounded  py-2 outline-none"
              placeholder="Email adress"
            />
          </div>
          {errors.email ? (
            <p className="text-red-500 mb-5">{errors.email.message}</p>
          ) : (
            <div className="mb-5"></div>
          )}

          <div className=" flex gap-3 border border-zinc-800 p-3  mb-5 rounded-2xl p  w-100 items-center">
            <FaLock />
            <input
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, number and special character",
                },
              })}
              className="outline-none  bg-transparent rounded w-full  py-1"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              id=""
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              { showPassword ? <IoEyeOutline /> : <FaRegEyeSlash />}
            </button>
          </div>
          {errors.password ? (
            <p className="text-red-500 mb-5">{errors.password.message}</p>
          ) : (
            <div className="mb-5"></div>
          )}
          <button className="text-black font-bold font-syne bg-lime-500 mb-5 w-100 rounded-2xl justify-center p-3 flex items-center gap-2">
            Create Account <FaArrowRight />
          </button>
          <p className="items-center justify-center font-semibold text-gray-600 flex gap-2">
            Already have an account?
            <span
              onClick={() => navigate("/")}
              className="font-syne cursor-pointer text-lime-400"
            >
              Sign in
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
