import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="header">
            <NavLink to="/main" className="link">Home Page</NavLink>
            <NavLink to="/info" className="link">Settings Page</NavLink>
            <NavLink to="/reach-us" className="link">Contact Page</NavLink>
        </div>
    )
}

export default HeaderComponent;