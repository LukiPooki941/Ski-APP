import React from "react";
import { Outlet, NavLink, useNavigate, Navigate } from "react-router-dom";

export default function Root(){


    const navigate = useNavigate();
    return (
        <div id="container2">
        <div id="Header" >
            <header>
            <img src="./src/image_and_texts/WhiteFishLogo.webp" alt="logo"/>
            <h2>Welcome To Black Diamond Mountain Page For Whitefish</h2>
            <nav>
                <ul>
                    <li><NavLink to="/">Welcome Page</NavLink></li>
                    <li><NavLink to="HaskillSlide">Haskill Slide</NavLink></li>
                    <li><NavLink to="NBC">North Bowl Chute</NavLink></li>
                    <li><NavLink to="Bighorn">Bighorn</NavLink></li>
                    <li><NavLink to="PictureChutes">Picture Chutes</NavLink></li>
                    <li><NavLink to="EastRim">East Rim Chutes</NavLink></li>
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