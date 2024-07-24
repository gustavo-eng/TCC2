import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './App.tsx';

import {
  createBrowserRouter
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Rota principal</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
