import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import arqitel from "../assets/Videos/arqitel.mp4";
import ttr from "../assets/Videos/ttr.mp4";
import yir from "../assets/Videos/yir.mp4";
import yahoo from "../assets/Videos/yahoo.mp4";
import rainfall from "../assets/Videos/rainfall.mp4";

const Products = () => {
  var products = [
    {
      title: "arqitel",
      desc: "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
      // color: "#060A29"
      color: "#00A3E0",
    },
    {
      title: "TTR",
      desc: "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
      color: "#25176d",
    },
    {
      title: "YIR 2022",
      desc: "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
      color: "#463c82",
    },
    {
      title: "Yahoo!",
      desc: "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
      // color: "#0e0e0f"
      color: "#00D1C3",
    },
    {
      title: "rainfall",
      desc: "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
      // color: "#FF9A00"
      color: "#8A2BE2",
    },
  ];
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };
  return (
    <div className="mt-32 relative">
      {products.map((elem, index) => (
        <Product key={index} val={elem} mover={mover} count={index} />
      ))}
      <div className="w-full h-full pointer-events-none absolute top-0">
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window w-[29rem] h-[23rem] absolute left-[25%] -translate-x[50%] top-[0.6%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={arqitel}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={ttr}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yir}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={yahoo}
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="w-full h-full"
          >
            <video
              className="object-cover rounded-3xl"
              autoPlay
              muted
              loop
              src={rainfall}
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
