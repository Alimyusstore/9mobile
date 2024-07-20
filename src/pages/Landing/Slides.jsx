import React, { useEffect, useState } from 'react'
import slide1 from "../../assets/images/slide1.jpg"
import slide2 from "../../assets/images/slide2.jpg"
import slide3 from "../../assets/images/slide3.png"
import slide4 from "../../assets/images/slide4.jpg"
import slide5 from "../../assets/images/slide5.png"

const Slides = () => {
    let slides = [{id:1, image: slide1},{id:2, image: slide2},{id:3, image: slide3},{id:4, image: slide4},{id:5, image: slide5}]
    
    const [toggle, setToggle]= useState(1);
    
    const handleSlide = (id) => {
      setToggle(id);
      // localStorage.setItem('toggle',toggle);
    }
    setInterval(() =>{
      toggle < slides.length ? setToggle(toggle + 1) : setToggle(1);
      // localStorage.setItem('toggle',toggle);
    }, 5000)
    // useEffect((id)=>{
    //   handleSlide(id)
    // }, [toggle])

    return (
      <div
        className="w-full min-h-[110vh] space-x-1 bg-cover	bg-no-repeat text-center transition-all ease-in-out"
        style={{
          backgroundImage: `url(${slides
            .filter((slide) => slide.id === toggle)
            .map((slide) => slide.image)})`,
        }}
      >
        {/* {handleSlide()} */}
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => handleSlide(slide.id)}
            className={`${
              slide.id === toggle ? "bg-[#2a8067]" : "bg-gray-400"
            } rounded-full outline-none border-none  sm:p-2 p-[0.35rem] relative top-[22rem] sm:top-[33rem]`}
          ></button>
        ))}
        {/* <button onClick={()=>handleSlide(id)}>
          {slides.filter(slide => slide.id === toggle ? <img src={slide.image} alt=""/>: <img src={slide.image} alt=""/>)} */}

        {/* </button> */}
      </div>
    );
}

export default Slides
