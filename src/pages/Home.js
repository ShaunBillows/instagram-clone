import Header from "../components/Header"
import SearchUser from "../components/SearchUser"
import { useState, useEffect } from "react"
import { checkToken, logout } from "../utils"
import {useNavigate} from 'react-router-dom'
import DisplayUser from "../components/DisplayUser"

const Home = ({ user, setUser, cookies, setCookie }) => {

    const [ pics, setPics ] = useState()

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

    const getPics = async () => {
      const response = await fetch("https://picsum.photos/v2/list")
      const data = await response.json()
      setPics( data )
    }
  
    // useEffect( () => {
    //   getPics()
    // }, [] )

    // user display info for SearchUser and DisplayUser
    const [ userDisplay, setUserDisplay ] = useState([])

    return (
        <>
          {/* <button onClick={() => logout( setCookie, setUser )}>logout</button>
          <button onClick={() => console.log(cookies)}>redir</button> */}
            <Header user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} userDisplay={userDisplay} setUserDisplay={setUserDisplay} navigate={navigate}/>
            <DisplayUser userDisplay={userDisplay}/>
    
        </>
    )
}

export default Home