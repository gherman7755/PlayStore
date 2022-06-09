import Game from './Game'
import { popularGames } from '../data'
import styled from 'styled-components'
import axios from 'axios'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  width : 85vw;
  justify-content: space-between;
  margin: 5px;
  display: grid;
  grid-template-columns: 200px 200px 200px;
`

const Games = () => {

  const location = useLocation();
  const [games, setGames] = useState([])

  useEffect(() => {
    const getGames = async() => {
      try{
        const res = await axios.get("http://localhost:5000/api/games");
        setGames(res.data)
      } catch(err){}
    };
    getGames();
  })

  return (
    <Container>
      {games.map((item) => (
        <Game item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Games