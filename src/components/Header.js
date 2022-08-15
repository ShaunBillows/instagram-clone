import styled from "styled-components";
import { checkToken } from "../utils";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import SearchUser from "./SearchUser";
import DropdownIcon from "../components/DropdownIcon"
import 'react-dropdown/style.css';
import NavbarIcon from "./NavbarIcon";
import logo from "./images/logo.png"

const Header = ({ user, setUser, cookies, setCookie, setUserDisplay, userDisplay, input, setInput }) => {

    // check token on refresh

    useEffect( () => {
        checkToken(cookies, setCookie, setUser)
    }, [] )

    // navigate to login page if logout detected

    const navigate = useNavigate();

    useEffect( () => {
        if (user === "") {
            navigate("/")
        }
    }, [user])

    // react drop down

    const options = [
        'home', 'two', 'three'
      ];
      const defaultOption = options[0];

    return (
        <>
            <NavBar>
                <NavTitleCont>
                    <Img src={logo}/>
                </NavTitleCont>

                <NavSearchCont>
                    <SearchUser user={user} setUserDisplay={setUserDisplay} userDisplay={userDisplay} input={input} setInput={setInput}/>      
                </NavSearchCont>

                <NavAllIconsCont>
                    <NavbarIcon image={require("./images/home.png")}/>
                    <NavbarIcon image={require("./images/messages.png")}/>
                    <NavbarIcon image={require("./images/post.png")}/>
                    <NavbarIcon image={require("./images/discover.png")}/>
                    <NavbarIcon image={require("./images/likes.png")}/>
                    <DropdownIcon setCookie={setCookie} setUser={setUser} navigate={navigate}/> 
                </NavAllIconsCont> 

            </NavBar>

            <User>{user} logged in.</User>   

        </>
    )
};

export default Header;

const NavBar = styled.div`
    width: 100vw;
    position: relative;
    box-shadow: 0px 0px 7px -2px;
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
    gap: 1.4rem;
    margin-right: 1rem;
`
const User = styled.h5`
    padding: 0.3rem;
    align-self: flex-end;
`