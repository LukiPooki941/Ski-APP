import React from "react";
import { useNavigate } from "react-router-dom";


export default function Bighorn(){
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate("/NBC");
    }
    
    const handleClickB = () => {
        navigate("/PictureChutes")
    }


    return(<div id="container">
    <div className="main">
    <h3> Bighorn </h3>
    <img src="./src/image_and_texts/BigHorn.jpeg" alt="Picture Chutes"/>

    <p>Big Horn is one of the most beloved advanced runs at Whitefish Mountain Resort, 
offering classic Big Mountain skiing defined by steep pitches, soft snow, and 
beautifully spaced trees. Located on the mountain’s north-facing terrain, this 
run delivers a blend of challenge and flow that keeps experienced skiers and riders 
coming back lap after lap.</p>
</div>
<div className="Overview" >
<h4>Overview</h4>

<p>Big Horn sits off the resort’s upper lifts and drops through a 
natural fall line into sheltered forested terrain. While lift-served, 
it retains a wild, off-piste character — ungroomed, dynamic, and shaped 
entirely by snowfall and weather. The run is typically marked as advanced 
to expert and is a favorite among locals seeking powder without venturing into the backcountry.</p>

</div>
<div className="Difficulty" >

<h4>Terrain & Difficulty</h4>

<p>
This run features sustained pitches that reward confident, technical skiing. Key characteristics include:

Steep entry that quickly commits you to the fall line

Ungroomed snow with natural bumps forming over time

Gladed sections with well-spaced trees for fluid turns

Occasional tighter choke points and rollovers

Natural terrain features such as small drops and pillows

The upper portion often feels open and fast, while the midsection 
transitions into classic tree skiing. Lower down, the terrain may mellow s
lightly but still demands control, especially in deep snow or low visibility.</p>
</div>
<div className="conditions">
<h4>Snow & Conditions</h4>

<p>Thanks to its protected aspect and tree cover, Big Horn frequently holds excellent snow. It is known for:

Consistent powder retention after storms

Soft packed conditions between snowfall cycles

Reduced wind effect compared to exposed slopes

Good visibility during storm skiing

After fresh snow, the run can deliver deep, playful powder turns. 
Later in the season, moguls develop, turning the descent into a technical bump run.</p>
</div>
<div className="access" >
<h4>Access & Exit</h4>

<p>Big Horn is easily accessed from the resort’s lift network, 
making it ideal for repeated laps. Skiers often use it as a gateway into 
some of the mountain’s best natural terrain while remaining within patrolled 
boundaries. It typically funnels into connecting runs that return you to a 
lift, allowing for efficient circulation without long traverses.

</p>
</div>
<div className="atmosphere">
<img src="./src/image_and_texts/BigHorn2.jpeg" alt="Picture Chutes"/>
<h4>Atmosphere & Experience</h4>

<p>
What makes Big Horn special is its balance of intensity and fun.
 The run feels adventurous but not remote — challenging enough for
  experts, yet approachable for strong advanced skiers looking to 
  progress into steeper terrain. Towering evergreens line the descent,
   creating a distinctly Montana atmosphere and a sense of skiing 
   through wilderness rather than on a manicured slope.

On powder days, the energy is palpable as locals and visitors
 alike hunt for fresh lines between the trees. On quieter days, 
 the run can feel peaceful and immersive, with only the sound of skis carving through snow.</p>
</div>
<div className="safety">
<h4>Safety & Skill Considerations</h4>

<p>Although lift-served and patrolled, Big Horn demands solid skills:

Strong control in ungroomed snow

Comfort with tree skiing

Ability to navigate changing terrain

Awareness of other skiers in low-visibility conditions

Beginners or cautious intermediates may find the steepness and variable snow overwhelming.</p>
</div>
<div className="must">
<h4>Why It’s a Must-Ski for Experts</h4>
<p>
Big Horn captures the essence of Whitefish Mountain Resort — 
natural terrain, dependable snow, and a relaxed but adventurous 
spirit. It’s the kind of run that evolves throughout the season, 
offering powder bliss in winter storms and technical bump skiing later on. 
For many visitors, it becomes a highlight of their trip and a benchmark 
for experiencing authentic Big Mountain skiing.
</p>

    </div>
    <div className="button" >
    <button onClick={handleClick}>&larr;</button>
    <button onClick={handleClickB}>&rarr;</button>
</div>
    </div>);
}