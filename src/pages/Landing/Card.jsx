import React from 'react'

import { IoIosInformationCircle } from "react-icons/io";

const Card = ({image, header2, text }) => {
  return (
    <div className="bg-[#cce1db]  rounded-lg p-3  ms-5">
      <div className="hover:scale-[1.025] w-[450px] space-y-5">
        <div className="rounded-xl overflow-hidden w-[450px]">
          {" "}
          <img className="" src={image} alt="card" />
        </div>
        <div className="bg-white rounded-lg p-4 space-y-3">
          <h2 className="font-semibold text-2xl">{header2}</h2> <p>{text}</p>
          <div className="flex space-x-2">
            <IoIosInformationCircle className="inline-block mt-[0.15rem]" />
            <p className="text-[14px]">Terms and Conditions Apply</p>{" "}
          </div>{" "}
          <button className="bg-[#d6e22a] p-2 px-4 rounded-2xl text-[14px]">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card
