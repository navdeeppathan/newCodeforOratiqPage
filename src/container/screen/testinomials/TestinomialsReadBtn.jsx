import React, { useState } from "react";

const TestinomialsReadBtn = ({
  quote,
  authImg,
  authorName,
  authorPassion,
  icon,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg min-h-72 w-80 md:w-1/2 xl:w-full flex flex-col items-start justify-between ">
        <p className="text-[#121216] font-sans font-medium text-sm xl:text-base mb-5">
          {isExpanded ? quote : `${quote.substring(0, 200)}...`}
          <button onClick={toggleReadMore} className="text-[#9ACB6B] ml-2 ">
            {isExpanded ? "..Read Less" : "Read More"}
          </button>
        </p>

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src={authImg}
              alt=""
              className="md:w-12 md:h-12 w-10 h-10 rounded-full "
            />
            <div className="flex flex-col gap-1">
              <p className="font-semibold font-sans text-sm md:text-base text-[#121216] ">
                {authorName}
              </p>
              <p className="text-[#A8A9B2] font-sans font-normal text-xs md:text-sm">
                {authorPassion}
              </p>
            </div>
          </div>
          <div>
            <img src={icon} alt="" className="w-10 xl:w-12 xl:h-9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestinomialsReadBtn;
