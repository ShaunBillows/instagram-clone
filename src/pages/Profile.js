import NavBar from "../components/NavBar"

const Profile = ({user, setUser, cookies, setUserDisplay, setCookie, userDisplay}) => {
    return (
        <>
            <NavBar 
                user={user} 
                setUser={setUser} 
                cookies={cookies} 
                setCookie={setCookie}
                userDisplay={userDisplay} 
                setUserDisplay={setUserDisplay}
            />
            <h1>{user} logged in.</h1>
        </>
    )
}

export default Profile