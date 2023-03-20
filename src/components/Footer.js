import React from 'react'
import styled from 'styled-components'
import { FaDiscord } from "react-icons/fa";
function Footer() {
  return (
    <Container>
      <Wrap>
        <p>© The Metamoths, All rights reserved.</p>    
        <Slot>
            <p>Developed by Cyborgbuilder</p>
            <a href='https://discord.com/cyborgBuilder#7097'><FaDiscord style={{color: '#fff', fontSize: '25px'}}/></a>

        </Slot>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    height: 80px;
    background: #614993;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: center;


    @media only screen and (max-width: 1200px){
      opacity: 10;
  }


`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media only screen and (max-width: 1200px){
      justify-content: center;
  }

    p{
        font-family: 'Unbounded', cursive;

        @media only screen and (max-width: 1200px){
          font-size: 12px;
      }
    }


`

const Slot = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column; 

@media only screen and (max-width: 1200px){
  display: none;
}

p{
    font-size: 24px;
    font-family: 'Libre Barcode 128 Text', cursive;
    margin: 8px 0;
    
    @media only screen and (max-width: 1200px){
      margin: 0;
      font-size: 16px;

  }
}
`
export default Footer
