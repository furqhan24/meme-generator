import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Meme />
    </>
  )
}

export default App
