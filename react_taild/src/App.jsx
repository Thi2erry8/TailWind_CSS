import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
            <h1 className='text-8xl'>la vie est belle</h1>
            <h2 className='text-xl'>la vie est belle</h2>
            <h3 className='text-sm'>la vie est belle</h3>
            <p className='text-xs'>la vie est belle</p>
    </div>
  )
}

export default App
