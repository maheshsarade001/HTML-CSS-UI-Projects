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
      <div className="max-w-screen-xl mx-auto ">
        <div>
          <div
            className=" md:bg-transparent bg-[#f5f5f5] flex flex-wrap xl:flex-nowrap justify-around items-center gap-2 max-w-4xl mx-auto mb-7 bg-[length:10px] rounded-3xl shadow-[0px_0px_15px_rgba(24,24,24,0.161)] md:shadow-none"
            style={{ backgroundImage: `url(${svga})` }}
          >
            <div
              style={{ backgroundImage: `url(${svga})` }}
              className="bg-[#f5f5f5] w-32 h-32 py-4 pb-6 bg-[length:10px] bg-repeat rounded-3xl md:shadow-[0px_0px_15px_rgba(24,24,24,0.161)] text-center cursor-pointer"
            >
              <img
                src={TalkToDoctor}
                alt="TalktoDoctor"
                className="mx-auto mb-3"
              />
              <p className="text-sm text-[#050a4e] font-bold my-1 mx-auto">
                Talk To Doctor
              </p>
            </div>
            <div className="w-32 h-32 py-4 cursor-pointer">
              <img src={Medicine} alt="Medicine" className="mx-auto mb-2" />
              <p className="text-sm text-center text-[#050a4e] font-bold my-1 mx-auto">
                Medicine
              </p>
            </div>
            <div className="w-32 h-32 py-4 cursor-pointer">
              <img src={SurgeryP} alt="Surgery" className="mx-auto mb-2" />
              <p className="text-sm text-center text-[#050a4e] font-bold my-1 mx-auto">
                Surgery
              </p>
            </div>
            <div className="w-32 h-32 py-4 cursor-pointer">
              <img src={MBGold} alt="MedyBuddy Gold" className="mx-auto mb-2" />
              <p className="text-sm text-center font-bold mt-1 mx-auto">
                <span className="text-[#5878F3]">Medi</span>
                <span className="text-[#E62E3A]">Buddy</span>
                <br />
              </p>
              <p className="text-sm text-[#F3DB73] font-bold  mx-auto text-center mb-1">
                GOLD
              </p>
            </div>
            <div className="w-32 h-32 py-4 cursor-pointer">
              <img src={Insurance} alt="Insurance" className="mx-auto" />
              <p className="text-sm text-center text-[#050a4e] font-bold my-1 mx-auto">
                Insurance
              </p>
            </div>
            <div className="w-32 h-32 py-4 cursor-pointer">
              <img src={LabTest} alt="Lab & Test" className="mx-auto mb-3" />
              <p className="text-sm text-center text-[#050a4e] font-bold my-1 mx-auto">
                Lab Test & <br /> Packages
              </p>
            </div>
            <div className="w-32 h-32 py-4 hidden sm:block">
              <div className="w-10 h-10 mx-auto border shadow-[0px_0px_2px_rgba(24,24,24,0.161)] py-1 rounded-xl mb-4 hover:rounded-full hover:shadow-[0px_0px_12px_rgba(24,24,24,0.161)] cursor-pointer">
                <img src={More} alt="More" className="mx-auto " />
              </div>
              <p className="text-sm text-center text-[#050a4e] font-bold my-1 mx-auto">
                More
              </p>
            </div>
            <div className="sm:hidden text-[#4585f4] text-sm font-bold">
              <a href="">Show More</a>
            </div>
          </div>
        </div>
        <div className="hidden relative md:flex justify-between items-center m-auto max-w-[960px] py-[30px] px-5 rounded-[50px] shadow-[0px_0px_15px_rgba(24,24,24,0.161)] ">
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
