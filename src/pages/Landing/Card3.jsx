import React from 'react'
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';

const Card3 = ({ date, title, parag, buttonText, image, style, style2, img }) => {
  return (
    <div className={`rounded-3xl overflow-hidden hover:scale-[1.025] ${style}`}>
      <div className={`relative `}>
        <img src={image} className={`${img}`} alt="" />
        <BsFillArrowUpRightCircleFill className="absolute text-5xl text-white top-[1.2rem] left-[29.5rem]" />
      </div>
      <div className={`bg-[#fafafa] p-5 overflow-hidden ${style2}`}>
        <div className="sm:w-[1000%] ">
          <p className="text-[#006848] font-semibold">
            Marketing Team &#8226; {date}
          </p>
          <h2 className="font-semibold text-2xl mb-5">{title}</h2>
          <p className="text-17px mb-3">{parag}</p>
          <button className="rounded-3xl px-2 bg-[#006749] text-white">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card3
