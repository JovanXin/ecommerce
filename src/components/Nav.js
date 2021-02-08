import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <div>
            <ul>
                <li><Link to="/categories">Go to categories</Link></li>
                <li><Link to="/">Go home</Link></li>
            </ul>
        </div>
    )
}