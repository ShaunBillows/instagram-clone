import styled from "styled-components";
import { checkToken } from "../utils";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import SearchUser from "./SearchUser";
import DropdownIcon from "./DropdownIcon"
import 'react-dropdown/style.css';
import NavbarIcon from "./NavbarIcon";
import logo from "./images/logo.png"
import home from "./images/home.png"
import messages from "./images/messages.png"
import discover from "./images/discover.png"
import likes from "./images/likes.png"
import post from "./images/post.png"

const NavBar = ({ user, setUser, cookies, setCookie, setUserDisplay, userDisplay, input, setInput, unavailable }) => {

    // check token on refresh

    useEffect( () => {
        checkToken(cookies, setCookie, setUser)
    // eslint-disable-next-line
    }, [] )

    // navigate to login page if logout detected

    const navigate = useNavigate();

    useEffect( () => {
        if (user === "") {
            navigate("/")
        }
    // eslint-disable-next-line
    }, [user])

    return (
        <>
            <Container>
                <NavTitleCont>
                    <Img src={logo} onClick={ () => navigate("/home") }/>
                </NavTitleCont>
                <NavSearchCont>
                    <SearchUser user={user} setUserDisplay={setUserDisplay} userDisplay={userDisplay} input={input} setInput={setInput}/>      
                </NavSearchCont>
                <NavAllIconsCont>
                    <NavbarIcon image={home} className="unavailable"/>
                    <NavbarIcon image={messages} className="unavailable"/>
                    <NavbarIcon image={post}/>
                    <NavbarIcon image={discover}/>
                    <NavbarIcon image={likes}/>
                    <DropdownIcon setCookie={setCookie} setUser={setUser} navigate={navigate}/> 
                </NavAllIconsCont> 
            </Container>
        </>
    )
};

export default NavBar;

const Container = styled.div`
    width: 100vw;
    position: relative;
    box-shadow: 0px 0px 7px -2px;
    height: 71px;
`
const NavTitleCont = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    display: flex;
    align-items: center;
`
const Img = styled.img`
    height: 40px;
    background-image: url(${logo});
    background-size: cover;
    margin-left: 1rem;
    cursor: pointer;

`
const NavSearchCont = styled.div`
    display: flex;
    justify-content: center;

`
const NavAllIconsCont = styled.div`
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    display: flex;
    align-items: center;
    gap: 1.1rem;
    margin-right: 1rem;
    @media (max-width: 900px) {
        gap: 0.2rem;
    }
`
