import React from 'react'
import { popularGames } from '../data'
import ref from '../images/ref.png'
import styled from 'styled-components'
import search from '../images/search_icon.png'
import { Navigate } from 'react-router-dom'

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`

const Container = styled.div`
  flex: 1;
  margin: 15px;
  width: 500px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;
  }
`

const Image = styled.img`
  height: 75%;
`
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;

  &:hover{
    background-color: #e9f5f5;
    transform: scale(1.1) 
   }
`

const Link = styled.a`
`

const Game = ({item}) => {

  return (
    <Container>
      <Image src={item.img}/>
        <Link href={`/game/${item._id}`}>
          <Info>
            <Icon>
              <img src={search} width="30"/>
            </Icon>
          </Info>
        </Link>
    </Container>
  )
}

export default Game