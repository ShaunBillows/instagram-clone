import styled from "styled-components"

const LoginCorrectForm = ({ user }) => {

    return (
        <SucessCont>
            <InputCont>
                <h2 >Success.</h2>
            </InputCont>
            <InputCont>
                <h2>{user} is logged in.</h2>
            </InputCont>
            <InputCont>
            <Button href="/home">
                Home
            </Button>
            </InputCont>
        </SucessCont>
    )
}

export default LoginCorrectForm

const SucessCont = styled.div`
    position: absolute;
    text-align: center;
    padding: 1rem;
    box-shadow: 0px 0px 7px -2px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
const InputCont = styled.div`
    padding: 0.5rem;
`
const Button = styled.a`
text-decoration: none;
  align-items: center;
  appearance: button;
  background-color: #0276FF;
  border-radius: 8px;
  border-style: none;
  box-shadow: rgba(255, 255, 255, 0.26) 0 1px 2px inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  flex-shrink: 0;
  font-family: "RM Neue",sans-serif;
  font-size: 100%;
  line-height: 1.15;
  margin: 1rem 0;
  padding: 0.5rem 1.5rem;
  text-align: center;
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
