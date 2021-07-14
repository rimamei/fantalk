import React from "react";
import Search from "../Search";
import * as Ri from "react-icons/ri";
import * as Ai from "react-icons/ai";

const Header = () => {
  return (
    <header>
      {/* Brand dann search button */}
      <div className="g-line">
        <div className="flex justify-between items-center mx-24 sm:mx-12 lg:mx-36 mt-5 mb-5">
          <h1 className="text-2xl text-primary">FanTalk</h1>
          <Search className="md:hidden sm:hidden"/>
        </div>
      </div>

      {/* Navbar */}
      <div className="b-line md:hidden sm:hidden ">
        <div className="flex justify-between items-center mx-24 lg:mx-36 my-5">
          <div className="flex items-center">
            <div className="nav">Home</div>
            <div className="nav">Fan Photo</div>
            <div className="flex items-center nav">
              Entertainment
              <Ri.RiArrowDropDownLine size={36} />
            </div>
            <div className="nav">Sport</div>
            <div className="nav">Book</div>
          </div>
          <div className="flex  hover:text-gray-500 cursor-pointer">
            <Ai.AiOutlineUser size={24} />
            <div className="ml-2">Login</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
