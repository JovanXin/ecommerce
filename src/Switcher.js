import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Categories from "./pages/Categories";

import Header from "./components/Header"

export default function Switcher() {
    return (
        <Switch>
            <Route exact path="/">
                <Header name="Jovan's ecommerce" />
                <Home />
            </Route>
            <Route exact path="/categories">
                <Header name="Categories" />
                <Categories />
            </Route>
        </Switch>
    )
}