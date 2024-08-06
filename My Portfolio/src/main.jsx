import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
// Above, we import our custom css and  bootstrap for access to some additional styling
// Also, ReactDom, React and App are imported as part of react build.



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
