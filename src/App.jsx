import { useState } from 'react'
import ToDoApp from './Components/ToDoApp'

import Notes from './Components/Notes'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      {/* <ToDoApp/> */}
  
      <Notes/>
      </div>
      
     
       
    </>
  )
}

export default App
