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
                <Input onKeyDown={handleEnterDelete} placeholder="username" value={username} onChange={ e => setUsername(e.target.value)}></Input>
                <Input onKeyDown={handleEnterDelete} placeholder="password" value={password} onChange={ e => setPassword(e.target.value)}></Input>
                <Button onClick={handleClickDelete}>delete account</Button>
                {/* <h1>HI</h1> */}
            </DeleteAccountCont>
        </>
    )
}

export default DeleteAccount

const DeleteAccountCont = styled.div`
    padding: 1rem;
    outline: solid black 1px;
`
const Input = styled.input`
`
const Button = styled.button`
`
