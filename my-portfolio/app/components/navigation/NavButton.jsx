import {
  Home,
  User,
  FolderRoot,
  Contact,
  Github,
  Twitter,
  Linkedin,
  FileUser,
} from "lucide-react"; // lucid-react for icons
import Link from "next/link";
import React from "react";
import ResponsiveComponent from "../ResponsiveComponent";
import clsx from "clsx";

const getIcon = (icon) => {
  switch (icon) {
    case "home":
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "about":
      return <User className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "projects":
      return <FolderRoot className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "contact":
      return <Contact className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "github":
      return <Github className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "X":
      return <Twitter className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "linkedin":
      return <Linkedin className="w-full h-auto" strokeWidth={1.5} />;
      break;

    case "Resume":
      return <FileUser className="w-full h-auto" strokeWidth={1.5} />;
      break;

    default:
      return <Home className="w-full h-auto" strokeWidth={1.5} />;
  }
};

// Above is a function that uses a switch statment to choose the correct icon.

const NavButton = ({ x, y, label, link, newTab, icon, labelDirection="right" }) => {
  return (
    <ResponsiveComponent>
      {({ size }) => {
        return size && size >= 480 ? (
          <div
            className=" absolute z-50 cursor-pointer"
            style={{ transform: `translate(${x},${y}` }}
          >
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="rounded-full flex items-center justify-center custom-bg "
              aria-label={label}
            >
              <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent ">
                {getIcon(icon)}
                {/* Above group helps stop the spinning affect once a child or the parent is hovered */}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                {/* Above is a extra span to help position the label better*/}
                {/* use peer in order to have affect on a sibling  Note: think group */}

                <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap ">
                  {label}
                </span>
              </span>
            </Link>
          </div>
        ) : (
          <div
            className=" w-fit z-50 cursor-pointer"
            
          >
            <Link
              href={link}
              target={newTab ? "_blank" : "_self"}
              className="rounded-full flex items-center justify-center custom-bg "
              aria-label={label}
            >
              <span className="relative w-10 h-10 xs:w-14 xs:h-14 p-2.5 xs:p-4 hover:text-accent ">
                {getIcon(icon)}
                {/* Above group helps stop the spinning affect once a child or the parent is hovered */}

                <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
                {/* Above is a extra span to help position the label better*/}
                {/* use peer in order to have affect on a sibling  Note: think group */}

                <span className={clsx("absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap", labelDirection === "left"? "right-full left-auto":"")}>
                  {label}
                </span>
              </span>
            </Link>
          </div>
        );
      }}

     
    </ResponsiveComponent>
  );
};

// position fixed(outer container (div), relative(container div) in index.jsx and absolute(in this div) are essential in making the circle.
// We wrap our Navbuttons within the ResponsiveComponent and have acess to the screen size 
// Also, we conditionally render two different styles of the navbutton based on screen size  

export default NavButton;
