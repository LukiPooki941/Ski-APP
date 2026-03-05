import React from "react";
import { useNavigate } from "react-router-dom";


export default function NorthBowlChute(){

const navigate = useNavigate();

const handleClick = () => {
    navigate("/HaskillSlide");
}

const handleClickB = () => {
    navigate("/Bighorn")
}



    return(<div id="container">
    <div className="main">
    <h3> North Bowl Chute (NBC)</h3>
    <img src="/image_and_texts/NBC.jpeg" alt="Picture Chutes"/>

    <p>North Bowl Chute is one of the most sought-after expert descents on Whitefish Mountain Resort’s famed North Bowl — 
a zone renowned for deep snow, sustained pitch, and classic Big Mountain terrain. Combining a steep chute entrance 
with a wide powder bowl below, this run delivers both technical intensity and exhilarating open skiing in a single fall line.</p>
</div>
<div className="Overview" >
<h4>Overview</h4>

<p>Dropping from near the summit into the expansive North Bowl, the chute serves as
 a dramatic gateway into one of the resort’s snowiest and most consistent areas. 
 While lift-served and within patrolled boundaries, the terrain feels remote and 
 wild, with sweeping views, towering evergreens, and minimal signs of grooming or human alteration.

North Bowl Chute is typically rated double black diamond and is 
intended for advanced to expert skiers and riders only.</p>

</div>
<div className="Difficulty" >

<h4>Terrain & Difficulty</h4>

<p>The defining feature is the steep, confined entrance that quickly opens into
 a broad alpine-style bowl. Key characteristics include:

A narrow, committing entry with limited room for large turns

Sustained steep pitch from top to bottom

Natural rollovers that obscure visibility into the line below

Transition from tight chute skiing to open powder fields

Lower sections dotted with trees, bumps, and terrain features

The upper choke point demands careful speed control and precise edging. 
Once through the choke, the bowl allows for faster, flowing turns — though the steepness remains significant.</p>
</div>
<div className="conditions">
<h4>Snow & Conditions</h4>

<p>North Bowl is famous for holding exceptional snow, and the chute benefits 
from this reputation. Its predominantly north-facing aspect preserves cold, 
dry powder and protects against sun crust.

Common conditions include:

Deep powder accumulations after storms

Soft, chalky snow during cold high-pressure periods

Wind-deposited pockets near ridgelines

Mogul formation as traffic increases

Because snow can slough down the chute, surface consistency may vary from top to bottom.</p>
</div>
<div className="access" >
<h4>Access & Exit</h4>

<p>
Access typically involves unloading from an upper lift and traversing 
along the ridge into the North Bowl zone. Skiers must select their 
drop point carefully, as terrain steepens quickly and alternative routes are limited once committed.

After descending, the run funnels into lower North Bowl terrain 
that reconnects with groomed trails and lift return routes, making repeat laps possible for strong skiers.

Atmosphere & Experience

North Bowl Chute offers a quintessential Big Mountain experience: 
expansive views, quiet wilderness feel, and the thrill of committing 
to a steep line above a massive powder field. On clear days, 
the panorama stretches across northwest Montana and into Glacier National Park’s distant peaks.

During storms, visibility can drop dramatically, heightening 
the sense of immersion and adventure. The combination of exposure, 
silence, and deep snow creates a memorable descent that feels far removed from typical resort skiing.</p>
</div>
<div className="atmosphere">
<img className="bigImage" src="/image_and_texts/NBC2.jpeg" alt="Picture Chutes"/>
<h4>Atmosphere & Experience</h4>

<p>North Bowl Chute offers a quintessential Big Mountain experience: 
expansive views, quiet wilderness feel, and the thrill of committing 
to a steep line above a massive powder field. On clear days, 
the panorama stretches across northwest Montana and into Glacier National Park’s distant peaks.

During storms, visibility can drop dramatically, heightening 
the sense of immersion and adventure. The combination of exposure, 
silence, and deep snow creates a memorable descent that feels far removed from typical resort skiing.

Safety & Skill Considerations

Although patrolled, this terrain is serious and demands expert ability:

Strong steep-skiing technique

Ability to make controlled turns in tight spaces

Comfort with variable snow conditions

Awareness of sluff management in deep powder

Confidence navigating ungroomed terrain

Falls in the upper chute can lead to long slides, especially in firm conditions.
</p>
</div>
<div className="safety">
<h4>Safety & Skill Considerations</h4>

<p>Although patrolled, this terrain is serious and demands expert ability:

Strong steep-skiing technique

Ability to make controlled turns in tight spaces

Comfort with variable snow conditions

Awareness of sluff management in deep powder

Confidence navigating ungroomed terrain

Falls in the upper chute can lead to long slides, especially in firm conditions.</p>
</div>
<div className="must">
<h4>Why It’s a Must-Ski for Experts</h4>
<p>
North Bowl Chute captures everything that makes Whitefish Mountain Resort 
unique — abundant snowfall, rugged natural terrain, and a balance of 
technical challenge with wide-open freedom below. For expert skiers, 
it represents one of the mountain’s most rewarding descents: intimidating 
at the top, exhilarating through the middle, and deeply satisfying from first turn to last.
</p>

    </div>
    <div className="button" >
    <button onClick={handleClick}>&larr;</button>
    <button onClick={handleClickB}>&rarr;</button>
</div>
    </div>);
}