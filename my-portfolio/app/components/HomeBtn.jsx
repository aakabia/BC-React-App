import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

const HomeBtn = () => {
  return (
    <Link
      href={"/"}
      target={"_self"}
      className="rounded-full flex items-center justify-center custom-bg fixed top-4 left-5 w-fit self-start text-white z-50  "
      aria-label={"home"}
      name={"home"}
    >
      <span className="relative w-14 h-14 p-4  hover:text-accent ">
        <Home className="w-full h-auto" strokeWidth={1.5} />
        {/* Above group helps stop the spinning affect once a child or the parent is hovered */}

        <span className="peer bg-transparent absolute top-0 left-0 w-full h-full"></span>
        {/* Above is a extra span to help position the label better*/}
        {/* use peer in order to have affect on a sibling  Note: think group */}

        <span className="absolute hidden peer-hover:block px-2 py-1 left-full mx-2 top-1/2 -translate-y-1/2 bg-background text-foreground text-sm rounded-md shadow-lg whitespace-nowrap ">
          Home
        </span>
      </span>
    </Link>
  );
};

export default HomeBtn;

// exports a home button component with recycled code from our navlinks.
// postioned the home link as fixed and on the top left of the page.
