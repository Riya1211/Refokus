import React, { useState } from "react";
import Image1 from "../assets/WorkImages/Image1.png";
import Image2 from "../assets/WorkImages/Image2.png";
import Image3 from "../assets/WorkImages/Image3.png";
import Image4 from "../assets/WorkImages/Image4.png";
import Image5 from "../assets/WorkImages/Image5.png";
import Image6 from "../assets/WorkImages/Image6.png";
import { useMotionValueEvent, useScroll } from "framer-motion";

const Work = () => {
  const [images, setImages] = useState([
    { img: Image1, top: "50%", left: "50%", isActive: false },
    { img: Image2, top: "56%", left: "44%", isActive: false },
    { img: Image3, top: "45%", left: "56%", isActive: false },
    { img: Image4, top: "60%", left: "53%", isActive: false },
    { img: Image5, top: "43%", left: "40%", isActive: false },
    { img: Image6, top: "65%", left: "55%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }
    switch (
      Math.floor(data * 100) //the *100 is to make it percent
    ) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0, 1]);
        break;
      case 3:
        imagesShow([0, 1, 2]);
        break;
      case 4:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });
  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none tracking-tight font-medium select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: elem.top, left: elem.left }}
                  src={elem.img}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;