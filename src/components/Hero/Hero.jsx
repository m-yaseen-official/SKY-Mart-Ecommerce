import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="px-5 lg:px-10 mt-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[30px] border border-zinc-700 bg-[#111111]"
      >
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

        <div className="relative z-10 grid lg:grid-cols-[4fr_1fr] gap-10 items-center p-4  md:p-8 lg:p-10">
          {/* Left Side */}
          <div>
            <p className=" font-dm text-lime-400 uppercase tracking-widest text-sm font-light mb-4 lead">
              Good Morning 👋
            </p>

            <h1 className="font-syne text-4xl md:text-5xl   font-bold ">
              Welcome back,
              <br />
              <span className="text-lime-400">zunii!</span>
            </h1>

            <p className="mt-3 text-zinc-400 max-w-xl leading-7">
              Discover today's picks — hand-curated products across
              electronics, fashion, furniture, accessories and much more.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-lime-400 text-black font-medium px-4 py-0 rounded-xl flex items-center gap-3"
              >
                Shop Now
                <FaArrowRight />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-zinc-600 px-8 py-4 rounded-xl hover:border-lime-400 transition"
              >
                View All Products
              </motion.button>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex lg:flex-col gap-5 justify-center">
            <motion.div
              whileHover={{ y: -8 }}
              className="flex-1 w-50 rounded-2xl bg-lime-400/10 border border-lime-400/30 p-8 text-center"
            >
              <h2 className="text-5xl font-bold text-lime-400">20+</h2>

              <p className="text-zinc-300 mt-2">Products Available</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="flex-1 w-50 rounded-2xl border border-zinc-600 p-8 text-center"
            >
              <h2 className="text-4xl font-bold">Free</h2>

              <p className="text-zinc-400 mt-2">
                Delivery on ₨999+
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative Glow */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
      </motion.div>
    </section>
  );
};

export default Hero;