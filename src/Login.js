import styled from "styled-components"
import { useState, useEffect } from "react"
import Modal from "react-modal"
import { createUser, login } from "./utils"
Modal.setAppElement('#root');

const Login = ({ setUser, user }) => {

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

    // modal funcs
    const showErrMsg = (err) => {
        setErrMsg(err)
        openModal()
        console.log(err)
    }
  
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(e) {
        e.preventDefault()
        setIsOpen(false);
    }

    // create account funcs


    const handleKeyDown = async event => {
        if (event.key === "Enter") {
            const status = await createUser(username, email, password, setUser)
            if (status != 200) {
                setErrMsg("Incorrect credentials.")
                openModal()
            }
        }
      };
    
    const handleClickSearch = async () => {
        const status = await createUser(username, email, password, setUser)
        if (status != 200) {
            setErrMsg("Incorrect credentials.")
            openModal()
        }
    }

    // login funcs

    const handleEnterLogin = async event => {
        if (event.key === "Enter") {
            const status = await login(username, password, setUser)
            if (status != 200) {
                setErrMsg("Incorrect credentials.")
                openModal()
            }
        }
      };
    
    const handleClickLogin = async () => {
        const status = await login(username, password, setUser)
        if (status != 200) {
            setErrMsg("Incorrect credentials.")
            openModal()
        }
    }

    return (
        <LoginFormCont>
        <LoginForm user={user}>
            {
                !user
                ?
                <>
                    {
                        createAccount
                        ?
                        <>
                        <SwitchLoginCont>
                            {
                                createAccount
                                ?
                                <SwitchLoginButton onClick={handleSwitchLogin}>
                                    Login
                                </SwitchLoginButton>
                                :
                                <SwitchLoginButton onClick={handleSwitchLogin}>
                                    Create Account
                                </SwitchLoginButton>
                            }
                        </SwitchLoginCont>  
                        <InputCont>
                            <Title>Create Account</Title>
                        </InputCont>
                        <InputCont>
                            <Input type="text" value={username} onKeyDown={handleKeyDown} onChange={(event) => setUsername(event.target.value)} placeholder="username"></Input>
                        </InputCont>
                        <InputCont>
                            <Input type="text" value={password} onKeyDown={handleKeyDown} onChange={(event) => setPassword(event.target.value)} placeholder="password"></Input>
                        </InputCont>
                        <InputCont>
                            <Input type="text" value={email} onKeyDown={handleKeyDown} onChange={(event) => setEmail(event.target.value)} placeholder="email"></Input>
                        </InputCont>
                        <InputCont>
                            <Button onClick={handleClickSearch}>Create Account</Button>
                        </InputCont>                        
                        </>
                        :
                        <>                  
                        <SwitchLoginCont>
                            {
                                createAccount
                                ?
                                <SwitchLoginButton onClick={handleSwitchLogin}>
                                    Login
                                </SwitchLoginButton>
                                :
                                <SwitchLoginButton onClick={handleSwitchLogin}>
                                    Create Account
                                </SwitchLoginButton>
                            }
                        </SwitchLoginCont>                     
                        <InputCont>
                            <Title>Login</Title>
                        </InputCont>
                        <InputCont>
                            <Input type="text" value={username} onKeyDown={handleEnterLogin} onChange={(event) => setUsername(event.target.value)} placeholder="username"></Input>
                        </InputCont>
                        <InputCont>
                            <Input type="text" value={password} onKeyDown={handleEnterLogin} onChange={(event) => setPassword(event.target.value)} placeholder="password"></Input>
                        </InputCont>
                        <InputCont>
                            <Button onClick={handleClickLogin}>Login</Button>
                        </InputCont>
                        </>
                    }
                </>
                :
                <SucessCont>
                    <InputCont>
                        <h2>Success.</h2>
                        <h2>{user} logged in.</h2>
                    </InputCont>
                    <InputCont>
                        <Link href="/" >Home</Link>
                    </InputCont>
                </SucessCont>
            }

        </LoginForm>

        <ModalCont>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <CloseModal onClick={closeModal}>close</CloseModal>
                <ErrorMessage>{errMsg}</ErrorMessage>
            </Modal>
        </ModalCont>
        </LoginFormCont> 
    )
}

export default Login

// styles

const LoginFormCont = styled.div`
    height: 90vh;
    display: flex;
    align-items: center;
`

const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    background-color: ${props => props.user ? "green": "red"};
    margin-top: 4rem;
    
`

// Login

const InputCont = styled.div`
    padding: 0.5rem;
`
const Title =  styled.h1`
    padding: 1rem 0;
`
const Input = styled.input`
`
const Button = styled.button`
    padding: 0.1rem;
    margin: 1rem 0;
`
const SwitchLoginCont = styled.div`
    align-self: end;
`
const SwitchLoginButton = styled.button`
    padding: 0.1rem;
    margin: 0.5rem;
`

// Err Msg

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
const ModalCont = styled.div`
    position: relative;
`

const CloseModal = styled.button`
    position: absolute;
    right: 1rem;
`
const ErrorMessage = styled.h2`
    color: red;
    padding: 2rem;
`

// Success
const SucessCont = styled.div`
    text-align: center;
    padding: 1rem;
`

const Link = styled.a`
    text-decoration: none;
    color: black;
    cursor: pointer;
`