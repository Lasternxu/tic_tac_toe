import React from "react";

const Square = ({value, onClick}) => {
  return (
    <button className={value} onClick={onClick}> {value} </button>
  );
};

export default Square;
