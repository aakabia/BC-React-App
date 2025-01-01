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

const NavButton = ({ x, y, label, link, newTab, icon }) => {
  return (
    <div
      className=" absolute z-50 cursor-pointer"
      style={{ transform: `translate(${x},${y}` }}
    >
      <Link
        href={link}
        target={newTab ? "_blank" : "_self"}
        className="rounded-full flex items-center justify-center bg-background/20 border border-accent/30 border-solid backdrop-blur-[7px] shadow-glass-inset hover:shadow-glass-sm "
        aria-label={label}
      >
        <span className="relative w-14 h-14 p-4 animate-spin-slow-reverse group-hover:pause hover:text-accent ">{getIcon(icon)}

          <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>



        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap ">
          {label}
        </span>

        </span>

      </Link>
    </div>
  );
};

// position fixed(outer container div), relative(container div) in index.jsx and absolute(in this div) are essential in making the circle.

export default NavButton;
