import Header from "./Header"
import SearchUser from "./SearchUser"
import { useState, useEffect } from "react"

const Home = ({ user, setUser }) => {

    const [ pics, setPics ] = useState()
  
    const getPics = async () => {
      const response = await fetch("https://picsum.photos/v2/list")
      const data = await response.json()
      setPics( data )
    }
  
    useEffect( () => {
      getPics()
    }, [] )

    return (
        <>
            <Header user={user} setUser={setUser}/>
            <SearchUser user={user} />            
        </>
    )
}

export default Home