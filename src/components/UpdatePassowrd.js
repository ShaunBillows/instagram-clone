import { changePassword } from "../utils"
import { useState } from "react"
import styled from "styled-components"


const UpdatePassword = ({ cookies, setCookie, setUser }) => {

    // delete account 

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ newPassword, setNewPassword ] = useState("")

    const handleEnterUpdate = async e => {
        if (e.key === "Enter") {
            // await deleteUser(cookies, username, password, setCookie, setUser)
            const result = await changePassword(cookies, username, password, newPassword, setCookie, setUser)
            if (result) {
                alert("Password changed.")
            } else {
                alert("Incorrect credentials.")
            }
            setPassword("")
            setUsername("")
        }
    }

    const handleClickUpdate = async () => {
        const result = await changePassword(cookies, username, password, newPassword, setCookie, setUser)
        if (result) {
            alert("Password changed.")
        } else {
            alert("Incorrect credentials.")
        }
        setPassword("")
        setUsername("")
    }

    return (
        <>
            <DeleteAccountCont>
                <Input onKeyDown={handleEnterUpdate} placeholder="Username" value={username} onChange={ e => setUsername(e.target.value)}></Input>
                <Input onKeyDown={handleEnterUpdate} placeholder="Old password" value={oldPassword} onChange={ e => setPassword(e.target.value)}></Input>
                <Input onKeyDown={handleEnterUpdate} placeholder="New password" value={password} onChange={ e => setPassword(e.target.value)}></Input>
                <Button onClick={handleClickUpdate}>delete account</Button>
            </DeleteAccountCont>
        </>
    )
}

const DeleteAccountCont = styled.div`
    padding: 1rem;
    outline: solid black 1px;
`
const Input = styled.input`
`
const Button = styled.button`
`

export default UpdatePassword