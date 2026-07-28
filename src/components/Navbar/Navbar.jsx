import { motion } from "framer-motion";
import { FaBolt, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import { LuLogOut } from "react-icons/lu";
import { NavLink } from "react-router";
import { Auth } from "../../context/AuthContext";

const Navbar = () => {
  const { setIsCartOpen, open, setOpen } = useContext(Auth);

  const {loggedInUser} = useContext(Auth)
  const fullName = loggedInUser.name;
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-10 bg-[#0B0B0B]/90 backdrop-blur-md border-b border-gray-400 "
    >
      <div className="max-w-7xl font-clash mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}

        <div className="flex items-center gap-3">
          <div className="h-7 w-7 rounded-lg bg-lime-400 flex items-center justify-center">
            <FaBolt className="text-black" />
          </div>

          <h1 className="font-syne text-lg font-bold">
            Sky<span className="text-lime-400">Mart</span>
          </h1>
        </div>

        {/* Desktop */}

        <ul className="hidden md:flex items-center font-semibold text-gray-500 text-sm gap-10 font-dm">
          <NavLink
            to={"/home"}
            className={({isActive})=> isActive ? "text-lime-400 font-semibold cursor-pointer transition border-b border-lime-400": "text-gray-500 cursor-pointer transition" } 
            end
          >
            Home
          </NavLink>

          <NavLink
            to={"/products"}
            className={({isActive})=> isActive ? "text-lime-400 font-semibold cursor-pointer transition border-b border-lime-400": "text-gray-500 cursor-pointer transition" }
          >
            Shop
          </NavLink>

          <NavLink
            to={"/about"}
            className={({isActive})=> isActive ? "text-lime-400 font-semibold cursor-pointer transition border-b border-lime-400": "text-gray-500 cursor-pointer transition" }
          >
            About
          </NavLink>
        </ul>

        {/* Right */}

        <div className="hidden md:flex items-center gap-4">
          <span className="flex gap-2 items-center bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-xl transition">
            <span className="bg-lime-300 px-2 py-1text-sm text-black font-semibold rounded-lg">
              {fullName[0]}
            </span>
            <span className="text-sm text-gray-300">{fullName}</span>
          </span>

          <button
            onClick={() => setIsCartOpen(true)}
            className="relative h-10 w-10 rounded-xl border border-zinc-700 flex justify-center items-center hover:border-lime-400"
          >
            <FaShoppingCart />

            <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-lime-400 text-black text-xs flex justify-center items-center">
              4
            </span>
          </button>

          <button className="relative h-10 w-10 rounded-xl border border-zinc-700 flex justify-center items-center hover:border-lime-400">
            <LuLogOut />
          </button>
        </div>

        {/* Mobile */}

        <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? (
           
              <div>
                <FaTimes />
              </div>
              
          ) : (
            

              <div>
                <FaBars />
            </div>
          )}
        </div>
        
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="md:hidden bg-[#111]"
        >
          <ul className="flex flex-col p-5 items-center  gap-5">
            <NavLink to={"/home"} className={({isActive})=> isActive ? "text-lime-400 w-full text-center font-semibold cursor-pointer transition border-b border-lime-400": "text-gray-500 w-full text-center cursor-pointer transition" } >
              Home
            </NavLink>
            <NavLink to={"/products"} className={({isActive})=> isActive ? "text-lime-400 w-full text-center font-semibold cursor-pointer transition border-b border-lime-400": "text-gray-500 w-full text-center cursor-pointer transition" }>
              Shop
            </NavLink>
            <NavLink to={"/about"} className={({isActive})=> isActive ? "text-lime-400 w-full text-center font-semibold cursor-pointer transition border-b border-lime-400": "text-gray-500 w-full text-center cursor-pointer transition" }>
              About
            </NavLink>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;