import React from 'react'
import BG from "../../assets/images/backgroud.png"
import innerbg from "../../assets/images/innerbg.png"
import sim from "../../assets/images/4gSim.png"
import { BsArrowRightCircleFill } from 'react-icons/bs'
const Switch = () => {

  return (
    <div
      className="h-[70vh] bg-contain flex justify-center items-center text-white sm:p-20  px-7 py-15"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div
        className="border-[1px] border-[#5e635e] rounded-3xl h-[60vh] sm:h-[40vh] bg-contain  flex justify-between items-center sm:px-5 py-8 px-2"
        style={{ backgroundImage: `url(${innerbg})` }}
      >
        <div className=" flex gap-x-5 p-5">
          <div className="flex items-center">
            <img src={sim} width={80} alt="sim" />
          </div>
          <div className=" w-[60%] space-y-5 ">
            <h2 className="font-medium text-2xl">
              Join millions of Nigerians on the 9mobile network
            </h2>
            <p className="text-[14px]">Welcome to Greatness & Excellence</p>
          </div>
        </div>
        <div className="">
          <button className="bg-[#d6e22a] rounded-[2rem] w-[12rem] ps-2 py-2 flex items-center justify-between text-[20px] font-semibold pe-10">
            <BsArrowRightCircleFill className="inline-block text-white  text-[3.5rem]" />
            switch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Switch
