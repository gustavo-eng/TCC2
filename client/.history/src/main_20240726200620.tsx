import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";

import ErrorPage from './pages/error-page/errorPage';
import Login from './pages/login/Login';
import Main from './pages/main/Main';
/*
/ rota protegida
caso o usuario acessar essa rota e ele nao
estiver autenticado, redireciona-lo para
a rota /login
*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/main",
        element: <div className=''>/ddfdasf  </div>,
      },
    ]
  },
  {
    element: (<div className='bg-purple-500'><Outlet /></div>),
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
