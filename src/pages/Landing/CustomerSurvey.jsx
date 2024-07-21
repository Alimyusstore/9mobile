import BG  from "../../assets/images/background4.svg"
import pics from "../../assets/images/surveyImage.png"
import Button from "./Button";
const CustomerSurvey = () => {
  return (
    <div
      className="mt-20 mb-10 w-full h-[70vh] sm:h-[57vh] rounded-[1.2rem] flex flex-col justify-between items-center text-center  p-8 sm:px-30 gap-y-5 bg-cover  bg-no-repeat"
      style={{ backgroundImage: `url(${BG})` }}
    >
      <div>
        <img src={pics} alt="" />
      </div>
      <div className="space-y-3 sm:w-[80%]">
        <h2 className="text-[1.5rem] font-semibold">Customer Survey</h2>
        <p className="text-[1.25rem] text-[#74708a]">
          We would like to keep refining our services to serve you better and
          keep you connected at all times. This survey makes you a part of the
          decision making process, we would appreciate your feedback.
        </p>
      </div>
      <Button bnText={"Take Survey"} />
    </div>
  );
}

export default CustomerSurvey
