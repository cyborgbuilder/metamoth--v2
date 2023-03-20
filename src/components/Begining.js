import React from 'react'
import styled from 'styled-components'
function Begining() {
  return (
    <Container>
      <Wrap>
        {/* <Front>
            <h1>THE BEGINNING</h1>
        </Front> */}
        <Bottom>
            
            <Right>
            <p>The Metamoths game concept began 12 months ago’ in this time we have advanced into the technical side of things, and within the next 12 months we aim to provide players with a revolutionary new crypto gaming experience through its P2E (play to earn) mechanics. Players will have the opportunity to embark on epic adventures and collect rare items while also being able to earn rewards through their in-game actions. Additionally, the game will incorporate NFTs (non-fungible tokens) as a means for players to become a part of the community and explore the vast possibilities of the game's metaverse.</p>
           
            </Right>
            <Left>
               <img src='/images/b.png' />
            </Left>
        </Bottom>
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(to left bottom, #5c82e8, #6177d8, #646bc8, #6561b8, #6456a8, #6f59a8, #785ca8, #8160a8, #9872b8, #af85c9, #c798da, #deaceb);
    display: flex;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        height: 200vh
      }

`

const Wrap = styled.div`
    width: 95%;
    height: 100%;
    overflow: hidden;

`

const Left = styled.div`
    width: 50%;
    display: flex;
    padding: 30px;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1200px){
        display: none;
        padding: 20px;
    }


    @media only screen and (max-width: 1200px){
        width: 100%;
    }

    img{
        width: 90%;
        border-radius: 25px;

        @media only screen and (max-width: 1200px){
            width: 100%;
        }
    }

`

const Right = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    padding: 40px;

    @media only screen and (max-width: 1200px){
        width: 100%;
        padding: 40px 10px;
    }
    
    justify-content: center;

    p{
        font-family: 'Unbounded', cursive;
        font-size: 17px;
        margin: 7px 0;
        letter-spacing: 2.1px;
        line-height: 2.3rem;
        text-align: center;

        @media only screen and (max-width: 1200px){
            font-size: 13px;
            text-align: center;
        }
        
    }

    span{
        font-size: 30px;
        margin: 0 10px ;
        font-family: 'Rubik Distressed', cursive;
        color: #b0b0b0;

        @media only screen and (max-width: 1200px){
            font-size: 26px;
            text-align: center;
        }
        
    }
`
const Front = styled.div`
   

    h1{
        font-family: 'Rubik Distressed', cursive;
        font-size: 75px;
        text-align: center;
        padding: 20px;

        @media only screen and (max-width: 1200px){
            font-size: 38px;
        }
    }

`

const Bottom = styled.div`
    width: 100%;
    display: flex;



    @media only screen and (max-width: 1200px){
        flex-direction: column;
    }
`

export default Begining
