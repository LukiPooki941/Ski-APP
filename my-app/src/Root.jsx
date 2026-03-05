import React from "react";
import { Outlet, NavLink, useNavigate, Navigate } from "react-router-dom";

export default function Root(){


    const navigate = useNavigate();
    return (
        <div id="container2">
        <div id="Header" >
            <header>
                <img src="/image_and_texts/WhiteFishLogo.webp" alt="logo"/>
            <h2>Welcome To Black Diamond Mountain Page For Whitefish</h2>
            <nav>
                <ul>
                    <NavLink to="/"><li>Welcome Page</li></NavLink>
                    <NavLink to="HaskillSlide"><li>Haskill Slide</li></NavLink>
                    <NavLink to="NBC"><li>North Bowl Chute</li></NavLink>
                    <NavLink to="Bighorn"><li>Bighorn</li></NavLink>
                    <NavLink to="PictureChutes"><li>Picture Chutes</li></NavLink>
                    <NavLink to="EastRim"><li>East Rim Chutes</li></NavLink>
                </ul>
            </nav>
            </header>
        </div>
        <div id="main">
            <Outlet />

        </div>
        <div id="Footer">
            <footer>&copy;Black Diamond Mountain</footer>
        </div>
        </div>
    )
}