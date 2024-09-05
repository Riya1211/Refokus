import React from "react";
import Logo from "../assets/refokus logo.svg";
import Button from "./Button";

const Navbar = () => {
  return (
    //mx-auto for divide the space equally in x axis. 'max-w-screen-xl this will create a space and when the screen reduces it will get decrease.
    <div className="max-w-screen-xl mx-auto p-3 py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nLeft flex items-center">
        <img src={Logo} />
        <div className="links flex gap-14 ml-20">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) =>
            elem.length === 0 ? (
              <span key={index} className="w-[2px] h-7 bg-zinc-700"></span>
            ) : (
              <a key={index} className="text-sm font-medium flex items-center gap-1">
                {index === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                  ></span>
                )}
                {elem}
              </a>
            )
          )}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
{
  /* In span tag you can't give the height or width that's why we gave inline-block to give that. */
}