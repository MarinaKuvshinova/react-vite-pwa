import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <ul className="nav">
            <li>
                <NavLink
                    className={({ isActive }) => {
                        return isActive ? "active" : "";
                    }}
                    to="/">
                    Image
                </NavLink>
            </li>
            <li>
                <NavLink to="/video1">Video1</NavLink>
            </li>
            <li>
                <NavLink to="/video2">Video2</NavLink>
            </li>
        </ul>
    );
}
