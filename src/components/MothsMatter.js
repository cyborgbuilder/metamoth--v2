import React from 'react'
import styled from 'styled-components'
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function MothsMatter() {
  return (
    <Container>
      <Wrap>
        <Header>
            <h1>#mothsmatter
            </h1>
        </Header>
        <Content>
            <Left>
                <h2># Why Sir David Attenborough loves moths!</h2>
                <p>"We hear a lot about the threats to conspicuous and charismatic animals such as birds and mammals, but far less about the insects that make up over half of all the species known to science and which play a vital role in the functioning of the world’s moth ecosystems"</p>
                <img src='./images/comma.png' />
            </Left>
            <Right>
                <img src='./images/david2.png' />
            </Right>
        </Content>
        <Footer>
            <Head>
            <h1>Community</h1>
                <p>The community is for all NFT holders and follows a set structure of principles to help members with NFT purchases, sales, and related topics. The community will discuss the progression of projects, games, and all things related.
Receive updates on future NFTs, and consult with each other. A percentage of all NFT sales will contribute to the evolution of each project, giving each NFT owner a piece of the action.</p>
            </Head>
            <Body>
                {/* <LeftTwo>
                <img src='./images/MW.gif' />
            </LeftTwo> */}
            <RightTwo>
            <SocialIcons>
                <a href='https://discord.com/'><FaDiscord className='icon' /></a> 
                <a href='https://twitter.com/j10hunter'><FaTwitter className='icon'  /></a>
                <a href='https://t.me/Metamoths'><FaTelegram className='icon' /></a>
                <a href='https://www.instagram.com/Metamoths'><FaInstagram className='icon' /></a>
       </SocialIcons>
            </RightTwo>
            </Body>
        </Footer>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 220vh;
    position: relative;
    background-image: linear-gradient(to left bottom, #5c82e8, #6177d8, #646bc8, #6561b8, #6456a8, #6f59a8, #785ca8, #8160a8, #9872b8, #af85c9, #c798da, #deaceb);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border-top: 3px solid hsla(224, 75%, 64%, 1);

    @media only screen and (max-width: 1200px){
        height: 230vh;
    }


    &:before{
        content: '';
        position: absolute;
        bottom: 55px;
        left: 0;
        width: 80%;
        height: 80%;
        background: #6177d8;
        border-radius: 50% 50% 50% 50%;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
        z-index: 0;
        animation: rotation 10s infinite linear;
    }

`
const Wrap = styled.div`
    width: 95%;
    height: 100%;
    z-index: 1000;
   
    

    

`

const Header = styled.div`

h1{
    color: #fff;
    text-align: center;
    font-size: 90px;
    font-family: 'Unbounded', cursive;
    padding: 20px 0;

    @media only screen and (max-width: 1200px){
        font-size: 40px;
        margin: 10px 0;
    }
}


`

const Content = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    padding: 100px;
   // border: 1px solid black;
    position: relative;
    background: white;
        opacity: 0.8;
        border-radius: 15px;

        @media only screen and (max-width: 1200px){
            padding: 0;
            flex-direction: column;
        }
    

`

const Left = styled.div`
    width: 60%;
    height: 80vh;

    @media only screen and (max-width: 1200px){
        width: 100%;
    }

    h2{
        color: black;
        font-size: 40px;
        text-align: center;
        font-family: 'Chakra Petch', sans-serif;

        @media only screen and (max-width: 1200px){
            font-size: 30px;
            padding: 10px 0;
        }
        
    }

    p{
        color: black;
        padding: 40px;
        font-size: 22px;
        line-height: 2.1rem;
        letter-spacing: 1.2px;
        font-family: 'Chakra Petch', sans-serif;;

        @media only screen and (max-width: 1200px){
            font-size: 19px;
            padding: 10px;
        }
        
    }

    img{
        width: 14%;
        margin-left: 30px;

        @media only screen and (max-width: 1200px){
            width: 18%;
        }
    }


`

const Right = styled.div`
    width: 30%;
    height: 100%;
    


    img{
        width: 40%;
        position: absolute;
        bottom: 0;
        right: 0px;

        @media only screen and (max-width: 1200px){
            width: 60%;
        }
        
    }

`

const Footer = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    padding: 90px 20px;

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 90px 10px;
    }

`

const Head = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    h1{
        font-size: 60px;
        font-family: 'Unbounded', cursive;

        @media only screen and (max-width: 1200px){
            font-size: 45px;
            margin: 30px 0;
        }
    }

    p{
        padding: 40px 20px;
        font-size: 20px;
        font-family: 'Chakra Petch', sans-serif;;
        line-height: 2.1rem;
        letter-spacing: 1.3px;

        @media only screen and (max-width: 1200px){
            width: 100%;
            padding: 20px 0;
        }


    }

`

const Body = styled.div`
    width: 100%;
    display: flex;
    padding: 30px 0;
    

`
const LeftTwo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 58%;
        border-radius: 10%;
    }

`

const RightTwo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

const SocialIcons = styled.div`
  width: 60%;  
  font-size: 125px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 20px;

  @media only screen and (max-width: 1200px){
    width: 90%;
    font-size: 80px;
    flex-wrap: wrap;
    padding: 0;
}

.icon{
    margin: 0 30px;

    @media only screen and (max-width: 1200px){
        margin: 20px 30px;
    }
}

`
export default MothsMatter
