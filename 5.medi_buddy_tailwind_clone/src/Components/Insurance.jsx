import React from "react";
import rightBlueArrow from "../assets/rightArrow-S.svg";
import Ecard from "../assets/ecard.svg";
import waveSection from "../assets/wave-section.svg";
import Claims from "../assets/claims.svg";
import Hospitalization from "../assets/hospitalization.svg";
import NetworkHospitals from "../assets/network-hospitals.svg";
import EmpanelHosp from "../assets/EmpanelHosp.svg";
import Surgery from "../assets/surgery.svg";
import SurgeryMob from "../assets/surgery-mob.svg";

const Insurance = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-5 px-[14px]">
        <p className="text-[32px] text-[#262c67] font-bold mb-7 ">Insurance</p>
        <p className="text-lg text-[#262c67] font-bold mb-8">
          Get access to all your Health insurance services - View Policy,
          Initiate and Track Claims, Go Cashless with network hospitals and
          intimate Hospitalization
        </p>
        <div className="flex justify-center">
          <div className="flex gap-6 flex-wrap mb-14">
            <div className=" col-span-1 border rounded-3xl min-h-[240px] max-w-[215px] p-6 shadow-[0px_0px_25px_rgba(24,24,24,0.161)] relative cursor-pointer">
              <div className="flex justify-between mb-4">
                <p className="text-lg text-[#262c67] font-bold ">E-Card</p>
                <img src={rightBlueArrow} alt="" />
              </div>
              <p className="text-[13px] text-[#262c67] mb-5">
                Get e-cards for you and your family members
              </p>
              <div className="float-right">
                <img
                  className="h-[70px] absolute bottom-6 right-4"
                  src={Ecard}
                  alt=""
                />
              </div>
              <img className="absolute bottom-0" src={waveSection} alt="" />
            </div>
            <div className="col-span-1 border rounded-3xl min-h-[240px] max-w-[215px] p-6 shadow-[0px_0px_25px_rgba(24,24,24,0.161)] relative cursor-pointer">
              <div className="flex justify-between mb-4">
                <p className="text-lg text-[#262c67] font-bold ">Claims</p>
                <img src={rightBlueArrow} alt="" />
              </div>
              <p className="text-[13px] text-[#262c67] mb-5">
                Track your claims in real-time
              </p>
              <div className="float-right">
                <img
                  className="h-[70px] absolute bottom-6 right-4"
                  src={Claims}
                  alt=""
                />
              </div>
              <img className="absolute bottom-0" src={waveSection} alt="" />
            </div>
            <div className="col-span-1 border rounded-3xl min-h-[240px] max-w-[215px] p-6 shadow-[0px_0px_25px_rgba(24,24,24,0.161)] relative cursor-pointer">
              <div className="flex justify-between mb-4">
                <p className="text-lg text-[#262c67] font-bold ">
                  Plan Hospitalization
                </p>
                <img src={rightBlueArrow} alt="" />
              </div>
              <p className="text-[13px] text-[#262c67] mb-5">
                Plan and Intimate hospitalization at trusted hospitals
              </p>
              <div className="float-right">
                <img
                  className="h-[70px] absolute bottom-6 right-4"
                  src={Hospitalization}
                  alt=""
                />
              </div>
              <img className="absolute bottom-0" src={waveSection} alt="" />
            </div>
            <div className="col-span-1 border rounded-3xl min-h-[240px] max-w-[215px] p-6 shadow-[0px_0px_25px_rgba(24,24,24,0.161)] relative cursor-pointer">
              <div className="flex justify-between mb-4">
                <p className="text-lg text-[#262c67] font-bold ">
                  Network Hospitals
                </p>
                <img src={rightBlueArrow} alt="" />
              </div>
              <p className="text-[13px] text-[#262c67] mb-5">
                Search for the nearest Network hospital to go cashless
              </p>
              <div className="float-right">
                <img
                  className="h-[70px] absolute bottom-6 right-4"
                  src={NetworkHospitals}
                  alt=""
                />
              </div>
              <img className="absolute bottom-0" src={waveSection} alt="" />
            </div>
            <div className="col-span-1 border rounded-3xl min-h-[240px] max-w-[215px] p-6 shadow-[0px_0px_25px_rgba(24,24,24,0.161)] relative cursor-pointer">
              <div className="flex justify-between mb-4">
                <p className="text-lg text-[#262c67] font-bold ">
                  Empanel Hospitals
                </p>
                <img src={rightBlueArrow} alt="" />
              </div>
              <p className="text-[13px] text-[#262c67] mb-5">
                Become a part of Network Hospitals
              </p>
              <div className="float-right">
                <img
                  className="h-[70px] absolute bottom-6 right-4"
                  src={EmpanelHosp}
                  alt=""
                />
              </div>
              <img className="absolute bottom-0" src={waveSection} alt="" />
            </div>
          </div>
        </div>

        <div className="my-10 pt-4">
          <img
            className="mx-auto cursor-pointer rounded-xl border shadow-[0px_0px_15px_rgba(24,24,24,0.161)]"
            src={Surgery}
            alt=""
          />
          <img
            className="hidden mx-auto cursor-pointer rounded-xl border shadow-[0px_0px_15px_rgba(24,24,24,0.161)]"
            src={SurgeryMob}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Insurance;
