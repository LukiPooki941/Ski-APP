import React from "react";
import { useNavigate } from "react-router-dom";

export default function PictureChutes(){
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/Bighorn");
    }
    
    const handleClickB = () => {
        navigate("/EastRim")
    }


    return(<div id="container">
    <div className="main">
    <h3> Picture Chutes</h3>
    <img className="bigImage3" src="./src/image_and_texts/PictureChutes2.jpeg" alt="Picture Chutes"/>

    <p>Picture Chutes is one of the most technical and adrenaline-charged in-bounds 
expert zones at Whitefish Mountain Resort. Hidden within the mountain’s steep north-facing terrain, 
this series of narrow gullies and couloirs delivers true double-black skiing: tight, committing lines 
framed by rock walls, dense trees, and dramatic fall lines.</p>
</div>
<div className="Overview" >
<h4>Overview</h4>

<p>Unlike wide open bowls or glades, 
Picture Chutes is defined by confinement. The terrain funnels skiers 
into natural corridors carved by snow, water, and gravity, creating a sequence 
of steep entrances, choke points, and run-out aprons. While the area is lift-served 
and avalanche-controlled, it retains a raw, backcountry feel that appeals to expert skiers 
looking for consequential terrain without leaving resort boundaries.</p>

</div>
<div className="Difficulty" >

<h4>Terrain & Difficulty</h4>

<p>Picture Chutes demands precision from 
the very first turn. Key features include:
Extremely steep entry pitches that 
require confident commitment
Narrow chute walls that limit 
turn size and speed control options
Rock bands and cliff features 
depending on snow coverage
Tight exits that funnel into 
trees or apron slopes
Minimal room for recovery once inside
Some lines are only a few ski lengths wide at their 
narrowest points. Snow conditions can vary dramatically within a single chute, 
from soft powder to wind-affected slabs or scraped hardpack.</p>
</div>
<div className="conditions">
<h4>Snow & Conditions</h4>

<p>Because the chutes face north and are partially sheltered, 
they often hold high-quality snow long after storms. However, wind 
ransport can create uneven surfaces near ridgelines and entrances.

Typical conditions include:

Deep powder accumulation in storm cycles

Chalky, edgeable snow on colder days

Wind-loaded pockets near the top

Firm or scraped sections during dry periods

Coverage is critical — early season may expose rocks and cliffs, 
while mid-winter usually offers the best skiing.</p>
</div>
<div className="access" >
<h4>Access & Exit</h4>

<p>Access generally involves traversing along steep terrain before 
selecting a specific chute to drop into. Route choice matters; 
each line offers a different character and level of difficulty. 
Once committed, the descent is direct with few escape options until 
the terrain opens below. Most lines funnel into lower glades or open slopes 
that reconnect with the lift system.</p>
</div>
<div className="atmosphere">
<img src="./src/image_and_texts/PictureChutes.jpg" alt="Picture Chutes"/>
<h4>Atmosphere & Experience</h4>

<p>Picture Chutes delivers an intense, high-consequence experience. 
The confined space amplifies speed and exposure, creating a sensation 
closer to alpine mountaineering than traditional resort skiing. Standing 
at the top, skiers often pause to study the line, plan turns, and check 
snow conditions before dropping in.

Despite its seriousness, the setting is strikingly beautiful — '
snow-plastered rock walls, towering conifers, and glimpses of 
distant peaks frame the descent. On powder days, each chute becomes
 a ribbon of untouched snow, offering a rare combination of technical 
 challenge and pristine conditions.</p>
</div>
<div className="safety">
<h4>Safety & Skill Considerations</h4>

<p>This terrain is strictly for expert skiers and riders. Recommended abilities include:

Advanced steep-skiing technique

Confident jump turns in tight spaces

Ability to assess snow conditions quickly

Strong control on variable surfaces

Comfort with exposure and no-fall zones

Even though the area is patrolled, injuries or falls in narrow chutes can be serious.</p>
</div>
<div className="must">
<h4>Why It’s a Must-Ski for Experts</h4>
<p>
Picture Chutes represents the upper limit of in-bounds difficulty at Whitefish Mountain Resort. 
It showcases the mountain’s rugged character and rewards skilled riders with one of the 
most memorable descents on Big Mountain — technical, dramatic, and deeply satisfying when executed cleanly.
</p>

    </div>

    <div className="button" >
    <button onClick={handleClick}>&larr;</button>
    <button onClick={handleClickB}>&rarr;</button>
    </div>
    </div>);
}