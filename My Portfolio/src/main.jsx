import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// Above, we import our custom css and  bootstrap for access to some additional styling
// Also, ReactDom, React and App are imported as part of react build.


import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Above are our imports to use the react router






import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Error from './pages/Error.jsx';

// Above, is our imported pages





const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },

      {
        path: '/projects',
        element: <Projects/>,
      },
  
    ],
  },
]);

// Above, we create a a new browser router and set the starting path to "/".
// We set the source of our router to our App.jsx and our error element to our error page.
// Last, we define the children for our router starting at our About Me page. Each path goes to associated page!








ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

//Above, we place our App containing all of our components in our ReactDom.
// Above , we wrap our router provider in our react dom root and pass the router prop using the router we created.
