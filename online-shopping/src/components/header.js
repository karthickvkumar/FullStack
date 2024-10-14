import React from "react";
import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div className="header">
            <NavLink to="/main" className={({isActive}) => isActive ? "link highlight" : "link"}>Home Page</NavLink>
            <NavLink to="/info" className={({isActive}) => isActive ? "link highlight" : "link"}>Settings Page</NavLink>
            <NavLink to="/reach-us" className={({isActive}) => isActive ? "link highlight" : "link"}>Contact Page</NavLink>
        </div>
    )
}

export default HeaderComponent;