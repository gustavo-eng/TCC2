import { useState } from 'react'
import Login from '../src/screens/Login'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Login />

    </>
  )
}

export default App
