import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import styled from "styled-components"
import Navbar from "../components/Navbar"
import {publicRequest} from "../requestsMethods"
import { useSelector } from 'react-redux';
import pen from '../images/pen.png'


const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer = styled.div`
  flex: 1;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.span`
  font-weight: 100px;
  font-size: 40px;
`

const Button = styled.button`
  display: flex;
  width: fit-content;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  &:hover{
    background-color: white;
    color: teal;
    border: 2px solid teal;
  }
`

const Link = styled.a`
  text-decoration: none;
`

const EditButton = styled.img`
  flex: 1;
  width: 30px;
  cursor: pointer;
  &:hover{
    width: 50px;
  }
`

const Game = () => {
  const location  = useLocation();
  const id = location.pathname.split("/")[2];
  const [game, setGame] = useState({});

  const user = useSelector((state) => state.user.currentUser)
  const {isFetching, error} = useSelector((state) => state.user);


  useEffect(() => {
    const getGame = async () => {
      try{
        const res = await publicRequest.get("/games/find/"+id)
        setGame(res.data)
      } catch(err){}
    }
    getGame();
  }, [id])

  return (
    <Container>
        <Navbar />
        <Wrapper>
            <ImgContainer>
                <Image src={game.img}/>
            </ImgContainer>
            <InfoContainer>
                <Title>{game.title}</Title>
                <Desc>{game.desc}</Desc>
                <Price>{game.price} $</Price>
                <Link href={`${game.link}`}>
                  <Button disabled={!user}>DOWNLOAD</Button>
                </Link>
                <Link href={'/'}>
                  <EditButton src={pen}/>
                </Link>
            </InfoContainer>
        </Wrapper>
    </Container>
  )
}

export default Game