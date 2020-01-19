import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <h1><Link to="/">NK</Link></h1>
            <nav>
                <Link to="/" className="header_nav">Work</Link>
                <Link to="/about" className="header_nav">About</Link>
                <Link to="/contact" className="header_nav">Contact</Link>
            </nav>
        </div>
    )
}

export default Header;