import React from "react";
import WomensMD from "../assets/womens-md.png";
import ABHA from "../assets/ABHA.svg";
import WomensSM from "../assets/womens-sm.png";
import ABHAMobile from "../assets/ABHAMobile.svg";

const Banner = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="mt-20">
          <div className="p-2 px-3  mx-auto">
            <img
              src={WomensMD}
              alt="Womens Day"
              className="cursor-pointer hidden md:block  "
            />
            <img
              src={WomensSM}
              alt="Womens Day"
              className="cursor-pointer md:hidden"
            />
          </div>
        </div>
        <div className="flex justify-center my-3 gap-3">
          <div className="w-4 h-4 bg-[#1778F2] rounded-3xl cursor-pointer"></div>
          <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl cursor-pointer"></div>
          <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl cursor-pointer"></div>
          <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl cursor-pointer"></div>
          <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl cursor-pointer"></div>
          <div className="w-4 h-4 bg-[#DDDDDD] rounded-3xl cursor-pointer"></div>
        </div>
        <div>
          <div className=" my-10 ">
            <img
              className="mx-auto rounded-xl border shadow-[0px_0px_15px_rgba(24,24,24,0.161)] cursor-pointer hidden md:block"
              src={ABHA}
              alt="ABHA"
            />
            <img
              src={ABHAMobile}
              alt="ABHA"
              className="cursor-pointer md:hidden mx-auto shadow-[0px_0px_15px_rgba(24,24,24,0.161)] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
