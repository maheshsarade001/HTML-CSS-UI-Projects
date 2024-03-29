import React from "react";
import Left from "../assets/left.svg";
import firstImage from "../assets/mb-gold.webp";
import secondImage from "../assets/gptw.webp";
import Right from "../assets/right.svg";

const Offers = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto my-14">
        <div className="flex items-center gap-5 ">
          <img className="w-4 cursor-pointer" src={Left} alt="left" />
          <div>
            <img src={firstImage} alt="best buddy" className="cursor-pointer" />
          </div>
          <div className="hidden sm:block">
            <img src={secondImage} alt="corporate" className="cursor-pointer" />
          </div>
          <img className="w-4 cursor-pointer" src={Right} alt="right" />
        </div>
      </div>
    </>
  );
};

export default Offers;
