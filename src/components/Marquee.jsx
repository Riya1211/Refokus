import { motion } from "framer-motion";
import React from "react";

const Marquee = ({ images, direction }) => {
  return (
    <div className="flex w-full py-8 gap-20 whitespace-nowrap overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {images.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {images.map((img, i) => (
          <img key={i} src={img} />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
