import styled from "styled-components"
import DisplayUserItem from "./DisplayUserItem"

const DisplayUser = ({ userDisplay, input, setInput, fakeDisplay, images }) => {


    return (
        <Body>
            <TextCont><h4>Suggestions for you </h4></TextCont>
            {
                input
                ?
                <UserCont>
                    <UserList>
                        {userDisplay.map((user, i) => (
                            <DisplayUserItem key={i} user={user} firstName={"faker"} lastName={"name"} status={"fake info"} image={images[i]}/>
                        ))}
                    </UserList>
                </UserCont>  
                :
                <UserCont>
                    {/* <UserList>
                        {fakeDisplay.map((user, i) => (
                            <DisplayUser key={i} user={user}/>
                            ))}
                    </UserList> */}
                </UserCont>  
            }
        </Body>
    )
}

export default DisplayUser

const width = "350px"

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TextCont = styled.div`
    margin: 1rem 0;
    width: ${width};
`
const UserCont = styled.div`
        width: ${width};
        box-shadow: 0px 0px 7px -2px;
`
const UserList = styled.ul`
margin-top: 1rem;
`