import React from "react";
import "./navbar.css";

function Navbar() {
    return (
        <div className = "navbar">
            <div className = "navbar_items">
                <a className = "nav_link" href="#about">About</a>
                <a href="#work">Work</a>
                <a href="mailto: subash.nehru123@gmail.com">Contact me</a>
            </div>
        </div>
    );
}

export default Navbar;