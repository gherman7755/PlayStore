import React from 'react'
import styled from 'styled-components'
import searchIcon from '../images/search_icon.png'

const Container = styled.div`
    height: 60px;
`

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
`

const SearchContainer = styled.div`
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
`

const Input = styled.input`
    border: none;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`

const Logo = styled.h1`
    font-weight: bold;
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const MenuItem = styled.div`
    color: black;
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
`

const Link = styled.a`
    color: black;
    text-decoration: none;
`

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Language>EN</Language>
                <SearchContainer>
                    <Input/>
                    <img src={searchIcon} alt='logo'/>
                </SearchContainer>
            </Left>
            <Center><Logo><Link href={'/'}>PLAYSTORE</Link></Logo></Center>
            <Right>
                {/* <Link href={`/`}>
                    <MenuItem>LOG OUT</MenuItem>
                </Link> */}
                <Link href={`/create/`}>
                    <MenuItem>CREATE NEW GAME</MenuItem>
                </Link>
                <Link href={`/register/`}>
                    <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link href={'/login/'}>
                    <MenuItem>LOGIN</MenuItem>
                </Link>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar