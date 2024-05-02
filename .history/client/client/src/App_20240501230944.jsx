
import { useEffect } from 'react';
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
const App = ({ children, name }) => {
  useEffect(() => { }, [])
  return (

    <div className='App overflow-x-hidden'>
      {
        window.location.href.toString().endsWith('/') || window.location.href.toString().endsWith('/#') ? null : <Header />
      }
      {children}
      {
        window.location.href.toString().endsWith('/') || window.location.href.toString().endsWith('/#') ? null : <Footer />
      }


    </div>

  )


}


export default App;
