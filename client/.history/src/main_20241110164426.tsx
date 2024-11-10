import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Provider } from 'react-redux';
import LayoutLogin from '../src/layouts/Login';
import AllUsers from './components/all-users/AllUsers';
import MyFprj from './components/myFprj/myFprj';
import RegisterTypes from './components/RegisterTypes/RegisterTypes';
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
import MyGym from './pages/MyGym/MyGym';
import MyProfile from './pages/myProfile/MyProfile';
import PrivateRoute from './PrivateRoute';
import store from './store/store';

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
        path: "/listRegistrations/:idEvent?",
        element: <TabListRegistrations />,
      },
      {
        path: "/lisGyms",
        element: <TabListGyms />,
      },
      {
        path: "/myProfile",
        element: <MyProfile />
      },
      {
        path: "/allUsers",
        element: <AllUsers />
      },
      {
        path: "/myFprj",
        element: <MyFprj/>
      },
      {
        path: "/myGym",
        element: <MyGym />
      },
      {
        path: "/registerTypes",
        element: <RegisterTypes />
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
        path: "/forgot-password/:resetToken",
        element: <ForgotPassword />,
      },
    ],

  },

]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}  />
    </Provider>
  </React.StrictMode>,
)
