import React from "react";
import AboutHero from "./AboutHero";
import Imap from "./Imap";

const About = () => {
  return (
    <div className="">
      <AboutHero></AboutHero>
      <br />
      <h1
        className="
    text-center text-2xl font-bold mt-14"
      >
        𝓞𝓾𝓻 𝓛𝓸𝓬𝓪𝓽𝓲𝓸𝓷
      </h1>
      <div className="divider"></div>

      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <Imap></Imap>
          <div>
            <h1 className="text-center text-3xl font-bold mt-14">Address</h1>
            <div className="divider"></div>
            <h1 className="text-center text-xl mt-14">
              Paza es España 19, urbanización los delfines, 07769, ciutadella de
              Menorca Islas baleares.
            </h1>
            <br />
            <p className="text-center">
              Tel: 971388370/ 646723529 <br />
              E-mail: masalaindianmenorca@gmail.com
            </p>
            <h1 className="text-center text-3xl font-bold mt-14">
              Opening Hours
            </h1>
            <div className="divider"></div>
            <p className="text-center">
              Timetable/ Horario:
              <br /> open everyday/ abierto todos los dias
              <br />
              13:00-15:30/ 18:00-23:30
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
