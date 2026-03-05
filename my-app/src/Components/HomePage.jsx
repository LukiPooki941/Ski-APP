import React from "react";
import { useNavigate } from "react-router-dom";


export default function HomePage(){
    const navigate = useNavigate();
const handleClick = () => {
navigate("/HaskillSlide");
}


    return (<div id="mainPage">
        <h3 className="mobile" >Welcome To Black Diamond Mountain WhiteFish Edition</h3>
        <p>
 This is where comfort zones end and real terrain begins. Whitefish’s double black runs deliver steep chutes, tight trees, exposed 
 lines, and deep north-facing powder that rewards precision and commitment.

If you’re chasing technical descents, 
fall-line intensity, and the kind of skiing that demands focus from 
first turn to last — you’re in the right place.</p>
<img src="/image_and_texts/skimap.jpg" alt="ski map"/>
<div className="button">
<button onClick={handleClick}>&rarr;</button> 
</div>     
    </div>)
}