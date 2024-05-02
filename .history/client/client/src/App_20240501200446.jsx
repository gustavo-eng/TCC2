import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {

  return (
    <div className='App'>
      <h1> Header </h1>
      <Outlet />
      <h1> Foovcxter </h1>
    </div>
  )


}


export default App
