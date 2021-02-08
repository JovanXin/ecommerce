import React from "react";
import Nav from "./Nav";

export default function Header(props) {
    return(
        <div>
            <Nav />
            <h1>{props.name}</h1>
        </div>
    )
}