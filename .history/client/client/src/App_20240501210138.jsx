
import { useEffect, useState } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';

const App = ({ children, name }) => {
  const [isInitialURL, setInitialURL] = useState(!window.location.href.toString().endsWith('/'))
  console.log('ola mundo ')

  useEffect(() => { }, [])

  console.warn(window.location.href.toString().endsWith('/'))
  return (

    <div className='App'>
      {
        isInitialURL && <Header />
      }
      {children}
      {
        isInitialURL && <Footer />
      }


    </div>

  )


}


export default App;
