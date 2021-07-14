import React from "react";

const Input = ({className, ...rest}) => {
  return (
    <div>
      <input className={`border-none outline-none ${className}`} {...rest} />
    </div>
  );
};

export default Input;
