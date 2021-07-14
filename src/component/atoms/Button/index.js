import React from "react";

const Button = ({ className }) => {
  return (
    <div>
      <button
        className={`flex items-center text-sm text-gray-800 float-right mb-3 hover:text-gray-500 ${className}`}
      >
      </button>
    </div>
  );
};

export default Button;
