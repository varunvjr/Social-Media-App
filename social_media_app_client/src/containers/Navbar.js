import React from 'react'
import {Link} from 'react-router-dom'
import Logo from "../images/warbler-logo.png"
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand">
            <div className="container-fluid">
            <div className="navbar-header">
            <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Warbler-Home"/>
            </Link>
            </div> 
            
            <ul className="nav navbar-nav navbar-right">
                <li>
                    <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                    <Link to="/signin">Sign In</Link>
                </li>
            </ul>
            </div> 
            
        </nav>
    )
}

export default Navbar
