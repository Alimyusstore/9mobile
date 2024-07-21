import React from 'react'
import Starter from './Starter'
import card9 from "../../assets/images/card9'.webp"
import card6 from "../../assets/images/card6.jpg"
import card7 from "../../assets/images/card7.jpg"
import Card3 from './Card3'

const BlogPost = () => {
    let cards = [
      {
        id: 1,
        image: card6,
        title: "9mobile Night Plan: Get More Data for Less",
        parag:
          "Yes, 9mobile fam! We all know the struggle – your day data dries faster than wet cloth in harmattan, leaving you yearning for the sweet embrace of night plans! But hold up! In this article, we will share how to enjoy your 9mobile night plan for less...",
        date: " 9 February 2024",
        buttonText: "Products",
      },
      {
        id: 2,
        image: card9,
        title: "Cheap Data Plans for the Savvy Nigerian Web Surfer",
        parag:
          "You might have wondered at some point, “How can I get cheap data on a budget? This is a common question that often resonates with many. Data struggles are real, especially for young ballers who must stay lit on the gram and tweet every fire meme. Fear not, my budget-conscious comrades. In this blogpost, you will get the information you need to enjoy cheap data plans...",
        date: "7 February 2024",
        buttonText: "Products",
      },
      {
        id: 3,
        image: card7,
        title: "Advancing Business Solutions in Nigeria",
        parag:
          "Over the years, 9mobile has grown unrivaled capabilities to develop and deploy effective business solutions to organizations. This is why across the country the 9mobile brand has become synonymous with providing premium business solutions to organizations and ...",
        date: "16 November 2023",
        buttonText: "Business",
      },
    ];
  return (
    <div className="w-full min-h-screen pb-10 px-5 my-10 sm:px-20 ">
      <Starter header={"Recent Blog Posts"} btnText={"See more"} />
      <div className="sm:grid sm:gap-x-5 grid-cols-2 space-y-5 sm:space-y-0 ">
        <div className="">
          {cards
            .filter((card) => card.id == 1)
            .map((card) => (
              <Card3 key={card.id} {...card} img={"sm:h-[45vh] sm:w-full"}/>
            ))}
        </div>
        <div className="space-y-5 ">
          {cards
            .filter((card) => card.id > 1)
            .map((card) => (
              <Card3
                key={card.id}
                {...card}
                style={"sm:flex sm:h-[33vh]"}
                style2={"sm:w-[100%]"}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPost
