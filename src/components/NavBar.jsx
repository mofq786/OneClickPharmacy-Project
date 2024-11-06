import Menu from "./Menu";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function NavBar()
{
    const [showMenu, setShowMenu] = useState(false);  // State to control menu visibility

    const toggleMenu = () => setShowMenu(!showMenu); 
    return(
        <>
        <nav>
            <button className="nav_button" id="logo">
                <img src="src/assets/images/logo.jpg" alt="" id="logo_image" />
            </button>
            <input type="search" name="search_box" id="search_box" placeholder="Search Medicines Here" />
            <button className="nav_button" id="search_icon">
                <img src="src/assets/images/magnifying-glass-solid.svg" alt="" />
            </button>
            <button className="nav_button" id="cart_icon">
                <img src="src/assets/images/cart-shopping-solid.svg" alt="" />
                <p>Cart</p>
            </button>
            <button className="nav_button" id="profile_icon" onClick={toggleMenu}>
                <img src="src/assets/images/user-solid.svg" alt="" />
                <p>Profile</p>
            </button>
            {showMenu && <Menu />}
        </nav>
        </>
    );
}

export default NavBar;