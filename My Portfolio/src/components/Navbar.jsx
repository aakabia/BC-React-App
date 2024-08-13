import { Link, useLocation } from "react-router-dom";
// Above, we import Link and useLocation for the react router

function Navbar(props) {
  const currentPage = useLocation().pathname;

  // Above, we deconstruct "useLocation" and get the pathname as the current page.

  return (
    <nav className="links">
      <h6 className="link">
        <Link
          to="/"
          className={currentPage === "/" ? "highlight" : "highlightNone"}
          // Above, is a conditional (ternary) operator that checks to see if the current page is "Home"
          // If it is, we set the current page to 'highlight', otherwise we set it to 'highlightNone'
        >
          About Me
        </Link>
      </h6>

      <h6 className="link">Portfolio</h6>
      <h6 className="link">Contact</h6>
      <h6 className="link">Resume</h6>
    </nav>
  );
}

// Above, we create our NavBar function with our requried titles
// Above, we use "Link to set our routes"

export default Navbar;

// Above, we export our NavBar
