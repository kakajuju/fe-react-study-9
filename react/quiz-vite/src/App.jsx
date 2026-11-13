import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [ count, setCount ] = useState(0)

  return (
    <>
      <div className='App-Main'>
        <div>
        <h1 style={{margin:'30px'}}>React 프로젝트</h1>
        <a style={{margin:'50px'}}>김주현</a>
        </div>
      </div>
    </>
  )
}

export default App
