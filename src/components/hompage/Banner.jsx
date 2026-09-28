import Image from 'next/image';
import React from 'react';
import BannerPic from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="bg-[#0b0e0d] min-h-screen px-4 py-8 flex items-center justify-center">
     
      <div className="w-full max-w-7xl bg-[#121619] border border-gray-800 rounded-2xl p-8 md:p-14 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        
        
        <div className="max-w-xl z-10 mb-8 md:mb-0">
          <span className="text-[#a3e635] text-xs font-bold tracking-widest uppercase mb-3 block">
            Workout Library
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-none mb-6 uppercase">
            Train with intent. Log every set.
          </h1>
          <p className="text-gray-400 text-sm md:text-base mb-8 leading-relaxed">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today&apos;s plan, and watch the weeks work add up.
          </p>
          <button className="bg-[#a3e635] hover:bg-[#8acc2b] text-black font-bold px-7 py-3.5 rounded-lg text-sm transition-colors duration-200">
            Browse Workouts
          </button>
        </div>

        
        <div className="z-10 flex justify-center items-center">
          <Image
            src={BannerPic}
            alt="Workout Exercise 3D Model"
            className="w-72 md:w-96 object-contain"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;