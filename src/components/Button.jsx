import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'
import { motion } from 'framer-motion';

const Button = ({title="Get Started"}) => {

  return (
    <motion.div
      className="w-36 h-[2.3rem] bg-zinc-100 text-black rounded-full flex flex-col items-center justify-between relative overflow-hidden cursor-pointer"
      whileHover="hover" // Hover effect applied to the main div
      initial="initial"
    >
      {/* Top Child */}
      <motion.div
        className="flex items-center justify-between gap-2 px-4 py-2 absolute"
        variants={{
          initial: { y: 0 },  // Initial position
          hover: { y: -40 }, // Moves up when hovering over the parent
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-medium">{title}</span>
        <IoIosReturnRight />
      </motion.div>

      {/* Bottom Child */}
      <motion.div
        className="flex items-center justify-between gap-2 px-4 py-2 absolute"
        variants={{
          initial: { y: 40 }, // Starts below the first child
          hover: { y: 0 }, // Moves up to the position of the first child on hover
        }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-sm font-medium">{title}</span>
        <IoIosReturnRight />
      </motion.div>
    </motion.div>

  )
}

export default Button