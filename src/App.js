import React from "react";
import Items from "./components/Items";
import Header from "./components/Header";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Items/>
            </div>
        </BrowserRouter>
    )
}