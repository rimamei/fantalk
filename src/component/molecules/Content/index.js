import React from "react";
import { Fanphoto, List2 } from "..";
import List from "../List";

const Content = () => {
  return (
    <div className="mb-12">
      <div className="content">
        <List />
        <List />
      </div>
      <div className="content">
        <List2 />
        <List2 />
      </div>
      <div className="content">
        <List2 />
        <List2 />
      </div>
      <div>
        <Fanphoto />
      </div>
    </div>
  );
};

export default Content;
