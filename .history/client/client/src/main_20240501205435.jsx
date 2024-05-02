import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components
import App from "../src/App.jsx";
import './index.css';
import Event from "./screens/Events.jsx";
import Login from "./screens/Login.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: '/',
        element: null
      }
    ]
  },
  {
    path: '/events',
    element: <Event />,
    // pode ser colocado componentes especificos para isso
    children: [
      {
        path: '/events',
        element: null /* [<Header />, <Footer />]*/
      }
    ],


  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  */
  //console.log(`ff`)
  <React.StrictMode >
    <App route={useLocation} name='Gustavo'>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode >
)
