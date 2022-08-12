import header from "../components/Header"
import { Navigate } from "react-router-dom"

const Profile = ({user, setUser, cookies, setCookieuserDisplay, setUserDisplay}) => {
    return (
        <>
            <Header user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} userDisplay={userDisplay} setUserDisplay={setUserDisplay}/>
            <h1>{user} logged in.</h1>
        </>
    )
}

export default Profile