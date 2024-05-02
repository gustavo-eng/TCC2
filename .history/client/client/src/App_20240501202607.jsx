import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from './components/Header';

const App = ({ children }) => {
  const location = useLocation();

  return (
    <div className='App'>
      <Header />
      {children}
      <Footer />
      <p>A URL atual é: {location.pathname}</p>
    </div>
  );
}

export default App;
