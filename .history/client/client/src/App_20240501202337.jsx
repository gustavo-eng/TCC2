import { useLocation } from 'react-router-dom';
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';
const App = ({ children }) => {
  const location = useLocation();
  console.log('location useLocation')
  console.log(location.pathname)
  return (

    <div className='App'>

      <Header />
      {children}
      <Footer />
    </div>
  )


}


export default App