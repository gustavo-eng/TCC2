
import './App.css';
import Footer from "./components/Footer";
import Header from './components/Header';

const App = ({ children }, props) => {
  return (

    <div className='App'>

      <Header />
      props {props.route}
      {children}
      <Footer />
    </div>
  )


}


export default App;