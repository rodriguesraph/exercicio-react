import { useState } from 'react'
import Calc from './components/Calc'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Calc />
      </div>
    </>
  )
}

export default App
