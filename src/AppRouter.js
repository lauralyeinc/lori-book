import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import LandingPage from "./components/LandingPage.js"; 

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={LandingPage} />
        </BrowserRouter>
    )
}