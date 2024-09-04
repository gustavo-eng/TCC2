import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import LayoutLogin from '../src/layouts/Login';
import TabCompetitions from './components/tabContainerCompetitions/TabCompetitions';
import TabPayments from './components/tabContainerPayments/TabPayments';
import TabListAthlets from './components/tabListAthlets/TabListAthlets';
import TabListGyms from './components/TabListGyms/TabListGyms';
import TabListRegistrations from './components/TabListRegistrations/tabListRegistrations';
import TabRegisters from './components/tabRegisters/TabRegisters';
import TabTestModal from './components/tabTestModal/TabTestModal';
import CreateAccount2 from './pages/create-account/CreateAccount';
import ErrorPage from './pages/error-page/errorPage';
import ForgotPassword from './pages/forgot-password/ForgotPassword';
import Login from './pages/login/Login';
import MyProfile from './pages/myProfile/MyProfile';
import PrivateRoute from './PrivateRoute';

/*
/ rota protegida
caso o usuario acessar essa rota e ele nao
estiver autenticado, redireciona-lo para
a rota /login
*/

const router = createBrowserRouter([

  {
    path: "/",
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/tabCompetition",
        element: <TabCompetitions />,
      },
      {
        path: "/myPayments",
        element: <TabPayments /> ,
      },
      {
        path: "/listAthlets",
        element: <TabListAthlets />,
      },
      {
        path: "/registersAthlets?/:idEvent",
        element:<TabRegisters/>,
      },
      {
        path: "/testModal",
        element: <TabTestModal />,
      },
      {
        path: "/listRegistrations",
        element: <TabListRegistrations />,
      },
      {
        path: "/lisGyms",
        element: <TabListGyms />,
      },
      {
        path: "/myProfile",
        element: <MyProfile />
      }
    ]
  },
  {
    element: <LayoutLogin />,
    errorElement: <ErrorPage />,
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
        element: <ForgotPassword />,
      },
    ],

  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
