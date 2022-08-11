import Header from "./Header"
import SearchUser from "./SearchUser"
import { useState, useEffect } from "react"
import { checkToken } from "./utils"
import { logout } from "./utils"
import {useNavigate} from 'react-router-dom'

const Home = ({ user, setUser, cookies, setCookie }) => {

    const [ pics, setPics ] = useState()

    // check token
    const navigate = useNavigate();
    
    // const redir = (user) => {
    //   if (user === "") {
    //     navigate("/") 
    //   }
    // }

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

    return (
        <>
          <button onClick={() => logout( setCookie, setUser )}>logout</button><button onClick={() => console.log(cookies)}>redir</button>
            <Header user={user} setUser={setUser} cookies={cookies} setCookie={setCookie}/>
            <SearchUser user={user} />            
    
        </>
    )
}

export default Home