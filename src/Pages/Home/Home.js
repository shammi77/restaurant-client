import React from "react";
import Carosal from "./Carosal";
import Welcome from "./Welcome";
import ReviewLink from "./ReviewLink";
import Imap from "../About/Imap";

const Home = () => {
  return (
    <div className="bg-neutral">
      <Carosal></Carosal>
      <Welcome></Welcome>

      <h1 className="text-5xl text-center text-blue-600 font-bold">
        Review us
      </h1>
      <br />
      <ReviewLink></ReviewLink>
      <h1
        className="
    text-center text-blue-700 text-3xl font-bold mt-14"
      >
        𝓛𝓸𝓬𝓪𝓽𝓲𝓸𝓷
      </h1><div className="divider"></div>
      <div class="hero min-h-screen ">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <Imap></Imap>
          <div>
            <h1 className="text-center text-3xl font-bold mt-14 text-blue-700">𝓐𝓭𝓭𝓻𝓮𝓼𝓼</h1>
            <div className="divider"></div>
            <h1 className="text-center text-xl mt-14 ">
              Paza es España 19, urbanización los delfines, 07769, ciutadella de
              Menorca, Islas baleares.
            </h1>
            <br />
            <p className="text-center">
              Tel: 971388370/ 646723529 <br />
              E-mail: masalaindianmenorca@gmail.com
            </p>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
