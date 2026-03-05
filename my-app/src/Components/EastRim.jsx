import React from "react";
import { useNavigate } from "react-router-dom";

export default function EastRim(){


const navigate = useNavigate();

const handleClick = () => {
    navigate("/PictureChutes");
}

    return(<div id="container">
    <div className="main">
    <h3> East Rim Chutes</h3>
    <img src="/image_and_texts/East_Rim.png" alt="East Rim"/>

    <p>
East Rim Chutes is one of the most dramatic and technical 
in-bounds expert zones at Whitefish Mountain Resort. Carved 
into the steep cliff bands along the eastern edge of the North Bowl, 
these chutes deliver high-consequence skiing defined by narrow entrances,
 sustained pitches, and rugged alpine terrain. For advanced riders 
 seeking the mountain’s most challenging lift-served lines, East Rim 
 represents a true test of skill and nerve.</p>
</div>
<div className="Overview" >
<h4>Overview</h4>

<p>
Perched along a ridgeline overlooking the vast North Bowl, 
the East Rim Chutes are accessed via traverse from the summit 
area. From above, the terrain appears as a series of steep slots 
dropping through rock outcrops into the open bowl below. Although 
fully within resort boundaries and avalanche-controlled, the area 
feels remote and exposed, with a distinctly big-mountain character.

Each chute has its own personality — some slightly wider and more
 forgiving, others extremely tight with mandatory technical turns.
</p>

</div>
<div className="Difficulty" >

<h4>Terrain & Difficulty</h4>

<p>
This is double-black terrain at its most serious. Core features include:

Extremely steep entry pitches with immediate commitment

Narrow couloirs bordered by rock walls and cliff bands

Mandatory choke points where turn shape is limited

Variable surfaces from wind-buffed chalk to deep powder

Abrupt transitions into open bowl skiing below

In low snow years, exposed rock can significantly increase difficulty. 
Even in prime conditions, precise line choice is essential to avoid cliffs or impassable sections.

</p>
</div>
<div className="conditions">
<h4>Snow & Conditions</h4>

<p>
The chutes’ aspect and shape create complex snow patterns. While 
sheltered sections hold excellent powder, wind transport along the 
rim can produce loaded slabs near entrances.

Typical conditions include:

Deep, preserved powder in protected pockets

Chalky, edgeable snow on colder days

Wind-affected surfaces near the ridge

Sloughing snow that can accelerate down the chute

Because snow funnels downward, the upper surface may change quickly as previous skiers descend.</p>
</div>
<div className="access" >
<h4>Access & Exit</h4>

<p>
Access involves traversing along steep terrain from the 
summit toward the East Rim. Skiers must choose their entry carefully —
 once committed, escape options are limited. Most chutes deposit riders 
 into the expansive North Bowl, where the terrain opens dramatically and connects with lift return routes.

Route-finding skills and awareness of cliff bands are essential for a safe descent.</p>
</div>
<div className="atmosphere">
<img src="/image_and_texts/East_Rim2.jpeg" alt="East Rim"/>
<h4>Atmosphere & Experience</h4>

<p>Standing at the top of East Rim Chutes can be as intimidating as 
it is exhilarating. The view plunges sharply downward into a maze 
of rock and snow, with the massive North Bowl spreading out below.
 The exposure, silence, and sense of commitment create an experience 
 closer to alpine mountaineering than conventional resort skiing.

On powder days, the reward is extraordinary — steep, untouched lines 
framed by dramatic terrain and sweeping mountain vistas. The transition 
from tight chute skiing to wide-open bowl turns is especially memorable.</p>
</div>
<div className="safety">
<h4>Safety & Skill Considerations</h4>

<p>
East Rim Chutes is strictly for expert skiers and riders with advanced 
steep-terrain experience. Recommended abilities include:

Confident jump turns in very tight spaces

Strong edge control on hard or variable snow

Ability to manage sluff in steep powder

Comfort with exposure and no-fall zones

Careful route assessment before dropping in

Even though patrol mitigates avalanche risk, falls or route errors 
here can have serious consequences.</p>
</div>
<div className="must">
<h4>Why It’s a Must-Ski for Experts</h4>
<p>
East Rim Chutes showcases the raw, rugged side of Whitefish Mountain
 Resort. It combines technical couloir skiing, dramatic scenery, and the 
 thrill of committing to a line that demands full attention from start to 
 finish. For expert riders, it’s not just another run — it’s a defining Big 
 Mountain experience and one of the resort’s ultimate challenges.
</p>

    </div>
    <div className="button">
<button onClick={handleClick}>&larr;</button> 
</div> 
    </div>);
}