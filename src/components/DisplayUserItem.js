import { useState, useEffect } from "react"
import styled from "styled-components"
import "./DisplayUserItem"
import { addFriend } from "../utils";


const DisplayUserItem = ({ username, firstName, lastName, status, image, cookies, user, input }) => {

    const [ isFriend, setIsFriend ] = useState(false)
    // const [ friends, setFriends ] = useState([])

    const handleClick = async () => {
        await setIsFriend( status => !status )
        await add(username, cookies)
    }

    const add = async (friend, cookies) => {
        await addFriend(friend, cookies)
        // refresh()
        // const oldFriends = friends
        // setFriends( [...friends, friend ])
        // if (friends.some( x => x === friend )) {
        //     setFriends( oldFriends.filter( x => x !== friend ) )
        // } else {
        //     setFriends( oldFriends.push(friend) )
        // }
    }

    // const refresh = () => {
    //     window.location.reload();
    // }

    useEffect( () => {
        findFriends()
            // eslint-disable-next-line
    }, [])
    useEffect( () => {
        findFriends()
            // eslint-disable-next-line
    }, [input])

    const findFriends = () => {
        if (user) {
            if (user.friends.some( x => x.toLowerCase() === username.toLowerCase() )) {
                setIsFriend(true)
            }
        }
    }

    // useEffect( () => {
    //     if (friends.some( x => x.toLowerCase() === username.toLowerCase() )) {
    //         setIsFriend(true)
    //     }
    //         // eslint-disable-next-line
    // }, [input])

    // useEffect( () => {
    //     getFriends()
    //         // eslint-disable-next-line
    // }, [user])

    // useEffect( () => {
    //     getFriends()
    //         // eslint-disable-next-line
    // }, [])

    // const getFriends = () => {
    //     if (user) {
    //         setFriends(user.friends)
    //     }
    // }

    return (

        <Cont>

            <UserCont>
                <ImgCont>
                    <Img image={image}></Img>
                </ImgCont>
                <InfoCont>
                    <UserInfo><Title>{username}</Title></UserInfo>
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