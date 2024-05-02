import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Event from "./screens/Events.jsx";
import Login from "./screens/Login.jsx";

import Header from './components/Header.jsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    children: [
      {
        path: '/',
        element: <h1>okokffok</h1>
      }
    ]
  },
  {
    path: '/events',
    element: <Event />,
    children: [
      {
        path: '/events',
        element: <Header />
      }
    ],

  }
])


ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
