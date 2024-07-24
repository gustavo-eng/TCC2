import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


import {
  createBrowserRouter
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
        element: <div className='text-green-600 bg-red-500'>/fdasf  </div>,
      },
    ]
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='text-green-500'>dfsa</div>
  </React.StrictMode>,
)
