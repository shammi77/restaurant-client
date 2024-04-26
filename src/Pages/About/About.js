import React from "react";
import AboutHero from "./AboutHero";
import MapWithMarker from "./MapWithMarker";



const About = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <br/>
      <div className="flex">
        <div className="flex-1">
        <h1 className="
    text-center text-2xl font-bold mt-14">Our Location</h1>
    <div className="divider"></div>
        </div>
        <div className="flex-1">
      <MapWithMarker></MapWithMarker> 

        </div>
      </div>
      
    </div>
    
  );
};

export default About;
