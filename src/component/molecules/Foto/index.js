import React from "react";

const Foto = ({ img }) => {
  return (
    <div className={`lg:w-1/8 w-3/4 mr-1 shadow hover:shadow-lg mb-4 h-60 bg-gray-700 rounded `}>
      <img className="cursor-pointer object-cover h-auto w-full" src={img} alt="img" />
    </div>
  );
};

export default Foto;