import React from 'react'
import './App.css';
import About from './components/About'
import Blank from './components/Blank';
import Home from './components/Home'
import Mint from './components/Mint'
import MothsMatter from './components/MothsMatter';
import Roadmaps from './components/Roadmap'
function App() {
  return (
    <div>
      <Home />
      <About />
      <Roadmaps />
      <MothsMatter />
      <Blank />
      
    </div>
  )
}

export default App
