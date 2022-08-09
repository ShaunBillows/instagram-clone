import styled from "styled-components";

const Header = ({ user, setUser, input, setInput }) => {


    const Header = styled.div` 
        height: 200px;
        width: 100vw;
        background-color: red;
  `

    return (
        <Header>
            {user}
        </Header>
    )
};

export default Header;