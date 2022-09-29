import { deleteUser } from "../utils"
import { useState } from "react"
import styled from "styled-components"

const DeleteAccount = ({ cookies, setCookie, setUser }) => {

    // delete account 

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleEnterDelete = async e => {
        if (e.key === "Enter") {
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
        console.log(cookies);
        await deleteUser(cookies, username, password, setCookie, setUser)
        setPassword("")
        setUsername("")
    }

    return (
        <>
            <DeleteAccountCont>
                {/* <Input onKeyDown={handleEnterDelete} placeholder="username" value={username} onChange={ e => setUsername(e.target.value)}></Input>
                <Input onKeyDown={handleEnterDelete} placeholder="password" value={password} onChange={ e => setPassword(e.target.value)}></Input>
                <Button onClick={handleClickDelete}>delete account</Button> */}
                {/* <h1>HI</h1> */}
                <SearchCont>
                        <Input type="text"  onKeyDown={handleEnterDelete} placeholder="username" value={username} onChange={ e => setUsername(e.target.value)}></Input>
                        <Input type="text" onKeyDown={handleEnterDelete} placeholder="password" value={password} onChange={ e => setPassword(e.target.value)} ></Input>
                        <Button onClick={handleClickDelete}>delete account</Button> 

                    <SearchIcon ></SearchIcon>
                </SearchCont>     
            </DeleteAccountCont>
        </>
    )
}

export default DeleteAccount

const DeleteAccountCont = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
`
const Button = styled.button`
    border-radius: 5px;
    border: none;
    padding: 8px 10px 8px 10px;
        /* position: absolute; */
        font-size: medium;
        font-weight: 400;
        background-color: #0276FF;
        color: white;
`
const SearchCont = styled.div`
    margin: 1.2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 200px;
`
const Input = styled.input`
    /* width: 100%; */
    border-radius: 8px;
    border: none;
    padding: 8px 10px 8px 10px;
    /* position: absolute; */
    font-size: medium;
    background-color: rgba(1,1,1,0.07);
`
const SearchIcon = styled.div`
    position: absolute;
    top: 6px;
    left: 5px;
    height: 20px;
    width: 20px;
    z-index: 10;
    border-radius: 10px;
    border: none;
    background-size: cover;
    cursor: text;

`
const Clear = styled.div`
    /* position: absolute; */
    top: 4px;
    right: 5px;
    height: 20px;
    width: 20px;
    z-index: 10;
    border-radius: 10px;
    border: none;
    background-size: cover;
    cursor: pointer;
    font-weight: bold;
    color: rgba(1,1,1,0.3);
    font-size: larger;
`
