import React from "react";

import Nav from "./components/Nav"
import Switcher from "./Switcher";

export default function App() { //What is the purpose of App if I only import switcher?
    return (
        <div className="app">
            <Nav />
            <Switcher />
        </div>
    )
}

