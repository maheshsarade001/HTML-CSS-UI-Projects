import React from "react";
import bannerImage from "../assets/womens-md.png";
import ABHA from "../assets/ABHA.svg";

const Banner = () => {
  return (
    <>
      <div className="mt-20">
        <div className="p-2 px-3 w-[70%] mx-auto">
          <img src={bannerImage} alt="Womens Day" className="cursor-pointer" />
        </div>
      </div>
      <div className="flex justify-center my-3 gap-3">
        <div className="w-4 h-4 bg-[#1778F2] rounded-3xl"></div>
        <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl"></div>
        <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl"></div>
        <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl"></div>
        <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl"></div>
        <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl"></div>
      </div>
      <div>
        <div className=" my-10">
          <img
            className="mx-auto rounded-xl border shadow-[0px_0px_15px_rgba(24,24,24,0.161)]"
            src={ABHA}
            alt="ABHA"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
