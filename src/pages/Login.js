import styled from "styled-components"
import { useState, useEffect } from "react"
import Modal from "react-modal"
import { createUser, login } from "../utils"
import LoginForm from "../components/LoginForm"
import LoginCreateForm from "../components/LoginCreateForm"
import LoginIncorrectModal from "../components/LoginIncorrectModal"
import LoginCorrectModal from "../components/LoginCorrectModal"
Modal.setAppElement('#root');

const Login = ({ setUser, user, setCookie }) => {

    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ errMsg, setErrMsg ] = useState("")
    const [ createAccount, setCreateAccount ] = useState(false)
    const [ test, setTest ] = useState("")
    const [modalIsOpen, setIsOpen] = useState(false);

    // switch login/create account funcs

    const handleSwitchLogin = () => {
        setCreateAccount( () => !createAccount )
        setEmail("")
        setPassword("")
        setUsername("")
    }

    // // modal funcs
  
    const openModal = () => {
      setIsOpen(true);
    }

    // create account funcs

    const handleEnterCreate = async event => {
        if (event.key === "Enter") {
            const status = await createUser(username, email, password, setUser, setCookie)
            if (status != 200) {
                setErrMsg("Incorrect credentials.")
                openModal()
            }
        setEmail("")
        setPassword("")
        setUsername("")
        }
      };
    
    const handleClickCreate = async () => {
        const status = await createUser(username, email, password, setUser, setCookie)
        if (status != 200) {
            setErrMsg("Incorrect credentials.")
            openModal()
        }
        setEmail("")
        setPassword("")
        setUsername("")
    }

    // login funcs

    const handleEnterLogin = async event => {
        if (event.key === "Enter") {
            const status = await login(username, password, setUser, setCookie)
            if (status != 200) {
                setErrMsg("Incorrect credentials.")
                openModal()
            }
            setEmail("")
            setPassword("")
            setUsername("")
        }
      };
    
    const handleClickLogin = async () => {
        const status = await login(username, password, setUser, setCookie)
        if (status != 200) {
            setErrMsg("Incorrect credentials.")
            openModal()
        }
        setEmail("")
        setPassword("")
        setUsername("")
    }

    return (
        <LoginFormCont>
        {/* <LoginForm_ user={user}> */}
            {
                !user
                &&
                <>
                    {
                        createAccount
                        ?
                        <LoginCreateForm
                        handleSwitchLogin={handleSwitchLogin}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setUsername={setUsername}
                        handleEnterCreate={handleEnterCreate}
                        handleClickCreate={handleClickCreate}
                        username={username}
                        email={email}
                        password={password}
                        />
                        :
                        <LoginForm
                        handleSwitchLogin={handleSwitchLogin}
                        setPassword={setPassword}
                        setUsername={setUsername}
                        handleEnterLogin={handleEnterLogin}
                        handleClickLogin={handleClickLogin}
                        username={username}
                        password={password}
                        />
                    }
                </>
            }
        {/* </LoginForm_> */}

        {
            user
            &&
            <LoginCorrectModal
            user={user}
            />
        }

        <LoginIncorrectModal
            openModal={openModal}
            setIsOpen={setIsOpen}
            modalIsOpen={modalIsOpen}
        />

        </LoginFormCont> 
    )
}

export default Login

// styles

const LoginFormCont = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
`

// const successColor = "green"

// const LoginForm_ = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     /* width: 320px; */
//     background-color: ${props => props.user ? successColor: "white"};
//     margin-top: 4rem;
//     box-shadow: 0px 0px 7px -2px;
// `
