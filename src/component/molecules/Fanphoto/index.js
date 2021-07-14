import { Badge } from "component/atoms";
import React, { useState } from "react";
import { Foto } from "..";

const Fanphoto = () => {
  const [limit, setLimit] = useState(0);

  const loadMore = (e) => {
    e.preventDefault();
    setLimit(limit + 3);
  };

  return (
    <div className="g-line">
      <div className="g-line-500 mt-8 mb-5">
        <div className="flex items-center mb-2">
          <div>
            <Badge
              title="FanPick"
              className="bg-blue-700 text-white font-semibold mr-2"
            />
          </div>
          <h1 className="font-semibold text-xl">Fan Photo</h1>
        </div>
      </div>
      <div className="flex lg:flex-row flex-wrap justify-between items-start flex-col">
        <Foto />
        <Foto />
        <Foto />
        <Foto />
        <Foto />
        <Foto />
        <Foto />
        <Foto />
      </div>
      <div className="flex justify-center items-center mb-24 sm:mb-12">
        <button
          onClick={loadMore}
          className="p-1 bg-gray-100 rounded shadow hover:shadow-lg"
        >
          Load More
        </button>
      </div>
    </div>
  );
};

export default Fanphoto;
