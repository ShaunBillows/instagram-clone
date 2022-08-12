import header from "../components/Header"
import { Navigate } from "react-router-dom"
import DeleteAccount from "../components/DeleteAccount"

const Settings = ({user, setUser, cookies, setCookieuserDisplay, setUserDisplay, username, password, setCookie}) => {
    return (
        <>
            {/* <Header user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} userDisplay={userDisplay} setUserDisplay={setUserDisplay}/>
            <h1>{user} logged in.</h1> */}

            <DeleteAccount cookies={cookies} username={username} password={password} setCookie={setCookie} setUser={setUser}/>
            
        </>
    )
}

export default Settings