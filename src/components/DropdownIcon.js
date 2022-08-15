import "./DropdownIcon.css"
import styled from "styled-components"
import { logout } from "../utils"
import { useNavigate } from "react-router-dom"
import icon from "./images/profile.png"

const DropdownIcon = ({ setCookie, setUser }) => {

    const navigate = useNavigate();
    return ( 
      <NavIconCont>
        <div className="hover-id">
          <DropdownArrow size={size}></DropdownArrow>
          <div className="dropdown-menu">
          <ul>
          <li onClick={() => navigate("/profile")}>Profile</li>
            <li>Saved</li>
            <li onClick={() => navigate("/settings")}>Settings</li>
            <li>Switch Accounts</li>
            <li  onClick={() => logout( setCookie, setUser )}>Log out</li>
          </ul>
        </div>
      </div>
    </NavIconCont>
    )
}

export default DropdownIcon

const size = "27px"

const NavIconCont = styled.div`
  height: ${size};
  width: ${size};
  background: #fff;
  position: relative;
  cursor: pointer;
  background-image: url(${icon}); 
  background-size: cover;
`
const DropdownArrow = styled.div`
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #333;
    position: relative;
    top: 45px;
    left: 350px;
    background-size: cover;
    width: 27px;
    height: 27px;
`