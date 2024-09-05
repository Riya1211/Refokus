import React, { useState } from "react";
import Button from "./Button";

const Product = ({ val, mover, count }) => {
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const handleMouseEnter = () => {
    setBackgroundColor(val.color); // Set the background color on mouse enter
  };

  const handleMouseLeave = () => {
    setBackgroundColor("transparent"); // Reset background color on mouse leave
  };

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ backgroundColor, transition: "background-color 0.5s ease" }}
      className="w-full h-[23rem] py-20 text-white">
      <div
        onMouseEnter={() =>{mover(count)}}
        className="max-w-screen-xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-6xl capitalize font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10">{val.desc}</p>
          <div className="flex gap-4">
            <Button />
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
