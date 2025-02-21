import { useState } from 'react'
import './App.css'

function App() {
  const [text, setText] = useState('h11')

  const newtext = (e) => {
    console.log(e)
    setText(e.target.value)

  }

  return (
    <>
      <h1>{text}</h1>
      <input type="text" placeholder='enter...' value={text} onChange={newtext}/>
    </>
  )
}

export default App
