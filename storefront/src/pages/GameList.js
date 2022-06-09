import styled from "styled-components"
import Navbar from "../components/Navbar"
import Games from "../components/Games"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

const Container = styled.div`
  
`

const Title = styled.h1`
    margin: 20px;
`

const GameList = () => {

  return (
    <Container>
        <Navbar />
        <Title>Games</Title>
        <Games />
    </Container>
  )
}

export default GameList