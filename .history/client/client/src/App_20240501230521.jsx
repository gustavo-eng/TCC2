
import { useEffect } from 'react';
import './App.css';
import Footer from "./components/Footer";

const App = ({ children, name }) => {
  useEffect(() => { }, [])
  return (

    <div className='App'>
      {
        /* window.location.href.toString().endsWith('/') || window.location.href.toString().endsWith('/#') ? null : <Header />*/
      }
      {children}
      {
        window.location.href.toString().endsWith('/') || window.location.href.toString().endsWith('/#') ? null : <Footer />
      }


    </div>

  )


}


export default App;