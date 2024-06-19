import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import './Servicios/apiHandler.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Main/>
     <div>



     </div>
    </>
  )
}

export default App
