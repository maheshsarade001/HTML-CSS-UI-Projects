import React from "react";
import PlatStore from "../assets/playstore.svg";
import iStore from "../assets/istore.svg";
import Facebook from "../assets/facebook.svg";
import LinkedIn from "../assets/linkedin.svg";
import Twitter from "../assets/twitter.svg";
import Blog from "../assets/blog.svg";
import FooterBG from "../assets/footerBG.svg";

const Footer = () => {
  return (
    <>
      <div
        style={{ backgroundImage: `url(${FooterBG})` }}
        className="w-full h-full bg-no-repeat bg-cover bg-top pb-12 pt-60"
      >
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-8">
            <div className="sm:col-start-2 justify-self-center">
              <h5 className="text-base text-white mb-[10px]">Health</h5>
              <div className="text-xs text-[#ffffffb0] ">
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Medibuddy Gold
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Book Medicine
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Doctor Consultation
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Book a Lab test
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Covid Essential Items
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Dental
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Cancer Care
                </p>
              </div>
            </div>
            <div className="col-span-1 justify-self-center">
              <h5 className="text-base text-white mb-[10px]">
                Hospitalization
              </h5>
              <div className="text-xs text-[#ffffffb0] ">
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Plan Hospitalization
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Locate hospital
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  <span className="text-base text-white">Download: </span>
                  eCard <span className="text-base text-white">|</span>
                  Claim forms
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Track claim
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  FAQs
                </p>
              </div>
            </div>
            <div className="col-span-1 justify-self-center">
              <h5 className="text-base text-white mb-[10px]">ABOUT</h5>
              <div className="text-xs text-[#ffffffb0] ">
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Overview
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Testimonials
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Contact
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Blog
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Careers
                </p>
                <p className="mb-[10px] py-[2px] cursor-pointer hover:text-white font-bold">
                  Security
                </p>
              </div>
            </div>
            <div className="col-span-2 sm:col-span-1 text-center justify-self-center">
              <div className="flex gap-2 sm:hidden">
                <div className="mb-4">
                  <button className="text-sm px-4 py-[6px] font-bold text-white bg-[#ffffff5b] rounded ">
                    Terms of use
                  </button>
                </div>
                <div>
                  <button className="text-sm px-3 py-[6px] font-bold text-white bg-[#ffffff5b] rounded ">
                    Privacy Policy
                  </button>
                </div>
              </div>
              <p className="text-[10px] text-white mb-[10px]">DOWNLOAD APP</p>
              <div className="flex gap-x-2 justify-center mb-5">
                <div className="border p-2 rounded-2xl cursor-pointer">
                  <img className="w-3" src={PlatStore} alt="play-store" />
                </div>
                <div className="border p-2 rounded-2xl cursor-pointer">
                  <img className="w-3" src={iStore} alt="iStore" />
                </div>
              </div>
              <p className="text-[10px] text-white mb-[10px]">FOLLOW US</p>
              <div className="flex justify-center gap-2 mb-5">
                <div className="border p-2 rounded-2xl cursor-pointer">
                  <img className="w-3 " src={Facebook} alt="facebook" />
                </div>
                <div className="border p-2 rounded-2xl cursor-pointer">
                  <img className="w-3" src={LinkedIn} alt="linkedin" />
                </div>
                <div className="border p-2 rounded-2xl cursor-pointer">
                  <img className="w-3" src={Twitter} alt="twitter" />
                </div>
                <div className="border p-2 rounded-2xl cursor-pointer">
                  <img className="w-3" src={Blog} alt="blog" />
                </div>
              </div>
              <div className="hidden sm:block">
                <div className="mb-4">
                  <button className="text-sm px-4 py-[6px] font-bold text-white bg-[#ffffff5b] rounded ">
                    Terms of use
                  </button>
                </div>
                <div>
                  <button className="text-sm px-3 py-[6px] font-bold text-white bg-[#ffffff5b] rounded ">
                    Privacy Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
