import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Main from './Components/Main/Main'
import Auth from './tokenAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     {/* <Main/> */}

     <Auth/>
     
    </>
  )
}

export default App
