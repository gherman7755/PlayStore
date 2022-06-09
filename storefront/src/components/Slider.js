import { useState } from "react";
import styled from "styled-components";
import arrow from "../images/next.png";
import wall from "../images/wall.jpg";
import "./style.css"
import { sliderItems } from "../data";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${ (props) => props.direction === "left" && "10px"};
    right: ${ (props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2px;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * - 100}vw);
`

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 70%;
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

const Title = styled.h1`
    font-size: 70px;
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500px;
    letter-spacing: 3px;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`


const Slider = () => {
    
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if(direction === "left"){
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
        } else{
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    }

    return(
        <Container>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (
                <Slide bg={item.bg}>
                    <ImgContainer><Image src={item.img} /></ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Show more</Button>
                    </InfoContainer>
                </Slide>
                ))}
            </Wrapper>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <img src={arrow} alt='arrow' width="30px" className="rotated"/>
            </Arrow>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <img src={arrow} alt='arrow' width="30px"/>
            </Arrow>
        </Container>
    )
}

export default Slider