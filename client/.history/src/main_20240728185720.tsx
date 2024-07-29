import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import LayoutLogin from '../src/layouts/Login';
import CreateAccount2 from './pages/create-account/CreateAccount';
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
    element: <LayoutLogin />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/create-account",
        element: <CreateAccount2 />,
      },
      {
        path: "/forgot-password",
        element: <CreateAccount2 />,
      },

    ],
    errorElement: <>Error cadastro</>
  },

]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
