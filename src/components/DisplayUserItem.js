import { useState } from "react"
import styled from "styled-components"
import "./DisplayUserItem"

const DisplayUserItem = ({ user, firstName, lastName, status, image }) => {

    const [ isFriend, setIsFriend ] = useState(false)

    const handleClick = () => {
        setIsFriend( status => !status )
    }

    return (

        <Cont>

            <UserCont>
                <ImgCont>
                    <Img image={image}></Img>
                </ImgCont>
                <InfoCont>
                    <UserInfo><Title>{user}</Title></UserInfo>
                    <UserInfo><Text>{firstName} {lastName}</Text></UserInfo>
                    <UserInfo><Text>{status}</Text></UserInfo>
                </InfoCont>
            </UserCont>
            <ButtonCont>
                <Button onClick={handleClick} isFriend={isFriend} >{isFriend ? "Unfollow" : "Follow"}</Button>
            </ButtonCont>


        </Cont>
    )
}
export default DisplayUserItem

const Cont  = styled.div`
    width: 100%;
    padding: 0.4rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const ImgCont = styled.div`
    display: flex;
    align-items: center;
    margin: 0 0.6rem;
`
const Img = styled.div`
    background-image: url(${ (props) => props.image });
    background-size: cover;
    height: 40px;
    width: 40px;
    border-radius: 50%;
`
const UserCont  = styled.div`
    display: flex;
`
const InfoCont  = styled.div`
    display: flex;
    flex-direction: column;
`
const  UserInfo = styled.div`
`
const  Title = styled.h5`
`
const  Text = styled.h5`
color: rgba(1,1,1,0.85);
font-weight: 400;
`
const ButtonCont  = styled.div`
margin-right: 0.6rem;
`
const Button = styled.button`
  align-items: center;
  background-color: ${ props => props.isFriend ? "rgba(50.2,50.2,50.2,0.48)" : "#0276FF"};
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
  margin: 0;
  width: 95px;
  height: 33px;
  display: flex;
  justify-content: center;
  text-transform: none;
  transition: color .13s ease-in-out,background .13s ease-in-out,opacity .13s ease-in-out,box-shadow .13s ease-in-out;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  font-weight: bolder;
  &:hover {
    background-color: ${ props => props.isFriend ? "rgba(50.2,50.2,50.2,0.42)" : "#1C84FF"};
    }
    &:active{
    background-color: ${ props => props.isFriend ? "rgba(50.2,50.2,50.2,0.42)" : "#006AE8"};;
    }
`