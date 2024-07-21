import React from 'react'
const Card2 = ({header2, text, image, id, style, width, textWidth}) => {
    let buttons = ["Voice", "SMS", "Data"]
  return (
    <div
      className={`${
        id === 1 ? "bg-[#fff2ee]" :  id===2 ? " bg-[#f0f8ff]":"bg-[#f6f6f6]"
      } rounded-2xl p-10`}
    > 
      <div className={`hover:scale-[1.02] ${width} space-y-10 ${style}`}>
        <div className={`space-y-10 ${textWidth}`}>
            <div className="space-x-2">
              {buttons.map((button, i) => (
                <button
                  key={i}
                  className="bg-[#006e52] p-1  px-4 rounded-lg text-[14px] text-white font-semibold "
                >
                  {button}
                </button>
              ))}
            </div>
            <div className="space-y-3">
              <h2 className="font-semibold text-[2rem]">{header2}</h2>
              <p className=''>{text}</p>
            </div>

        </div>
        <div className="rounded-xl overflow-hidden w-[450px]">
          <img className="" src={image} alt="card" />
        </div>
      </div>
    </div>
  );
}

export default Card2
