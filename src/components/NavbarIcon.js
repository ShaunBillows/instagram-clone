import styled from "styled-components"
import { useState } from "react"
import Home from "../pages/Home"

const NavbarIcon = ({image}) => {

    const size = "27px"
    // note to self: when using require with props => use require( "" + prop) or require(prop) in the parent instead

    return (
       <NavIconCont size={size}>
            <Img size={size} src={image} />
       </NavIconCont>
    )
}

const NavIconCont = styled.div`
height: ${(props) => props.size};
width: ${(props) => props.size};
`

const Img = styled.img`
height: ${(props) => props.size};
width: ${(props) => props.size};
cursor: pointer;
`

export default NavbarIcon

