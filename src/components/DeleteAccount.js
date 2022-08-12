import { deleteUser } from "../utils"
import { useState } from "react"


const DeleteAccount = ({ cookies, setCookie, setUser }) => {

        // delete account 

        const [ username, setUsername ] = useState("")
        const [ password, setPassword ] = useState("")
    
        const handleEnterDelete = async e => {
            if (e.key === "Enter") {
                // await deleteUser(cookies, username, password, setCookie, setUser)
                const result = await deleteUser(cookies, username, password, setCookie, setUser)
                if (result) {
                    alert("Account sucessfully deleted.")
                } else {
                    alert("Incorrect credentials.")
                }
                setPassword("")
                setUsername("")
            }
        }

    const handleClickDelete = async () => {
    console.log(cookies);
    await deleteUser(cookies, username, password, setCookie, setUser)
    setPassword("")
    setUsername("")
}

    return (
        <>
            <div className="delete-container">
                <input onKeyDown={handleEnterDelete} placeholder="username" value={username} onChange={ e => setUsername(e.target.value)}></input>
                <input onKeyDown={handleEnterDelete} placeholder="password" value={password} onChange={ e => setPassword(e.target.value)}></input>
                <button onClick={handleClickDelete}>delete account</button>
                {/* <h1>HI</h1> */}
            </div>
        </>
    )
}

export default DeleteAccount