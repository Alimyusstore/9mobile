import React from 'react'
import BG from "../../assets/images/background2.svg"
import TV from "../../assets/images/9tv.png"
import Review from './Review';
import Button from './Button';

const CustomerReview = () => {
  return (
    <div className="bg-[#fafbf7] min-h-[150vh] w-full pb-10 px-5 my-10 sm:px-20 space-y-20">
      <p className="sm:p-24  p-10 text-3xl sm:text-5xl text-[#023a51] font-semibold">
        What our customers are saying
      </p>
      <Review/>
      <div
        className="w-full h-[100vh] sm:h-[55vh] rounded-[2.5rem] flex flex-col justify-between items-center text-center py-10 px-5 sm:px-28 text-white bg-auto bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="w-20">
          {" "}
          <img src={TV} alt="9tv" />
        </div>
        <div>
          <h2 className="font-semibold text-[2rem] p-2">
            Watch your favourite shows on 9tv
          </h2>
          <p className="text-[1.125rem] mb-3">
            Watch latest Nollywood blockbusters to kids’ favourites, 9tv
            catalogue of content offers enjoyment for everyone. With access to a
            selection of 24/7 unlimited nollywood movie categories
          </p>
        </div>
       <Button bnText={"Learn more"}/>
      </div>
    </div>
  );
}

export default CustomerReview
