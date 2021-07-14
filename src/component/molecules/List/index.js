import React from "react";
import * as Ai from "react-icons/ai";
import * as Fa from "react-icons/fa";
import { Badge } from "component/atoms";
import data from "../../../data/data.json";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <div className="g-line w-content sm:w-full mb-5 lg:text-base text-sm">
      {/* Title */}
      <div className="g-line-500 mb-1">
        <div className="flex items-center mb-2">
          <div>
            <Badge
              title="Trending"
              className="bg-red-700 text-white font-semibold mr-2"
            />
          </div>
          <h1 className="font-semibold text-lg">Today Talk</h1>
        </div>
      </div>

      {/* data */}
      {data.today_talk.map((item) => {
        return (
          <div key={item._id} className="cursor-pointer">
            <Link to="/detail-page" className="list">
              <p className="hover:text-gray-500">
                {item._id}. {item.title}
              </p>
              <div className="flex items-center hover:text-gray-500">
                <Ai.AiOutlineComment
                  className="mr-2 text-secondary"
                  size={24}
                />
                <p>{item.komentar}</p>
              </div>
            </Link>
          </div>
        );
      })}
      <Link className="flex items-center outline-none border-none text-sm text-gray-800 float-right mb-3 hover:text-gray-500">
        Lainnya
        <Fa.FaAngleDoubleRight />
      </Link>
    </div>
  );
};

export default List;
