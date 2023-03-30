import React from "react";
import androidButton from "../assets/androidButton.png";
import iosButton from "../assets/iosButton.png";
import AmitabhBacchanVideo from "../assets/mb-amitabh.mp4";

const VideoCard = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto">
        <div className="md:grid grid-cols-2 gap-x-8 sm:py-6">
          <div className="col-span-1">
            <p className="text-[#262c67] text-sm md:text-lg font-bold text-center">
              Watch Amitabh Bacchan emphasize the importance of Unlimited Export
              Docter Consultations online for the entire family
            </p>
            <div className="pt-24 text-center hidden sm:block mb-7">
              <p className="text-[#262c67] text-lg font-bold mb-4 ">
                Download the App
              </p>
              <div>
                <button className="w-28 md:w-40 mr-2">
                  <img src={androidButton} alt="" />
                </button>
                <button className="w-28 md:w-40 ml-2">
                  <img src={iosButton} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <video controls className="rounded-2xl border" autoPlay muted>
              <source src={AmitabhBacchanVideo} type="video/mp4" />
            </video>
          </div>
          <div className=" text-center sm:hidden my-2">
            <p className="text-[#262c67] text-lg font-bold mb-4 ">
              Download the App
            </p>
            <div>
              <button className="w-40 mr-2">
                <img src={androidButton} alt="" />
              </button>
              <button className="w-40 ml-2">
                <img src={iosButton} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
