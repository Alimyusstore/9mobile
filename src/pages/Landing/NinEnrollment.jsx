import BG from "../../assets/images/background3.svg"
import card from "../../assets/images/card8.png"
import Button from "./Button";
const NinEnrollment = () => {
  return (
    <div className="p-10 px-5 sm:p-20  pb-0 ">
      <div
        className="w-full h-[110vh] sm:h-[60vh] rounded-[2.5rem] flex flex-col sm:flex-row justify-between items-center pb-2 sm:py-10 py-16 px-5 sm:px-32 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${BG})` }}
      >
        <div className="space-y-3">
          <div className="rounded-r-3xl h-3 w-[5.5rem] bg-[#4caf50]"></div>
          <h2 className="font-semibold text-[2.1879rem]">NIN Enrollment</h2>
          <p className="text-[1.25rem]">
            Link your NIN to your 9mobile line and get reconnected with ease.
          </p>
          <Button bnText={"Learn more"} className=""/>
        </div>
        <div className="w-[34rem] sm:w-[45rem] sm:me-[-5rem]">
          <img src={card} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NinEnrollment
