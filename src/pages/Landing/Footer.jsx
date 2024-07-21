import React from 'react'
import NDPR from "../../assets/images/NITDA.png"
import facebook from "../../assets/images/facebook.png"
import x from "../../assets/images/x.svg"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"
import whatsapp from "../../assets/images/iwhatsapp.png"
import youtube from "../../assets/images/youtube.png"

const Footer = () => {
  return (
    <div className="min-h-screen  mt-10 ">
      <div className="flex flex-col gap-y-5 sm:flex-row  p-10 sm:px-20 h-[87vh]">
        <div className="sm:w-[45vw]">
          <ul className="space-y-3">
            <p className="text-[#006749] font-semibold text-[1.25rem] ">
              Contact Info
            </p>
            <li className="sm:font-medium">
              Plot 19, Zone L, Banana Island, Ikoyi, Lagos.
            </li>
            <li className="sm:font-medium">
              Phone: <span className="font-semibold">08090000300</span> ,
              Whatsapp: <span className="font-semibold">09092000192 </span>
            </li>
            <li>
              Email - <span className="font-semibold">care@9mobile.com.ng</span>
            </li>
            <div className=" sm:flex py-10 hidden  gap-4">
              <p className='font-semibold'>Get Social</p>
              <a
                href="https://www.facebook.com/9mobileNigeria/"
                target="_blank"
              >
                <img className="w-8  fill-[#006749]" src={facebook} alt="facebook" />
              </a>
              <a href="https://www.youtube.com/9mobileNigeria/" target="_blank">
                <img className="w-8 fill-[#006749]" src={youtube} alt="youtube" />
              </a>
              <a href="https://www.x.com/9mobileNigeria/" target="_blank">
                <img className="w-8 fill-[#006749]" src={x} alt="x" />
              </a>
              <a
                href="https://www.instagram.com/9mobileNigeria/"
                target="_blank"
              >
                <img className="w-8 fill-[#006749]" src={instagram} alt="instagram" />
              </a>
              <a
                href="https://www.whatsapp.com/9mobileNigeria/"
                target="_blank"
              >
                <img className="w-8 fill-[#006749]" src={whatsapp} alt="whatsapp" />
              </a>
              <a
                href="https://www.linkedin.com/9mobileNigeria/"
                target="_blank"
              >
                <img className="w-8 fill-[#006749]" src={linkedin} alt="linkedin" />
              </a>
            </div>
          </ul>
        </div>
        <div className="flex justify-between sm:w-[55vw]">
          <ul className="space-y-3">
            <p className="text-[#006749] font-semibold  text-[1.25rem]">
              About 9mobile
            </p>
            <li>Corporate Information</li>
            <li>The Executive Team</li>
            <li>ISO Policy</li>
            <li>Environmental Policy</li>
            <li>Corporate Social Responsibility</li>
            <li>Careers</li>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
          </ul>

          <ul className=" flex flex-col justify-between">
            <div className='space-y-3'>
              <p className="text-[#006749] font-semibold text-[1.25rem]">
                Helpful links
              </p>
              <li>Whistle Blower</li>
              <li>Fraud Alert</li>
              <li>Unsolicited Proposals</li>
              <li>9mobile Experience Centers</li>
              <li>Buy Airtime/Data</li>
            </div>
            <div className="w-[12rem]">
              <img src={NDPR} alt="" />
            </div>
          </ul>
        </div>
      </div>
      <div className="bg-[#006749] w-full h-20 mt-20 sm:mt-0"></div>
    </div>
  );
}

export default Footer
