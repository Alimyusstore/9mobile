import React from 'react'
import Starter from './Starter'
import noEvent from "../../assets/images/empty-product.svg"

const Event = () => {
  return (
    <div className="w-full min-h-[70vh] bg-cover rounded-t-[3rem] mt-[-4rem] pb-10">
      <Starter header={"Events"} btnText={"See more"} />
      <div className="flex flex-col justify-center items-center h-[50vh] border-b-8 bor border-[#e5e7eb]">
        <img className="" width={100} src={noEvent} alt="" />
        <p className="text-[#a1a1a1] font-medium text-[20px] mt-3">No event found</p>
      </div>
    </div>
  );
}

export default Event
