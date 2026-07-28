import React from "react";

const StorySection = () => {
  return (
    <section className="mx-auto mt-14 w-full max-w-7xl px-5">
      <div className="rounded-3xl border border-zinc-700 bg-[#121212] p-8 md:p-12">

        <h2 className="font-syne mb-4 text-3xl font-bold text-white">
          Our Story
        </h2>

        <div className="">

          {/* Left */}
          <div className="space-y-5">
            <p className="text-base leading-8 text-zinc-400">
              SkyMart started with one simple goal: make online shopping
              faster, safer and more enjoyable. We wanted a platform where
              customers could discover quality products without worrying about
              fake listings or complicated checkout experiences.
            </p>

            <p className="text-base leading-8 text-zinc-400">
              From electronics and fashion to home essentials, we carefully
              curate products from trusted sellers. Every order is backed by
              secure payments, fast delivery and dedicated customer support.
            </p>

            <p className="text-base leading-8 text-zinc-400">
              Today thousands of customers trust SkyMart every day. Our mission
              is to continue improving the shopping experience through
              technology, transparency and innovation.
            </p>
          </div>

          {/* Right */}
          

        </div>

      </div>
    </section>
  );
};

export default StorySection;