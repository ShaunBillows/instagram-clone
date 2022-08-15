import { useState, useEffect } from "react"
import {useNavigate} from 'react-router-dom'
import DisplayUser from "../components/DisplayUser"
import styled from "styled-components"
import NavBar from "../components/NavBar"
import { getImages } from "../utils/helpers"

const Home = ({ user, setUser, cookies, setCookie }) => {

    const [ images, setImages ] = useState([])
    const [ input, setInput ] = useState("")
    const [ userDisplay, setUserDisplay ] = useState([])
    const navigate = useNavigate();

    // pull in user's pictures
  
    useEffect( () => {
      getImages(setImages)
    }, [] )

    return (
        <Container>
            <NavBar 
              user={user} 
              setUser={setUser} 
              cookies={cookies} 
              setCookie={setCookie} 
              userDisplay={userDisplay} 
              setUserDisplay={setUserDisplay} 
              navigate={navigate}  
              input={input} 
              setInput={setInput}
            />
            <DisplayUser 
              userDisplay={userDisplay} 
              input={input} 
              setInput={setInput} 
              images={images}
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
