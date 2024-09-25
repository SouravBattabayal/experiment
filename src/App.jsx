import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-slate-500 text-rose-700 font-serif'>
        <h1 className='font-bold text-2xl'>Heading</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga, delectus illo? Quisquam accusamus nihil quo iste ducimus alias tenetur eum obcaecati suscipit, officiis reprehenderit iure?</p>
      </div>
    </>
  )
}

export default App
