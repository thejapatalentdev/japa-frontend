import React from "react";

const WhatWeDone = () => {
  return (
    <div className="relative py-[5rem] lg:px-[10rem] lg:py-[10rem]">
      <div className="grid lg:grid-cols-3">
        <div className="relative p-1 md:w-[60%] m-auto">
          <div className="absolute inset-0 border-2 rounded-lg transform bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900"></div>
          <div className="relative bg-white p-6 text-center">
            <p className="text-[36px] text-[#451A83] font-bold">100k</p>
            <p className="text-[16px] text-[#79767A]">Students taught</p>
          </div>
        </div>

        <div className="relative p-1 md:w-[60%] m-auto">
          <div className="absolute inset-0 border-2 rounded-lg transform bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900"></div>
          <div className="relative bg-white p-6 text-center">
            <p className="text-[36px] text-[#FF9F24] font-bold">50k</p>
            <p className="text-[16px] text-[#79767A]">CV Revamped</p>
          </div>
        </div>

        <div className="relative p-1 rounded-lg md:w-[60%] m-auto">
          <div className="absolute inset-0 border-2 rounded-lg transform bg-gradient-to-r from-purple-700 via-pink-500 to-purple-900"></div>
          <div className="relative bg-white p-6  text-center">
            <p className="text-[36px] text-[#FF5FCC] font-bold">30k</p>
            <p className="text-[16px] text-[#79767A]">Jobs Posted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDone;
