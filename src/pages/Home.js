import Header from "../components/Header"
import SearchUser from "../components/SearchUser"
import { useState, useEffect } from "react"
import { checkToken, logout } from "../utils"
import {useNavigate} from 'react-router-dom'
import DisplayUser from "../components/DisplayUser"
import styled from "styled-components"

const Home = ({ user, setUser, cookies, setCookie }) => {

    const [ images, setImages ] = useState([])
    const [ input, setInput ] = useState("")
    // check token
    const navigate = useNavigate();
    
    const redir = (user) => {
      if (user === "") {
        navigate("/") 
      }
    }

    // useEffect( () =>  {
    //   redir(user)
    // }, [])
  
    // pics 

    const getImages = async () => {
      const response = await fetch("https://picsum.photos/v2/list")
      const data = await response.json()
      setImages( data.map( x => x.download_url) )
    }
  
    useEffect( () => {
      getImages()
    }, [] )

    // user display info for SearchUser and DisplayUser
    const [ userDisplay, setUserDisplay ] = useState([])

    // user display info for SearchUser and DisplayUser
    const [ fakeDisplay, setFakeDisplay ] = useState([])

    
    useEffect( () => {

    }, [])

    return (
        <Container>
            <Header user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} userDisplay={userDisplay} setUserDisplay={setUserDisplay} navigate={navigate}  input={input} setInput={setInput}/>
            <DisplayUser userDisplay={userDisplay} input={input} setInput={setInput} fakeDisplay={fakeDisplay} images={images}/>
        </Container>
    )
}

export default Home

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`