import React from "react";

import { Container,Row,Col} from 'react-bootstrap'
// import moment from "moment";
// import momentJalili from "moment-jalaali";
// import fa from "moment/src/locale/fa";
import { Nav} from 'react-bootstrap'
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink,} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import logo from './../../assets/img/avcell-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faHome, faHouseUser} from '@fortawesome/free-solid-svg-icons'
interface PropsForm {
  // onLogin: (login: LoginEntity) => void;
}
export  const Header = () => {
// const Header = (props:any) => {
 
    // momentJalili.locale("fa", fa);
    // momentJalili.loadPersian({ dialect: 'persian-modern' });
    return (

        // < !--========== HEADER ==========-->
        <header >
            {/* <!-- Navbar --> */}
            <Navbar collapseOnSelect expand="lg" className="custom-nav" >
                <Navbar.Brand href="#home"><img src={logo} className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav >
                      
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            {/* <!-- Navbar --> */}
        </header>
            )

}

// export default Header;
