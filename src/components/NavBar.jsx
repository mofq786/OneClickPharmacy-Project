import Menu from "./Menu";
import React, { useState } from 'react';
function NavBar()
{
    const [showMenu, setShowMenu] = useState(false);  // State to control menu visibility

    const toggleMenu = () => setShowMenu(!showMenu); 
    return(
        <>
        <nav>
            <button className="nav_button" id="logo">
                <img src="src/assets/images/logo3.jpg" alt="" id="logo_image" />
            </button>
            <input type="search" name="search_box" id="search_box" placeholder="search medicines here" />
            <button className="nav_button" id="search_icon">
                <img src="src/assets/images/magnifying-glass-solid.svg" alt="" />
            </button>
            <button className="nav_button" id="cart_icon">
                <img src="src/assets/images/cart-shopping-solid.svg" alt="" />
                Cart
            </button>
            <button className="nav_button" id="profile_icon" onClick={toggleMenu}>
                <img src="src/assets/images/user-solid.svg" alt="" />
                Profile
            </button>
            {showMenu && <Menu />}
        </nav>
        </>
    );
}

export default NavBar;