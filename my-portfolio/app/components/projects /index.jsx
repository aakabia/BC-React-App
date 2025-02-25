"use client"
import React from "react";
import ProjectLayout from "./ProjectLayout";
import {motion } from "motion/react";


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren:1.5
    },
  },
};
const ProjectList = ({ projects }) => {
  return (
    <motion.div variants={container} initial="hidden" animate={"show"}  className="w-full max-w-auto lg:max-w-4xl px-4 mx-auto lg:px-16 space-y-6 md:space-y-8 flex flex-col items-center">
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </motion.div>
  );
};

export default ProjectList;

// Above is a component used to map over our projects list and return a div with a layout for each project.
