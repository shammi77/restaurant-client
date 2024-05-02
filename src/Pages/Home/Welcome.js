import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1 className="text-5xl text-center text-blue-600 mt-10 font-bold">
        Enjoy our delicious meal
      </h1>
      
      <p className=" m-10 text-2xl font-bold text-gray-500 text-center">
            We are open everyday / <br/> abierto todos los dias
            <br/>13:00-15:30/ 18:00-23:30 
          </p>

      <div class="flex justify-center">
        <div class="m-8 flex h-36 w-36 items-center  text-center justify-center rounded-full bg-blue-600">
          <Link to="/menulist">
            <p
              className="
    text-center text-white font-bold"
            >
              Explore Menu
            </p>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
