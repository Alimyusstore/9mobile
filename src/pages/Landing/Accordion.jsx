import { FiMinus } from 'react-icons/fi';
import { GoPlus } from 'react-icons/go';

const Accordion = ({ outerText, onClick, compare, open, innerText }) => {
  return (
    <div className="p-3 bg-white shadow-sm rounded-lg border-[1px] border-[#dedddd]">
      <div onDoubleClick={onClick} className="  flex justify-between ">
        <p className="sm:text-[1.125rem] text-[14px] font-semibold  ">
          {outerText}
        </p>
        <div className="text-3xl" onClick={onClick}>
          {compare ? <GoPlus /> : open ? <FiMinus /> : <GoPlus />}
        </div>
      </div>
      <div
        className={`${
          compare ? "hidden" : open ? "block" : "hidden"
        } border-t-[1px] m-2 p-3 text-[#758495]`}
      >
        <p>{innerText()}</p>
      </div>
    </div>
  );
};

export default Accordion
