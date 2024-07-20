import React from 'react'
import { FaArrowRight } from 'react-icons/fa6';

const Starter = ({ header, btnText }) => {
  return (
    <div className="flex justify-between sm:p-24  p-10">
      <h1 className="text-3xl sm:text-5xl text-[#023a51] font-semibold">
        {header}
      </h1>
      <div>
        <button className="border-[1px] rounded-[1.5rem] px-5 py-2 border-[#4c8474] text-[#4c8474] font-semibold">
          {btnText}
          <FaArrowRight className="inline-block ms-2 text-[#4c8474]" />
        </button>
      </div>
    </div>
  );
};

export default Starter
