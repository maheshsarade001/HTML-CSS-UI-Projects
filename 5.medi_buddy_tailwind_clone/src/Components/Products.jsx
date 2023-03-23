/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import rightArrow from "../assets/arrow-right.svg";
import bg from "../assets/bg-wave-lg.svg";
const Products = () => {
  return (
    <>
      <div>
        <div className="relative flex justify-between items-center m-auto w-[960px] py-[30px] px-5 rounded-[50px] shadow-[0px_0px_15px_rgba(24,24,24,0.161)] ">
          <div className="text-lg text-[#050a4e] font-bold m-auto">
            Consult with Top Docters Online, 24x7
          </div>
          <a
            href=""
            className="flex border rounded-[30px] w-[30%] space-x-4 justify-between px-7 py-4"
          >
            <span className="text-[#337ab7] font-bold text-sm cursor-pointer">
              Start Conversation
            </span>
            <img
              src={rightArrow}
              alt="right arrow"
              className="w-6 cursor-pointer"
            />
          </a>
          <img className="absolute bottom-0 left-0" src={bg} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Products;
