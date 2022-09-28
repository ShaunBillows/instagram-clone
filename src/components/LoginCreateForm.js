import styled from "styled-components"
import logo from "./images/logo.png"

const LoginCreateForm = ({ handleSwitchLogin, setEmail, setPassword, setUsername, username, email, password, handleEnterCreate, handleClickCreate }) => {

    return (
        <LoginFormCont> 
            <InputCont>
                    <Img src={logo}/>
            </InputCont>
            <InputCont>
                <Input type="text" value={username} onKeyDown={handleEnterCreate} onChange={(event) => setUsername(event.target.value)} placeholder="username"></Input>
            </InputCont>
            <InputCont>
                <Input type="text" value={password} onKeyDown={handleEnterCreate} onChange={(event) => setPassword(event.target.value)} placeholder="password"></Input>
            </InputCont>
            <InputCont>
                <Input type="text" value={email} onKeyDown={handleEnterCreate} onChange={(event) => setEmail(event.target.value)} placeholder="email"></Input>
            </InputCont>   
            <InputCont>
                <Button onClick={handleClickCreate}>Create Account</Button>
            </InputCont>
            <SwitchLoginCont>
            <p>Have an account? <A onClick={handleSwitchLogin}>Log in</A></p>
            </SwitchLoginCont>             
        </LoginFormCont>
    )
}

export default LoginCreateForm

const LoginFormCont = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding-top: 2rem;
    box-shadow: 0px 0px 7px -2px;
`

const Img = styled.img`
    height: 70px;
    background-image: url(${logo});
    background-size: cover;
    margin-bottom: 1rem;

`
const InputCont = styled.div`
    padding: 0.5rem ;
    width: 320px;
    display: flex;
    justify-content: center;
`
const Input = styled.input`
    border-radius: 3px;
    background-color: rgba(1,1,1,0.05);
    border: none;
    box-shadow: 0px 0px 7px -2px;
    width: 280px;
    height: 35px;
    padding-left: 1rem;

`
const Button = styled.button`
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 280px;
    background-color: #0276FF;
    border-radius: 8px;
    border-style: none;
    box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
    box-sizing: border-box;
    color: #fff;
    cursor: pointer;
    font-size: 100%;
    line-height: 1.15;
    padding: 10px 21px;
    text-transform: none;
    transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    font-weight: bolder;
    &:hover {
        background-color: #1C84FF;
        }
        &:active{
        background-color: #006AE8;
        }
`
const SwitchLoginCont = styled.div`
    text-align: center;
    margin-bottom: 2rem;
`
const A = styled.a`
    color: #0276FF;
    font-weight: bolder;
    cursor: pointer;
`
