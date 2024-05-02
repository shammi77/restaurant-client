import React from "react";

const AboutHero = () => {
  return (
    <section  className="flex bg-gradient-to-r from-purple-200 to-purple-600 m-10">
      {/* <div className="flex-1">
        <img
          className="m-5"
          src="https://media.istockphoto.com/id/666908954/photo/handsome-chef-pouring-olive-oil-on-meal.webp?b=1&s=170667a&w=0&k=20&c=n5gq9dCc1i5e8XjXSfGPm-vBQDZaEU7kVGETVfLsYk4="
          alt=""
        />
      </div>
      <div className="flex-1 ml-10">
        
        <p className="text-white font-bold p-5">
           
        </p>
      </div> */}

<div class="hero min-h-screen bg-base-300">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src="https://media.istockphoto.com/id/666908954/photo/handsome-chef-pouring-olive-oil-on-meal.webp?b=1&s=170667a&w=0&k=20&c=n5gq9dCc1i5e8XjXSfGPm-vBQDZaEU7kVGETVfLsYk4=" class="max-w-sm rounded-lg shadow-2xl" alt=""/>
    <div>
    <h1 className="font-mono text-3xl  font-bold mt-20">
          About us
        </h1>
      <p class="py-6">Welcome to Masala the best indian restaurant and takeaway
          in Menorca. In Masala we prepared our food with love and care, we use
          fresh quality product to serve you the best authentic indian food.
          Customer satisfaction is our priority, this is why we always try to
          give our best to our customer for having a nice and memorable dining
          experience in our restaurant.
          <br />
          Bienvenido en Masala el mejor restaurante Indio de Menorca. En Masala
          preparamos nuestra comida con mucho amor y cariño, y siempre
          utilizamos los productos mas frescos posibles, para que nuestros
          huéspedes tengan la mejor experiencia posible.</p>
      
    </div>
  </div>
</div>

    </section>
  );
};

export default AboutHero;
