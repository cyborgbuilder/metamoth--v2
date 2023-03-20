import React from 'react'
import styled from 'styled-components'
import About from './About'
import Begining from './Begining'
import Blank from './Blank'
import Footer from './Footer'
import Home from './Home'
import Mint from './Mint'
import MothsMatter from './MothsMatter'
import Roadmaps from './Roadmap'

function LayerTwo() {
  return (
    <Container>
        <Home />
        <About />
        <Roadmaps />
        <Mint />
        <Blank />
        <MothsMatter />
        <Footer />
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    z-index: 1000;
`
export default LayerTwo