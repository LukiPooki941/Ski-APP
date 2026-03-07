import React, {useEffect} from "react";
import { Outlet, NavLink, useNavigate, useLocation } from "react-router-dom";

export default function Root(){

   function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}


    const navigate = useNavigate();
    return (
        <div id="container2">
        <div id="Header" >
            <header>
                <img src="/image_and_texts/WhiteFishLogo.webp" alt="logo"/>
            <h2>Welcome To Black Diamond Mountain Page For Whitefish</h2>
            <nav>
                <ul>
                    <NavLink className={({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="/"><li>Welcome Page</li></NavLink>
                    <NavLink className={({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="HaskillSlide"><li>Haskill Slide</li></NavLink>
                    <NavLink className={({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="NBC"><li>North Bowl Chute</li></NavLink>
                    <NavLink className={({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="Bighorn"><li>Bighorn</li></NavLink>
                    <NavLink className={({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="PictureChutes"><li>Picture Chutes</li></NavLink>
                    <NavLink className={({ isActive }) => isActive? 'activeNavLink' : 'inactiveNavLink'} to="EastRim"><li>East Rim Chutes</li></NavLink>
                </ul>
            </nav>
            </header>
        </div>
        <div id="main">
            <ScrollToTop />
            <Outlet />

        </div>
        <div id="Footer">
            <footer>&copy;Black Diamond Mountain</footer>
        </div>
        </div>
    )
}