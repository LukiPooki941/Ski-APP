import React from "react";
import { useNavigate } from "react-router-dom";


export default function HaskillSlide(){

const navigate = useNavigate();

const handleClick = () => {
    navigate("/");
}

const handleClickB = () => {
    navigate("/NBC")
}

    return(<div id="container">
    <div className="main">
    <h3>Haskill Slide</h3>
    <img src="/image_and_texts/HaskillSlide.jpg" alt="Picture Chutes"/>

    <p> Haskill Slide is one of the most iconic expert backcountry 
descents on Big Mountain (Whitefish Mountain Resort) in Whitefish, 
Montana. Tucked beyond the resort boundary in the wild, north-facing terrain 
of Haskill Basin, the run delivers a true backcountry experience—steep, untamed, 
and deeply rewarding for advanced skiers and riders seeking solitude and powder.</p>
</div>
<div className="Overview" >
<h4>Overview</h4>

<p>Haskill Slide drops into the remote Haskill Creek drainage 
on the mountain’s back side. Unlike groomed resort runs, it is completely natural terrain: 
no trail signs, no avalanche control, and no lift access once you commit. Reaching it requires 
exiting through a backcountry gate near the summit and traversing into a vast, forested bowl. T
he descent feels far removed from the resort crowds, offering a sense of wilderness just minutes 
from lift-served skiing.</p>

</div>
<div className="Difficulty" >

<h4>Terrain & Difficulty</h4>

<p>This is a double-black, expert-only line characterized by:

Steep sustained pitches

Tight glades and old-growth trees

Natural cliffs, rollovers, and terrain traps

Deep powder that can remain untracked for days

Sections prone to wind loading and avalanche hazard

The upper portion typically opens into a broad, powder-filled 
face before funneling into a narrower slide path—hence the name. 
As you descend, the terrain transitions into dense forest skiing with natural 
features that demand precise control and route-finding skills.</p>
</div>
<div className="conditions">
<h4>Snow & Conditions</h4>

<p>Because Haskill Slide faces predominantly north, it preserves cold 
smoke powder exceptionally well. Snow here tends to stay lighter and 
less affected by sun compared to south-facing terrain. However, this 
same aspect also allows slabs to form after storms, making avalanche awareness critical.

During peak winter conditions, skiers can experience:

Waist-deep powder stashes

Soft pillows and wind-buffed pockets

Quiet, untouched lines long after storms

Minimal visibility during heavy snowfall</p>
</div>
<div className="access" >
<h4>Access & Exit</h4>

<p>After dropping in, the run funnels into the Haskill Creek valley. 
The exit typically involves a long glide or skate along a forest 
road or drainage back toward civilization. Depending on snow conditions, 
some parties arrange a shuttle pickup, while others prepare for a lengthy trek out. 
There is no lift returning you to the resort from the bottom.
</p>
</div>
<div className="atmosphere">
<img src="/image_and_texts/JR-HaskillSlide.jpg" alt="Picture Chutes"/>
<h4>Atmosphere & Experience</h4>

<p>
What sets Haskill Slide apart is not just the terrain but the atmosphere.
 The descent feels raw and immersive—towering evergreens, muffled silence after fresh 
 snowfall, and sweeping views of the remote basin create a sense of true wilderness skiing. 
 Wildlife tracks are common, and on quiet days you may not encounter another person from top to bottom.</p>
</div>
<div className="safety">
<h4>Safety & Skill Considerations</h4>

<p>
Haskill Slide is uncontrolled backcountry terrain. 
Visitors should be prepared with:

Avalanche beacon, shovel, and probe

Partner travel (never solo)

Knowledge of avalanche forecasting and route selection

Navigation tools (map, GPS, or local knowledge)

Adequate supplies for a long exit

Local skiers treat the run with respect; 
conditions can change rapidly, and rescue access is limited.</p>
</div>
<div className="must">
<h4>Why It’s a Must-Ski for Experts</h4>
<p>
Among Whitefish locals, Haskill Slide has a reputation as a rite of passage—an adventure that blends 
lift-served convenience with genuine backcountry challenge. For skilled riders, it offers one of the most 
memorable powder descents in northwest Montana: steep, scenic, quiet, and 
exhilarating from first turn to final glide.
</p>

</div>
<div className="button" >
    <button onClick={handleClick}>&larr;</button>
    <button onClick={handleClickB}>&rarr;</button>
</div>
    </div>);
}