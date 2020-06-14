import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.js"; 
import AboutPage from "./components/AboutPage.js"; 

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
            <Route path ="/about" component={AboutPage} />
        </BrowserRouter>
    )
}