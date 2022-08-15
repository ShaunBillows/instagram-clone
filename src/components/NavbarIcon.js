import styled from "styled-components"

const NavbarIcon = ({ image }) => {

    const size = "27px"
    // Note: when using require with props; require( "" + prop) in child  or require(prop) in parent

    return (
       <NavIconCont size={size}>
            <Img size={size} src={image} />
       </NavIconCont>
    )
}

export default NavbarIcon

const NavIconCont = styled.div`
height: ${(props) => props.size};
width: ${(props) => props.size};
`

const Img = styled.img`
height: ${(props) => props.size};
width: ${(props) => props.size};
cursor: pointer;
`
