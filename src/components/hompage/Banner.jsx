
import Image from 'next/image';
import React from 'react';
import BannerPic from '../../assets/banner.png';

const Banner = () => {
  return (
    <div className="bg-[#0b0e0d] min-h-screen px-4 sm:px-6 lg:px-8 py-8  flex items-center justify-center">

      <div className=" container mx-auto bg-[#121619] border border-gray-800 rounded-2xl
                      p-6 sm:p-8 md:p-12 lg:p-16 xl:p-20
                      flex flex-col md:flex-row
                      items-center justify-between
                      gap-10 lg:gap-16 xl:gap-20
                      relative overflow-hidden">

        {/* Content */}
        <div className="w-full md:w-1/2 max-w-2xl z-10 text-center md:text-left">

          <span className="text-[#a3e635] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3 block">
            Workout Library
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl
                         font-black text-white tracking-tight leading-none mb-6 uppercase">
            Train with intent. Log every set.
          </h1>

          <p className="text-gray-400 text-sm sm:text-base lg:text-lg
                        mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
            today&apos;s plan, and watch the weeks work add up.
          </p>

          <button className="bg-[#a3e635] hover:bg-[#8acc2b]
                             text-black font-bold
                             px-7 lg:px-8 py-3.5 lg:py-4
                             rounded-lg text-sm lg:text-base
                             transition-colors duration-200">
            Browse Workouts
          </button>

        </div>

        {/* Image */}
        <div className="w-full md:w-1/2 z-10 flex justify-center items-center">

          <Image
            src={BannerPic}
            alt="Workout Exercise 3D Model"
            className="w-64 sm:w-72 md:w-80 lg:w-[26rem] xl:w-[32rem]
                       object-contain"
          />

        </div>

      </div>
    </div>
  );
};

export default Banner;
