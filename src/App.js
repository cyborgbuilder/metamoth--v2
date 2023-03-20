import React from 'react'
import './App.css';
import About from './components/About'
import Begining from './components/Begining';
import Blank from './components/Blank';
import Home from './components/Home'
import LayerOne from './components/LayerOne';
import LayerTwo from './components/LayerTwo';
import Mint from './components/Mint'
import MothsMatter from './components/MothsMatter';
import Roadmaps from './components/Roadmap'
function App() {
  return (
    <div>
      {/* <Home />
      <About />
      <Begining />
      <Roadmaps />
      <MothsMatter />
      <Blank /> */}
      <LayerOne />
      <LayerTwo />

    </div>
  )
}

export default App
