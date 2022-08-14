import Header from "../components/Header"
import DeleteAccount from "../components/DeleteAccount"

const Settings = ({user, setUser, cookies, setCookie, userDisplay, setUserDisplay}) => {
    return (
        <>
            <Header user={user} setUser={setUser} cookies={cookies} setCookie={setCookie} userDisplay={userDisplay} setUserDisplay={setUserDisplay}/>

            <DeleteAccount cookies={cookies} setCookie={setCookie} setUser={setUser}/>
            
        </>
    )
}

export default Settings