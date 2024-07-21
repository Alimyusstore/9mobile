import React from 'react'
import backgroundImage from "../../assets/images/delaybackground1.svg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Card from './Card';
import card1 from "../../assets/images/card1.jpg";
import card2 from "../../assets/images/card2.jpg";
const BestOffer = () => {
    let cards = [
      {
        image: card1,
        header2: "TREELZ",
        text: "Digital entertainment hub for subscribers on the 9Mobile network",
      },
      {
        image: card2,
        header2: "shopmore",
        text: "Want more? Shop more!",
      },
    ];
  return (
    <div
      className="w-full min-h-screen bg-cover rounded-t-[3rem] mt-[-4rem] pb-10"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="flex justify-between sm:px-20  p-10">
        <h1 className="text-3xl sm:text-5xl text-[#023a51] font-semibold">Our Best Offers</h1>
        <div className="flex">
          {" "}
          <IoArrowBackCircleOutline className="sm:text-5xl text-3xl  text" />
          <IoArrowForwardCircleSharp className="sm:text-5xl  text-3xl text-[#023a51] " />
        </div>
      </div>
      <div className="sm:flex px-10 space-y-10 sm:space-y-0 mb-0">
        {cards.map((card, i) => <Card key={i} {...card}/>)}
      </div>
    </div>
  );
}

export default BestOffer
