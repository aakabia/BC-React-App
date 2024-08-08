import Navbar from "./Navbar";

// Above, we import our Navbar

const message = "hello";

function Header() {
  return (
    <section className="container-fluid ">
      <div className="row">
        <header className="header col-12  ">
          <h1 className="welcome"> Aziz A. Kabia 🚀 </h1>
          <Navbar />
        </header>
      </div>
    </section>
  );
}
// Above, we create our header and add our Navbar to it as well.

export default Header;

// Above, we export our Header
