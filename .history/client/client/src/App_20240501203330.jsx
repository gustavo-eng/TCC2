
import './App.css';

const App = ({ children, route }) => {
  return (

    <div className='App'>
      props {route}
      {children}

    </div>
  )


}


export default App;
