import styled from "styled-components"
import DisplayUserItem from "./DisplayUserItem"
let faker = require('faker');

const DisplayUser = ({ userDisplay, input, images, cookies, user }) => {

    return (
        <>
            <TextCont><h4>Suggestions for you</h4></TextCont>
            {
                input
                ?
                <UserCont>
                    <UserList>
                        {userDisplay.map((x, i) => (
                            <DisplayUserItem key={i} username={x} firstName={faker.name.firstName()} lastName={faker.name.lastName()} status={faker.name.jobType()} image={images[i]} cookies={cookies} user={user} input={input} />
                        ))}
                    </UserList>
                </UserCont>  
                :
                <UserCont>
                    <UserList>
                        {images.map((x, i) => (
                            <DisplayUserItem key={i} username={faker.name.firstName()} firstName={faker.name.firstName()} lastName={faker.name.lastName()} status={faker.name.jobType()} image={images[i]} cookies={cookies} user={user} input={input} />
                        ))}
                    </UserList>
                </UserCont>  
            }
        </>
    )
}

export default DisplayUser

const width = "350px"

const TextCont = styled.div`
    margin: 1rem 0;
    width: ${width};
`
const UserCont = styled.div`
        width: ${width};
        box-shadow: 0px 0px 7px -2px;
        margin-bottom: 2rem;
`
const UserList = styled.ul`
margin-top: 1rem;
`