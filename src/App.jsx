import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Notes from './Components/Notes';
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <Notes searchTerm={searchTerm}/>
    </div>
  )
}
export default App