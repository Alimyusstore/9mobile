import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import mobileLogo from "../../assets/images/mobile-logo..png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosCloseCircle } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
const Nav = () => {
  let [show, setShow] = useState(false);

  function handleShow() {
    setShow((show= true));
  }
  function handleHide(show) {
    setShow((show = false));
  }

  let [show1, setShow1] = useState(false);

  function handleShow1() {
    setShow1((show1 = true));
  }
  function handleHide1(show1) {
    setShow1((show1 = false));
  }

  const [toggle, setToggle] = useState(true);

  function handleToggle() {
    setToggle(!toggle);
  }
  return (
    <nav className=" z-40">
      <div className="z-40 sm:px-[5rem] bg-white w-full  flex justify-between p-5 fixed  shadow-sm">
        <Link to="/">
          <div className="">
            {toggle ? (
              <img width={30} src={logo} alt="logo" />
            ) : (
              <img width={80} src={mobileLogo} alt="logo" />
            )}
          </div>
        </Link>
        <div
          className={
            toggle
              ? "hidden sm:block"
              : "block absolute bg-white  top-20 mt-10 sm:mt-0 sm:static"
          }
        >
          <ul className="sm:flex grid pt-1 gap-10 relative font-600 ">
            <li
              className="border-b-2 sm:border-none hover:text-[#7fa51a]"
              onMouseLeave={() => handleHide()}
            >
              Data
            </li>
            <li
              className="border-b-2 sm:border-none hover:text-[#7fa51a]"
              onMouseLeave={() => handleHide()}
            >
              Packages & Plans
            </li>
            <li
              className="border-b-2 sm:border-none hover:text-[#7fa51a]"
              onMouseLeave={() => handleHide()}
            >
              Business
            </li>
            <div className="flex">
              <li
                className={
                  show
                    ? "sm:border-b-4 pb-3 sm:border-b-gray-300 hover:text-[#7fa51a]"
                    : "sm:border-none"
                }
                onMouseOver={() => handleShow()}
              >
                Digital Services{" "}
              </li>
              <SlArrowDown className="text-green-700 m-2" />
            </div>
            <li
              className="border-b-2 sm:border-none hover:text-[#7fa51a]"
              onMouseLeave={() => handleHide()}
            >
              Blog
            </li>
            <div className="flex gap-2">
              <li
                className={
                  show1
                    ? "sm:border-b-4 pb-3 sm:border-b-gray-300 hover:text-[#7fa51a] "
                    : "sm:border-none"
                }
                onMouseOver={() => handleShow1()}
              >
                Get Help
              </li>
              <SlArrowDown className="text-green-700 m-2" />
            </div>

            <div>
              <CiSearch className=" text-3xl" />
            </div>
            <div
              className="absolute sm:right-[20rem] sm:top-[4.3rem]"
              onMouseLeave={() => handleHide()}
            >
              <ul
                className={
                  show
                    ? "flex flex-col gap-7 bg-white w-48 shadow-lg p-3 drop-shadow-md border-2 border-y-[#7fa51a]"
                    : "hidden"
                }
              >
                <Link to="/">
                  <li>Financial Services</li>
                </Link>
                <Link to="/">
                  <li>Entertainment Services</li>
                </Link>
                <Link to="/">
                  <li>Treelz</li>
                </Link>
              </ul>
            </div>
            <div
              className="absolute sm:right-[0.8rem] sm:top-[4.3rem]"
              onMouseLeave={() => handleHide1()}
            >
              <ul
                className={
                  show1
                    ? "flex flex-col gap-7 bg-white w-36 shadow-lg p-3 drop-shadow-md border-2 border-y-[#7fa51a]"
                    : "hidden"
                }
              >
                <Link to="/">
                  <li>FAQs</li>
                </Link>
                <Link to="/">
                  <li>Managing Your Data</li>
                </Link>
                <Link to="/">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </ul>
        </div>
        <div className="flex sm:hidden gap-3">
          <div>
            <CiSearch className=" text-3xl" />
          </div>
          <div onClick={handleToggle} className="sm:hidden">
            {toggle ? (
              <RxHamburgerMenu className="text-3xl" />
            ) : (
              <IoIosCloseCircle className="text-3xl" />
            )}
          </div>
        </div>
      </div>
      <div className="h-20"></div>
    </nav>
  );
};

export default Nav;
