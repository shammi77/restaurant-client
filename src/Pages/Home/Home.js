import React from 'react';
import Carosal from './Carosal';
import Welcome from './Welcome';
import ReviewLink from './ReviewLink';
import Open from './Open';


const Home = () => {
    return (
        <div className='bg-neutral'>
            <Carosal></Carosal>
            <Welcome></Welcome>
            <Open></Open>
            <h1 className="text-5xl text-center text-blue-600 font-bold">
        Review us
      </h1><br/>
            <ReviewLink></ReviewLink>
        </div>
    );
};

export default Home;