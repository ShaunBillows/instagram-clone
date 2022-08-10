import styled from "styled-components";

const Header = ({ user, setUser, input, setInput }) => {


    return (
        <>
        <HeaderCont>
            <h1>Welcome</h1>
            <h2>{user} logged in.</h2>
        </HeaderCont>           
        </>
    )
};

const HeaderCont = styled.div` 
height: 200px;
width: 100vw;
background-color: red;
`

export default Header;