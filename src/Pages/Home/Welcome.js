import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="m-8">
      <div className="hero bg-accent">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2R8ZW58MHx8MHx8fDA%3D" className="max-w-m rounded-lg shadow-2xl" alt=""/>
    <div>
    <h1 className="font-mono text-3xl text-gray-200 font-bold mt-20">
              Welcome to <br /> Masala Indian Reataurant
            </h1>
            <h1 className="text-2xl text-gray-200 mt-10 font-bold">
              Enjoy our delicious meal
            </h1>
      <p className="py-6 text-xl text-gray-100 font-bold">
     
            We are open everyday/ abierto todos los dias
            <br/>13:00-15:30/ 18:00-23:30
      </p>
    </div>
  </div>
</div>


      <div className="flex justify-center">
        <div className="m-8 flex h-36 w-36 items-center  text-center justify-center rounded-full bg-blue-600">
          <Link to="/menulist">
            <p
              className="
    text-center text-white font-bold"
            >
              Explore Menu
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
