import React from 'react'
import styled from 'styled-components'
import Begining from './Begining'
import Mint from './Mint'
import MothsMatter from './MothsMatter'

function LayerOne() {
  return (
    <Container>
        <Begining />
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
 
`

export default LayerOne