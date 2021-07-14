import React from "react";
import * as Fi from 'react-icons/fi'
import { Input } from "component/atoms";

const Search = ({className}) => {
  return (
    <div className={`relative ${className}`}>
      <Input className="cursor-pointer px-5 pr-10 py-2 block w-56 h-7 rounded-full w-56 bg-gray-200 text-sm focus:ring-2 focus:ring-gray-600 focus:bg-white" type="text" placeholder="Search FanTalk..." />
      <Fi.FiSearch className="absolute block text-xl top-1 right-4" />
    </div>
  );
};

export default Search;
