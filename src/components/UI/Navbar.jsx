import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
        </ul>
    );
}
