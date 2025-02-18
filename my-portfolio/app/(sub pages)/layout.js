import HomeBtn from "../components/HomeBtn";

export default function SubPagesLayout({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 xs:px-8 lg:px-16 py-32 ">
      <HomeBtn />
      {children}
    </main>
  );
}

// Use our created Homebutton for our layouts in (sub pages)
// (sub pages) is not a route is a way of grouping routes that contain similar layouts
// each file grouping () only has one layout.js at its root that inherit from the main layout file in app directory
// inside our (sub pages) we have a projects route with only one page.js file
// we can continue to nest routes inside the projects folder or directly in our (sub pages)
