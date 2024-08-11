import React from "react";
import {
  banner,
  hands_icon,
  teeth_icon,
  tube_icon,
} from "../../assets/AllImages";

const Middle = () => {
  return (
    <div className="xl:p-28 p-16 md:p-20 flex flex-col gap-16 xl:gap-24">
      <div className="flex flex-col gap-10 xl:gap-12">
        <div className="flex items-center justify-center px-14  md:px-30 xl:px-40">
          <h1 className="font-sans font-bold text-4xl md:4xl xl:text-5xl text-[#012A42] text-center leading-snug ">
            Natural Herbs from the foothills of Himalayas
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-3 gap-6 ">
          <div className="w-full h-44 bg-[#E8FBFF] flex flex-col items-center justify-center gap-2  rounded-lg">
            <img src={hands_icon} alt="" className="w-20 h-20" />
            <h3 className="w-40 font-poppins font-bold text-center text-[#000000]">
              Traditional Wisdom Modern Science
            </h3>
          </div>
          <div className="w-full h-44 bg-[#E5FFF1] flex flex-col items-center justify-center gap-2  rounded-lg">
            <img src={tube_icon} alt="" className="w-20 h-20" />
            <h3 className=" w-40 font-poppins font-bold text-center text-[#000000]">
              No Harmful Chemicals
            </h3>
          </div>
          <div className="w-full h-44 bg-[#FFF1F6] flex flex-col items-center justify-center gap-2  rounded-lg">
            <img src={teeth_icon} alt="" className="w-20 h-20" />
            <div>
              <h3 className="w-40 font-poppins  font-bold text-center text-[#000000]">
                Luxury
              </h3>
              <h3 className=" font-poppins  font-bold text-center text-[#000000]">
                Oral Care Essentials
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={banner} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default Middle;
