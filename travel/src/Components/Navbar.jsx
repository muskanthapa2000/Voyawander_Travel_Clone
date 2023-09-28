import { Box, Heading } from "@chakra-ui/react";
import "../Styles/Navbar.modulo.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useContext } from "react";
import { AuthContent } from "./ContextApi";
import {Link} from 'react-router-dom'

const Navbar = () => {
  const [close, setClose] = useState(false);
  const [visible, setVisible] = useState("");
  const [height, setHight] = useState("");
  const {namelogin} = useContext(AuthContent);


  const hamburger = () => {
    if (close) {
      setHight("h-nav-resp");
      setVisible("v-class-resp");
    } else {
      setHight("");
      setVisible("");
    }
    setClose(!close);
  };
  return (
    <Box>
      <nav className={height} style={{backgroundColor: "#00adfd"}}>
        <Heading id='logo'>Voyawander</Heading>
        <ul className={visible}>
          <li>
            <Link to = "/">Home</Link>
          </li>
          {/* <li>
            <a href='#about'>About Us</a>
          </li> */}
              <li>
                <Link to = "/holidays">Holidays</Link>
            
          </li>
          <li>
          <Link to = "/hotels">Hotels</Link>
          </li>
      
          <li>
            <Link to = "/about">About Us</Link>
          </li>

          
          <li>
  <Link to="/login">
    {namelogin === "" ? "Login" : namelogin}
  </Link>
</li>

          <li>
          <Link to = "/register">Register</Link>
          </li>
        </ul>
        {/* <div className='burger' onClick={hamburger}>
          {close ? <GiHamburgerMenu /> : <RxCross2 />}
        </div> */}
      </nav>
    </Box>
  );
};

export default Navbar;