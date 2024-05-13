import React, { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
import { IoMdClose } from "react-icons/io";

const NavBar = ({ cartCount }) => {
  const [showMenue, setShowMenue] = useState(false);

  function handlerMenue() {
    console.log("menue click");
    showMenue === false ?  setShowMenue(true):  setShowMenue(false)  ;
  }
  

  return (
    <div className="border relative bg-blue-800 text-white mt-0 h-[50px] flex justify-between items-center">
      <div className="">
        <h4 className="font-bold m-3">E-Commmerce</h4>
      </div>
      <div>
        <div className="hidden md:block items-center">
          <ul className="flex gap-5 mr-4 font-bold mt-5">
            <li>
              <a href="#Home">Home</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        {showMenue ? (
          <div className=" items-center">
            <ul
              className="flex flex-col gap-10 absolute bg-red-600 h-screen top-12 w-full left-0 
          justify-center text-2xl items-center"
            >
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            <button className="absolute justify-end z-10 top-12 right-0 py-2 px-4">
              <IoMdClose onClick={handlerMenue} size={25} />
            </button>
          </div>
        ) : (
          ""
        )}
        {showMenue ? (
          ""
        ) : (
          <button onClick={handlerMenue}>
            <TfiAlignJustify
              size={25}
              className="items-center md:hidden mr-5"
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
