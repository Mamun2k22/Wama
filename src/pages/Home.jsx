import React from 'react';
import Navigation from './Navigation';
import Contact from './Contact';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div>
           <Navigation />
           <Testimonial />

           <Contact  />
        </div>
    );
};

export default Home;