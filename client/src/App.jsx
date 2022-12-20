import { useState } from 'react'
import './assets/output.css'
import Home from './components/Home'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-screen h-screen">
      <Navbar />
      <div className="m-[40px] p-[20px]">
        <Home />
      </div>

    </div>
  )
}

export default App


