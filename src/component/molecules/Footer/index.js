import React from "react";
import * as Fa from "react-icons/fa";

const Footer = () => {
  return (
    <div className="lg:mx-36 mx-24 sm:mx-12">
      <div className="flex lg:flex-row flex-col justify-between flex-auto my-12 sm:my-8">
        <div className="lg:mb-0 mb-5">
          <h1 className="text-4xl mb-2">FanTalk</h1>
          <p className="text-sm text-gray-500">
            Community Platform which provide informations and discover what’s
            trending now.
          </p>
        </div>
        <div className="lg:mb-0 mb-5">
          <h1 className="text-lg mb-2 font-medium">Quick Links</h1>
          <div className="text-gray-500 text-sm cursor-pointer">
            <p>Home</p>
            <p>Entertainment</p>
            <p>Sport</p>
            <p>Book</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg mb-2 font-medium">Follow Us</h3>
          <div className="flex justify-between items-center text-4xl cursor-pointer lg:w-full w-1/2">
            <Fa.FaInstagram className="mr-2 text-pink-800" />
            <Fa.FaTwitter className="mr-2 text-blue-500" />
            <Fa.FaFacebook className="mr-2 text-indigo-900" />
            <Fa.FaYoutube className="mr-2 text-red-700" />
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-center py-5">
        Copyright 2021 • All Rights Reserved • FanTalk • Rima Mei Handayani
      </div>
    </div>
  );
};

export default Footer;
