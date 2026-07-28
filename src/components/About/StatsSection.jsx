import React from 'react'

const StatsSection = () => {
  return (
    <div className='mx-auto mt-14 w-full max-w-7xl px-5 font-syne'>
    <div className="grid grid-cols-4 gap-5">

            <div className="w-75 h-37.5 rounded-2xl border border-zinc-700 bg-[#181818] flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-lime-400">
                20K+
              </h3>

              <p className="mt-2 font-dm text-sm text-zinc-400">
                Products Available
              </p>
            </div>

            <div className="w-75 h-37.5 rounded-2xl border border-zinc-700 bg-[#181818] flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-lime-400">
                50K+
              </h3>

              <p className="mt-2 font-dm text-sm text-zinc-400">
                Happy Customers
              </p>
            </div>

            <div className="w-75 h-37.5 rounded-2xl border border-zinc-700 bg-[#181818] flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-lime-400">
                4.9
              </h3>

              <p className="mt-2 font-dm text-sm text-zinc-400">
                Average Rating
              </p>
            </div>

            <div className="w-75 h-37.5 rounded-2xl border border-zinc-700 bg-[#181818] flex flex-col justify-center items-center">
              <h3 className="text-4xl font-bold text-lime-400">
                99%
              </h3>

              <p className="mt-2 font-dm text-sm text-zinc-400">
                On-time Delivery
              </p>
            </div>

          </div>
          </div>
    )
}

export default StatsSection