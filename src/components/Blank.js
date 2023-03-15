import React from 'react'
import styled from 'styled-components'
function Blank() {
  return (
    <Container>
      
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    background-image: linear-gradient(to right top, #deaceb, #c798da, #af85c9, #9872b8, #8160a8, #785ca8, #6f59a8, #6456a8, #6561b8, #646bc8, #6177d8, #5c82e8);   //#5C82E8 #614993 #DEACEB


  //   &:before{
  //     content: '';
  //     position: absolute;
  //     bottom: 0;
  //     left: 0;
  //     width: 100%;
  //     height: 100%;
  //     background: #6177d8;
  //     border-radius: 0 0 50% 50%/0 0 90% 90%;
  //     box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
  //     z-index: 0;
  // }
`
export default Blank
