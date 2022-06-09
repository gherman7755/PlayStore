import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {create} from "../redux/apiCalls"
import Navbar from "../components/Navbar";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://images6.alphacoders.com/965/965986.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    margin: 20px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover{
        color: teal;
        background-color: white;
        border: 2px solid teal;
    }
`

const Anonce = styled.div`
    color: green;
`

const Link = styled.a`
    text-decoration: none;
`


const Create = () => {
    const [title, setTitle] = useState("");
    const [desc, setDescription] = useState("");
    const [link, setUrl] = useState("");
    const [price, setNumber] = useState();
    const [img, setImage] = useState();

    const dispatch = useDispatch();
    // const {isFetching, error} = useSelector((state) => state.game);
    
    const handleClick = (e) => {
        e.preventDefault();
        create(dispatch, {title, desc, link, price, img})
    }
    
  return (
    <Container>
        <Wrapper>
            <Title>
                Create Game
            </Title>
            <Form>
                <Input type={"text"} placeholder="gametitle" onChange={(e) => setTitle(e.target.value)}/>
                <Input type={"text"} placeholder="description" onChange={(e) => setDescription(e.target.value)}/>
                <Input type={"url"} placeholder="link" onChange={(e) => setUrl(e.target.value)}/>
                <Input type={"number"} placeholder="price" onChange={(e) => setNumber(e.target.value)}/>
                <Input type={"text"} placeholder="picture_url" onChange={(e) => setImage(e.target.value)}/>
            </Form>
            <Button onClick={handleClick}>Create</Button>
            <Link href="/"><Button>Back to Main</Button></Link>
        </Wrapper>
    </Container>
  )
}

export default Create