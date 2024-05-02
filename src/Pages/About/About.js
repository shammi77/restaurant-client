import React from "react";
import AboutHero from "./AboutHero";
import MapWithMarker from "./MapWithMarker";

const About = () => {
  return (
    <div>
      <AboutHero></AboutHero>
      <br />
      <h1
        className="
    text-center text-2xl font-bold mt-14"
      >
        𝓞𝓾𝓻 𝓛𝓸𝓬𝓪𝓽𝓲𝓸𝓷
      </h1>
      <div className="divider"></div>
      <div className="flex">
        <div className="flex-1">
          <h1 className="text-center text-3xl font-bold mt-14">Address</h1>
          <div className="divider"></div>
          <h1 className="text-center text-2xl mt-14">
            MASALA INDIAN RESTAURANT
          </h1>
          <p className="text-center">
            Tel: 971388370/ 646723529 <br />
            E-mail: masalaindianmenorca@gmail.com
          </p>
          <h1 className="text-center text-3xl font-bold mt-14">
            Opening Hours
          </h1>
          <div className="divider"></div>
          <p className="text-center">
            Timetable/ Horario: open everyday/ abierto todos los dias
            <br/>13:00-15:30/ 18:00-23:30 
          </p>
        </div>
        <div className="flex-1">
          <MapWithMarker></MapWithMarker>
        </div>
      </div>
    </div>
  );
};

export default About;
