import React from "react";
import { email, fb_icon, insta_icon, phone } from "../../../assets/AllImages";

const Footer = () => {
  return (
    <div>
      <hr className="w-full  border-none h-2 md:h-3 bg-[#9ACB6B]" />
      <hr className="w-full  border-none h-2 md:h-3 bg-[#5b9150]" />
      <div className="w-full h-auto bg-[#405741]">
        <div className="w-full flex flex-col items-center justify-center p-16 gap-12  md:gap-24 ">
          <div className=" flex flex-col gap-4 md:gap-10 xl:gap-16">
            <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4">
              <h2 className="font-poppins font-medium text-base  md:text-xl xl:text-3xl text-white">
                For Bulk Orders Whatsapp “Oraytiq Bulk” to
              </h2>
              <div className="flex items-center gap-1 md:gap-2">
                <img
                  src={phone}
                  alt=""
                  className=" w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10"
                />
                <h2 className="font-poppins font-medium text-base md:text-xl xl:text-3xl text-[#9ACB6B]">
                  +91 80799 00987
                </h2>
              </div>
            </div>
            <div className="flex md:flex-row flex-col items-center gap-2 md:gap-4">
              <h2 className="font-poppins font-medium text-base md:text-xl xl:text-3xl text-white">
                For Refund and other queries write to us at
              </h2>
              <div className="flex items-center gap-1 md:gap-2">
                <img
                  src={email}
                  alt=""
                  className=" w-6 h-6 md:w-8 md:h-8 xl:w-10 xl:h-10"
                />
                <h2 className="font-poppins font-medium text-base md:text-xl xl:text-3xl text-[#9ACB6B]">
                  support@dentamitra.com
                </h2>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <img
              src={fb_icon}
              alt=""
              className=" w-8 h-8 md:w-12 md:h-12 xl:w-14 xl:h-14"
            />
            <a href="https://www.instagram.com/oraytiq_oralcarefromnature/">
              <img
                src={insta_icon}
                alt=""
                className="w-8 h-8 md:w-12 md:h-12 xl:w-14 xl:h-14"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
