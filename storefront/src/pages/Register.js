import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import { register } from "../redux/apiCalls"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://wallpaper.dog/large/20433614.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
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
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
`
const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 15px 15px 6px 10px;
    padding: 10px;
`

const Link = styled.a`
    text-decoration: none;
`

const Register = () => {
    const [username, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isPublisher, setIsPublisher] = useState(false);

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        register(dispatch, {username, email, password, isPublisher})
    }

    const handleChange = () =>{
        setIsPublisher(!isPublisher)
        console.log(isPublisher)
    }

  return (
    <Container>
        <Wrapper>
            <Title>
                Create Account
            </Title>
            <Form>
                <Input placeholder="username" onChange={(e) => setName(e.target.value)}/>
                <Input placeholder="email"onChange={(e) => setEmail(e.target.value)}/>
                <Input placeholder="password" type={"password"} onChange={(e) => setPassword(e.target.value)}/>
                <label>
                    <Input type={"checkbox"} checked={isPublisher} onChange={handleChange}/>
                    Is Publisher?
                </label>
            </Form>
            <Button onClick={handleClick}>
                Create
            </Button>
            <Link href="/"><Button>Back to Main</Button></Link>
        </Wrapper>
    </Container>
  )
}

export default Register