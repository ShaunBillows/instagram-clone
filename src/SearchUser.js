import styled from "styled-components"
import { readUsers } from "./utils"
import { useState } from "react"

const SearchUser = ({}) => {

    const [ userDisplay, setUserDisplay ] = useState([])
    const [ input, setInput ] = useState("")

    // input funcs

    const handleClick = () => {
        getUsers()
        setInput("")
    }
    const handleKeyDown = async e => {
        if (e.target.value === "Enter") {
            getUsers()
            setInput("")
        }
    }

    const handleOnChange = async e => {
        setInput(e.target.value)
        getUsers()

    }

    // search for users

    const getUsers = async () => {
        await readUsers(input, setUserDisplay)
        console.log(userDisplay);
    }

    return (
        <>
            <SearchUserContainer>
                
                <SearchCont>
                    <Input type="text" placeholder="find friends..." onChange={handleOnChange} value={input}></Input>
                    <SearchButton onClick={handleClick} onKeyDown={handleKeyDown}>Submit</SearchButton>
                </SearchCont>
                <CardCont>

                    {userDisplay.map((item, i) => (
                        <h3 key={i}>{item}</h3>
                        ))}

                </CardCont>
            </SearchUserContainer>
        </>
    )
}

const SearchUserContainer = styled.div`
padding: 1rem;
`
const SearchCont = styled.div`
padding: 1rem;
`
const Input = styled.input`
`
const SearchButton = styled.button`
`
const CardCont = styled.div`
`

export default SearchUser