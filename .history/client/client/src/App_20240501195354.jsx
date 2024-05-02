import { Outlet } from 'react-router-dom';
import './App.css';
function App() {


  return (

    <div className='App'>
      <h1> Header </h1>
      <Outlet />
      <h1> Footer </h1>
    </div>

  )

}

export default App
