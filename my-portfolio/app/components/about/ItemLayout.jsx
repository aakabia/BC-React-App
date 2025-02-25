"use client"
import clsx from "clsx";
import React from "react";
import {motion } from "motion/react";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
    initial={{scale:0}}
    whileInView={{scale:1}}
    transition={{duration:0.5}}
    viewport={{once:true}} // animate once 
      className={clsx(
        "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-7",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;

// Above is a reuseable component that returns a div with default css for our layout and its children
// we use the clsx package to add additional classNames passed in
// the div also use motion to display elements with a transition when in view
// animations requrie use client 