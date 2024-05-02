import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import components
import App from "../src/App.jsx";
import Footer from "./components/Footer";
import Header from './components/Header';
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

    children: [
      {
        path: '/events',
        element: [<Header />, <Footer />]
      }
    ],


  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  /*
  */
  <React.StrictMode>
    <App /*route={useLocation}*/ route='Gustavo route'>
      <RouterProvider router={router} />
    </App>
  </React.StrictMode>,
)
