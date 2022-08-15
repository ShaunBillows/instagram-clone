import styled from "styled-components"
import { readUsers } from "../utils"
import searchLogo from "./images/searchLogo.png"

const SearchUser = ({userDisplay, setUserDisplay, input, setInput}) => {

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
        <SearchUserContainer>
            <SearchCont>
                <Input type="text" placeholder="Search" onChange={handleOnChange} value={input}></Input>
                <SearchIcon ></SearchIcon>
                <Clear onClick={handleClick} onChange={handleKeyDown}>X</Clear>
            </SearchCont>       
        </SearchUserContainer>
    )
}

export default SearchUser

const SearchUserContainer = styled.div`
`
const SearchCont = styled.div`
    margin: 1.2rem;
    position: relative;
    width: 280px;
    height: 30px;
`
const Input = styled.input`
    width: 100%;
    border-radius: 8px;
    border: none;
    padding: 8px 10px 8px 30px;
    position: absolute;
    font-size: medium;
    background-color: rgba(1,1,1,0.1);
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
    background-image: url(${searchLogo});
    background-size: cover;
    cursor: text;
`
const Clear = styled.div`
    position: absolute;
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
