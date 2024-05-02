import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "../src/components/Header.jsx";
import Event from "./screens/Events.jsx";
import Login from "./screens/Login.jsx";

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: '/',
        element: <Header />
      }
    ]
  },
  {
    path: '/events',
    element: <Event />,
    children: [

    ],

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
