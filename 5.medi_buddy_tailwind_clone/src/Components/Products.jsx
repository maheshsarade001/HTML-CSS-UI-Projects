/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import rightArrow from "../assets/arrow-right.svg";
import bg from "../assets/bg-wave-lg.svg";
import TalkToDoctor from "../assets/talk-to-doctor.svg";
import Medicine from "../assets/medicine.svg";
import SurgeryP from "../assets/surgery-product.svg";
import MBGold from "../assets/mb-gold.svg";
import Insurance from "../assets/insurance.svg";
import LabTest from "../assets/labtest.svg";
import More from "../assets/more.svg";
import svga from "../assets/diabrDZ77IFIJ.svg";

const Products = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div>
          <div className="flex justify-around max-w-4xl mx-auto">
            <div className="bg-gray-400">
              <img src={TalkToDoctor} alt="TalktoDoctor" />
              <img src={svga} alt="" />
            </div>
            <div>
              <img src={Medicine} alt="Medicine" />
            </div>
            <div>
              <img src={SurgeryP} alt="Surgery" />
            </div>
            <div>
              <img src={MBGold} alt="MedyBuddy Gold" />
            </div>
            <div>
              <img src={Insurance} alt="Insurance" />
            </div>
            <div>
              <img src={LabTest} alt="Lab & Test" />
            </div>
            <div>
              <img src={More} alt="More" />
            </div>
          </div>
        </div>
        <div className="relative flex justify-between items-center m-auto max-w-[960px] py-[30px] px-5 rounded-[50px] shadow-[0px_0px_15px_rgba(24,24,24,0.161)] ">
          <div className="text-lg text-[#050a4e] font-bold m-auto">
            Consult with Top Docters Online, 24x7
          </div>
          <a
            href=""
            className="flex border rounded-[30px] w-[30%] space-x-4 justify-between px-7 py-4 cursor-pointer z-10"
          >
            <span className="text-[#337ab7] font-bold text-sm ">
              Start Conversation
            </span>
            <img
              src={rightArrow}
              alt="right arrow"
              className="w-6 cursor-pointer"
            />
          </a>
          <img
            className="absolute bottom-0 left-0 z-0"
            src={bg}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
};

export default Products;
