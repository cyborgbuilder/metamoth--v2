import React, {useRef} from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <Container>
      <Wrap>
        <Left>
          <img src='./images/mm1.png' />
        </Left>
        <Right>
          <h1>THE METAMOTHS PROJECT</h1>
          <p>The crypto gaming experience with
P2E (play to earn) adventures along the way.
With its NFTS you can be part of the community. Explore the possibilities of our future and learn the environmental values of the metamoths.</p>

       <SocialIcons>
       <a href='https://discord.com/'><FaDiscord style={{color: '#fff', margin: '0 10px '}}/></a> 
        <a href='https://twitter.com/j10hunter'><FaTwitter style={{color: '#fff', margin: '0 10px '}} /></a>
          <a href='https://t.me/Metamoths'><FaTelegram style={{color: '#fff', margin: '0 10px '}}/></a>
          <a href='https://www.instagram.com/Metamoths'><FaInstagram style={{color: '#fff', margin: '0 10px '}}/></a>
       </SocialIcons>
        </Right>
      </Wrap>
    </Container>
  )
}


const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to right top, #deaceb, #c798da, #af85c9, #9872b8, #8160a8, #785ca8, #6f59a8, #6456a8, #6561b8, #646bc8, #6177d8, #5c82e8);   //#5C82E8 #614993 #DEACEB
    display: flex;
   // align-items: center;
    justify-content: center;

`

const Wrap = styled.div`
  width: 95%;
  display: flex;

  @media only screen and (max-width: 1200px){
    flex-direction: column;
  }
`

const Left = styled.div`
  width: 50%;
  display: flex;
  //align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px){
    width: 100%;
  }
  img{
    width: 92%;
    border-radius: 5%;
    //box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    &:hover{
     // box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
		0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);
    }
  }

`

const Right = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1200px){
    width: 100%;
  }

  h1{
    font-family: 'Unbounded', cursive;
    color: #1b1b1b;
    text-align: center;
    font-size: 79px;
    text-decoration: underline;
    letter-spacing: 1.3px;

    @media only screen and (max-width: 1200px){
      font-size: 40px;
    }
  }

  P{
    font-family: 'Unbounded', cursive;
    color: #1b1b1b;
    text-align: center;
    font-size: 20px;
    line-height: 1.4;
    margin-top: 40px;

    @media only screen and (max-width: 1200px){
      font-size: 16px;
    }
  }
`

const SocialIcons = styled.div`
  font-size: 55px;
  padding-top: 30px;

`
export default Home
