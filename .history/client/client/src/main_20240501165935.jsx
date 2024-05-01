import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import { Login } from "./screens/Login.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
