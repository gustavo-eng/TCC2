
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';

const App = ({ children, name }) => {

  console.log('ola mundo ')
  console.warn(window.location.href)
  return (

    <div className='App'>

      <Header />
      props {name}
      {children}
      <Footer />

    </div>

  )


}


export default App;
