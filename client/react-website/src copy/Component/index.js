import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/About" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/Contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/Help" activeStyle>
                        Help
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;