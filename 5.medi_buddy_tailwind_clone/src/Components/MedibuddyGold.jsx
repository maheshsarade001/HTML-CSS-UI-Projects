import React from "react";
import unlimitedConsultations from "../assets/unlimited-consultations.svg";
import freeHealth from "../assets/free-health.svg";
import family from "../assets/family.svg";
import videoConsultation from "../assets/video-consultation.svg";
import waveSection from "../assets/wave-section.svg";

const MedibuddyGold = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto my-8">
        <div className="md:grid grid-cols-2">
          <div className="col-span-1">
            <div className="text-[22px] mb-5">
              <span className="text-[#1778f2]">Medi</span>
              <span className="text-[#f40009]">Buddy </span>
              <span className="text-[#e0af21]">GOLD</span>
            </div>
            <p className="text-[32px] text-transparent bg-clip-text bg-gradient-to-r from-[#1778f2] via-[#f40009] to-[#f40009] mb-7 ">
              Give the care your family <br /> deserves
            </p>
            <p className="text-[#262c67] text-sm sm:text-lg font-bold mb-7">
              Unlimited Consultations with top Docters for members for 6 family
              members in 18+ specialities
            </p>
            <button className="text-sm text-[#262c67] bg-[#efcf58] py-3 px-6 rounded-2xl font-bold mb-4">
              Buy MediBuddy Gold<span>&emsp;</span> <span> &rarr;</span>
            </button>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2  gap-y-6 gap-x-4 md:gap-x-1">
              <div className="relative col-span-1 justify-self-center border p-6 max-w-[235px] rounded-3xl shadow-[0px_0px_25px_rgba(24,24,24,0.161)]">
                <img src={unlimitedConsultations} alt="" />
                <hr className="border-t-[5px] border-[#f4c838] w-1/4 my-4 rounded-3xl" />
                <p className="text-sm sm:text-lg mb-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1778f2] to-[#f40009]">
                  Unlimited Free Consultations
                </p>
                <p className="text-[#262c67] text-[13px] ">
                  Get unlimited free consultaions with all
                  <strong> docters 24x7</strong>
                </p>
                <img
                  src={waveSection}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="md:top-16 relative col-span-1 justify-self-center border p-6 max-w-[235px] rounded-3xl shadow-[0px_0px_25px_rgba(24,24,24,0.161)]">
                <img src={family} alt="" />
                <hr className="border-t-[5px] border-[#f4c838] w-1/4 my-4 rounded-3xl" />
                <p className="text-sm sm:text-lg mb-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1778f2] to-[#f40009]">
                  Frre For Full Family
                </p>
                <p className="text-[#262c67] text-[13px] ">
                  Free consultations for upto
                  <strong> 6 family members</strong>
                </p>
                <img
                  src={waveSection}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="relative col-span-1 justify-self-center border p-6 max-w-[235px] rounded-3xl shadow-[0px_0px_25px_rgba(24,24,24,0.161)]">
                <img src={freeHealth} alt="" />
                <hr className="border-t-[5px] border-[#f4c838] w-1/4 my-4 rounded-3xl" />
                <p className="text-sm sm:text-lg mb-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1778f2] to-[#f40009]">
                  Free For All Health Problems
                </p>
                <p className="text-[#262c67] text-[13px] ">
                  Consult with any doctor from
                  <strong> 18 departments</strong> at any time
                </p>
                <img
                  src={waveSection}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
              </div>
              <div className="md:top-16 relative col-span-1 justify-self-center border p-6 max-w-[235px] rounded-3xl shadow-[0px_0px_25px_rgba(24,24,24,0.161)]">
                <img src={videoConsultation} alt="" />
                <hr className="border-t-[5px] border-[#f4c838] w-1/4 my-4 rounded-3xl" />
                <p className="text-sm sm:text-lg mb-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1778f2] to-[#f40009]">
                  Video Consultations
                </p>
                <p className="text-[#262c67] text-[13px] ">
                  Video Consults with top doctors
                  <strong> 24x7</strong>
                </p>
                <img
                  src={waveSection}
                  alt=""
                  className="absolute bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedibuddyGold;
