import styled from "styled-components";
import { checkToken } from "./utils";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { deleteUser } from "./utils";

const Header = ({ user, setUser, cookies, setCookie }) => {

    // navigate to login page if logout detected logout

    const navigate = useNavigate();

    useEffect( () => {
        if (user === "") {
            navigate("/")
        }
    }, [user])

    // check token on refresh

    useEffect( () => {
        // checkToken(cookies, setCookie, setUser)
    }, [] )

    // delete account 

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleEnterDelete = async e => {
        if (e.key === "Enter") {
            // await deleteUser(cookies, username, password, setCookie, setUser)
            const result = await deleteUser(cookies, username, password, setCookie, setUser)
            if (result) {
                alert("Account sucessfully deleted.")
            } else {
                alert("Incorrect credentials.")
            }
            setPassword("")
            setUsername("")
        }
    }
    const handleClickDelete = async () => {
        // console.log(cookies);
        await deleteUser(cookies, username, password, setCookie, setUser)
        setPassword("")
        setUsername("")
    }

    return (
        <>
        <HeaderCont>
            <h1>Welcome</h1>
            <h2>{user} logged in.</h2>


            <div className="delete-container">
                <input onKeyDown={handleEnterDelete} placeholder="username" value={username} onChange={ e => setUsername(e.target.value)}></input>
                <input onKeyDown={handleEnterDelete} placeholder="password" value={password} onChange={ e => setPassword(e.target.value)}></input>
                <button onClick={handleClickDelete}>delete account</button>
            </div>
        </HeaderCont>           
        </>
    )
};

const HeaderCont = styled.div` 
height: 200px;
width: 100vw;
background-color: red;
`

export default Header;