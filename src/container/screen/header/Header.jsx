import React from "react";
import {
  arrow_icon,
  bottle_image,
  main_banner,
  oratiq_img,
} from "../../../assets/AllImages";

const Header = () => {
  return (
    <div className="w-full ">
      <div className="absolute w-full ">
        <div className="flex items-center justify-center">
          <img
            src={oratiq_img}
            alt=""
            className="w-30 h-14 md:w-44 md:h-24 xl:w-72 xl:h-36 "
          />
        </div>
        <div className="py-2 md:px-6 md:py-24 xl:px-14 xl:py-32">
          <div className="xl:w-[657px] md:w-[543px] md:h-[380px] xl:h-[414px] flex flex-col md:items-start items-center justify-between px-4 md:px-8 gap-8 md:gap-0  xl:gap-8">
            <div className="w-full flex flex-col gap-10 xl:gap-8 ">
              <h1 className="px-6 md:px-0 font-sans text-center md:text-start font-bold text-3xl md:text-4xl xl:text-5xl text-[#012A42] leading-snug xl:leading-snug">
                Pure Bliss Mouthwash for Sensitive Teeth - Protect your smile
                Naturally
              </h1>
              <h3 className=" leading-loose md:leading-loose   text-center md:text-start font-sans font-normal text-xs md:text-sm xl:text-lg text-[#012A42] ">
                Say goodbye to tooth sensitivity and gum Problems and hello to a
                naturally invigorated smile. Feel the difference of pure,
                organic oral care with every swish.
              </h3>
            </div>
            <div className="w-52 h-14 md:w-64 xl:w-72 shadow-md md:rounded-md bg-[#405741] flex items-center justify-center gap-2">
              <h2 className="font-sans font-semibold md:text-base xl:text-lg text-white">
                SHOP NOW
              </h2>
              <img src={arrow_icon} alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <div className=" pt-56 md:py-0">
        <img
          src={main_banner}
          alt=""
          className="w-full h-full hidden md:block"
        />
        <img
          src={bottle_image}
          alt=""
          className="w-full h-full md:hidden  xl:hidden"
        />
      </div>
    </div>
  );
};

export default Header;
