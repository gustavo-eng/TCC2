import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ErrorPage from './pages/error-page/errorPage';
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
        element: <div>/mainnnsdfaaffasfa  </div>,
      },
    ]
  },
  {
    path: "/login",
    element: <div> *** Rota login Here  *** </div>,
    errorElement: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
