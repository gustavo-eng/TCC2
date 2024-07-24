import * as React from 'react';
import * as ReactDOM from 'react-dom/client';


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import ErrorPage from './pages/error-page/errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Rota principal Here  </div>,
    errorElement: <ErrorPage />
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
