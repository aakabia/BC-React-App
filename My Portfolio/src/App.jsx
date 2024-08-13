import Header from "./components/Header";
import { Outlet } from "react-router-dom";
// Above, we import the Header compoment.
// Also, we import our outlet compnent for our react router

function App() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );

  // Above, we add our Header to our App
  // Above, our outlet compmenent helps render the correct page from our nav bar.
  // Note* the outlet compnent should be imported where you page set up is.
}

export default App;

// Above, we export our app
