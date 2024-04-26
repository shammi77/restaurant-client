import React from 'react';

const AboutHero = () => {
    return (
        <section className="flex bg-gradient-to-r from-cyan-100 to-blue-500 m-10">
      <div className="flex-1">
        <img
          className="m-5"
          src="https://media.istockphoto.com/id/666908954/photo/handsome-chef-pouring-olive-oil-on-meal.webp?b=1&s=170667a&w=0&k=20&c=n5gq9dCc1i5e8XjXSfGPm-vBQDZaEU7kVGETVfLsYk4="
          alt=""
        />
      </div>
      <div className="flex-1 ml-10">
        <h1 className="font-mono text-3xl text-white font-bold mt-20">
          About us
        </h1>
        <p className="text-white font-bold py-5">
          The visual presentation should not distract your visitors from getting
          key information, however. Your locations, menu items and opening hours
          should be easily accessible.
        </p>
      </div>

      
    </section>
    
    );
};

export default AboutHero;