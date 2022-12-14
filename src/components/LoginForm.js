import styled from "styled-components"
import logo from "./images/logo.png"

const LoginForm = ({ handleSwitchLogin, setPassword, setUsername, username,password, handleEnterLogin, handleClickLogin }) => {


    return (
        <Container>                               
            <InputCont>
                    <Img src={logo}/>
            </InputCont>
            <InputCont>
                <Input type="text" value={username} onKeyDown={handleEnterLogin} onChange={(event) => setUsername(event.target.value)} placeholder="Username"></Input>
            </InputCont>
            <InputCont>
                <Input type="text" value={password} onKeyDown={handleEnterLogin} onChange={(event) => setPassword(event.target.value)} placeholder="Password"></Input>
            </InputCont>
            <InputCont>
                <Button onClick={handleClickLogin}>Login</Button>
            </InputCont>
            <SwitchLoginCont>
            {/* <SwitchLoginButton onClick={handleSwitchLogin}>
                Login
            </SwitchLoginButton> */}
            <p>Don't have an account? <A onClick={handleSwitchLogin}>Sign up</A></p>
            </SwitchLoginCont>    
        </Container>
    )
}

export default LoginForm

const Container = styled.div`
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
