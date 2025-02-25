import Link from "next/link";
import React from "react";
import {motion } from "motion/react";




const item = {
  hidden: { opacity: 0, y:100 },
  show: { opacity: 1, y:0 }
}

const NavLink = motion.create(Link)

const ProjectLayout = ({ name, description, date, link }) => {
  // ProjectLayout component takes in four props which are also properties of our projects.

  return (
    <NavLink
      variants={item}
      href={link}
      target="_blank"
      className="text-sm md:text-base cursor-pointer flex justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg"
    >
      <div className="flex items-center justify-center space-x-2">
        <h2 className="font-bold text-foreground ">{name} </h2>
        <p className=" font-bold text-muted hidden sm:inline-block">{description}</p>
      </div>
      {/* name and escription above */}

      <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
      {/* dashed line above */}

      <p className=" font-bold text-muted sm:text-foreground">
        {new Date(date).toDateString()}
      </p>
      {/* date above */}
    </NavLink>
  );
};

//  ProjectLayout component returns a div containing the properties of our project styled within different elements.

export default ProjectLayout;
