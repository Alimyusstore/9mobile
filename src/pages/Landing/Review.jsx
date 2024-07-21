import React, { useEffect, useState } from 'react'
import BG from "../../assets/images/testimonialBackground.png";
import aderemi from "../../assets/images/Odeyemi-Aderemi.jpg";
import kay from "../../assets/images/tweetsby.jpg"
import peter from "../../assets/images/Peter.jpg"
import ebirim from "../../assets/images/EbirimE.jpg"
import sleeky from "../../assets/images/BaeSleeky.jpg"
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs';
import Button from './Button';
const Review = () => {
    let customers = [
      {
        id: 1,
        image: aderemi,
        name: "Mrs. Odeyemi Aderemi",
        comment: "@9mobileng The most wonderful network",
        date: "2 January 2024",
      },
      {
        id: 2,
        image: kay,
        name: "Miss . Kay",
        comment: "@9mobileng The UI is beautiful.",
        date: "16 February 2024",
      },
      {
        id: 3,
        image: peter,
        name: "Mr. Peter Oyetoyan",
        comment:
          "Winning the 9mobile campus hack in the University of Ilorin still remains one of my best moments of the year thanks to @9mobileng for this wonderful program This shows that we are solving a real problem and we will not stop ✊",
        date: "3 January 2024",
      },
      {
        id: 4,
        image: ebirim,
        name: "Mr. Emenike Ebirim",
        comment:
          "@9mobileng is giving my moneys worth where I live in owerri. They re just the best here I don t know about other places but I really do enjoy their services. Big ups to you @9mobileng. Tuale",
        date: "3 January 2024",
      },
      {
        id: 5,
        image: sleeky,
        name: "Bea Sleeky 1",
        comment: "@9mobileng Great network!!",
        date: "2 January 2024",
      },
    ];

    const [showReview, setShowReview] = useState(1)
    // function getShowReview(id){
    //     setShowReview(id);
    // }
    // useEffect(()=>{
    //     getShowReview()
    // },[])
  return (
    <div
      className="w-full h-[100vh] sm:h-[55vh] rounded-[2.5rem] text-center sm:text-start sm:p-0 py-10 px-5 sm:px-16 bg-cover sm:bg-contain bg-no-repeat bg-[#f6f6f6]"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {customers
        .filter((customer) => showReview == customer.id)
        .map((customer) => (
          <div
            className="flex flex-col sm:flex-row-reverse gap-y-32 sm:gap-y-0 sm:justify-between items-center h-[87vh] sm:h-[55vh]"
            key={customer.id}
          >
            <div className="overflow-hidden rounded-full w-[15rem] sm:w-[20rem] ">
              <img src={customer.image} alt={customer.name} />
            </div>
            <div className="space-y-5 sm:w-full">
              <div className="mt-[-8rem] sm:mt-0 space-y-3">
                <h2 className="font-semibold text-[1.5rem]">{customer.name}</h2>
                <p className=''>{customer.comment}</p>
              </div>
              <div>
                <p className="font-semibold text-[#086c4e] mb-[-0.5rem]">
                  {customer.date}
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-row-reverse  sm:justify-between ">
                <div className="flex justify-center gap-x-3 ">
                  <button
                    onClick={() =>
                      setShowReview(showReview > 1 ? showReview - 1 : 1)
                    }
                  >
                    <BsArrowRightCircle className="inline-block text-5xl text-[#086c4e]" />
                  </button>
                  <button
                    onClick={() =>
                      setShowReview(
                        showReview < customers.length
                          ? showReview + 1
                          : showReview
                      )
                    }
                  >
                    <BsArrowLeftCircle className="inline-block text-5xl text-[#086c4e]" />
                  </button>
                </div>
               <Button bnText={"Leave a review"}/>
              </div>
            </div>
          </div>
        ))}
      <div></div>
    </div>
  );
}

export default Review
