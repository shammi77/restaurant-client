import React from 'react';
import homepic from '../../assets/images/homepic.jpeg'

const Carosal = () => {
    return (
        <div 
          className="m-5 bg-accent">
             <img src={homepic} className=" rounded-lg shadow-2xl lg:h-screen  min-w-full" alt=''  />
    
        </div>
    );
};

export default Carosal;