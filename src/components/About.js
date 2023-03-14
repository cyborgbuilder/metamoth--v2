import React from 'react'
import styled from 'styled-components'
function About() {
  return (
    <Container>
      <Wrap>
        <Slot>
          <Up>
            <Head>
              <h1>P2E GAMING</h1>
            </Head>
            <Image>
              <img src='./images/new1.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will feature a P2E (play to earn) based economy, where players can share and sell their creative items and earn rewards through their in-game actions.</p>
          </Down>
        </Slot>

        <Slot>
          <Up>
            <Head>
              <h1>Crypto Token Marketplace</h1>
            </Head>
            <Image>
              <img src='./images/new2.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have a marketplace for players to buy and sell in-game items, and use NFTs to enhance their gaming experience</p>
          </Down>
        </Slot>


        <Slot>
          <Up>
            <Head>
              <h1>NFT card collection</h1>
            </Head>
            <Image>
              <img src='./images/3.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have a card collection feature for players to collect and trade NFT cards</p>
          </Down>
        </Slot>


        <Slot>
          <Up>
            <Head>
              <h1>Merchandise</h1>
            </Head>
            <Image>
              <img src='./images/new1.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have merchandise such as t-shirts, mugs, and other items that can be purchased as NFTs</p>
          </Down>
        </Slot>

        <Slot>
          <Up>
            <Head>
              <h1>Donations</h1>
            </Head>
            <Image>
              <img src='./images/2.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have a donation feature to support environmental causes related to the Metamoths.</p>
          </Down>
        </Slot>

        <Slot>
          <Up>
            <Head>
              <h1>Comics</h1>
            </Head>
            <Image>
              <img src='./images/new4.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have comics that tie in with the Metamoths story and can be collected as NFTs</p>
          </Down>
        </Slot>

        {/* <Slot>
          <Up>
            <Head>
              <h1>Story book’s</h1>
            </Head>
            <Image>
              <img src='./images/new1.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have story books that tell the narrative of the Metamoths and can be collected as NFTs</p>
          </Down>
        </Slot>

        <Slot>
          <Up>
            <Head>
              <h1>Wallet</h1>
            </Head>
            <Image>
              <img src='./images/new1.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have a built-in wallet for players to store and manage their crypto tokens and NFTs</p>
          </Down>
        </Slot>

        <Slot>
          <Up>
            <Head>
              <h1>Liquidity pool</h1>
            </Head>
            <Image>
              <img src='./images/new1.png' />
            </Image>
          </Up>
          <Down>
            <p>The game will have liquidity pools for players to earn rewards for providing liquidity to the marketplace</p>
          </Down>
        </Slot> */}


       
      </Wrap>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-image: linear-gradient(to left top, #5c82e8, #6177d8, #646bc8, #6561b8, #6456a8, #6f59a8, #785ca8, #8160a8, #9872b8, #af85c9, #c798da, #deaceb);
  display: flex;
  //align-items: center;
  justify-content: center;
  font-family: 'Unbounded', cursive;
`

const Wrap = styled.div`
  width: 95%;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;

`

const Slot = styled.div`
  width: 30%;
  height: 270px;
  margin: 20px; 
  //background-color: #7359ab;
  background: #5985ff;
  border-radius: 15px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%),
  0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);

  @media only screen and (max-width: 1200px){
    width: 90%;
    height: 300px;
  }

  &:hover{
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73% ) 0px 16px 10px -10px;
    cursor: pointer;

    img{
      width: 95%;
    }
  }

`

const Up = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  border: 2px solid #7359ab;
  background: #9275d2;
  border-radius: 15px;
  display: flex;
  position: relative;

  
`

const Down = styled.div`
  width: 100%;
  height: 50%;
  padding: 20px;
  display: flex;
  justify-content: flex-end;
  border-radius: 15px;
  // background: #7359ab;
  background: #5985ff;
  z-index: 1000;

  p{
    color: black;
    font-size: 18.4px;
    letter-spacing: 1.01px;
    font-family: 'Chakra Petch', sans-serif;;

    @media only screen and (max-width: 1200px){
      font-size: 15px;
    }
  }
`

const Head = styled.div`
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  h1{
    font-size: 26px;
    text-transform: uppercase;

    @media only screen and (max-width: 1200px){
      font-size: 22px;
    }
    
  }
`

const Image = styled.div`
  width: 50%;
  position: relative;
    img{
      width: 90%;
      position: absolute;
      bottom: 0;
      right: 0;
      transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    }
`
export default About

