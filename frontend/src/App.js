import React from "react";
import "./App.css";
import { BrowserRouter, Link, Route } from "react-router-dom";

import Dashboard from "./screens/Dashboard";
import ProductDetail from "./screens/ProductDetail";
import CartScreen from "./screens/cartScreen";
import LoginScreen from "./screens/LoginScreen";
import { useSelector } from "react-redux";
import RegistrationScreen from "./screens/RegistrationScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    return ( <
        BrowserRouter >
        <
        div className = "grid-container" >
        <
        header className = "header" >
        <
        div className = "brand" >
        <
        Link to = "/" > TECHIE Test1 < /Link> <
        /div> <
        div className = "header-links" >
        <
        Link to = "/cart/:id" > Cart < /Link> {
            userInfo ? ( <
                Link to = "/profile" > { userInfo.name } < /Link>
            ) : ( <
                Link to = "/login" > Login < /Link>
            )
        } {
            userInfo && userInfo.isAdmin && ( <
                div className = "dropdown" >
                <
                a href = "#" > Admin < /a> <
                ul className = "dropdown-content" >
                <
                li >
                <
                Link to = "/products" > Products < /Link> <
                /li> <
                /ul> <
                /div>
            )
        } <
        /div> <
        /header>

        <
        main className = "main" >
        <
        div className = "content" >
        <
        Route path = "/product/:id"
        component = { ProductDetail }
        /> <
        Route path = "/"
        exact = { true }
        component = { Dashboard }
        /> <
        Route path = "/cart/:id?"
        component = { CartScreen }
        /> <
        Route path = "/login"
        component = { LoginScreen }
        /> <
        Route path = "/register"
        component = { RegistrationScreen }
        /> <
        Route path = "/products"
        component = { ProductsScreen }
        /> <
        Route path = "/profile"
        component = { ProfileScreen }
        /> <
        /div> <
        /main> <
        footer className = "footer" > All right reserved. < /footer> <
        /div> <
        /BrowserRouter>
    );
}

export default App;