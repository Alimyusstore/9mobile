import { FaArrowRight } from "react-icons/fa6";
import Card2 from "../Card2";
import card3 from "../../assets/images/card3.jpg";
import card4 from "../../assets/images/card4.jpg";
import card5 from "../../assets/images/card5.jpg";
import Starter from "./Starter";

const Packages = () => {
let cards = [
  {
    id: 1,
    header2: "Prepaid Plans",
    image: card3,
    text: "Enjoy the flexibility to move across packages based on your needs and pay-as-you-go. Click here to learn more.",
  },
  {
    id: 2,
    header2: "Postpaid",
    image: card4,
    text: "Enjoy a business-friendly plan. This plan requires you to use now & pay later. Click here to learn more.",
  },
  {
    id: 3,
    header2: "International Calling",
    image: card5,
    text: "Feeling the need to connect with your family and friends across the globe? We got you covered with our International calling offer. The best part? Rates start as low as 11k per second. Click here to learn more.",
  },
];
  return (
    <div className="w-full min-h-screen rounded-[3rem] pb-10 my-10">
      <Starter header={"Packages & Plans"} btnText={"Learn more"} />
      <div className="grid justify-items-center">
        <div className="sm:flex sm:gap-x-5 space-y-10 sm:space-y-0">
          {cards
            .filter((card) => card.id <= 2)
            .map((card, i) => (
              <Card2 key={i} {...card} id={card.id} width={"w-[450px]"} />
            ))}
        </div>
        <div className="mt-10">
          {cards
            .filter((card) => card.id == 3)
            .map((card, i) => (
              <Card2
                key={i}
                {...card}
                id={card.id}
                style={"sm:flex  justify-between "}
                width={"sm:w-[62rem]"}
                textWidth={"w-[50%]"}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Packages
