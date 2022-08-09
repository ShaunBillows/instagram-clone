import { useState } from "react"
import { signUp } from "../utils"

const SignUpOrLogin = ({setUser}) => {
    const [ username, setUsername ] = useState()
    const [ password, setPassword ] = useState()
    const [ email, setEmail ] = useState()

    const handleSubmit = async (event) => {
        // prevent form clearing on submit
        event.preventDefault()
        await signUp(username, password, email, setUser)
        setEmail("")
        setPassword("")
        setUsername("")
    }

    return (
        <form >
            <label> Username
                <input type="text" onChange={ (event) => setUsername(event.target.value)}/>
            </label>
            <br></br>
            <label> Password
                <input type="text" onChange={ (event) => setPassword(event.target.value)}/>
            </label>
            <br></br>
            <label> Email
                <input type="email" onChange={ (event) => setEmail(event.target.value)}/>
            </label>
            <br></br>
            <button type="submit" onClick={handleSubmit}>login or sign up</button>
        </form>
    )
}

export default SignUpOrLogin