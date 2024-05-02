import React from 'react';
import Carosal from './Carosal';
import Welcome from './Welcome';
import ReviewLink from './ReviewLink';


const Home = () => {
    return (
        <div>
            <Carosal></Carosal>
            <Welcome></Welcome>
            <ReviewLink></ReviewLink>
        </div>
    );
};

export default Home;