import { Link } from "react-router-dom";
import "./Navbar.css";

import Logo from "../../assets/appLogo.png"

import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";



const Navbar = () => {
    const [menuClick, setMenuClick] = useState(false);

    const menuHandleClick = () => {
        setMenuClick(!menuClick)
    }
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className={menuClick ? "navLinks active" : "navLinks"}>
                <Link to="/" >Home</Link>
                <Link to="/about" >About</Link>
                <Link to="/services" >Services</Link>
                <Link to="/contact" >Contact</Link>
            </div>
            <div className="hamburger" onClick={menuHandleClick}>
                {
                    menuClick ? (<FaTimes className="wrong" />) :
                        (<FaBars style={{ color: "#366e9f" }} size={20} />)
                }
            </div>
        </nav>
    )
}

export default Navbar