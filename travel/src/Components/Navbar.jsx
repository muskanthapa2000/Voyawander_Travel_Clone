import { Box, Heading } from "@chakra-ui/react";
import "../Styles/Navbar.modulo.css";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [close, setClose] = useState(true);
  const [visible, setVisible] = useState("");
  const [height, setHight] = useState("");

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
            <a href='/'>Home</a>
          </li>
          {/* <li>
            <a href='#about'>About Us</a>
          </li> */}
          <li>
            <a href='/hotels'>Hotels</a>
          </li>
          <li>
            <a href='/holidays'>Holidays</a>
          </li>
          <li>
            <a href='/about'>About Us</a>
          </li>
          <li>
            <a href='/login'>Login</a>
          </li>
          <li>
            <a href='/register'>Register</a>
          </li>
        </ul>
        <div className='burger' onClick={hamburger}>
          {close ? <GiHamburgerMenu /> : <RxCross2 />}
        </div>
      </nav>
    </Box>
  );
};

export default Navbar;